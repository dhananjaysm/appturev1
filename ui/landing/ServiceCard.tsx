import Lottie from 'lottie-react';
import { Service } from './ServicesSection';

const ServiceCard = ({
  name,
  description,
  url,
  animation,
  lottie,
}: Service) => {
  return (
    <div className="px-8 py-12 bg-white shadow-xl rounded-2xl sm:px-12 lg:px-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-purple-900">{name}</h3>
        <p className="mb-6">{description}</p>
        <a href={url} className="block font-medium text-purple-600">
          Know more
        </a>
      </div>
      {/* <img
        src={animation}
        className="w-2/3 ml-auto -mb-12"
        alt="illustration"
        loading="lazy"
        width="900"
        height="600"
      /> */}
      <Lottie animationData={lottie} loop={true} />
    </div>
  );
};

export default ServiceCard;
