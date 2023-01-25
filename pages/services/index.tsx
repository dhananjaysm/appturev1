import ServicesHeroSection from '#/Components/Services/services';
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
