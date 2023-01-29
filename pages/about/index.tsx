import CompanyValues from '#/ui/aboutUs/companyValues';
import AboutUsHeroSection from '#/ui/aboutUs/herosection';
import TeamCardContainer from '#/ui/aboutUs/teamCardContainer';
import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
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
