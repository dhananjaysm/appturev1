import Lottie from 'lottie-react';
import Link from 'next/link';
import { Service } from './ServicesSection';

const ServiceCard = ({ name, description, url, lottie }: Service) => {
  return (
    <div className="px-8 transition duration-300 transform bg-white shadow-xl hover:scale-105 hover:shadow-2xl rounded-2xl sm:px-12 lg:px-8">
      <div className="flex flex-col justify-between h-full py-6 mb-6">
        <h3 className="text-xl font-semibold text-purple-900">{name}</h3>
        <p className="hidden mb-6 text-base sm:block ">{description}</p>

        <Lottie animationData={lottie} loop={true} className="w-64 h-64 " />
        <Link
          href={url}
          className="justify-start block font-medium text-purple-600"
        >
          Know more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
