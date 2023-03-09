import Lottie from 'lottie-react';
import { founderlottie } from '../assets';
type Team = {
  title: string;
  description: string;
  image?: string;
  link?: string;
};
type Member = {
  name: string;
  designation: string;
  description?: string;
  image?: string;
  link?: string;
};

const team: Team[] = [
  {
    title: 'Vision',
    description:
      'For companies requiring resources as per skill set and experience, we allocate dedicated resources as per need and time frame. This can be used for full technology development or for working with an existing team for scalable development and execution',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Mission',
    description:
      'After a product is released, & if there are no major new changes are needed, we do offer a support contract for minor tweaks in response to user feedback, up-gradations, security updates or force-majeure events.    ',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Values',
    description:
      'We charge a fix project fee for projects having a fixed scope of work which is followed by maintenance and scaling if needed',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
];

const members: Member[] = [
  {
    name: 'Manish Sharma',
    designation: 'CEO',
    description: ' Director of Appture, having 11+ years of experience in human resource.',
    image: 'EManish.jpg',
    link: '#',
  },
  {
    name: 'Dhananjay Singh',
    designation: 'CTO',
    description: 'IIT Bombay Alumnus, +4 Years of developing tech products',
    image: 'EDhananjay.jpg',
  },
  {
    name: 'Aditya Sharma',
    designation: 'Project Lead',
    description: 'Software Developer having 4 years of experience in tech industry',
    image: 'EAdi.jpg',
    link: '#',
  },

];


export default function CompanyValues() {
  return (
    <div >
      <div className="px-6 text-left text-gray-800 md:p-12 bg-gray-50 md:pt-20">
        <div className="container flex flex-col items-center mx-auto xl:px-32 md:flex-row ">
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 ">
            {members.map((service, index) => (
              <div
                key={index}
                className="flex flex-col px-4 py-6 m-1 bg-white rounded-lg shadow-md"
              >
                {/* <div className="relative h-20"> */}
                {/* <Lottie
                    className="inset-0 w-full h-full aspect-ratio:1/1"
                    animationData={founderlottie}
                    loop={true}
                  /> */}
                {/* <Image
                  alt="team-image"
                  width={64}
                  height={64}
                  className="absolute rounded-sm top-50 left-50"
                  src={'/bubbles.png'}
                /> */}
                {/* <img src="C:/Users/Dell/OneDrive/Desktop/appturev1/public/appture_logo.png"></img> */}
                {/* </div> */}
                <div className="text-center">
                  <img
                    src={service.image}
                    className="scale-75"
                    style={{ borderRadius: '50%', }}
                  />
                </div>
                <h6 className="mb-2 font-semibold text-center text-blue-600">
                  {service.name}
                </h6>
                <p className="text-sm text-center">{service.designation}</p>
                <p className="text-sm text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 text-left text-gray-800 md:p-12 bg-gray-50 md:pt-20">
        <div className="container flex flex-col items-center mx-auto xl:px-32 md:flex-row ">
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 ">
            {team.map((service, index) => (
              <div
                key={index}
                className="flex flex-col px-4 py-6 m-1 bg-white rounded-lg shadow-md"
              >
                <div className="relative h-20">
                  <Lottie
                    className="inset-0 w-full h-full aspect-ratio:1/1"
                    animationData={founderlottie}
                    loop={true}
                  />
                  {/* <Image
                  alt="team-image"
                  width={64}
                  height={64}
                  className="absolute rounded-sm top-50 left-50"
                  src={'/bubbles.png'}
                /> */}
                </div>

                <h6 className="mb-2 font-semibold text-center text-blue-600">
                  {service.title}
                </h6>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
