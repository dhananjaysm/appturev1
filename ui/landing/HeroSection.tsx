'use client';

const HeroSection = () => {
  return (
    <div className="grid w-full grid-cols-1 px-4 font-medium lg:h-screen md:grid-cols-2 ">
      <div className="flex flex-col items-center px-4 py-4 lg:justify-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          {' '}
          Providing Technology Solutions to Businesses
        </h1>
        <h2>
          We also provide services in areas of Search Engine Optimization,
          eCommerce solution, Content management system, domain and hosting, Web
          promotion and graphic design.
        </h2>
      </div>
      <div className="flex flex-col items-center lg:justify-center w-50 h-50 ">
        <img src="lottie.png" className="" />
      </div>
    </div>
  );
};

export default HeroSection;
