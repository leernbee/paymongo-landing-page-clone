import React from 'react';

const Partners = () => {
  return (
    <div className="py-8 mx-auto max-w-7xl font-serif ">
      <div className="pb-8 mx-2 border-b border-gray-400">
        <div className="block overflow-hidden relative">
          <span className="block relative after:absolute after:top-1/2 after:ml-2 after:w-full text-gray-700 after:border-t after:border-gray-400">
            Our growing list of payment partners
          </span>
        </div>
        <div className="flex flex-wrap gap-8 justify-center mx-auto mt-8">
          <img
            src="/assets/svg/visa.svg"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />

          <img
            src="/assets/svg/mastercard.svg"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />

          <img
            src="/assets/images/gcash.png"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />

          <img
            src="/assets/svg/grabpay.svg"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />

          <img
            src="/assets/svg/paymaya.svg"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />

          <img
            src="/assets/images/coins-ph.png"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />

          <img
            src="/assets/images/7-eleven.png"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />

          <img
            src="/assets/images/cebuana.png"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />

          <img
            src="/assets/images/mlhuiller.png"
            alt=""
            className="object-contain max-w-[120px] max-h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
