import React from "react";
import AuthNavbar from "@/components/Navbars/AuthNavbar";

export default function Auth({ children }) {
  return (
    <>
      <AuthNavbar />
      <main>
        <div className="relative w-full h-full min-h-screen">{children}</div>
      </main>
    </>
  );
}
