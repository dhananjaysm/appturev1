import AboutUsHeroSection from '#/ui/components/aboutUs/AboutHeroSection';
import TeamCardContainer from '#/ui/components/aboutUs/AboutTeamCard';
import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import CompanyValues from '#/ui/universal/AboutCompanyValues';
import { NextPageWithLayout } from '../page';

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
