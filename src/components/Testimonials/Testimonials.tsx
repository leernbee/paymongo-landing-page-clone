import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (
    <div className="bg-white">
      <div className="py-32 mx-auto max-w-full sm:py-24">
        <div className="px-4 mb-16 text-center sm:px-6 lg:px-8">
          <h2 className="mt-1 text-3xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
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
                marginLeft: 20,
                cursor: 'pointer',
                borderTop: '2px solid #ccc',
                height: '2px',
                width: '36px',
                display: 'inline-block',
              };
              const style = isSelected
                ? { ...defStyle, borderTop: '2px solid green' }
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
                    border: '1px solid #000',
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: '50%',
                    top: '50%',
                    position: 'absolute',
                    transform: 'translate(-400px, -40px)',
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
                    border: '1px solid #000',
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: '50%',
                    top: '50%',
                    position: 'absolute',
                    transform: 'translate(400px, -40px)',
                    zIndex: 100,
                    backgroundColor: '#fff',
                  }}
                >
                  <ChevronRightIcon width={32} />
                </button>
              )
            }
          >
            <div className="flex flex-col justify-between items-start p-8 m-16 bg-gray-100">
              <p className=" text-left xl:text-lg xl:leading-tight">
                Though we have a Shopify website for other sport products, we
                choose to sell our bikes through our sales ambassadors that will
                give a more personal touch to our customers. PayMongo&apos;s
                payment links allowed our loyal customers to have more payment
                options like credit card, e-wallets, and OTC. With its
                legitimate look and seamless processing, it also made our
                business more credible and customers are less hesitant to pay.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-left text-gray-800">
                Daryll
              </p>
            </div>
            <div className="flex flex-col justify-between items-start p-8 m-16 bg-gray-100">
              <p className=" text-left xl:text-lg xl:leading-tight">
                Though we have a Shopify website for other sport products, we
                choose to sell our bikes through our sales ambassadors that will
                give a more personal touch to our customers. PayMongo&apos;s
                payment links allowed our loyal customers to have more payment
                options like credit card, e-wallets, and OTC. With its
                legitimate look and seamless processing, it also made our
                business more credible and customers are less hesitant to pay.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-left text-gray-800">
                Daryll
              </p>
            </div>
            <div className="flex flex-col justify-between items-start p-8 m-16 bg-gray-100">
              <p className=" text-left xl:text-lg xl:leading-tight">
                Though we have a Shopify website for other sport products, we
                choose to sell our bikes through our sales ambassadors that will
                give a more personal touch to our customers. PayMongo&apos;s
                payment links allowed our loyal customers to have more payment
                options like credit card, e-wallets, and OTC. With its
                legitimate look and seamless processing, it also made our
                business more credible and customers are less hesitant to pay.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-left text-gray-800">
                Daryll
              </p>
            </div>
            <div className="flex flex-col justify-between items-start p-8 m-16 bg-gray-100">
              <p className=" text-left xl:text-lg xl:leading-tight">
                Though we have a Shopify website for other sport products, we
                choose to sell our bikes through our sales ambassadors that will
                give a more personal touch to our customers. PayMongo&apos;s
                payment links allowed our loyal customers to have more payment
                options like credit card, e-wallets, and OTC. With its
                legitimate look and seamless processing, it also made our
                business more credible and customers are less hesitant to pay.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-left text-gray-800">
                Daryll
              </p>
            </div>
            <div className="flex flex-col justify-between items-start p-8 m-16 bg-gray-100">
              <p className=" text-left xl:text-lg xl:leading-tight">
                Though we have a Shopify website for other sport products, we
                choose to sell our bikes through our sales ambassadors that will
                give a more personal touch to our customers. PayMongo&apos;s
                payment links allowed our loyal customers to have more payment
                options like credit card, e-wallets, and OTC. With its
                legitimate look and seamless processing, it also made our
                business more credible and customers are less hesitant to pay.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-left text-gray-800">
                Daryll
              </p>
            </div>
            <div className="flex flex-col justify-between items-start p-8 m-16 bg-gray-100">
              <p className=" text-left xl:text-lg xl:leading-tight">
                Though we have a Shopify website for other sport products, we
                choose to sell our bikes through our sales ambassadors that will
                give a more personal touch to our customers. PayMongo&apos;s
                payment links allowed our loyal customers to have more payment
                options like credit card, e-wallets, and OTC. With its
                legitimate look and seamless processing, it also made our
                business more credible and customers are less hesitant to pay.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-left text-gray-800">
                Daryll
              </p>
            </div>
            <div className="flex flex-col justify-between items-start p-8 m-16 bg-gray-100">
              <p className=" text-left xl:text-lg xl:leading-tight">
                Though we have a Shopify website for other sport products, we
                choose to sell our bikes through our sales ambassadors that will
                give a more personal touch to our customers. PayMongo&apos;s
                payment links allowed our loyal customers to have more payment
                options like credit card, e-wallets, and OTC. With its
                legitimate look and seamless processing, it also made our
                business more credible and customers are less hesitant to pay.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-left text-gray-800">
                Daryll
              </p>
            </div>
            <div className="flex flex-col justify-between items-start p-8 m-16 bg-gray-100">
              <p className=" text-left xl:text-lg xl:leading-tight">
                Though we have a Shopify website for other sport products, we
                choose to sell our bikes through our sales ambassadors that will
                give a more personal touch to our customers. PayMongo&apos;s
                payment links allowed our loyal customers to have more payment
                options like credit card, e-wallets, and OTC. With its
                legitimate look and seamless processing, it also made our
                business more credible and customers are less hesitant to pay.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-left text-gray-800">
                Daryll
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
