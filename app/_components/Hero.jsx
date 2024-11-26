import React from "react";

function Hero() {
  return (
    <div
      className="relative bg-black text-white min-h-screen flex items-center justify-center"
      id="home"
    >
      {/* Background Splashes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-white via-fuchsia-300 to-teal-300"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-300 via-rose-200 to-white"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:w-2/3 text-center">
        {/* Hero Heading */}
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
          Collaborate,{" "}
          <span className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Create, Conquer
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Empower your teams to think beyond boundaries. A seamless workspace
          built to inspire creativity, sync ideas, and get things done faster.
        </p>

        {/* Buttons Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/dashboard"
            className="relative group flex items-center justify-center px-8 py-3 text-lg font-semibold bg-mint-300 text-black rounded-full overflow-hidden hover:bg-white"
          >
            <span className="absolute inset-0 scale-110 bg-gradient-to-r from-white via-teal-300 to-cyan-400 opacity-20 group-hover:scale-125 transition-transform"></span>

            <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 bg-clip-text relative z-10 text-transparent">
              Get Started
            </span>
          </a>
          <a
            href="#"
            className="relative group flex items-center justify-center px-8 py-3 text-lg font-semibold bg-pitch-600 text-white border border-mint-300 rounded-full overflow-hidden hover:border-white hover:bg-mint-300 hover:text-slate-400"
          >
            <span className="absolute inset-0 scale-110 bg-gradient-to-r from-pitch-600 to-tint-400 opacity-20 group-hover:scale-125  transition-transform"></span>
            <span>Learn More</span>
          </a>
        </div>

        {/* Highlight Features */}
        <div className="hidden py-8 mt-16 border-y border-gray-700 sm:flex justify-around">
          <div className="text-center">
            <h6 className="text-lg font-bold">Unmatched Flexibility</h6>
            <p className="mt-2 text-gray-400">Adapt to every project’s need</p>
          </div>
          <div className="text-center">
            <h6 className="text-lg font-bold">Speed That Inspires</h6>
            <p className="mt-2 text-gray-400">Work smarter, not harder</p>
          </div>
          <div className="text-center">
            <h6 className="text-lg font-bold">Loved by Innovators</h6>
            <p className="mt-2 text-gray-400">Join our global community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
