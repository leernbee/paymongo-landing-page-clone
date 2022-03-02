import React from 'react';

const Partners = () => {
  return (
    <div className="py-8 mx-auto w-full max-w-7xl font-serif border-b border-gray-400">
      <div className="block overflow-hidden relative">
        <span className="block relative after:absolute after:top-1/2 after:ml-1 after:w-full text-gray-700 after:border-t after:border-gray-400">
          Our growing list of payment partners{' '}
        </span>
      </div>
      <div className="grid grid-flow-col auto-cols-max gap-x-14 justify-center mt-8">
        <img
          src="/assets/svg/visa.svg"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
        <img
          src="/assets/svg/mastercard.svg"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
        <img
          src="/assets/images/gcash.png"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
        <img
          src="/assets/svg/grabpay.svg"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
        <img
          src="/assets/svg/paymaya.svg"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
        <img
          src="/assets/images/coins-ph.png"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
        <img
          src="/assets/images/7-eleven.png"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
        <img
          src="/assets/images/cebuana.png"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
        <img
          src="/assets/images/mlhuiller.png"
          alt=""
          className="object-contain w-auto max-w-[90px] h-[42px] group-hover:opacity-75 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Partners;
