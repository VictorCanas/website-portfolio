import React, { useState, useEffect } from "react";

// Condense code to add a json format for projects 

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((res) => {
        setProjects(res?.projects || []);
      });
  }, []);

  return (
    <section
      id={"projects"}
      className="py-6 sm:py-12 bg-gradient-to-r from-purple-500 to-blue-500 dark:text-gray-100"
    >
      <div className="container pt-12 p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50 pb-8">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-lg dark:bg-gray-900"
            >
              <a
                rel="noopener noreferrer"
                href={item.href}
                target="_blank"
                title={item.title}
              >
                <img
                  alt=""
                  className="object-cover w-full rounded h-52 dark:bg-gray-500"
                  src={item.img}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href={item.href}
                  target="_blank"
                  title={item.title}
                ></a>
                <a
                  rel="noopener noreferrer"
                  href={item.href}
                  target="_blank"
                  title={item.title}
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  {item.title}
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  {item.desc}
                </h3>
                <div className="card-actions">
                  {item.stacks.map((stack) => (
                    <div key={stack} className="badge badge-outline">
                      {stack}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
