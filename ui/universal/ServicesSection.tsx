import { services } from '#/lib/mockData';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <div className="w-full ">
      <div className="py-8 px-4 flex flex-col bg-[#AAD6E6]/10">
        <div className="py-8 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl from-cyan-500 to-blue-500 ">
            Services
          </h1>
        </div>
        <div className="px-6 mx-auto text-gray-500 ">
          <div className="grid gap-6 mx-auto sm:grid-cols-2 lg:w-full lg:grid-cols-3">
            {services.map((service) => {
              return (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  description={service.description}
                  url={service.url}
                  lottie={service.lottie}
                  // color={service.color}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
