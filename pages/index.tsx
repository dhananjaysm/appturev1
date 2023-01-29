import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import dynamic from 'next/dynamic';

const PortfolioSection = dynamic(() => import('#/ui/landing/PortfolioSection'));
const ServicesSection = dynamic(() => import('#/ui/landing/ServicesSection'));
const HeroSection = dynamic(() => import('#/ui/landing/HeroSection'));

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-white isolate">
      <main>
        <div className="flex justify-center sm:p-6">
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
