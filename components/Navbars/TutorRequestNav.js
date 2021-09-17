import React from "react";
import Link from "next/link";

export default function DashboardNavbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg font-head"
        style={{ boxShadow: "2px 2px 2px rgb(0 0 0 / 16%)" }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-primary font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                Teech
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a className="lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm text-blackText font-medium">
                  <span className="w-6 h-6 rounded-full border-2 flex justify-center items-center mr-2 border-secondary text-secondary font-semibold text-sm">
                    1
                  </span>
                  About Child
                </a>
              </li>

              <li className="flex items-center">
                <a className="lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm text-blackText font-medium">
                  <span className="w-6 h-6 rounded-full border-2 flex justify-center items-center mr-2 border-secondary text-secondary font-semibold text-sm">
                    2
                  </span>
                  Contact Information
                </a>
              </li>

              <li className="flex items-center">
                <a className="lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm text-blackText font-medium">
                  <span className="w-6 h-6 rounded-full border-2 flex justify-center items-center mr-2 border-secondary text-secondary font-semibold text-sm">
                    3
                  </span>
                  Lesson Schedule
                </a>
              </li>

              <li className="flex items-center">
                <a className="lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm text-blackText font-medium">
                  <span className="w-6 h-6 rounded-full border-2 flex justify-center items-center mr-2 border-secondary text-secondary font-semibold text-sm">
                    4
                  </span>
                  Complete Request
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
