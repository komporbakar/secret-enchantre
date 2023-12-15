import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart, updateQuantity } from "../../../redux/cart/actions";

export default function ListCart({ data }) {
  const dispatch = useDispatch();

  const handleIncrement = (itemId, quantity) => {
    dispatch(updateQuantity(itemId, quantity + 1)).then(() =>
      dispatch(fetchCart())
    );
  };

  const handleDecrement = (itemId, quantity) => {
    dispatch(updateQuantity(itemId, quantity - 1)).then(() =>
      dispatch(fetchCart())
    );
  };

  return (
    <>
      <div id="Tbody" className="flex flex-wrap items-center mb-5">
        <div className="w-1/12  justify-center hidden lg:flex">
          <input type="checkbox" className="" />
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center">
            <Image
              src={`http://localhost:7077/${data?.product?.image[0]?.image}`}
              className="w-20 me-5"
              width={100}
              height={100}
              alt="imgcart"
            />
            <div className="flex flex-col">
              <h1>{data.product?.name}</h1>
              <p>{data?.itemSize?.size}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 w-full hidden lg:flex">
          <div className="flex flex-col justify-center">
            <div className=" w-auto flex flex-nowrap items-center justify-between rounded-md bg-gray-300 px-3 py-2 ">
              <button
                className="bg-white rounded-md  px-3"
                onClick={() =>
                  handleDecrement(data?.itemSize?.id, data?.quatity)
                }
              >
                -
              </button>
              <h1 className="mx-2">{data?.quatity}</h1>
              <button
                className="bg-white rounded-md px-3"
                onClick={() =>
                  handleIncrement(data?.itemSize?.id, data?.quatity)
                }
              >
                +
              </button>
              {/* <h1>12</h1> */}
            </div>
            <div className="flex flex-nowrap space-x-3 mt-1">
              <Image
                src={"/trash.svg"}
                alt="icon trsh"
                width={24}
                height={24}
              />
              <h6>Remove</h6>
            </div>
          </div>
        </div>
        <div className="md:w-1/6 w-full text-center lg:text-start">
          <h1>
            Rp. {new Intl.NumberFormat("en-DE").format(`${data?.total_price}`)}
          </h1>
        </div>
      </div>
    </>
  );
}
