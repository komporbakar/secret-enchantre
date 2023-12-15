"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../service/fetchApi";

const MainCheckout = ({ province, city, data, user }) => {
  // console.log('user', user);
  const total_price = data.reduce((total, item) => {
    const totalPrice = item && item.total_price ? item.total_price : 0;
    return total + totalPrice;
  }, 0);
  const [selectedProvince, setSelectedProvince] = useState("");
  // const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [ongkir, setOngkir] = useState([]);
  const router = useRouter();

  const alert = () => {
    toast.success("Success Checkout", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    router.push("/");
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    postal_code: "",
    couried: "",
    total_cart_price: "",
    fee_shipping: "",
  });

  console.log(form);

  const handleProvinceChange = async (event) => {
    setSelectedProvince(event.target.value);
    const response = await axiosInstance.getData("address/city", {
      province: event.target.value,
    });
    setCities(response.data);
  };

  const handleCostShipping = async () => {
    if (form.city) {
      const response = await axiosInstance.postData("address/cost", {
        cityId: form.city,
        courier: "jne",
      });
      setOngkir(response.data);
    }
  };

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const result = await axiosInstance.transaction("transaction", {
      couried: form.couried,
      fee_shipping: form.fee_shipping,
      total_cart_price: form.total_cart_price,
      email: form.email,
      name: form.name,
      phone: form.phone,
    });
    console.log(result);
    if (result.error == false) {
      const data = result.data;
      window.snap.pay(data.tokenPayment);
    } else {
      console.log(result);
    }
  };

  useEffect(() => {
    handleCostShipping();
    setForm({
      ...form,
      name: user?.name,
      email: user?.email,
      phone: user?.phoneNumber,
      postal_code: user?.address?.postcode,
    });
  }, [form.city]);

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";

    const clientKey = process.env.NEXT_APP_CLIENT_KEY;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="lg:px-24 px-6">
        <section id="Breadcumb">
          <div className="flex flex-wrap justify-start my-7">
            <Link href="/" className="text-[#D0D5DD]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="#">Checkout</Link>
            <span className="mx-2">/</span>
            <p className="text-[#D0D5DD]">Payment</p>
          </div>
        </section>
        <section className="md:mb-48 mb-10">
          <div className="flex flex-wrap">
            <div className="lg:w-3/4 w-full  ">
              <div className="flex flex-col ">
                <div className="flex flex-col shadow-lg border rounded-md px-6">
                  <h1 className="font-semibold text-xl my-5">
                    Select shipping country
                  </h1>
                  <form action="">
                    {/* <select
                      id="small"
                      className="block w-full p-2 mb-6 text-sm rounded-lg active:ring-blue-100 text-gray-900 border focus:border-slate-400 focus:ring-blue-500"
                    >
                      <option selected>Select country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select> */}
                    <hr />
                    <div className="mb-6 mt-4">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium"
                      >
                        Full Name*
                      </label>
                      <input
                        type="name"
                        id="name"
                        name="name"
                        value={form?.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium "
                        >
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="name"
                          value={form?.email}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last_name"
                          className="block mb-2 text-sm font-medium "
                        >
                          Confirmation Email*
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6 mt-4">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="string"
                        id="phone"
                        name="phone"
                        value={form?.phone}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                    <div className="mb-6 mt-4">
                      <label
                        htmlFor="province"
                        className="block mb-2 text-sm font-medium"
                      >
                        Province*
                      </label>
                      <select
                        onChange={handleProvinceChange}
                        value={selectedProvince}
                        id="province"
                        className="block w-full p-2 mb-6 text-sm rounded-lg active:ring-blue-100 text-gray-900 border focus:border-slate-400 focus:ring-blue-500"
                      >
                        <option>Select Province</option>
                        {province
                          ? province?.map((item, i) => {
                              return (
                                <option key={i} value={item.province_id}>
                                  {item.province}
                                </option>
                              );
                            })
                          : ""}
                      </select>
                    </div>
                    <div className="mb-6 mt-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium"
                      >
                        City*
                      </label>
                      <select
                        value={form.city}
                        onChange={(e) =>
                          setForm({ ...form, city: e.target.value })
                        }
                        id="small"
                        defaultValue=""
                        className={`block w-full p-2 mb-6 text-sm rounded-lg active:ring-blue-100 text-gray-900 border focus:border-slate-400 focus:ring-blue-500 ${
                          cities?.length === 0 ? "disabled" : ""
                        }`}
                        disabled={cities?.length === 0}
                      >
                        <option selected>Select City</option>
                        {cities?.map((c, i) => (
                          <option key={i} value={c.city_id}>
                            {c.city_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-6 mt-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium"
                      >
                        Postal Code*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="flex flex-col mt-10 shadow-lg border rounded-md px-6">
                  <h1 className="font-semibold text-xl my-5">
                    Select shipping country
                  </h1>
                  {ongkir &&
                    ongkir?.map((data, i) => (
                      <div key={i}>
                        <label htmlFor="" className="uppercase">
                          {data.code}
                        </label>
                        {data?.costs.map((item, i) => (
                          <div
                            key={i}
                            className={`flex justify-between border px-2 py-1 rounded-lg items-center mb-5 cursor-pointer ${
                              item?.service === form.couried
                                ? "bg-slate-200"
                                : ""
                            }`}
                            onClick={() =>
                              setForm({
                                ...form,
                                fee_shipping: item?.cost[0]?.value,
                                couried: `${item?.service}`,
                                total_cart_price:
                                  total_price + item?.cost[0]?.value,
                              })
                            }
                          >
                            <div className="flex items-center ">
                              {/* <input type="radio" className="me-5" /> */}
                              <div className="flex flex-col">
                                <p className="font-semibold">{item?.service}</p>
                                <p className="text-base font-light">
                                  {item?.cost[0]?.etd} Day
                                </p>
                              </div>
                            </div>
                            <h6>
                              Rp.{" "}
                              {new Intl.NumberFormat("en-DE").format(
                                `${item?.cost[0]?.value}`
                              )}
                            </h6>
                          </div>
                        ))}
                      </div>
                    ))}

                  {/* <label htmlFor="">JNE</label>
                  <div className="flex justify-between border px-2 py-1 rounded-lg items-center mb-5">
                    <div className="flex items-center ">
                      <input type="radio" className="me-5" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Regular shipping</p>
                        <p className="text-base font-light">
                          7 -30 Business day
                        </p>
                      </div>
                    </div>
                    <h6>Rp. {new Intl.NumberFormat("en-DE").format(20000)}</h6>
                  </div>
                  <div className="flex justify-between border px-2 py-1 rounded-lg items-center mb-5">
                    <div className="flex items-center ">
                      <input type="radio" className="me-5" />
                      <div className="flex flex-col">
                        <p className="font-semibold">Free Shipping</p>
                        <p className="text-base font-light">
                          7 -30 Business day
                        </p>
                      </div>
                    </div>
                    <h6>Rp. {new Intl.NumberFormat("en-DE").format(46000)}</h6>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full mt-5 lg:mt-0 ">
              <div className="rounded-md shadow-lg lg:ms-3 border ">
                <h5 className="font-bold text-lg my-3 px-6">Your Order</h5>
                {data &&
                  data.map((item, i) => {
                    return (
                      <div key={i} className="flex items-center my-3 px-6">
                        <Image
                          src={`http://localhost:7077/${item?.product?.image[0]?.image}`}
                          className="w-20 me-5"
                          width={100}
                          height={100}
                          alt="imgcart"
                        />
                        <div className="flex flex-col">
                          <h1>{item?.product?.name}</h1>
                          <p>{item.itemSize?.size}</p>
                          <p>x{item?.quatity}</p>
                        </div>
                      </div>
                    );
                  })}

                <hr />
                <div className="flex justify-between px-6 mt-10 items-center mb-2">
                  <p className="text-base">Subtotal</p>
                  <p className="text-base">
                    Rp.{" "}
                    {new Intl.NumberFormat("en-DE").format(`${total_price}`)}
                  </p>
                </div>
                <div className="flex justify-between px-6 items-center mb-4">
                  <p className="text-base">Discount</p>
                  <p className="text-base">Rp.0</p>
                </div>
                <div className="flex justify-between px-6 items-center mb-4">
                  <p className="text-base">Shipment Cost</p>
                  <p className="text-base">
                    Rp.{" "}
                    {new Intl.NumberFormat("en-DE").format(
                      `${form.fee_shipping}`
                    )}
                  </p>
                </div>
                <hr />
                <div className="flex flex-wrap justify-between px-6 my-5">
                  <h6
                    className="text-lg font-semibold"
                    value={total_price + form.fee_shipping}
                  >
                    Grand Total
                  </h6>
                  <h6>
                    Rp.{" "}
                    {new Intl.NumberFormat("en-DE").format(
                      `${form.total_cart_price}`
                    )}
                  </h6>
                </div>
                <div className="px-6 mb-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-black rounded-lg flex w-full justify-center py-3 text-white "
                  >
                    <p className="text-center">Continue to Payment</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainCheckout;
