import digitallottie from './lottie_files/digital_market.json';
import hrlottie2 from './lottie_files/hr_lottie2.json';
import mobilelottie from './lottie_files/mobile_dev.json';
import softwarelottie from './lottie_files/software_dev.json';
import training from './lottie_files/training.json';
import webdevlottie from './lottie_files/webdev_lottie.json';
import ServiceCard from './ServiceCard';
export type Service = {
  name: string;
  description: string;
  url: string;
  lottie?: Object;
};
const services: Service[] = [
  {
    name: 'Resource Outsourcing',
    description:
      'We provide access to a wide range of specialized skills and expertise without the need for long-term hires. By outsourcing these resources, companies can streamline their operations and achieve greater efficiency and success in their tech endeavors',
    url: '#',
    lottie: hrlottie2,
  },

  {
    name: 'Software Development',
    description:
      'Every business is unique, so are the needs of every company. Give a kick start to your business by having a custom made software application.',
    url: '#',

    lottie: softwarelottie,
  },
  {
    name: 'Mobile App Development',
    description:
      'Picking the right approach to mobile app development is a critical success factor that can make or break your project.',
    url: '#',

    lottie: mobilelottie,
  },
  {
    name: 'Web Development',
    description:
      'Every business is unique, so are the needs of every company. Give a kick start to your business by having a custom made software application.',
    url: '#',
    lottie: webdevlottie,
  },

  {
    name: 'Digital Marketing & Web Analytics',
    description:
      'Digital Marketing is all about Driving the right prospects to your website and booking engine is the central role of Digital Marketing',
    url: '#',
    lottie: digitallottie,
  },

  {
    name: 'Training',
    description:
      'Training Conducted By Appture Technology provide real time project training with code explanation and implementation.',
    url: '#',
    lottie: training,
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
