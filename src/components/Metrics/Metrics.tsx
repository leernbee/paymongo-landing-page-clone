export default function Metrics() {
  return (
    <div className="overflow-hidden py-16 bg-gray-200 lg:py-32">
      <div className="relative px-4 mx-auto max-w-xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Chat with real people
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              When you need a helping hand, our Customer Success team is ready
              to help you grow your business.
            </p>

            <dl className="mt-10 text-center sm:grid sm:grid-cols-3 sm:gap-8 sm:mx-auto sm:max-w-3xl">
              <div className="flex flex-col py-4 bg-green-700 rounded-md">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                  CS team members
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  10
                </dd>
              </div>
              <div className="flex flex-col py-4 mt-10 bg-green-700 rounded-md sm:mt-0">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                  Conversation ratings
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  90%
                </dd>
              </div>
              <div className="flex flex-col py-4 mt-10 bg-green-700 rounded-md sm:mt-0">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                  Avg. first response time
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
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
