import React from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "Hosting for all", href: "#" },
  { name: "Hosting", href: "#" },
  { name: "Hosting6", href: "#" },
  { name: "Hosting5", href: "#" },
];

const navigation = [
  { name: "Tools", href: "#" },
  { name: "AWS Builder", href: "#" },
  { name: "Start Build", href: "#" },
  { name: "Build Supplies", href: "#" },
  { name: "Tooling", href: "#" },
  { name: "BlueHosting", href: "#" },
];

function Heroes() {
  return (
    <div className="bg-white left-0 z-20 w-full p-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="mx-auto max-w-5xl lg:text-left">
          <h1 className="mt-8 text-2xl  font-inter tracking-tight text-slate-800 sm:text-5xl">
            Best Website builders in the US
          </h1>
        </div>
      </div>
      <hr class="h-px my-2 mt-6 bg-gray-200 border-0 dark:bg-slate-300"></hr>
      <div className="lg:flex flex-shrink font-inter text-sm py-0 w-auto gap-4  text-slate-600">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <span>Last Updated - February 22, 2020 </span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <span>Advertising Disclosure</span>
      </div>
      <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-slate-300"></hr>
      <div>
        <div className="hidden lg:flex lg:gap-x-24 my-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" text-sm  font-inter leading-6 text-slate-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* navigations */}
      <div className="mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className=" hidden grid grid-cols-1 gap-x-4 gap-y-6 text-base  font-inter leading-7 text-slate-600 sm:grid-cols-2 md:flex lg:gap-x-4">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name} <span aria-hidden="true">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Heroes;
