import { Fragment, useState } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const solutions = [
  {
    name: 'Links',
    description: 'One-time payment links',
    href: '#',
    svg: 'links.svg',
  },
  {
    name: 'Pages',
    description: 'Customizable checkout page',
    href: '#',
    svg: 'pages.svg',
  },
  {
    name: 'Plugins',
    description: 'Payments for your e-commerce builder',
    href: '#',
    svg: 'plugins.svg',
  },
  {
    name: 'API',
    description: 'Payments for any website or app',
    href: '#',
    svg: 'api.svg',
  },
];

const resources = [
  {
    name: 'Blog',
    href: '#',
    svg: 'blog.svg',
  },
  {
    name: 'Learn',
    href: '#',
    svg: 'learn.svg',
  },
  {
    name: 'E-wallets',
    href: '#',
    svg: 'e-wallet-icon.svg',
  },
  {
    name: 'Secure',
    href: '#',
    svg: 'safe-icon.svg',
  },
];

export default function Navigation() {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);

  const MobileMenu1 = () => {
    return (
      <Menu as="div" className="relative text-left bg-white">
        {({ open }) => (
          <>
            <Menu.Button as={Fragment}>
              <div
                className={classNames(
                  open
                    ? 'bg-ocean-green-500 text-white'
                    : 'text-ocean-green-500',
                  'inline-flex justify-between py-4 w-full text-md font-medium text-gray-700 bg-white px-4'
                )}
              >
                <span>Products</span>
                <div className="flex items-center">
                  <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
            </Menu.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="block w-full bg-white focus:outline-none origin-top-right ring-opacity/5">
                <div>
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition duration-150 ease-in-out"
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
                        <p className="text-base font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  };

  const MobileMenu2 = () => {
    return (
      <Menu as="div" className="relative text-left bg-white">
        {({ open }) => (
          <>
            <Menu.Button as={Fragment}>
              <div
                className={classNames(
                  open
                    ? 'bg-ocean-green-500 text-white'
                    : 'text-ocean-green-500',
                  'inline-flex justify-between py-4 w-full text-md font-medium text-gray-700 bg-white px-4'
                )}
              >
                <span>Resources</span>
                <div className="flex items-center">
                  <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
            </Menu.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="block w-full bg-white focus:outline-none origin-top-right ring-opacity/5">
                <div>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition duration-150 ease-in-out"
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
                        <p className="text-base font-semibold text-gray-800">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="z-10 p-4 mx-auto w-full max-w-7xl h-full  bg-white">
            {/* Code block starts */}
            <nav className="block mx-auto w-full">
              <div className="flex justify-between items-center mx-auto h-16 lg:items-stretch">
                <div className="flex items-center">
                  {/* Logo */}
                  <Image
                    src="/assets/svg/main-logo.svg"
                    alt="Paymongo"
                    height={36.48}
                    width={211.23}
                  />
                </div>
                <div className="hidden items-center lg:flex">
                  <ul className="hidden items-center h-full lg:flex">
                    <li
                      className="flex relative items-center mx-4 h-full tracking-normal hover:text-ocean-green-500 cursor-pointer text-md text-gry-800"
                      onMouseEnter={() => setMenu1(true)}
                      onMouseLeave={() => setMenu1(false)}
                    >
                      {menu1 && (
                        <div className="absolute top-12 left-1/2 z-10 px-2 mt-3 w-screen max-w-sm -translate-x-1/2 sm:px-0">
                          <div className="overflow-hidden rounded-lg ring-opacity/5">
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
                                    <p className="text-base font-semibold text-gray-800">
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
                          className="text-ocean-green-500 icon icon-tabler icon-tabler-chevron-down "
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
                    <li className="flex items-center mr-10 h-full tracking-normal hover:text-ocean-green-500 cursor-pointer text-md ">
                      Products
                    </li>
                    <li className="flex items-center mr-10 h-full tracking-normal hover:text-ocean-green-500 cursor-pointer text-md ">
                      Developers
                    </li>
                    <li
                      className="flex relative items-center h-full tracking-normal text-gray-800 hover:text-ocean-green-500 cursor-pointer text-md"
                      onMouseEnter={() => setMenu2(true)}
                      onMouseLeave={() => setMenu2(false)}
                    >
                      {menu2 && (
                        <div className="absolute top-12 left-1/2 z-10 px-2 mt-3 w-screen max-w-xs -translate-x-1/2 sm:px-0">
                          <div className="overflow-hidden rounded-lg ring-opacity/5">
                            <div className="grid relative gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
                              {resources.map((item) => (
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
                                    <p className="text-base font-semibold text-gray-800">
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
                          className="text-ocean-green-500 icon icon-tabler icon-tabler-chevron-down"
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

                <div className="hidden justify-end items-center h-full lg:flex">
                  <div className="flex items-center h-full">
                    <a
                      href="#"
                      className="text-base font-semibold text-ocean-green-500 whitespace-nowrap"
                    >
                      Sign up for free
                    </a>
                    <a
                      href="#"
                      className="inline-flex justify-center items-center py-3 px-12 ml-8 text-base font-medium text-white whitespace-nowrap bg-ocean-green-500 hover:bg-ocean-green-600 rounded-md border border-transparent"
                    >
                      Login
                    </a>
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ocean-green-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </nav>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="absolute z-10 w-full">
              <MobileMenu1 />
              <div
                className={
                  'inline-flex justify-between p-4 w-full font-medium text-gray-700 bg-white text-md'
                }
              >
                <span>Pricing</span>
              </div>
              <div
                className={
                  'inline-flex justify-between p-4 w-full font-medium text-gray-700 bg-white text-md'
                }
              >
                <span>Developer</span>
              </div>
              <MobileMenu2 />
              <div
                className={
                  'inline-flex justify-between p-4 w-full font-medium text-ocean-green-500 bg-white text-md'
                }
              >
                <span>Sign up for free</span>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
