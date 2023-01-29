import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';
import dynamic from 'next/dynamic';

const ServicesHeroSection = dynamic(
  () => import('#/ui/components/services/ServicesPageComponent')
);
const TechnologyWeUse = dynamic(
  () => import('#/ui/components/services/TechnologyWeUse')
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
