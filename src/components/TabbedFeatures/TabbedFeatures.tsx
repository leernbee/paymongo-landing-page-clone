import React from 'react';

export default function TabbedFeatures() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="bg-white">
        <div className="py-32 px-4 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mt-1 text-3xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
              Payment tools made for Filipino Businesses
            </h2>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
                role="tablist"
              >
                <li className="flex-auto mr-6 last:mr-0 -mb-px text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal ${
                      openTab === 1
                        ? `text-white bg-green-600`
                        : `text-green-600 bg-white`
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
                <li className="flex-auto mr-6 last:mr-0 -mb-px text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal ${
                      openTab === 2
                        ? `text-white bg-green-600`
                        : `text-green-600 bg-white`
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
                <li className="flex-auto mr-6 last:mr-0 -mb-px text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal ${
                      openTab === 3
                        ? `text-white bg-green-600`
                        : `text-green-600 bg-white`
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
                <li className="flex-auto mr-6 last:mr-0 -mb-px text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal ${
                      openTab === 4
                        ? `text-white bg-green-600`
                        : `text-green-600 bg-white`
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
                <li className="flex-auto mr-6 last:mr-0 -mb-px text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal ${
                      openTab === 5
                        ? `text-white bg-green-600`
                        : `text-green-600 bg-white`
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
                <li className="flex-auto mr-6 last:mr-0 -mb-px text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal ${
                      openTab === 6
                        ? `text-white bg-green-600`
                        : `text-green-600 bg-white`
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
                <li className="flex-auto mr-6 last:mr-0 -mb-px text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-full block leading-normal ${
                      openTab === 7
                        ? `text-white bg-green-600`
                        : `text-green-600 bg-white`
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
              <div className="flex relative flex-col mb-6 w-full min-w-0">
                <div className="flex-auto py-5 px-4">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? 'block' : 'hidden'}
                      id="link1"
                    >
                      <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                          <div className="lg:col-start-1">
                            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                              Links
                            </h3>
                            <h4 className=" text-lg tracking-tight text-gray-900">
                              One-time payment links
                            </h4>
                            <p className="mt-3 text-lg text-gray-500">
                              Collect one-time payments through Viber,
                              Messenger, Instagram, SMS or anywhere you talk to
                              your customer
                            </p>
                            <div className="mt-4 sm:mt-0">
                              <button className=" py-6 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow sm:px-9">
                                Learn about Links
                              </button>
                            </div>
                          </div>

                          <div className="relative -mx-4 mt-10 lg:col-start-2 lg:mt-0">
                            <img
                              className="relative mx-auto"
                              width={500}
                              src="/assets/images/links-feature.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 1 ? 'block' : 'hidden'}
                      id="link2"
                    >
                      <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                          <div className="lg:col-start-2">
                            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                              Pages
                            </h3>
                            <h4 className=" text-lg tracking-tight text-gray-900">
                              Customizable checkout pages
                            </h4>
                            <p className="mt-3 text-lg text-gray-500">
                              An always-on payment page, custom-made for your
                              business&apos; product or service
                            </p>
                            <div className="mt-4 sm:mt-0">
                              <button className=" py-6 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow sm:px-9">
                                Learn about Pages
                              </button>
                            </div>
                          </div>

                          <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                            <img
                              className="relative mx-auto"
                              width={500}
                              src="/assets/images/links-feature.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 1 ? 'block' : 'hidden'}
                      id="link3"
                    >
                      <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                          <div className="lg:col-start-1">
                            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                              Plugins
                            </h3>
                            <h4 className=" text-lg tracking-tight text-gray-900">
                              Payments for your e-commerce builder
                            </h4>
                            <p className="mt-3 text-lg text-gray-500">
                              Add PayMongo to your e-commerce platform of choice
                              to collect credit card and e-wallet payments
                            </p>
                            <div className="mt-4 sm:mt-0">
                              <button className=" py-6 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow sm:px-9">
                                Learn about our Plugins
                              </button>
                            </div>
                          </div>

                          <div className="relative -mx-4 mt-10 lg:col-start-2 lg:mt-0">
                            <img
                              className="relative mx-auto"
                              width={500}
                              src="/assets/images/links-feature.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 1 ? 'block' : 'hidden'}
                      id="link4"
                    >
                      <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                          <div className="lg:col-start-2">
                            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                              API
                            </h3>
                            <h4 className=" text-lg tracking-tight text-gray-900">
                              Payments for any website or app
                            </h4>
                            <p className="mt-3 text-lg text-gray-500">
                              Integrate payments into your projects, from small
                              side gigs to complex products and services for
                              millions of customers.
                            </p>
                            <div className="mt-4 sm:mt-0">
                              <button className=" py-6 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow sm:px-9">
                                Learn about our API
                              </button>
                            </div>
                          </div>

                          <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                            <img
                              className="relative mx-auto"
                              width={500}
                              src="/assets/images/links-feature.png"
                              alt=""
                            />
                          </div>
                        </div>
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
