import Lottie from 'lottie-react';
import { Service } from './ServicesSection';

const ServiceCard = ({ name, description, url, lottie }: Service) => {
  return (
    <div className="px-8 py-12 bg-white shadow-xl rounded-2xl sm:px-12 lg:px-8">
      <div className="mb-6 space-y-2">
        <h3 className="text-2xl font-semibold text-purple-900">{name}</h3>
        <p className="mb-6">{description}</p>
        <a href={url} className="block font-medium text-purple-600">
          Know more
        </a>
      </div>
      <Lottie animationData={lottie} loop={true} className="w-full h-1/2" />
    </div>
  );
};

export default ServiceCard;
