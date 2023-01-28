import ServicesHeroSection from '#/ui/components/services/ServicesPageComponent';
import TechnologyWeUse from '#/ui/components/services/TechnologyWeUse';
import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
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
