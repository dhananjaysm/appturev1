import ServicesHeroSection from '#/ui/components/services/services';
import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Services: NextPageWithLayout = () => {
  return (
    <div>
      <ServicesHeroSection />
    </div>
  );
};

export default Services;
Services.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
