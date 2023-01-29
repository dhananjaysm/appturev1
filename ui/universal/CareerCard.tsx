'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Career } from './types';

const CareerCard = ({ career }: { career: Career }) => {
  const [read, setRead] = useState(false);
  return (
    <div className="flex flex-row justify-between w-full px-2 py-6 sm:px-8 rounded-sm bg-[#FEEFDD]/25">
      <div className="flex-col flex-grow space-y-4">
        <div className="mr-2 space-y-2">
          <div>
            <h1 className="text-2xl font-medium ">{career.role}</h1>

            <button
              onClick={() => {
                setRead(!read);
              }}
              className="text-sm font-medium text-black underline"
            >
              <span>
                {read ? 'Close Job Description' : 'Read Job Description'}
              </span>
            </button>
          </div>

          <div>
            {!read ? (
              <h2 className="hidden h-10 overflow-hidden text-sm md:block">
                {career.description}
              </h2>
            ) : (
              <div className="px-4 text-sm md:px-0">
                <p>{career.description}</p>
              </div>
            )}
          </div>
        </div>
        <div className="hidden w-full text-sm sm:flex sm:flex-row ">
          <div className="w-1/2 px-4 py-2 mr-2 bg-white border rounded-lg">
            <h2 className="font-medium">Location</h2>
            <p>{career.location}</p>
          </div>
          <div className="w-1/2 px-4 py-2 bg-white border rounded-lg">
            <h2 className="font-medium">Category</h2>
            <p>{career.category}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end flex-1">
        <Link href={`/careers/${career.id}`} className="">
          <span className="px-4 py-2 text-md text-gray-700 font-semibold border rounded-md bg-[#FAAA8D] hover:bg-[#FF4000] hover:text-white ">
            Apply
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;
