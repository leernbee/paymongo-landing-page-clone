export default function Ecosystem() {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg,#37b47e 23%,#6a71cf 91%)',
      }}
      className="overflow-hidden py-24 lg:py-32"
    >
      <div className="relative px-4 mx-auto lg:max-w-7xl">
        <div className="relative">
          <div className="mx-auto max-w-4xl g-container">
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
          <h2 className="mt-12 text-3xl font-bold tracking-tight leading-8 text-center text-white sm:text-4xl">
            Made possible by our ecosystem partners
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-xl text-center text-white">
            We&apos;re building a financial operating system for businesses in
            the Philippines, starting with payments.
          </p>
        </div>
      </div>
    </div>
  );
}
