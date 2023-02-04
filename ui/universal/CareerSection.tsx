'use client';
import { useFilterStore } from '#/lib/store';
import FilterCareer from './FilterCareer';
import { Career } from './types';
import dynamic from 'next/dynamic';

const CareerCard = dynamic(() => import('./CareerCard'));

// const careers: Career[] = [
//   {
//     role: 'Manager',
//     id: '123',
//     category: 'marketing',
//     description:
//       'I have 2 years of experience building APIs using Node.js and Express.js framework. I have experience designing and implementing RESTful API endpoints, handling incoming HTTP requests and responding with appropriate data or error messages. I have experience working with various types of data such as JSON, XML and have experience working with different data storage technologies like MongoDB and MySQL. I am also familiar with API authentication and authorization using JWT and OAuth. I have experience in API testing and debugging using tools like Postman and have experience with versioning and documentation of APIs using swagger. Additionally, I am familiar with concepts of API scalability and performance optimization',
//     location: 'Jaipur',
//     status: 'Active',
//     date: '2022-01-01',
//   },
//   {
//     role: 'Developer',
//     category: 'development',
//     id: '456',
//     description: 'Writes code and develops software',
//     location: 'Jaipur',
//     status: 'Inactive',
//     date: '2022-02-01',
//   },
//   {
//     role: 'Salesperson',
//     category: 'sales',
//     id: '789',
//     description: 'Generates leads and closes deals',
//     location: 'Jaipur',
//     status: 'Active',
//     date: '2022-03-01',
//   },
//   {
//     role: 'Support Engineer',
//     category: 'development',
//     id: '101',
//     description: 'Provides technical support to customers',
//     location: 'Jaipur',
//     status: 'Active',
//     date: '2022-04-01',
//   },
//   {
//     role: 'Product Manager',
//     category: 'marketing',
//     id: '112',
//     description: 'Manages the development and launch of products',
//     location: 'Jaipur',
//     status: 'Inactive',
//     date: '2022-05-01',
//   },
// ];
const CareerSection = ({ careers }: { careers: Career[] }) => {
  console.log(careers, 'careers');
  const { selectFilter, filter } = useFilterStore((s) => s);
  let filteredCareers = careers;
  if (filter.category == 'all') {
    filteredCareers = careers;
  } else {
    filteredCareers = careers.filter(
      (career) => career.category == filter.category
    );
  }
  return (
    <div className="mb-10 space-y-2">
      <div className="">
        <FilterCareer />
      </div>
      <hr />
      {filteredCareers.map((career, i) => (
        <div key={i} className="mb-2">
          <CareerCard career={career} />
        </div>
      ))}
    </div>
  );
};

export default CareerSection;
