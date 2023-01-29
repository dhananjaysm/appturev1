import TechnologyWeUse from '#/ui/components/services/ServicesTechnology';
import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import ServicesHeroSection from '#/ui/universal/ServicesPageComponent';
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
