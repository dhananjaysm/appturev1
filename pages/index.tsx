import PrimaryLayout from '#/ui/layouts/PrimaryLayout';
import HeroSection from '#/ui/universal/HeroSection';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from './page';

const PortfolioSection = dynamic(
  () => import('#/ui/universal/PortfolioSection')
);
const ServicesSection = dynamic(() => import('#/ui/universal/ServicesSection'));

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
