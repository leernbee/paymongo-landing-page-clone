import { useState } from 'react';

import Image from 'next/image';

const solutions = [
  {
    name: 'Links',
    description: 'One-time payment links',
    href: '#',
    svg: 'pages-icon.svg',
  },
  {
    name: 'Links',
    description: 'One-time payment links',
    href: '#',
    svg: 'pages-icon.svg',
  },
  {
    name: 'Links',
    description: 'One-time payment links',
    href: '#',
    svg: 'pages-icon.svg',
  },
  {
    name: 'Links',
    description: 'One-time payment links',
    href: '#',
    svg: 'pages-icon.svg',
  },
];

export default function Navigation() {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);

  return (
    <>
      <div className="container py-4 mx-auto h-full font-serif bg-white">
        {/* Code block starts */}
        <nav className="hidden mx-auto w-full  xl:block">
          <div className="container flex justify-between items-center px-6 mx-auto h-16 lg:items-stretch">
            <div className="flex items-center">
              <div className="flex items-center mr-10">
                {/* Logo */}
                <Image
                  src="/assets/svg/main-logo.svg"
                  alt="Paymongo"
                  height={36.48}
                  width={211.23}
                />
              </div>
            </div>
            <div className="flex items-center">
              <ul className="hidden items-center pr-32 h-full xl:flex">
                <li
                  className="flex relative items-center mx-10 h-full tracking-normal hover:text-green-700 cursor-pointer text-md text-gry-800"
                  onMouseEnter={() => setMenu1(true)}
                  onMouseLeave={() => setMenu1(false)}
                >
                  {menu1 && (
                    <div className="absolute top-12 left-1/2 z-10 px-2 mt-3 w-screen max-w-xs -translate-x-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-opacity/5">
                        <div className="grid relative gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center px-3 -m-3 hover:bg-gray-50 rounded-lg transition duration-150 ease-in-out"
                            >
                              <div className="flex shrink-0 justify-center items-center w-10 h-10 text-white  sm:w-16 sm:h-16">
                                <Image
                                  src={`/assets/svg/${item.svg}`}
                                  alt="icon"
                                  height={64}
                                  width={64}
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-semibold text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-700">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  Products
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-down"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center mr-10 h-full tracking-normal text-green-700 cursor-pointer text-md">
                  Products
                </li>
                <li className="flex items-center mr-10 h-full tracking-normal hover:text-green-700 cursor-pointer text-md text-gry-800">
                  Developers
                </li>
                <li
                  className="flex relative items-center h-full tracking-normal text-gray-800 hover:text-green-700 cursor-pointer text-md"
                  onMouseEnter={() => setMenu2(true)}
                  onMouseLeave={() => setMenu2(false)}
                >
                  {menu2 && (
                    <div className="absolute top-12 left-1/2 z-10 px-2 mt-3 w-screen max-w-xs -translate-x-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-opacity/5">
                        <div className="grid relative gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center px-3 -m-3 hover:bg-gray-50 rounded-lg transition duration-150 ease-in-out"
                            >
                              <div className="flex shrink-0 justify-center items-center w-10 h-10 text-white  sm:w-16 sm:h-16">
                                <Image
                                  src={`/assets/svg/${item.svg}`}
                                  alt="icon"
                                  height={64}
                                  width={64}
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-semibold text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  Resources
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-down"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>

            <div className="hidden justify-end items-center h-full xl:flex">
              <div className="flex items-center h-full">
                <a
                  href="#"
                  className="text-base font-semibold text-green-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Sign up for free
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-3 px-12 ml-8 text-base font-medium text-white whitespace-nowrap bg-green-600 hover:bg-green-700 rounded-md border border-transparent shadow-sm"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
