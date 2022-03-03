import Image from 'next/image';

const transferFeatures = [
  {
    id: 1,
    name: 'Create your account and submit business information',
    icon: 'gs-ic-1.svg',
  },
  {
    id: 2,
    name: 'Choose a tool that works for your business',
    icon: 'gs-ic-2.svg',
  },
  {
    id: 3,
    name: 'Start accepting payments from your customers',
    icon: 'gs-ic-3.svg',
  },
];

const Demo = () => {
  return (
    <div className="py-24 bg-gray-200 lg:py-32">
      <div className="px-4 mx-auto lg:max-w-7xl">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
            <h3 className="text-3xl font-semibold leading-tight text-gray-900 sm:tracking-tight lg:text-5xl">
              Get started in minutes with your free account
            </h3>
            <p className="mx-auto mt-5 text-xl font-normal text-gray-700 lg:max-w-4xl">
              Our onboarding process is purely online. No lining up, no
              mountains of paperwork!
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt className="flex items-center">
                    <div className="flex absolute justify-center">
                      <img
                        className="w-10 h-10"
                        aria-hidden="true"
                        alt="gs-icon"
                        src={`/assets/svg/${item.icon}`}
                      />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-700">
                      {item.name}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>
            <div className="flex flex-col gap-8 items-center mt-12 lg:flex-row">
              <div>
                <button
                  type="submit"
                  className="block p-4 w-full text-lg font-medium text-white bg-ocean-green-500 hover:bg-ocean-green-600 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-ocean-green-500 focus:ring-offset-2 lg:py-6 lg:px-8"
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

          <div className="mt-16 lg:mt-0">
            <img
              className="mx-auto rounded-lg lg:mr-0 lg:ml-auto"
              width={540}
              src="/assets/images/demo.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
