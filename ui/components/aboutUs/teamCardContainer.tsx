import founderlottie from '#/ui/landing/lottie_files/founder-blob.json';
import Lottie from 'lottie-react';
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
    <div className="px-6 text-left text-gray-800 md:p-12 bg-gray-50 md:pt-20">
      <div className="container flex flex-col items-center mx-auto xl:px-32 md:flex-row ">
        <div className="grid-cols-1 grid  sm:grid-cols-2 lg:grid-cols-3 gap-[4px] w-full ">
          {team.map((service, index) => (
            <div key={index} className="flex flex-col p-2 m-1 ">
              <div className="relative h-64">
                <Lottie
                  className="absolute inset-0"
                  animationData={founderlottie}
                  loop={true}
                  height="100%"
                  width="100%"
                />
                {/* <Image
                  alt="team-image"
                  width={64}
                  height={64}
                  className="absolute rounded-sm top-50 left-50"
                  src={'/bubbles.png'}
                /> */}
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
