import React from 'react';
type Team = {
  name: string;
  designation: string;
  image?: string;
  link?: string;
};

const team: Team[] = [
  {
    name: 'Hritik Sharma',
    designation: 'Engineering Manager',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    name: 'Dhananjay Singh',
    designation: 'CTO',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'XYZ',
    designation: 'CXO',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    name: 'ABC',
    designation: 'HR',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'JKL',
    designation: 'Manager',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    name: 'FKL',
    designation: 'Director',
    image: 'https://via.placeholder.com/300x200',
  },
];

export default function TeamCardContainer() {
  return (
    <div className="px-6 md:p-12 bg-gray-50 text-gray-800 text-left md:pt-20">
      <div className="container mx-auto xl:px-32 flex flex-col md:flex-row items-center ">
        <div className="grid-cols-1 grid  sm:grid-cols-2 lg:grid-cols-3 gap-[4px] w-full ">
          {team.map((service, index) => (
            <div key={index} className=" m-1 p-2 flex flex-col">
              <div className='h-36'  >
                <img
                  className="w-full h-full object-cover "
                  src="https://picsum.photos/200/300"
                />
              </div>

              <h6 className="font-semibold text-blue-600 ">{service.name}</h6>
              <p className="text-10px">{service.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
