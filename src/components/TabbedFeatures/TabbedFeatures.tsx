import React from 'react';

export default function TabbedFeatures() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="py-24 px-4 mx-auto max-w-7xl lg:py-32">
        <div className="text-center">
          <h2 className="mt-1 text-4xl font-semibold leading-tight text-gray-900 lg:text-5xl">
            Payment tools made for{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg,#37b47e 17%,#6a71cf 82%)',
                color: '#37b47e',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Filipino businesses
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap mt-20">
          <ul
            className="flex flex-wrap justify-center mx-auto list-none"
            role="tablist"
          >
            <li className="mx-2 text-center">
              <a
                className={`text-sm font-semibold px-8 py-3 lg:py-4 shadow-md rounded-full inline-block leading-normal my-2 ${
                  openTab === 1
                    ? `text-white bg-ocean-green-500`
                    : `text-ocean-green-500 bg-white`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All
              </a>
            </li>
            <li className="mx-2 text-center">
              <a
                className={`text-sm font-semibold px-8 py-3 lg:py-4 shadow-md rounded-full inline-block leading-normal my-2 ${
                  openTab === 2
                    ? `text-white bg-ocean-green-500`
                    : `text-ocean-green-500 bg-white`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Social Sellers
              </a>
            </li>
            <li className="mx-2 text-center">
              <a
                className={`text-sm font-semibold px-8 py-3 lg:py-4 shadow-md rounded-full inline-block leading-normal my-2 ${
                  openTab === 3
                    ? `text-white bg-ocean-green-500`
                    : `text-ocean-green-500 bg-white`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Consultant
              </a>
            </li>
            <li className="mx-2 text-center">
              <a
                className={`text-sm font-semibold px-8 py-3 lg:py-4 shadow-md rounded-full inline-block leading-normal my-2 ${
                  openTab === 4
                    ? `text-white bg-ocean-green-500`
                    : `text-ocean-green-500 bg-white`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Enterprise
              </a>
            </li>
            <li className="mx-2 text-center">
              <a
                className={`text-sm font-semibold px-8 py-3 lg:py-4 shadow-md rounded-full inline-block leading-normal my-2 ${
                  openTab === 5
                    ? `text-white bg-ocean-green-500`
                    : `text-ocean-green-500 bg-white`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                E-Commerce
              </a>
            </li>
            <li className="mx-2 text-center">
              <a
                className={`text-sm font-semibold px-8 py-3 lg:py-4 shadow-md rounded-full inline-block leading-normal my-2 ${
                  openTab === 6
                    ? `text-white bg-ocean-green-500`
                    : `text-ocean-green-500 bg-white`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Developers
              </a>
            </li>
            <li className="mx-2 text-center">
              <a
                className={`text-sm font-semibold px-8 py-3 lg:py-4 shadow-md rounded-full inline-block leading-normal my-2 ${
                  openTab === 7
                    ? `text-white bg-ocean-green-500`
                    : `text-ocean-green-500 bg-white`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                Services
              </a>
            </li>
          </ul>
          <div className="flex relative flex-col w-full min-w-0">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                  <div className="md:grid md:grid-cols-2 md:grid-flow-row-dense md:gap-8 md:items-center">
                    <div className="relative mt-10 lg:col-start-2 lg:mt-0">
                      <img
                        className="relative mx-auto lg:mr-0 lg:ml-auto"
                        width={500}
                        src="/assets/images/links.png"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-start-1">
                      <div className="flex items-center -ml-6">
                        <img
                          height={150}
                          width={150}
                          src="/assets/svg/links.svg"
                          alt=""
                        />
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            Links
                          </h3>
                          <h4 className=" text-lg tracking-tight text-gray-600">
                            One-time payment links
                          </h4>
                        </div>
                      </div>
                      <p className="mb-12 text-xl font-normal leading-relaxed text-gray-600">
                        Collect one-time payments through Viber, Messenger,
                        Instagram, SMS or anywhere you talk to your customer
                      </p>
                      <div>
                        <button className="py-4 px-16 text-lg font-medium text-ocean-green-500 hover:text-white bg-transparent hover:bg-ocean-green-500 rounded-md border-2 border-ocean-green-500 focus:outline-none focus:ring-2 focus:ring-ocean-green-500 focus:ring-offset-2 shadow lg:px-20">
                          Learn about Links
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link2">
                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                  <div className="md:grid md:grid-cols-2 md:grid-flow-row-dense md:gap-8 md:items-center">
                    <div className="relative mt-10 lg:col-start-1 lg:mt-0">
                      <img
                        className="relative mx-auto lg:mr-auto lg:ml-0"
                        width={500}
                        src="/assets/images/pages.png"
                        alt=""
                      />
                    </div>
                    <div className="lg:col-start-2">
                      <div className="flex items-center -ml-6">
                        <img
                          height={150}
                          width={150}
                          src="/assets/svg/pages.svg"
                          alt=""
                        />
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            Pages
                          </h3>
                          <h4 className=" text-lg tracking-tight text-gray-600">
                            Customizable checkout pages
                          </h4>
                        </div>
                      </div>
                      <p className="mb-12 text-xl font-normal leading-relaxed text-gray-600">
                        An always-on payment page, custom-made for your
                        business&apos; product or service
                      </p>
                      <div>
                        <button className="py-4 px-16 text-lg font-medium text-ocean-green-500 hover:text-white bg-transparent hover:bg-ocean-green-500 rounded-md border-2 border-ocean-green-500 focus:outline-none focus:ring-2 focus:ring-ocean-green-500 focus:ring-offset-2 shadow lg:px-20">
                          Learn about Pages
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                  <div className="md:grid md:grid-cols-2 md:grid-flow-row-dense md:gap-8 md:items-center">
                    <div className="relative mt-10 lg:col-start-2 lg:mt-0">
                      <img
                        className="relative mx-auto lg:mr-0 lg:ml-auto"
                        width={500}
                        src="/assets/images/plugins.png"
                        alt=""
                      />
                    </div>

                    <div className="lg:col-start-1">
                      <div className="flex items-center -ml-6">
                        <img
                          height={150}
                          width={150}
                          src="/assets/svg/links.svg"
                          alt=""
                        />
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            Plugins
                          </h3>
                          <h4 className=" text-lg tracking-tight text-gray-600">
                            Payments for your e-commerce builder
                          </h4>
                        </div>
                      </div>
                      <p className="mb-12 text-xl font-normal leading-relaxed text-gray-600">
                        Add PayMongo to your e-commerce platform of choice to
                        collect credit card and e-wallet payments
                      </p>
                      <div>
                        <button className="py-4 px-16 text-lg font-medium text-ocean-green-500 hover:text-white bg-transparent hover:bg-ocean-green-500 rounded-md border-2 border-ocean-green-500 focus:outline-none focus:ring-2 focus:ring-ocean-green-500 focus:ring-offset-2 shadow lg:px-20">
                          Learn about our Plugins
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link2">
                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                  <div className="md:grid md:grid-cols-2 md:grid-flow-row-dense md:gap-8 md:items-center">
                    <div className="relative mt-10 lg:col-start-1 lg:mt-0">
                      <img
                        className="relative mx-auto lg:mr-auto lg:ml-0"
                        width={500}
                        src="/assets/images/api.png"
                        alt=""
                      />
                    </div>

                    <div className="lg:col-start-2">
                      <div className="flex items-center -ml-6">
                        <img
                          height={150}
                          width={150}
                          src="/assets/svg/api.svg"
                          alt=""
                        />
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            API
                          </h3>
                          <h4 className=" text-lg tracking-tight text-gray-600">
                            Payments for any website or app
                          </h4>
                        </div>
                      </div>
                      <p className="mb-12 text-xl font-normal leading-relaxed text-gray-600">
                        Integrate payments into your projects, from small side
                        gigs to complex products and services for millions of
                        customers.
                      </p>
                      <div>
                        <button className="py-4 px-16 text-lg font-medium text-ocean-green-500 hover:text-white bg-transparent hover:bg-ocean-green-500 rounded-md border-2 border-ocean-green-500 focus:outline-none focus:ring-2 focus:ring-ocean-green-500 focus:ring-offset-2 shadow lg:px-20">
                          Learn about our API
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
