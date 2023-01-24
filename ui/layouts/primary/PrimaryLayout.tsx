import FooterSection from '#/ui/landing/FooterSection';
import NavbarTail from '#/ui/universal/NavbarTail';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
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
        <main className="w-full mt-20">{children}</main>
        <div className="m-auto" />
        <FooterSection />
      </div>
    </>
  );
};

export default PrimaryLayout;
