/* eslint-disable no-unused-vars */
// Header component for the website

import { Fragment } from "react";
import Dropdown from './dropdown';
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "About Me",
    href: "/about",
  }
];

const work = {
  name: "My Work",
  items: [
    {
      key: "0",
      name: "Soft Sculptures",
      href: "/work/sculptures",
    },
    {
      key: "1",
      name: "Ceramics",
      href: "/work/ceramics",
    },
    {
      key: "2",
      name: "Shows and Exhibitions",
      href: "/shows",
    },
]};

const solutionsmobile = [
  {
    name: "Soft Sculptures",
    href: "/work/sculptures",
  },
  {
    name: "Ceramics",
    href: "/work/ceramics",
  },
  {
    name: "Shows and Exhibitions",
    href: "/shows",
  },
  {
    name: "About Me",
    href: "/about",
  }
];

const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6">
          <div className="flex justify-start md:justify-center">
            <a href="/">
              <p className="font-bold text-3xl text-black md:text-5xl tracking-tight">
                kiel posner
              </p>
            </a>
          </div>
          {/* <div className="hidden md:flex">
            <div className="ml-10" />
            <Dropdown props={work} />
            {solutions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mt-2 ml-10 pb-2 font-sans text-base font-bold text-slate-900 border-transparent border-b-2 hover:text-blue-900 hover:border-blue-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div> */}
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform m-2 transition md:hidden z-10 border-2 border-blue-400 rounded-lg"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutionsmobile.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/about"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </a>

                <a
                  href="/contact"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
