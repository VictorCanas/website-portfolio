import React from "react";

export default function Projects() {
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
          <article className="flex flex-col rounded-lg dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="http://thedraftingshoppe.com"
              target="_blank"
              title="The Drafting shoppe"
            >
              <img
                alt=""
                className="object-cover w-full rounded h-52 dark:bg-gray-500"
                src="https://i.ibb.co/Hxj3KdP/1.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="http://thedraftingshoppe.com"
                target="_blank"
                title="The Drafting shoppe"
              ></a>
              <a
                rel="noopener noreferrer"
                href="http://thedraftingshoppe.com"
                target="_blank"
                title="The Drafting shoppe"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
              >
                The Drafting Shoppe
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">
                React and Node.js based eCommerce platform
              </h3>
              <div className="card-actions">
                <div className="badge badge-outline">Node.js </div>
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">Redux</div>
                <div className="badge badge-outline">Express</div>
                <div className="badge badge-outline">Babel</div>
                <div className="badge badge-outline">Webpack 4</div>
                <div className="badge badge-outline">Mongo DB</div>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-lg dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="https://redifyinc.com"
              target="_blank"
              title="Redify Inc"
            >
              <img
                alt=""
                className="object-cover w-full rounded h-52 dark:bg-gray-500"
                src="https://i.ibb.co/NS2N71f/2.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="https://redifyinc.com"
                target="_blank"
                title="Redify Inc"
              ></a>
              <a
                rel="noopener noreferrer"
                href="https://redifyinc.com"
                target="_blank"
                title="Redify Inc"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
              >
                Redify
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug  text-white">
                React Native Startup App
              </h3>
              <div className="card-actions">
                <div className="badge badge-outline">React Native</div>
                <div className="badge badge-outline">Express</div>
                <div className="badge badge-outline">Redux</div>
                <div className="badge badge-outline">Babel</div>
                <div className="badge badge-outline">Jest</div>
                <div className="badge badge-outline">API</div>
                <div className="badge badge-outline">MySQL</div>
                <div className="badge badge-outline">Socket.io</div>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-lg dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="https://fornopiombo.com/"
              target="_blank"
              title="Forno Piombo"
            >
              <img
                alt=""
                className="object-cover w-full rounded h-52 dark:bg-gray-500"
                src="https://i.ibb.co/s9yP1bk/4.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="https://fornopiombo.com/"
                target="_blank"
                title="Forno Piombo"
              ></a>
              <a
                rel="noopener noreferrer"
                href="https://fornopiombo.com/"
                target="_blank"
                title="Forno Piombo"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
              >
                Forno Piombo
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug  text-white">
                Shopify-based website
              </h3>
              <div className="card-actions">
                <div className="badge badge-outline">HTML5</div>
                <div className="badge badge-outline">CSS3</div>
                <div className="badge badge-outline">Scss</div>
                <div className="badge badge-outline">jQuery</div>
                <div className="badge badge-outline">Shopify</div>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-lg dark:bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="https://www.petplate.com/"
              target="_blank"
              title="Petplate"
            >
              <img
                alt=""
                className="object-cover w-full rounded h-52 dark:bg-gray-500"
                src="https://i.ibb.co/zPGmbsm/3.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="https://www.petplate.com/"
                target="_blank"
                title="Petplate"
              ></a>
              <a
                rel="noopener noreferrer"
                href="https://www.petplate.com/"
                target="_blank"
                title="Petplate"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
              >
                Petplate
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug  text-white">
                React website
              </h3>
              <div className="card-actions">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">Emotion.JS</div>
                <div className="badge badge-outline">GraphQL</div>
                <div className="badge badge-outline">Apollo GraphQL</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
