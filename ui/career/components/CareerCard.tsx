'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { Career } from '../CareerSection';

const CareerCard = ({ career }: { career: Career }) => {
  const [read, setRead] = useState(false);
  return (
    <div className="flex flex-row justify-between w-full px-2 py-6 sm:px-8 rounded-sm bg-[#FEEFDD]/25">
      <div className="flex-col flex-grow space-y-4">
        <div className="mr-2 space-y-2">
          <h1 className="text-2xl font-medium ">{career.role}</h1>
          <div
            className={clsx('flex ', {
              'flex-col': read,
              'flex-row': !read,
            })}
          >
            {!read ? (
              <h2 className="hidden truncate md:block">
                {career.description.substring(0, 25)} ...
              </h2>
            ) : (
              <div className="px-4">
                <p>{career.description}</p>
              </div>
            )}
            <button
              onClick={() => {
                setRead(!read);
              }}
              className="mx-2 font-medium text-black underline"
            >
              <span>
                {read ? 'Close Job Description' : 'Read Job Description'}
              </span>
            </button>
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
          <span className="px-4 py-2 text-md text-gray-700 font-medium border rounded-md hover:bg-[#FAAA8D] hover:text-white ">
            Apply
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;
