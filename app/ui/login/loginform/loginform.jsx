"use client";
import { authenticate } from "@/app/lib/actions";
import { useState } from "react";

const LoginForm = () => {
  const [err, setErr] = useState();
  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data.error && setErr(data.error);
  };

  return (
    <div className=" flex flex-col min-h-screen justify-center items-center ">
      <form
        action={handleLogin}
        className="flex flex-col p-5 rounded-lg text-start w-1/5 bg-gradient-to-t from-indigo-800"
      >
        <h2 className="mb-10 font-extrabold text-6xl  ">Login</h2>

        <label className="text-xs font-thin text-white" htmlFor="username">
          User Name
        </label>
        <input
          className="outline-none border-none px-3 my-2 py-1.5 rounded-md"
          type="text"
          id="username"
          placeholder="Name"
          name="username"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="text-xs font-thin text-white  " htmlFor="password">
          Password
        </label>
        <input
          name="password"
          className="outline-none border-none px-3 mt-2 py-1.5 rounded-md"
          type="password"
          id="password"
          placeholder="Password"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <button
          type="submit"
          className="mt-4 bg-white  px-3 py-1.5 rounded-md text-black"
        >
          Login
        </button>
        <div className=" mt-5 text-center text-xs text-yellow-400 ">{err && err}</div>
      </form>
    </div>
  );
};

export default LoginForm;
