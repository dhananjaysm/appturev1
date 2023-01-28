'use client';
import Lottie from 'lottie-react';
import teamlottie from '../../landing/lottie_files/team.json';

const AboutUsHeroSection = () => {
  return (
    <div className="px-6 text-left text-gray-800 md:px-12 md:pb-4 md:pt-10 bg-gray-50">
      <div className="container flex flex-col items-center mx-auto xl:px-32 md:flex-row ">
        <div className=" w-full md:w-[65%]">
          <div className="w-full mt-12 lg:mt-0 lg:w-12/12">
            <h6 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl lg:text-3xl">
              <span className="text-blue-600">
                Meet our team of creators,designers and world class problem
                solvers
              </span>
            </h6>
            <h6 className="mb-16 tracking-tight text-gray-600 text-1xl md:text-1xl lg:text-1xl">
              Appture Tech Solutions is a technical consultancy and development
              firm that believes in increasing transparency and efficiency using
              cloud-based platforms
            </h6>
          </div>
        </div>
        <div className="w-full md:w-[30%]  flex justify-center">
          <Lottie animationData={teamlottie} loop={true} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
