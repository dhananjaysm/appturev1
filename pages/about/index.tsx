import CompanyValues from '#/ui/components/aboutUs/companyValues';
import AboutUsHeroSection from '#/ui/components/aboutUs/herosection';
import TeamCardContainer from '#/ui/components/aboutUs/teamCardContainer';
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
