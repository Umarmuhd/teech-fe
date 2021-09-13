import Link from "next/link";

import { useState } from "react";
import { API_URL } from "@/config/index";
import axios from "axios";

// layout for page
import Auth from "@/layouts/Auth";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePassReset = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <div className="h-full">
        <div className="h-screen reset-password grid place-content-center bg-greyBg">
          <div className="flex justify-between mx-auto w-full py-10 bg-white shadow px-10">
            <form className="left" onSubmit={handlePassReset}>
              <h1 className="text-3xl font-bold mb-5 font-head">
                Forgot Your Password? &#128543;
              </h1>

              <p className="text-base mb-4 w-4/6">
                Don't fret! Just type in your email and we will send you a code
                to reset your password!
              </p>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="text-center mb-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded"
                  disabled={!email || loading}
                >
                  {loading ? "..." : "Reset"}
                </button>
              </div>
              <div className="no_already flex text-sm">
                <p className="mr-1">Remembered your password?</p>
                <Link href="/auth/login">
                  <a>Login</a>
                </Link>
              </div>
            </form>
            <div className="right ml-10">
              <img
                src="/images/image.png"
                alt="login"
                className=" w-60 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ForgetPassword.layout = Auth;
