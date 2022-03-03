import React from 'react';

const Businesses = () => {
  return (
    <div className="overflow-hidden py-32 px-4 mx-auto max-w-7xl font-serif sm:py-24 sm:px-6 lg:px-8 xl:overflow-visible">
      <div className="mb-16 text-center">
        <h2 className="mt-1 text-3xl font-semibold text-gray-900 sm:tracking-tight lg:text-5xl">
          Businesses you love are growing with PayMongo
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 mx-[-160px] mt-6 md:grid-cols-5 lg:mt-8">
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow">
          <img className="max-h-24" src="/assets/images/pdax.png" alt="pdax" />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
          <img
            className="max-h-24"
            src="/assets/images/kimstore.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
          <img
            className="max-h-24"
            src="/assets/images/shakeys.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
          <img className="max-h-24" src="/assets/images/dmci.png" alt="pdax" />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
          <img
            className="max-h-24"
            src="/assets/images/stance.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
          <img
            className="max-h-24"
            src="/assets/images/wildflour.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
          <img className="max-h-24" src="/assets/images/boozy.png" alt="pdax" />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
          <img
            className="max-h-24"
            src="/assets/images/mandauefoam.png"
            alt="pdax"
          />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
          <img className="max-h-24" src="/assets/images/kumu.png" alt="pdax" />
        </div>
        <div className="flex col-span-1 justify-center p-8 bg-white rounded-lg shadow min-w-">
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
