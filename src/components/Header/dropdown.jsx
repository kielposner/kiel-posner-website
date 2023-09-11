/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Dropdown = (props) => {
  const items = props.props;

  return (
    <Popover className="relative">
      <Popover.Button className="mt-2 p-0 font-sans text-base font-bold inline-flex items-center leading-6 text-blue-900 hover:border-0 hover:rounded-none hover:outline-none focus-within:outline-none">
        <span className="pb-2 hover:border-blue-900 hover:border-b-2">{items.name}</span>
        <ChevronDownIcon className="h-5 w-5 pb-2" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {items.items &&
                items.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div>
                      <a
                        href={item.href}
                        className="text-blue-900 hover:text-blue-900 font-sans text-base font-bold"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Dropdown;
