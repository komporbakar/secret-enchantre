import React, { useState } from "react";
import axiosInstance from "../../service/fetchApi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const MainLogin = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await axiosInstance.login("users/login", form);
    if (response.error === false) {
      localStorage.setItem("token", response.token);
      toast.success("Success Signin", {
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
    } else {
      toast.error(response.response.data?.message, {
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
        <h2 className="text-2xl font-semibold">Log in</h2>
        <p>Welcome back! Please enter your details.</p>
        <form className="mt-5">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="******************"
            />
          </div>
          <div className="flex justify-end mb-2">
            <a href="" className="text-sm">
              Forgot Password
            </a>
          </div>
          <div className="flex items-center flex-wrap gap-2 justify-center">
            <button
              className="bg-black hover:bg-slate-700 w-full text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <button
              className="bg-white border hover:bg-slate-100 w-full text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In with Google
            </button>
          </div>
          <p className="text-center mt-3">
            <span>Dont have an account? </span>
            <a href="/register" className="underline font-semibold">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default MainLogin;
