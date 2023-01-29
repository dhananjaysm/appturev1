import PrimaryLayout from '#/ui/layouts/PrimaryLayout';
import ServicesHeroSection from '#/ui/universal/ServicesPageComponent';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';

const TechnologyWeUse = dynamic(
  () => import('#/ui/universal/ServicesTechnology')
);

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
