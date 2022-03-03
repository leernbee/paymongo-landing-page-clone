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
    <>
      <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-32">
        <div className="mx-auto lg:grid lg:grid-cols-2 lg:gap-0 lg:max-w-7xl">
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
                <div className="mt-4 mr-10 sm:mt-0">
                  <button
                    type="submit"
                    className="block py-6 w-full text-lg font-medium text-white bg-ocean-green-500 hover:bg-ocean-green-600 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-ocean-green-500 focus:ring-offset-2 sm:px-8"
                  >
                    Create your account - it&apos;s free!
                  </button>
                </div>
                <div>
                  <a href="#" className="flex items-center">
                    <div className="flex justify-center mr-4 w-10 h-10 text-white rounded-full ring-2 ring-ocean-green-500 sm:w-12 sm:h-12">
                      <Image
                        src={`/assets/svg/calendar-icon.svg`}
                        alt="icon"
                        height={24}
                        width={24}
                      />
                    </div>
                    <p className="text-lg font-semibold text-ocean-green-500">
                      Book a Demo
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden sm:px-6 sm:mx-auto">
          <div className="mt-8 sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden top-1/2 left-0 pl-4 -mr-40 -translate-y-1/3 sm:px-0 sm:mx-auto sm:max-w-3xl lg:block lg:absolute lg:pl-12 lg:max-w-none lg:h-full">
              <BgCircleHero />
            </div>
            <div className="relative pl-4 -mr-40 sm:px-0 sm:mx-auto lg:block lg:pl-12 lg:max-w-none lg:h-full">
              <div className="absolute w-full max-w-[670px] lg:top-6 lg:left-56">
                <Image
                  src="/assets/images/hero-dashboard.png"
                  alt="Paymongo"
                  height={459}
                  width={670}
                />
              </div>
              <div className="absolute w-full max-w-[320px] lg:top-32 lg:left-0">
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
    </>
  );
}
