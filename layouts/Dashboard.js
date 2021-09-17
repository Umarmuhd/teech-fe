import React from "react";

//Components
import DashboardNavbar from "@/components/Navbars/DashboardNavbar";
import FooterSmall from "@/components/Footers/FooterSmall";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard({ children }) {
  return (
    <>
      <div>
        <DashboardNavbar />
        <div>
          <ToastContainer position="top-center" />
          <div className="px-4 md:px-10 mx-auto w-full content-wrap">
            {children}
            <FooterSmall />
          </div>
        </div>
      </div>
    </>
  );
}
