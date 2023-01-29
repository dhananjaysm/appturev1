import { NextPageWithLayout } from '#/pages/page';
import CareerForm from '#/ui/career/components/CareerForm';
import CareerLayout from '#/ui/layouts/CareerLayout';

const CareerPage: NextPageWithLayout = () => {
  return (
    <div>
      <CareerForm />
    </div>
  );
};

export default CareerPage;
CareerPage.getLayout = (page) => {
  return <CareerLayout>{page}</CareerLayout>;
};
