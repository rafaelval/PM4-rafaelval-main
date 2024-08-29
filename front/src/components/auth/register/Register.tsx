"use client";

import { RegisterErrorProps, RegisterProps } from "@/app/types";
import { register } from "@/utils/data";
import { validateRegisterForm } from "@/utils/formValidations";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Register(): React.ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const [userData, setUserData] = useState<RegisterProps>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    address: "",
    phone: "",
  });

  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const errors = validateRegisterForm(userData);
    setErrorUser(errors);
  }, [userData]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await register(userData);
    router.push("/login");
  }

  return (
    <div className="md:mt-5 flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
            Register
          </h2>
        </div>
        <form className=" mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="flex flex-col relative pb-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={userData.name}
                type="text"
                required
                onChange={handleChange}
                className=" appearance-none relative block w-full px-3 py-2 border text-black border-neutral-700/50 rounded-md focus:outline-none focus:ring-slate-700 focus:border-gray-700 focus:z-10 sm:text-sm"
                placeholder="your name here"
              />
              {errorUser.name && (
                <p className=" text-red-600 font-bold text-xs absolute bottom-0">
                  {errorUser.name}
                </p>
              )}
            </div>
            <div className="flex flex-col relative pb-4">
              <label htmlFor="email-address">E-mail</label>
              <input
                id="email"
                name="email"
                value={userData.email}
                type="email"
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
                  id="password"
                  name="password"
                  value={userData.password}
                  type={showPassword ? "text" : "password"}
                  required
                  onChange={handleChange}
                  className=" appearance-none relative block w-full px-3 py-2 border text-black border-neutral-700/50 rounded-md focus:outline-none focus:ring-slate-700 focus:border-gray-700 focus:z-10 sm:text-sm"
                  placeholder="Password"
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
            <div className="flex flex-col relative pb-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="flex w-full">
              <input
                id="confirmPassword"
                name="confirmPassword"
                value={userData.confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                required
                onChange={handleChange}
                className=" appearance-none relative block w-full px-3 py-2 border text-black border-neutral-700/50 rounded-md focus:outline-none focus:ring-slate-700 focus:border-gray-700 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="flex items-center p-2 bg-slate-400 rounded-sm"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
              </div>
              {errorUser.confirmPassword && (
                <p className=" text-red-600 font-bold text-xs absolute bottom-0">
                  {errorUser.confirmPassword}
                </p>
              )}
            </div>
            <div className="flex flex-col relative pb-4">
              <label htmlFor="address">Adress</label>
              <input
                id="address"
                name="address"
                value={userData.address}
                type="text"
                required
                onChange={handleChange}
                className=" appearance-none relative block w-full px-3 py-2 border text-black border-neutral-700/50 rounded-md focus:outline-none focus:ring-slate-700 focus:border-gray-700 focus:z-10 sm:text-sm"
                placeholder="Adress"
              />
              {errorUser.address && (
                <p className=" text-red-600 font-bold text-xs absolute bottom-0">
                  {errorUser.address}
                </p>
              )}
            </div>
            <div className="flex flex-col relative pb-4">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                value={userData.phone}
                type="text"
                required
                onChange={handleChange}
                className=" appearance-none relative block w-full px-3 py-2 border text-black border-neutral-700/50 rounded-md focus:outline-none focus:ring-slate-700 focus:border-gray-700 focus:z-10 sm:text-sm"
                placeholder="phone"
              />
              {errorUser.phone && (
                <p className=" text-red-600 font-bold text-xs absolute bottom-0">
                  {errorUser.phone}
                </p>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Register"
            className=" cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
}
