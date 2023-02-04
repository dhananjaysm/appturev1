import { NextPageWithLayout } from '#/pages/page';
import CareerLayout from '#/ui/layouts/CareerLayout';
import CareerForm from '#/ui/universal/CareerForm';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CareerPage: NextPageWithLayout = () => {
  const [jobRole, setJobRole] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    let variable: string[] | undefined | string = router.query.careerid;

    const result =
      (Array.isArray(variable) ? variable.join('') : variable) || '';

    // Now `result` is guaranteed to be a string

    setJobRole(result);
  }, []);

  return (
    <div>
      <CareerForm jobRole={jobRole} />
    </div>
  );
};

export default CareerPage;
CareerPage.getLayout = (page) => {
  return <CareerLayout>{page}</CareerLayout>;
};
