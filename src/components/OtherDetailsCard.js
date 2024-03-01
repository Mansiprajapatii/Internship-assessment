import React from "react";
import side from "../assets/side_image.png";

const posts = [
  {
    id: 1,
    title: "Webbuilder 1",
    href: "#",
    description: "Computer Modern classic with wix support",
    discount: "20% off",
    datetime: "2020-03-16",
    category: { title: "Limited time", href: "#" },
    price: {
      mainprice: "$39.96",
      subprice: "$49.96  (20% Off)",
      href: "#",
    },
  },

  {
    id: 1,
    title: "Webbuilder 1",
    href: "#",
    description: "Computer Modern classic with wix support",
    discount: "20% off",
    datetime: "2020-03-16",
    category: { title: "Limited time", href: "#" },
    price: {
      mainprice: "$39.96",
      subprice: "$49.96  (20% Off)",
      href: "#",
    },
  },

  {
    id: 1,
    title: "Webbuilder 1",
    href: "#",
    description: "Computer Modern classic with wix support",
    discount: "20% off",
    datetime: "2020-03-16",
    category: { title: "Limited time", href: "#" },
    price: {
      mainprice: "$39.96",
      subprice: "$49.96  (20% Off)",
      href: "#",
    },
  },
];

function OtherDetailsCard() {
  return (
    <div>
      <div className="bg-white py-10 sm:py-0 -mt-2 mb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-2 text-4xl leading-8  text-slate-800 ">
              Related deals you might like for
            </p>
          </div>

          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16  pt-10 sm:mt-4 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className=" h-40 w-40 px-1 ml-10 align-middle justify-center ">
                  <img src={side} alt="Logo" />
                </div>
                <div className="flex items-center gap-x-2 text-sm font-inter">
                  <time
                    dateTime={post.datetime}
                    className="text-cyan-700 relative z-10 rounded-md bg-gray-100 px-3 py-1.5"
                  >
                    {post.discount}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-md bg-gray-100 px-3 py-1.5 font-inter text-cyan-700 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg ml-20 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-base font-inter leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-4 flex items-center gap-x-1">
                  <div className="text-lg font-inter leading-6">
                    <span className="font-normal  text-gray-600">
                      <span className="absolute inset-0" />
                      {post.price.mainprice}
                    </span>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-72 mt-4 justify-center rounded-xl  bg-blue-500 px-3 align-middle py-2.5 text-base font-inter font-normal leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Deal
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherDetailsCard;
