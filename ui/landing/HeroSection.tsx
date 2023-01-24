'use client';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import hr_lottie from './hr_lottie.json';
const HeroSection = () => {
  const [scrollDir, setScrollDir] = useState('scrolling down');

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    console.log(scrollDir);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);
  return (
    <div className="grid w-full grid-cols-1 px-4 font-medium lg:h-screen md:grid-cols-2 ">
      <div className="flex flex-col px-4 py-4 lg:justify-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {' '}
          Providing <span className="text-[#2B81BA]">
            Technology Solutions
          </span>{' '}
          to Businesses
        </h1>
        <h2 className="mt-2 mb-2">
          We provide services in areas of SEO, e-Commerce, CMS, Domain and
          Hosting, Web Promotion and Graphic Design.
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
        <Lottie animationData={hr_lottie} loop={true} className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
