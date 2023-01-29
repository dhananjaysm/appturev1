import PrimaryLayout from '#/ui/layouts/PrimaryLayout';
import ServicesHeroSection from '#/ui/universal/ServicesPageComponent';
import TechnologyWeUse from '#/ui/universal/ServicesTechnology';
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
