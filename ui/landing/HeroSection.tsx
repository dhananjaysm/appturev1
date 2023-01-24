'use client';

const HeroSection = () => {
  return (
    <div className="grid w-full h-screen grid-cols-1 px-4 font-medium md:grid-cols-2 ">
      <div className="flex flex-col items-center justify-center px-4 ">
        <h1 className="text-6xl md:text-7xl">
          {' '}
          Driving Digitization For Businesses
        </h1>
        <h2>
          Grow, Centralize & Get Real-Time Control of your business by building
          ERP, Websites, Android & iOS Apps
        </h2>
      </div>
      <div className="flex items-center justify-center bg w-50 h-50 ">
        <img src="lottie.png" className="object-fit" />
      </div>
    </div>
  );
};

export default HeroSection;
