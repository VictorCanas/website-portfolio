import React from "react";

export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section id={"home"} className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.ibb.co/30RS66F/vic-port.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl text-white font-bold leading-none sm:text-6xl">
            Victor Canas
          </h1>
          <h3 className="dark:text-violet-400 text-5xl font-bold leading-none sm:text-6xl">
            Full Stack Developer
          </h3>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Passionate about web design and user experience
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-violet-500 dark:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <a
                  href="VictorCanas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-semibold rounded dark:bg-violet-500 dark:text-gray-900">
                    CV Resume
                  </span>
                </a>
              </span>
            </button>
            <a
              rel="noopener noreferrer"
              onClick={() => scrollTo("projects")}
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
