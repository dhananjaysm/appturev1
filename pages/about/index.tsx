import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';
import dynamic from 'next/dynamic';

const CompanyValues = dynamic(
  () => import('#/ui/components/aboutUs/companyValues')
);
const AboutUsHeroSection = dynamic(
  () => import('#/ui/components/aboutUs/herosection')
);
const TeamCardContainer = dynamic(
  () => import('#/ui/components/aboutUs/teamCardContainer')
);

const About: NextPageWithLayout = () => {
  return (
    <div>
      <AboutUsHeroSection />
      <TeamCardContainer />
      <CompanyValues />
    </div>
  );
};

export default About;
About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
