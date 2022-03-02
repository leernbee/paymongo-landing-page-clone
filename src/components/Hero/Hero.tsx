import Image from 'next/image';
import Lottie from 'react-lottie';

import bgCircle from '../../../public/assets/lottie/bg-circle.json';

function BgCircleHero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    direction: true,
    animationData: bgCircle,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  return (
    <Lottie
      style={{ filter: 'blur(130px)' }}
      options={defaultOptions}
      height={400}
      width={400}
    />
  );
}

export default function Hero() {
  return (
    <div className="pb-8 font-serif bg-white sm:pb-12 lg:pb-12">
      <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-32">
        <div className="pl-4 mx-auto max-w-md sm:pl-6 sm:max-w-3xl lg:grid lg:grid-cols-2 lg:gap-0 lg:pl-8 lg:max-w-7xl">
          <div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-5xl font-bold tracking-tight leading-tight text-gray-900 sm:text-6xl">
                  Your tool kit for{' '}
                  <span
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg,#37b47e 17%,#6a71cf 82%)',
                      color: '#37b47e',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Business Growth
                  </span>
                </h1>
                <p className="mt-6 text-xl font-medium text-gray-700">
                  Give your customers a payment experience they’ll love. Give
                  yourself tools for success. All with one PayMongo account.
                </p>
              </div>
              <div className="items-center mt-12 sm:flex sm:w-full">
                <div className="mt-4 sm:mt-0">
                  <button
                    type="submit"
                    className="block py-6 w-full text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow sm:px-9"
                  >
                    Create your account - it&apos;s free!
                  </button>
                </div>
                <div className="flex shrink-0 justify-center items-center p-1 w-10 h-10 text-white rounded-full ring-2 ring-green-500  sm:w-12 sm:h-12">
                  <Image
                    src={`/assets/svg/calendar-icon.svg`}
                    alt="icon"
                    height={24}
                    width={24}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-semibold text-gray-900">
                    Book a Demo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:px-6 sm:mx-auto sm:max-w-3xl">
          <div className="py-12 sm:relative sm:py-16 sm:mt-12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="absolute top-1/2 left-0 pl-4 -mr-40 -translate-y-1/3 sm:px-0 sm:mx-auto sm:max-w-3xl lg:pl-12 lg:max-w-none lg:h-full">
              <BgCircleHero />
            </div>
            <div className="hidden top-0 left-0 pl-4 -mr-40 sm:px-0 sm:mx-auto sm:max-w-3xl lg:block lg:pl-12 lg:max-w-none lg:h-full">
              <div className="absolute top-6 left-56 w-[670px] h-full">
                <Image
                  src="/assets/images/hero-dashboard.png"
                  alt="Paymongo"
                  height={459}
                  width={670}
                />
              </div>
              <div className="absolute top-32 left-0 w-[320px] h-full">
                <Image
                  src="/assets/images/hero-mobile.png"
                  alt="Paymongo"
                  height={516.28}
                  width={320}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
