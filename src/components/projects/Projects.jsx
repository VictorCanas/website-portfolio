import React, { useState, useEffect } from "react";
//useSWR allows the use of SWR inside function components
import useSWR from "swr";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());
// Condense code to add a json format for projects

export default function Projects() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR("/api/projects", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

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
          {data.projects &&
            data.projects.map((item) => (
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
                  <h3 className="flex-1 py-2 text-lg font-semibold dark:text-gray-50 leading-snug">
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
        <div className="space-y-2 text-center">
          <button className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-white dark:text-gray-900">
            <span className="flex flex-col items-start ml-4 leading-none">
              <a
                href="https://www.canva.com/design/DAFhEA8t9KA/BJ6T2NAtY-bU1sDw9alprA/view?utm_content=DAFhEA8t9KA&utm_campaign=designshare&utm_medium=link&utm_source=editor#13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg font-semibold rounded dark:text-gray-900">
                  See More Portfolio Projects
                </span>
              </a>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
