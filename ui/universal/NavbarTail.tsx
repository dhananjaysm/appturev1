'use client';

import { useScrollStore } from '#/lib/store';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Lottie from 'lottie-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { arrow_arc } from '../assets';
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
];

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function (event: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(event);
    }, wait);
  };
};
const NavbarTail = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrolling, scroll } = useScrollStore((s) => s);
  let prevScrollTop = 0;

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (prevScrollTop < scrollTop) {
      scrolling(true);
    } else {
      scrolling(false);
    }
    prevScrollTop = scrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleStopScrolling);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleStopScrolling);
    };
  }, []);

  const handleStopScrolling = debounce(() => {
    scrolling(false);
  }, 100);
  return (
    <div
      className={clsx(
        'fixed top-0 z-10 flex items-center justify-between w-full h-20 px-6 py-4  lg:px-8 ',
        {
          'bg-white border-b': !scroll,
          'bg-gradient-to-b from-gray-800/40 to-transparent ': scroll,
        }
      )}

      // className={clsx(
      //   'fixed top-0 z-10 mt-4 rounded-md flex items-center justify-between w-5/6 h-20 px-6 py-4 bg-white  lg:px-8 ',
      //   {
      //     'border-2  shadow-md': scroll,
      //   }
      // )}
    >
      <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
        <Link href="/" className="-m-1.5 p-1.5">
          {/* {scroll ? (
            <img src="appture-logo-only1.png" className="w-10 " />
          ) : (
            <img src="appture-png-min1.png" className=" w-44" />
          )} */}
          <div className={clsx('flex flex-row w-54', { 'w-12': scroll })}>
            <Image
              alt="small-logo"
              src={'/appture-logo-only.png'}
              width={40}
              height={20}
            />
            {/* <BackgroundImage>
              <h1 className="text-5xl text-white text-opacity-75">A</h1>
            </BackgroundImage> */}

            <Image
              alt="big-logo"
              src={'/appture-name.png'}
              width={144}
              height={20}
              className={clsx('block ', { hidden: scroll })}
            />
          </div>
        </Link>
      </div>
      <div className={clsx('flex lg:hidden ', { hidden: scroll })}>
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:min-w-0 lg:justify-center lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'font-semibold text-gray-900 transition duration-500 group ',
              { hidden: scroll }
            )}
          >
            {item.name}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600"></span>
          </Link>
        ))}
      </div>
      {pathname?.split('/').slice(1).includes('contact') ? null : (
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <Lottie
            animationData={arrow_arc}
            loop={true}
            className="w-10"
            size={20}
          />

          <Link
            href="/contact"
            className="inline-block group from-[#2B81BA] via-blue-500 to-purple-500 bg-[length:400%_400%]  bg-gradient-to-r animate-border px-6 py-3  leading-6 text-gray-900 rounded-lg shadow-sm  ring-1 ring-gray-900/10 "
          >
            <span className="font-medium text-white text-md">Contact</span>
          </Link>
        </div>
      )}

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          // focus="true"
          className="fixed inset-0 z-10 px-6 py-6 overflow-y-auto bg-white lg:hidden"
        >
          <div className="flex items-center justify-between h-9">
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                {/* <span className="text-3xl font-bold">Appture</span> */}
                <Image
                  alt="menu-logo-image"
                  src={'/appture-png-min.png'}
                  width={144}
                  height={20}
                />

                {/* <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
              </a>
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="inline-block group w-full text-center from-[#2B81BA] via-blue-500 to-purple-500 bg-[length:400%_400%]  bg-gradient-to-r animate-border px-6 py-3  leading-6 text-gray-900 rounded-lg shadow-sm  ring-1 ring-gray-900/10 "
                >
                  <span className="text-lg font-medium text-white">
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default NavbarTail;
