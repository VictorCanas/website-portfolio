import React from "react";

const Nav = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="p-4 bg-violet-400 dark:bg-gray-900 dark:text-gray-100 sticky top-0 z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-white"
        >
          Victor Canas
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                onClick={() => scrollTo("home")}
                className=" text-white block py-2 pr-4 pl-3  text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white-400 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                onClick={() => scrollTo("about")}
                className="text-white block py-2 pr-4 pl-3 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white-400 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                onClick={() => scrollTo("projects")}
                className="text-white block py-2 pr-4 pl-3 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white-400 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                onClick={() => scrollTo("contact")}
                className="text-white block py-2 pr-4 pl-3 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white-400 md:dark:hover:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
