import React from 'react';
type Service = {
  title: string;
  description: string;
  image?: string;
  link?: string;
};

const services: Service[] = [
  {
    title: 'Service 1 Title',
    description: 'Service 1 short description',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Service 2 Title',
    description: 'Service 2 short description',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Service 1 Title',
    description: 'Service 1 short description',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Service 2 Title',
    description: 'Service 2 short description',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Service 1 Title',
    description: 'Service 1 short description',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Service 2 Title',
    description: 'Service 2 short description',
    image: 'https://via.placeholder.com/300x200',
  },
];

export default function ServicesHeroSection() {
  return (
    <div className="px-6 md:p-12 bg-gray-50 text-gray-800 text-left bg-red md:pt-36">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="mt-12 lg:mt-0 w-full lg:w-12/12">
            <h6 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight mb-2">
              <span className="text-blue-600">WHAT WE CAN DO FOR YOU</span>
            </h6>
            <h6 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-16 text-gray-600">
              Services we can help you with
            </h6>
          </div>
        </div>
        <div className="grid-cols-2 grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-1 w-full   ">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-white m-1 rounded-lg shadow-md p-2 flex flex-col"
            >
              <h6 className="font-semibold text-purple-900 mx-auto">
                {service.title}
              </h6>
              <p className="text-10px">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
