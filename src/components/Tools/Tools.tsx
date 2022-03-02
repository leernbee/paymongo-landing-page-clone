import React from 'react';

const features = [
  {
    name: 'Real-time business reporting tools',
    description:
      'Track your customer payments in real time. No more waiting for screenshots of receipts.',
    icon: 'time-icon.svg',
  },
  {
    name: 'Fraud and security tools',
    description:
      'Our risk engine uses 1,600+ data points to predict and fight fraudsters in real-time.',
    icon: 'secure-icon.svg',
  },
  {
    name: 'Payment and tax reporting tools',
    description:
      'Generate payment and payout reports with VAT and withholding tax computation built-in.',
    icon: 'tax-icon.svg',
  },
];

const Tools = () => {
  return (
    <>
      <div className="py-32 px-4 mx-auto max-w-7xl font-serif sm:py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mt-1 text-3xl font-semibold text-gray-900 sm:tracking-tight lg:text-5xl">
            Operate your business with growth built-in
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg font-normal text-gray-700">
            Whether you’re a solopreneur or you work with Sales, IT and Finance
            teams
          </p>
        </div>

        <div className="flex flex-wrap">
          <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-x-24 lg:space-y-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex justify-center items-center w-20 h-20 bg-ocean-green-500 rounded-full">
                    <img
                      className="w-10 h-10"
                      aria-hidden="true"
                      src={`/assets/svg/${feature.icon}`}
                      alt="gs-icon"
                    />
                  </div>
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-3 text-lg text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default Tools;
