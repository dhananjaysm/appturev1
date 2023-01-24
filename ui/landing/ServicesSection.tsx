import ServiceCard from './ServiceCard';
import webdevlottie from './webdev_lottie.json';
export type Service = {
  name: string;
  description: string;
  url: string;
  animation?: string;
  lottie?: Object;
};
const services: Service[] = [
  {
    name: 'Resource Outsourcing',
    description:
      'For any organization having a website is one of the most basic requisite. Professionally designed informative website showcasing your products and services fastly.',
    url: '#',
    animation:
      'https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg',
    lottie: webdevlottie,
  },

  {
    name: 'Software Development',
    description:
      'Every business is unique, so are the needs of every company. Give a kick start to your business by having a custom made software application.',
    url: '#',
    animation:
      'https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg',
  },
  {
    name: 'Mobile App Development',
    description:
      'Picking the right approach to mobile app development is a critical success factor that can make or break your project.',
    url: '#',
    animation:
      'https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg',
  },
  {
    name: 'Web Development',
    description:
      'Every business is unique, so are the needs of every company. Give a kick start to your business by having a custom made software application.',
    url: '#',
    animation:
      'https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg',
  },

  {
    name: 'Digital Marketing & Web Analytics',
    description:
      'Digital Marketing is all about Driving the right prospects to your website and booking engine is the central role of Digital Marketing',
    url: '#',
    animation:
      'https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg',
  },

  {
    name: 'Training',
    description:
      'Training Conducted By Appture Technology provide real time project training with code explanation and implementation.',
    url: '#',
    animation:
      'https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg',
  },
];
const ServicesSection = () => {
  return (
    <div className="w-full ">
      <div className="py-8 px-4 flex flex-col bg-[#AAD6E6]/10">
        <div className="py-8 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl">Services</h1>
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
                  animation={service.animation}
                  lottie={service.lottie}
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
