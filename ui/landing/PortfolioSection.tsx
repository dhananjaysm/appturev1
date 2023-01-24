import clsx from 'clsx';
type Client = {
  name?: string;
  image: string;
};
const clients: Client[] = [
  // {
  //   image: '/clients/customer-1.png',
  // },
  // {
  //   image: '/clients/customer-2.png',
  // },
  // {
  //   image: '/clients/customer-3.png',
  // },
  // {
  //   image: '/clients/customer-4.png',
  // },
  // {
  //   image: '/clients/customer-5.png',
  // },
  // {
  //   image: '/clients/customer-6.png',
  // },
  // {
  //   image: '/clients/customer-7.png',
  // },
  // {
  //   image: '/clients/customer-8.png',
  // },
  { image: '/clients/mahindra.png' },
  { image: '/clients/mediassist.png' },
  { image: '/clients/girnarsoft.png' },
];
const PortfolioSection = () => {
  return (
    <div className="flex flex-col py-8">
      <h1 className="mx-auto text-4xl font-bold md:text-6xl">Top Clients</h1>
      <div className="grid grid-cols-1 p-6 sm:grid-cols-2 md:grid-cols-3 ">
        {clients.map((client, index) => {
          return (
            <div key={index} className="p-6 ">
              <img
                src={client.image}
                className={clsx(
                  'grayscale hover:grayscale-0 transition-all duration-300'
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioSection;
