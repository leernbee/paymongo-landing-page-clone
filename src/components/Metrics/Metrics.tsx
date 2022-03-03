export default function Metrics() {
  return (
    <div className="py-24 bg-gray-50 lg:py-32">
      <div className="relative px-4 mx-auto lg:px-0 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
          <div>
            <img
              className="relative mx-auto"
              width={490}
              src="/assets/images/metrics.png"
              alt=""
            />
          </div>
          <div className="mt-12 text-center lg:mt-0 lg:text-left">
            <h3 className="text-3xl font-semibold leading-tight text-gray-900 sm:tracking-tight lg:text-5xl ">
              Chat with real people
            </h3>
            <p className="mx-auto mt-5 max-w-4xl text-xl font-normal text-gray-700">
              When you need a helping hand, our Customer Success team is ready
              to help you grow your business.
            </p>

            <dl className="flex gap-8 justify-center mt-10 text-center sm:mx-auto sm:max-w-3xl">
              <div className="flex flex-col flex-1 py-4 max-w-[190px] bg-ocean-green-50 rounded-md">
                <dt className="order-2 px-5 mt-2 text-sm font-medium leading-6 text-gray-600">
                  CS team members
                </dt>
                <dd className="order-1 text-5xl font-medium text-ocean-green-600">
                  10
                </dd>
              </div>
              <div className="flex flex-col flex-1 py-4 max-w-[190px] bg-ocean-green-50 rounded-md">
                <dt className="order-2 px-5 mt-2 text-sm font-medium leading-6 text-gray-600">
                  Conversation ratings
                </dt>
                <dd className="order-1 text-5xl font-medium text-ocean-green-600">
                  90%
                </dd>
              </div>
              <div className="flex flex-col flex-1 py-4 max-w-[190px] bg-ocean-green-50 rounded-md">
                <dt className="order-2 px-5 mt-2 text-sm font-medium leading-6 text-gray-600">
                  Avg. first response time
                </dt>
                <dd className="order-1 text-5xl font-medium text-ocean-green-600">
                  &lt; 1hr
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
