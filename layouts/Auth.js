import React from "react";

//components
import AuthNavbar from "@/components/Navbars/AuthNavbar";
import FooterSmall from "@/components/Footers/FooterSmall";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Auth({ children }) {
  return (
    <>
      <AuthNavbar />
      <ToastContainer position="top-center" />
      <main>
        <div className="relative w-full h-full min-h-screen">{children}</div>
      </main>
      <FooterSmall absolute />
    </>
  );
}
