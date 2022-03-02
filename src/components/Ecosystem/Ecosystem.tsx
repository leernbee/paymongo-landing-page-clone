export default function Ecosystem() {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg,#37b47e 23%,#6a71cf 91%)',
      }}
      className="overflow-hidden py-16 bg-gray-200 lg:py-32"
    >
      <div className="relative px-4 mx-auto max-w-xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <div className="mx-auto max-w-2xl g-container">
            <div className="mid">
              <img
                className="relative mx-auto rounded-md"
                width={490}
                src="/assets/images/circle-paymongo-gcash-logo.png"
                alt=""
              />
            </div>
            <div className="mastercard">
              <img
                className="relative mx-auto rounded-md"
                width={490}
                src="/assets/images/circle-mc-logo.png"
                alt=""
              />
            </div>
            <div className="visa">
              <img
                className="relative mx-auto rounded-md"
                width={490}
                src="/assets/images/circle-visa-logo.png"
                alt=""
              />
            </div>
            <div className="paymaya">
              <img
                className="relative mx-auto rounded-md"
                width={490}
                src="/assets/images/circle-paymaya-logo.png"
                alt=""
              />
            </div>
            <div className="grabpay">
              <img
                className="relative mx-auto rounded-md"
                width={490}
                src="/assets/images/circle-grabpay-logo.png"
                alt=""
              />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight leading-8 text-center text-white sm:text-4xl">
            A better way to send money
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-center text-white">
            We&apos;re building a financial operating system for businesses in
            the Philippines, starting with payments.
          </p>
        </div>
      </div>
    </div>
  );
}
