import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <div
      className=" bg-black text-white
      px-5"
    >
      <nav className="z-10 w-full">
        <div>
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <Logo />

              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="hamburger"
                  id="hamburger"
                  className="relative p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-white transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-indigo-700 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>

            <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-2xl  justify-end w-full lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none dark:bg-gray-900 dark:border-gray-700">
              <div className="text-white lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-8">
                  <li>
                    <a
                      href="/"
                      className="block transition text-white hover:text-slate-300"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block transition text-white hover:text-slate-300"
                    >
                      Solution
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block transition text-white hover:text-slate-300"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block transition text-white hover:text-slate-300"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="/dashboard"
                  className="relative flex h-10 w-full items-center justify-center px-6 bg-indigo-600 text-white rounded-full shadow-md transition duration-300 hover:bg-indigo-800 active:bg-indigo-700 sm:w-max"
                >
                  <span className="text-sm font-semibold">Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
