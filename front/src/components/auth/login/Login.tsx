"use client";

import { LoginErrorProps, LoginProps } from "@/app/types";
import { login } from "@/utils/data";
import { validateLoginForm } from "@/utils/formValidations";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = (): React.ReactElement => {
  const context = useAuth()

  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const errors = validateLoginForm(userData);
    setErrorUser(errors);
  }, [userData]);

  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await login(userData);
    if (response) {
      const {
        token,
        user: { name },
      } = response;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userName", name);
      context.setToken(token)
      router.push("/");
    }
  }

  return (
    <div className="md:mt-5 flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
            Login
          </h2>
        </div>
        <form className=" mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="flex flex-col relative pb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-900"
              >
                Username
              </label>
              <input
                type="email"
                id="username"
                name="email"
                value={userData.email}
                required
                onChange={handleChange}
                className=" appearance-none relative block w-full px-3 py-2 border text-black border-neutral-700/50 rounded-md focus:outline-none focus:ring-slate-700 focus:border-gray-700 focus:z-10 sm:text-sm"
                placeholder="email"
              />
              {errorUser.email && (
                <p className=" text-red-600 font-bold text-xs absolute bottom-0">
                  {errorUser.email}
                </p>
              )}
            </div>
            <div className="flex flex-col relative pb-4">
              <label htmlFor="password">Password</label>
              <div className="flex w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={userData.password}
                  required
                  onChange={handleChange}
                  className=" appearance-none relative block w-full px-3 py-2 border text-black border-neutral-700/50 rounded-md focus:outline-none focus:ring-slate-700 focus:border-gray-700 focus:z-10 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex items-center p-2 bg-slate-400 rounded-sm"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errorUser.password && (
                <p className=" text-red-600 font-bold text-xs absolute bottom-0">
                  {errorUser.password}
                </p>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Login"
            className=" cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          />
          <div className="mt-4 text-center">
            <p>
              ¿Don't have an account?{" "}
              <a href="/register" className="text-blue-500">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
