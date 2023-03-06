import PrimaryLayout from '#/ui/layouts/PrimaryLayout';
import AboutUsHeroSection from '#/ui/universal/AboutHeroSection';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';

const CompanyValues = dynamic(
  () => import('#/ui/universal/AboutCompanyValues')
);
const TeamCardContainer = dynamic(
  () => import('#/ui/universal/AboutTeamCard')
);

const About: NextPageWithLayout = () => {
  return (
    <div>
      <AboutUsHeroSection />
      {/* <TeamCardContainer /> */}
      <CompanyValues />
    </div>
  );
};

export default About;
About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
