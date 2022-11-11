import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// Added working functionality to the contact form to recieve message 

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    toast.success("Contact form sent!");
    console.log(data);
    reset();
  };

  return (
    <section id={"contact"} className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50 pb-14">
        Contact
      </h2>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6 sm:text-justify">
          <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-400">
            Get in touch
          </p>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Richmond, Virginia</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>
                <a href="tel:7709277404">(770) 927-7404</a>
              </span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>
                <a href="mailto: ivictorcanas@gmail.com">
                  ivictorcanas@gmail.com
                </a>
              </span>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          novalidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              {...register("name", { required: "Name is required" })}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            />
            {errors.name && (
              <span className="mt-2 flex text-xs text-red-400" role="alert">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div>
            <label for="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email Address is wrong",
                },
              })}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            />
            {errors.email && (
              <span className="mt-2 flex text-xs text-red-400" role="alert">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div>
            <label for="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              {...register("message", { required: "Message is required" })}
              placeholder="Message..."
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            ></textarea>
            {errors.message && (
              <span className="mt-2 flex text-xs text-red-400" role="alert">
                {errors.message?.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
