'use client';
import CareerLayout from '#/ui/layouts/CareerLayout';
import CareerSection from '#/ui/universal/CareerSection';
import { Career } from '#/ui/universal/types';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { NextPageWithLayout } from '../page';

const CareerPage: NextPageWithLayout = () => {
  const [careers, setCareers] = useState<Career[]>([]);

  async function getCareerData() {
    const querySnapshot = await getDocs(collection(db, 'careers'));
    let careersArray: Career[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const data = doc.data();
      const carrerObj = {
        id: data.role,
        role: data.role,
        category: data.category,
        description: data.description,
        location: data.location,
        status: data.status,
        date: data.date,
      };
      careersArray.push(carrerObj);
    });

    setCareers(careersArray);
  }

  // useEffect(() => {
  //   getCareerData();
  // }, []);
  // const fetchTodos = async () => {
  //   const response = await fetch('/api/admin/career');
  //   const data = await response.json();
  //   // console.log(data);
  // };

  useEffect(() => {
    getCareerData();
  }, []);

  return (
    <div className="px-4 mt-12 sm:px-12">
      {/* <CareerHeroSection /> */}
      <CareerSection careers={careers} />
    </div>
  );
};

export default CareerPage;
CareerPage.getLayout = (page) => {
  return <CareerLayout>{page}</CareerLayout>;
};
