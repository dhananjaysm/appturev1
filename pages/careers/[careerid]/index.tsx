import { NextPageWithLayout } from '#/pages/page';
import CareerLayout from '#/ui/layouts/CareerLayout';
import CareerForm from '#/ui/universal/CareerForm';

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
