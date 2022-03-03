import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (
    <div className="py-24 max-w-full lg:py-32">
      <div className="mb-16 text-center">
        <h2 className="mt-1 text-3xl font-semibold text-gray-900 sm:tracking-tight lg:text-5xl">
          Here’s what they have to say
        </h2>
      </div>
      <div className="relative">
        <Carousel
          showThumbs={false}
          centerSlidePercentage={40}
          autoPlay={false}
          centerMode
          selectedItem={1}
          showStatus={false}
          infiniteLoop
          emulateTouch
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              marginLeft: 16,
              cursor: 'pointer',
              borderTop: '3px solid #ccc',
              height: '3px',
              width: '36px',
              display: 'inline-block',
            };
            const style = isSelected
              ? { ...defStyle, borderTop: '3px solid #35af7b' }
              : { ...defStyle };
            return (
              <div
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              ></div>
            );
          }}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  borderRadius: '50%',
                  border: '1px solid #999',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  left: '50%',
                  top: '50%',
                  position: 'absolute',
                  transform: 'translate(-400px, -54px)',
                  zIndex: 100,
                  backgroundColor: '#fff',
                }}
              >
                <ChevronLeftIcon width={32} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  borderRadius: '50%',
                  border: '1px solid #999',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  right: '50%',
                  top: '50%',
                  position: 'absolute',
                  transform: 'translate(400px, -54px)',
                  zIndex: 100,
                  backgroundColor: '#fff',
                }}
              >
                <ChevronRightIcon width={32} />
              </button>
            )
          }
        >
          <div className="flex flex-col justify-between items-start p-8 mx-16 mb-16 blur-sm">
            <div className="mb-6">
              <img
                className="max-h-12"
                src="/assets/svg/quotation-mark.svg"
                alt="quote"
              />
            </div>
            <p className="mb-4 text-left xl:leading-normal lg:text-md">
              Though we have a Shopify website for other sport products, we
              choose to sell our bikes through our sales ambassadors that will
              give a more personal touch to our customers. PayMongo&apos;s
              payment links allowed our loyal customers to have more payment
              options like credit card, e-wallets, and OTC. With its legitimate
              look and seamless processing, it also made our business more
              credible and customers are less hesitant to pay.
            </p>
            <p className="mt-4 text-base font-semibold leading-none text-gray-800">
              Daryll
            </p>
            <span className="text-sm text-gray-600">Boundless</span>
          </div>
          <div className="flex flex-col justify-between items-start p-8 mx-16 mb-16 blur-sm">
            <div className="mb-6">
              <img
                className="max-h-12"
                src="/assets/svg/quotation-mark.svg"
                alt="quote"
              />
            </div>
            <p className="mb-4 text-left xl:leading-normal lg:text-md">
              Though we have a Shopify website for other sport products, we
              choose to sell our bikes through our sales ambassadors that will
              give a more personal touch to our customers. PayMongo&apos;s
              payment links allowed our loyal customers to have more payment
              options like credit card, e-wallets, and OTC. With its legitimate
              look and seamless processing, it also made our business more
              credible and customers are less hesitant to pay.
            </p>
            <p className="mt-4 text-base font-semibold leading-none text-gray-800">
              Daryll
            </p>
            <span className="text-sm text-gray-600">Boundless</span>
          </div>
          <div className="flex flex-col justify-between items-start p-8 mx-16 mb-16 blur-sm">
            <div className="mb-6">
              <img
                className="max-h-12"
                src="/assets/svg/quotation-mark.svg"
                alt="quote"
              />
            </div>
            <p className="mb-4 text-left xl:leading-normal lg:text-md">
              Though we have a Shopify website for other sport products, we
              choose to sell our bikes through our sales ambassadors that will
              give a more personal touch to our customers. PayMongo&apos;s
              payment links allowed our loyal customers to have more payment
              options like credit card, e-wallets, and OTC. With its legitimate
              look and seamless processing, it also made our business more
              credible and customers are less hesitant to pay.
            </p>
            <p className="mt-4 text-base font-semibold leading-none text-gray-800">
              Daryll
            </p>
            <span className="text-sm text-gray-600">Boundless</span>
          </div>
          <div className="flex flex-col justify-between items-start p-8 mx-16 mb-16 blur-sm">
            <div className="mb-6">
              <img
                className="max-h-12"
                src="/assets/svg/quotation-mark.svg"
                alt="quote"
              />
            </div>
            <p className="mb-4 text-left xl:leading-normal lg:text-md">
              Though we have a Shopify website for other sport products, we
              choose to sell our bikes through our sales ambassadors that will
              give a more personal touch to our customers. PayMongo&apos;s
              payment links allowed our loyal customers to have more payment
              options like credit card, e-wallets, and OTC. With its legitimate
              look and seamless processing, it also made our business more
              credible and customers are less hesitant to pay.
            </p>
            <p className="mt-4 text-base font-semibold leading-none text-gray-800">
              Daryll
            </p>
            <span className="text-sm text-gray-600">Boundless</span>
          </div>
          <div className="flex flex-col justify-between items-start p-8 mx-16 mb-16 blur-sm">
            <div className="mb-6">
              <img
                className="max-h-12"
                src="/assets/svg/quotation-mark.svg"
                alt="quote"
              />
            </div>
            <p className="mb-4 text-left xl:leading-normal lg:text-md">
              Though we have a Shopify website for other sport products, we
              choose to sell our bikes through our sales ambassadors that will
              give a more personal touch to our customers. PayMongo&apos;s
              payment links allowed our loyal customers to have more payment
              options like credit card, e-wallets, and OTC. With its legitimate
              look and seamless processing, it also made our business more
              credible and customers are less hesitant to pay.
            </p>
            <p className="mt-4 text-base font-semibold leading-none text-gray-800">
              Daryll
            </p>
            <span className="text-sm text-gray-600">Boundless</span>
          </div>
          <div className="flex flex-col justify-between items-start p-8 mx-16 mb-16 blur-sm">
            <div className="mb-6">
              <img
                className="max-h-12"
                src="/assets/svg/quotation-mark.svg"
                alt="quote"
              />
            </div>
            <p className="mb-4 text-left xl:leading-normal lg:text-md">
              Though we have a Shopify website for other sport products, we
              choose to sell our bikes through our sales ambassadors that will
              give a more personal touch to our customers. PayMongo&apos;s
              payment links allowed our loyal customers to have more payment
              options like credit card, e-wallets, and OTC. With its legitimate
              look and seamless processing, it also made our business more
              credible and customers are less hesitant to pay.
            </p>
            <p className="mt-4 text-base font-semibold leading-none text-gray-800">
              Daryll
            </p>
            <span className="text-sm text-gray-600">Boundless</span>
          </div>
          <div className="flex flex-col justify-between items-start p-8 mx-16 mb-16 blur-sm">
            <div className="mb-6">
              <img
                className="max-h-12"
                src="/assets/svg/quotation-mark.svg"
                alt="quote"
              />
            </div>
            <p className="mb-4 text-left xl:leading-normal lg:text-md">
              Though we have a Shopify website for other sport products, we
              choose to sell our bikes through our sales ambassadors that will
              give a more personal touch to our customers. PayMongo&apos;s
              payment links allowed our loyal customers to have more payment
              options like credit card, e-wallets, and OTC. With its legitimate
              look and seamless processing, it also made our business more
              credible and customers are less hesitant to pay.
            </p>
            <p className="mt-4 text-base font-semibold leading-none text-gray-800">
              Daryll
            </p>
            <span className="text-sm text-gray-600">Boundless</span>
          </div>
          <div className="flex flex-col justify-between items-start p-8 mx-16 mb-16 blur-sm">
            <div className="mb-6">
              <img
                className="max-h-12"
                src="/assets/svg/quotation-mark.svg"
                alt="quote"
              />
            </div>
            <p className="mb-4 text-left xl:leading-normal lg:text-md">
              Though we have a Shopify website for other sport products, we
              choose to sell our bikes through our sales ambassadors that will
              give a more personal touch to our customers. PayMongo&apos;s
              payment links allowed our loyal customers to have more payment
              options like credit card, e-wallets, and OTC. With its legitimate
              look and seamless processing, it also made our business more
              credible and customers are less hesitant to pay.
            </p>
            <p className="mt-4 text-base font-semibold leading-none text-gray-800">
              Daryll
            </p>
            <span className="text-sm text-gray-600">Boundless</span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
