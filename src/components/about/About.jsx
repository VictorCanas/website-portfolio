import React from "react";

export default function About() {
  return (
    <section id={"about"} className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container pt-24 max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
            About Me
          </h2>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-400">
              Get to know me!
            </p>
            <p className="mt-3 text-lg dark:text-gray-400">
              Hey! It's{" "}
              <span className="font-medium dark:text-gray-50">
                Victor Canas
              </span>{" "}
              and I'm a{" "}
              <span className="font-medium dark:text-gray-50">
                Full Stack Developer
              </span>{" "}
              located in Richmond,VA. I am graduate of Liberty University with a
              Bachelors of Science in IT: Web and mobile programming, and also
              certified Full Stack Web Developer from the University of Richmond
              Coding Bootcamp.
            </p>
            <p className="mt-3 text-lg dark:text-gray-400">
              {" "}
              Over the past 4 years I have done{" "}
              <span className="font-medium dark:text-gray-50">remote</span>{" "}
              projects for clients inside a Digital agency, consulted for a
              startup, and collaborated with talented people to create{" "}
              <span className="font-medium dark:text-gray-50">
                digital products
              </span>{" "}
              for both business and consumer use.
            </p>
            <div className="mt-12 space-y-12"></div>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-400 pb-1">
              Skills
            </p>
            <div className="flex flex-wrap space-y-2 space-x-3 border-t border-dashed dark:border-gray-400">
              <a
                rel="noopener noreferrer"
                className="mt-2 ml-3 px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                HTML5
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                CSS3
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Scss
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Tailwind CSS
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                jQuery
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                JavaScript
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                TypeScript
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                React
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Gatsby
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                NextJS
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Redux
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                React Query
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                React Native
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Jest
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Cypress
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                GraphQL
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Apollo
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Prisma
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Firebase
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                AWS Serverless
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Vercel
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Netlify
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                WordPress
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Divi
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Adobe Photoshop
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Adobe XD
              </a>
              <a
                rel="noopener noreferrer"
                className="px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
              >
                Figma
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
