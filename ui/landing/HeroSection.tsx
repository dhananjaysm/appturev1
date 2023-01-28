'use client';
import Lottie from 'lottie-react';
import Link from 'next/link';
import hr_lottie from './lottie_files/hr_lottie.json';
const HeroSection = () => {
  return (
    <div className="grid w-full grid-cols-1 px-4 font-medium lg:h-screen md:grid-cols-2 ">
      <div className="flex flex-col px-4 py-4 lg:justify-center ">
        <h1 className="mb-4 text-2xl tracking-wide sm:text-4xl md:text-5xl lg:text-7xl">
          {' '}
          <span className="text-[#2B81BA]">Empowering </span>your company with
          top-notch tech resources
        </h1>
        <h2 className="mt-2 mb-2 tracking-wide ">
          We provide expert resources, software development, mobile development,
          web development, digital marketing and training to help your business
          succeed in today's digital landscape.
        </h2>
        <div className="block mx-auto lg:hidden">
          <Link
            href="/contact"
            className="inline-block group from-[#2B81BA] via-blue-500 to-purple-500 bg-[length:400%_400%]  bg-gradient-to-r animate-border px-6 py-3  leading-6 text-gray-900 rounded-lg shadow-sm  ring-1 ring-gray-900/10 "
          >
            <span className="font-medium text-white text-md">Contact</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center lg:justify-center ">
        {/* <img src="lottie.png" className="" /> */}
        <Lottie
          animationData={hr_lottie}
          loop={true}
          className="w-full h-full aspect-ratio:1/1"
        />
      </div>
    </div>
  );
};

export default HeroSection;
