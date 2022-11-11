import React from "react";

const SKILLS = [
  "HTML5",
  "CSS3",
  "Scss",
  "Tailwind CSS",
  "jQuery",
  "JavaScript",
  "TypeScript",
  "React",
  "Gatsby",
  "NextJS",
  "Redux",
  "React Query",
  "React Native",
  "Jest",
  "Cypress",
  "GraphQL",
  "Apollo",
  "Prisma",
  "Firebase",
  "AWS Serverless",
  "Vercel",
  "Netlify",
  "WordPress",
  "Divi",
  "Adobe Photoshop",
  "Adobe XD",
  "Figma",
];

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
            {/* Added a JSON format for the skills so it can respresent better fetching data from API */}
              {SKILLS.map((item) => (
                <a
                  key={item}
                  rel="noopener noreferrer"
                  className="mt-2 ml-3 px-4 py-1 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
