import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { PlayCircleIcon, PhoneIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Example() {
  return (
    <Popover className="relative">
      <Popover.Button className="items-center text-sm font-semibold text-gray-900 mt-1 rounded-lg">
        <span className="place-items-center" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </span>
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="">
            <div className="flex h-64 justify-center">
              <div className="relative ">
                <div className="flex flex-row cursor-pointer truncate p-2 px-4  rounded"></div>
                <div className="absolute w-full  rounded-b border-t-0 z-10">
                  <div className="shadow-xl w-64">
                    <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                      <div className="p-2 w-12"></div>
                      <div className="flex-auto text-sm w-32">
                        <div className="font-bold">Product 1</div>
                        <div className="truncate">Product 1 description</div>
                        <div className="text-gray-400">Qt: 2</div>
                      </div>
                      <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-trash-2 "
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </div>
                        $12.22
                      </div>
                    </div>
                    <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                      <div className="p-2 w-12"></div>
                      <div className="flex-auto text-sm w-32">
                        <div className="font-bold">Product 2</div>
                        <div className="truncate">
                          Product 2 long description
                        </div>
                        <div className="text-gray-400">Qt: 2</div>
                      </div>
                      <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-trash-2 "
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </div>
                        $12.22
                      </div>
                    </div>
                    <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                      <div className="p-2 w-12"></div>
                      <div className="flex-auto text-sm w-32">
                        <div className="font-bold">Product 3</div>
                        <div className="truncate">Product 3 description</div>
                        <div className="text-gray-400">Qt: 2</div>
                      </div>
                      <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-trash-2 "
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </div>
                        $12.22
                      </div>
                    </div>
                    <div className="p-4 justify-center flex">
                      <button
                        className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
                      >
                        Checkout $36.66
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-32"></div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
