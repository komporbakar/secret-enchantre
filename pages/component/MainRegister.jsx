import { useRouter } from "next/router";
import React, { useState } from "react";
import axiosInstance from "../../service/fetchApi";
import { toast } from "react-toastify";

const MainRegister = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await axiosInstance.register(form);
    if (response.error === false) {
      toast.success("Success Register", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/login");
    } else {
      toast.error(response?.response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <section className="flex justify-center items-center p-10">
      <div className="border px-7 py-20 rounded-lg min-w-[25rem]">
        <h2 className="text-2xl font-semibold">Register</h2>
        <p>Welcome back! Please enter your details.</p>
        <form className="mt-5">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className=" appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="******************"
            />
          </div>
          <div className="flex items-center flex-wrap gap-2 justify-center">
            <button
              className="bg-black hover:bg-slate-700 w-full text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Create Account
            </button>
            <button
              className="bg-white border hover:bg-slate-100 w-full text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up with Google
            </button>
          </div>
          <p className="text-center mt-3">
            <span>Already have an account? </span>
            <a href="/login" className="underline font-semibold">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default MainRegister;
