import React from 'react';

const Businesses = () => {
  return (
    <div className="py-24 px-4 mx-auto max-w-7xl lg:py-32">
      <div className="mb-16 text-center">
        <h2 className="mt-1 text-3xl font-semibold text-gray-900 sm:tracking-tight lg:text-5xl">
          Businesses you love are growing with PayMongo
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-5 lg:gap-8 lg:mx-[-160px] lg:mt-8">
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8">
          <img className="max-h-24" src="/assets/images/pdax.png" alt="pdax" />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img
            className="max-h-24"
            src="/assets/images/kimstore.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img
            className="max-h-24"
            src="/assets/images/shakeys.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img className="max-h-24" src="/assets/images/dmci.png" alt="pdax" />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img
            className="max-h-24"
            src="/assets/images/stance.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img
            className="max-h-24"
            src="/assets/images/wildflour.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img className="max-h-24" src="/assets/images/boozy.png" alt="pdax" />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img
            className="max-h-24"
            src="/assets/images/mandauefoam.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img className="max-h-24" src="/assets/images/kumu.png" alt="pdax" />
        </div>
        <div className="flex col-span-1 justify-center p-4 rounded-lg shadow lg:p-8 min-w-">
          <img
            className="max-h-24"
            src="/assets/images/beautymnl.png"
            alt="pdax"
          />
        </div>
      </div>
    </div>
  );
};

export default Businesses;
