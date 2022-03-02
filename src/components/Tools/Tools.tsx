import React from 'react';

const features = [
  {
    name: 'Real-time business reporting tools',
    description:
      'Track your customer payments in real time. No more waiting for screenshots of receipts.',
    icon: 'gs-ic-1.svg',
  },
  {
    name: 'Fraud and security tools',
    description:
      'Our risk engine uses 1,600+ data points to predict and fight fraudsters in real-time.',
    icon: 'gs-ic-2.svg',
  },
  {
    name: 'Payment and tax reporting tools',
    description:
      'Generate payment and payout reports with VAT and withholding tax computation built-in.',
    icon: 'gs-ic-3.svg',
  },
];

const Tools = () => {
  return (
    <>
      <div className="bg-white">
        <div className="py-32 px-4 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mt-1 text-3xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
              Operate your business with growth built-in
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-gray-500 text-l">
              Whether you’re a solopreneur or you work with Sales, IT and
              Finance teams
            </p>
          </div>

          <div className="flex flex-wrap">
            <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex justify-center items-center w-20 h-20 rounded-md">
                      <img
                        className="w-20 h-20"
                        aria-hidden="true"
                        src={`/assets/svg/${feature.icon}`}
                        alt="gs-icon"
                      />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
