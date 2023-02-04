import CareerHeroSection from '#/ui/universal/CareerHeroSection';
import NavbarTail from '#/ui/universal/NavbarTail';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const FooterSection = dynamic(() => import('#/ui/universal/FooterSection'));

export interface ICareerLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const CareerLayout: React.FC<ICareerLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Appture</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <NavbarTail />
        <main className="w-full px-6 mt-32 sm:px-12">
          <CareerHeroSection />
          {children}
        </main>
        {/* <Form /> */}
        <FooterSection />
      </div>
    </>
  );
};

export default CareerLayout;
