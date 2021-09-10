import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useContext, useEffect } from "react";

//context
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //state
  const { user, login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  //router
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      login({ email, password });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Teech</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="h-full">
          <div className="h-screen login grid place-content-center bg-greyBg">
            <div className="flex justify-between mx-auto w-full py-10 bg-white shadow px-10">
              <div className="left mr-10">
                <img
                  src="/images/image.png"
                  alt="login"
                  className=" w-60 h-full"
                />
              </div>
              <form className="right" onSubmit={handleLogin}>
                <h1 className="text-3xl font-bold mb-5 font-head">
                  Welcome back &#128075;
                </h1>

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
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                    required
                  />
                </div>
                <div className="text-center mb-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded"
                    disabled={!email || !password || loading}
                  >
                    {loading ? "..." : "Login"}
                  </button>
                </div>
                <div className="no_already flex text-sm">
                  <p className="mr-1">Don't have an account?</p>
                  <Link href="/auth/signup">
                    <a>Signup</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
