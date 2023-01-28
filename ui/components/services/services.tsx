import digitallottie from '#/ui/landing/lottie_files/digital_market.json';
import hrlottie2 from '#/ui/landing/lottie_files/hr_lottie2.json';
import mobilelottie from '#/ui/landing/lottie_files/mobile_dev.json';
import softwarelottie from '#/ui/landing/lottie_files/software_dev.json';
import training from '#/ui/landing/lottie_files/training.json';
import webdevlottie from '#/ui/landing/lottie_files/webdev_lottie.json';
import Lottie from 'lottie-react';
type Service = {
  name: string;
  description: string;
  lottie?: Object;
  url?: string;
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

export default function ServicesHeroSection() {
  return (
    <div className="px-6 text-left text-gray-800 md:p-12 md:mb-4 bg-gray-50 bg-red md:pt-36">
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
        <div className="grid w-full grid-cols-2 gap-2 mb-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md "
            >
              <h6 className="mx-auto font-semibold text-left text-blue-900">
                {service.name}
              </h6>
              {/* <p className="text-10px">{service.description}</p> */}
              <Lottie animationData={service.lottie} loop={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
