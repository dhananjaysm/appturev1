import HeroSection from '#/ui/landing/HeroSection';
import PortfolioSection from '#/ui/landing/PortfolioSection';
import ServicesSection from '#/ui/landing/ServicesSection';
import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-white isolate">
      <main>
        <div className="flex justify-center p-6">
          <HeroSection />
        </div>
        <div>
          <ServicesSection />
        </div>
        <div>
          <PortfolioSection />
        </div>
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
