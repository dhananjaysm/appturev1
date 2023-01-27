'use client';
import CareerSection from '#/ui/career/CareerSection';
import CareerLayout from '#/ui/layouts/primary/CareerLayout';
import { useEffect } from 'react';
import { NextPageWithLayout } from '../page';

const Career: NextPageWithLayout = () => {
  const fetchTodos = async () => {
    const response = await fetch('/api/admin/career');
    const data = await response.json();
    // console.log(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="px-4 mt-12 sm:px-12">
      {/* <CareerHeroSection /> */}
      <CareerSection />
    </div>
  );
};

export default Career;
Career.getLayout = (page) => {
  return <CareerLayout>{page}</CareerLayout>;
};
