import PrimaryLayout from '#/ui/layouts/PrimaryLayout';
import CompanyValues from '#/ui/universal/AboutCompanyValues';
import AboutUsHeroSection from '#/ui/universal/AboutHeroSection';
import TeamCardContainer from '#/ui/universal/AboutTeamCard';
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
