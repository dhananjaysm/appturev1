import { services } from '#/lib/mockData';
import Lottie from 'lottie-react';

export default function ServicesHeroSection() {
  return (
    <div className="px-6 text-left text-gray-800 md:p-12 bg-gray-50 bg-red md:pt-36">
      <div className="container mx-auto xl:px-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="w-full mt-12 lg:mt-0 lg:w-12/12">
            <h6 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl lg:text-3xl">
              <span className="text-blue-600">WHAT WE CAN DO FOR YOU</span>
            </h6>
            <h6 className="mb-16 text-2xl font-bold tracking-tight text-gray-600 md:text-4xl lg:text-5xl">
              Services we can help you with
            </h6>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 pb-8 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid items-center p-4 bg-white rounded-lg shadow-md grid-rows-1/3 "
            >
              <h6 className="items-center mx-auto font-semibold text-blue-900 text-start ">
                {service.name}
              </h6>
              <div className="">
                {/* <p className="text-10px">{service.description}</p> */}
                <Lottie animationData={service.lottie} loop={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
