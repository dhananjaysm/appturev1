import founderlottie from '#/ui/landing/lottie_files/founder-blob.json';
import Lottie from 'lottie-react';
type Team = {
  title: string;
  description: string;
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

export default function CompanyValues() {
  return (
    <div className="px-6 text-left text-gray-800 md:p-12 bg-gray-50 md:pt-20">
      <div className="container flex flex-col items-center mx-auto xl:px-32 md:flex-row ">
        <div className="grid-cols-1 grid  sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full ">
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

              <h6 className="font-semibold text-blue-600 text-center mb-2">
                {service.title}
              </h6>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
