import React from 'react';

export default function ServicesHeroSection() {
  const title = 'Hello';
  const subtitle = 'Nicee';
  const services = [
    {
      category: 'Service 1',
      title: 'Service 1 Title',
      description: 'Service 1 short description',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      category: 'Service 2',
      title: 'Service 2 Title',
      description: 'Service 2 short description',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      category: 'Service 1',
      title: 'Service 1 Title',
      description: 'Service 1 short description',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      category: 'Service 2',
      title: 'Service 2 Title',
      description: 'Service 2 short description',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      category: 'Service 1',
      title: 'Service 1 Title',
      description: 'Service 1 short description',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      category: 'Service 2',
      title: 'Service 2 Title',
      description: 'Service 2 short description',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-left lg:text-left bg-red pt-36">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex align-left">
          <div className="mt-12 lg:mt-0 w-full lg:w-12/12 text-left">
            <h6 className="text-4xl md:text-3xl xl:text-3xl font-bold tracking-tight mb-2">
              <span className="text-blue-600">WHAT WE CAN DO FOR YOU</span>
            </h6>
            <h6 className="text-4xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-16 text-gray-600">
              Services we can help you with
            </h6>
          </div>
        </div>
        <div className="flex w-full justify-between items-center flex-wrap">
          {services.map((service) => (
            <div
              className="w-140px bg-white m-4 rounded-md shadow-md p-4 flex flex-col items-center justify-center"
              // when I am removing style, I am not getting expected result
              style={{
                width: '140px',
                background: 'white',
                margin: '4px',
                borderRadius: '8px',
                boxShadow: '0 0 0 rgba(0, 0, 0, 0.2)',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h6 className="font-semibold text-purple-900">{service.title}</h6>
              <p className="text-10px">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
