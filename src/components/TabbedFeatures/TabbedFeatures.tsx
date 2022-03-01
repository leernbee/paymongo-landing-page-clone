import React from 'react';

export default function TabbedFeatures() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="py-32 mx-auto max-w-7xl">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
              role="tablist"
            >
              <li className="flex-auto mr-2 last:mr-0 -mb-px text-center">
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
              <li className="flex-auto mr-2 last:mr-0 -mb-px text-center">
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
              <li className="flex-auto mr-2 last:mr-0 -mb-px text-center">
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
              <li className="flex-auto mr-2 last:mr-0 -mb-px text-center">
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
              <li className="flex-auto mr-2 last:mr-0 -mb-px text-center">
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
              <li className="flex-auto mr-2 last:mr-0 -mb-px text-center">
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
              <li className="flex-auto mr-2 last:mr-0 -mb-px text-center">
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
                        <div className="lg:col-start-2">
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Links
                          </h3>
                          <p className="mt-3 text-lg text-gray-500">
                            Collect one-time payments through Viber, Messenger,
                            Instagram, SMS or anywhere you talk to your customer
                          </p>
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
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                        <div className="lg:col-start-1">
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Links
                          </h3>
                          <p className="mt-3 text-lg text-gray-500">
                            Collect one-time payments through Viber, Messenger,
                            Instagram, SMS or anywhere you talk to your customer
                          </p>
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
                    className={openTab === 2 ? 'block' : 'hidden'}
                    id="link2"
                  >
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Links
                          </h3>
                          <p className="mt-3 text-lg text-gray-500">
                            Collect one-time payments through Viber, Messenger,
                            Instagram, SMS or anywhere you talk to your customer
                          </p>
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
                    className={openTab === 3 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Links
                          </h3>
                          <p className="mt-3 text-lg text-gray-500">
                            Collect one-time payments through Viber, Messenger,
                            Instagram, SMS or anywhere you talk to your customer
                          </p>
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
                    className={openTab === 4 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Links
                          </h3>
                          <p className="mt-3 text-lg text-gray-500">
                            Collect one-time payments through Viber, Messenger,
                            Instagram, SMS or anywhere you talk to your customer
                          </p>
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
                    className={openTab === 5 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Links
                          </h3>
                          <p className="mt-3 text-lg text-gray-500">
                            Collect one-time payments through Viber, Messenger,
                            Instagram, SMS or anywhere you talk to your customer
                          </p>
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
                    className={openTab === 6 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Links
                          </h3>
                          <p className="mt-3 text-lg text-gray-500">
                            Collect one-time payments through Viber, Messenger,
                            Instagram, SMS or anywhere you talk to your customer
                          </p>
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
                    className={openTab === 7 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2">
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Links
                          </h3>
                          <p className="mt-3 text-lg text-gray-500">
                            Collect one-time payments through Viber, Messenger,
                            Instagram, SMS or anywhere you talk to your customer
                          </p>
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
    </>
  );
}
