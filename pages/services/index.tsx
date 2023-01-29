import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import ServicesHeroSection from '#/ui/services/ServicesPageComponent';
import TechnologyWeUse from '#/ui/services/TechnologyWeUse';
import { NextPageWithLayout } from '../page';

const Services: NextPageWithLayout = () => {
  return (
    <div>
      <ServicesHeroSection />
      <TechnologyWeUse />
    </div>
  );
};

export default Services;
Services.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
