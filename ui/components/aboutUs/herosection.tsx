'use client';
import Lottie from 'lottie-react';
import hr_lottie from '../../landing/lottie_files/hr_lottie.json';

const AboutUsHeroSection = () => {
  return (
    <div className="px-6 md:px-12 md:pb-4 md:pt-10 bg-gray-50 text-gray-800 text-left">
      <div className="container mx-auto xl:px-32 flex flex-col md:flex-row items-center ">
        <div className=" w-full md:w-[65%]">
          <div className="mt-12 lg:mt-0 w-full lg:w-12/12">
            <h6 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight mb-2">
              <span className="text-blue-600">
                Meet our team of creators,designers and world class problem
                solvers
              </span>
            </h6>
            <h6 className="text-1xl md:text-1xl lg:text-1xl  tracking-tight mb-16 text-gray-600">
              Appture Tech Solutions is a technical consultancy and development
              firm that believes in increasing transparency and efficiency using
              cloud-based platforms
            </h6>
          </div>
        </div>
        <div className="w-full md:w-[30%]  flex justify-center">
          <Lottie animationData={hr_lottie} loop={true} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
