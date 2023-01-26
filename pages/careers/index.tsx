import CareerSection from '#/ui/career/CareerSection';
import CareerLayout from '#/ui/layouts/primary/CareerLayout';
import { NextPageWithLayout } from '../page';

const Career: NextPageWithLayout = () => {
  return (
    <div className="px-6 mt-12 sm:px-12">
      {/* <CareerHeroSection /> */}
      <CareerSection />
    </div>
  );
};

export default Career;
Career.getLayout = (page) => {
  return <CareerLayout>{page}</CareerLayout>;
};
