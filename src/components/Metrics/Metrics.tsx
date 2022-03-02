export default function Metrics() {
  return (
    <div className="overflow-hidden py-16 font-serif bg-gray-200 lg:py-32">
      <div className="relative px-4 mx-auto max-w-xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-3xl font-semibold leading-tight text-gray-900 sm:tracking-tight lg:text-5xl">
              Chat with real people
            </h3>
            <p className="mx-auto mt-5 max-w-4xl text-xl font-normal text-gray-700">
              When you need a helping hand, our Customer Success team is ready
              to help you grow your business.
            </p>

            <dl className="mt-10 text-center sm:grid sm:grid-cols-3 sm:gap-8 sm:mx-auto sm:max-w-3xl">
              <div className="flex flex-col py-4 bg-ocean-green-50 rounded-md">
                <dt className="order-2 px-5 mt-2 text-sm font-medium leading-6 text-gray-600">
                  CS team members
                </dt>
                <dd className="order-1 text-5xl font-medium text-ocean-green-600">
                  10
                </dd>
              </div>
              <div className="flex flex-col py-4 mt-10 bg-ocean-green-50 rounded-md sm:mt-0">
                <dt className="order-2 px-5 mt-2 text-sm font-medium leading-6 text-gray-600">
                  Conversation ratings
                </dt>
                <dd className="order-1 text-5xl font-medium text-ocean-green-600">
                  90%
                </dd>
              </div>
              <div className="flex flex-col py-4 mt-10 bg-ocean-green-50 rounded-md sm:mt-0">
                <dt className="order-2 px-5 mt-2 text-sm font-medium leading-6 text-gray-600">
                  Avg. first response time
                </dt>
                <dd className="order-1 text-5xl font-medium text-ocean-green-600">
                  &lt; 1hr
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
            <img
              className="relative mx-auto"
              width={490}
              src="/assets/images/metrics.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
