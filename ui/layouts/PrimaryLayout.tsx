import FooterSection from '#/ui/universal/FooterSection';
import NavbarTail from '#/ui/universal/NavbarTail';
import Head from 'next/head';
import Form from '../universal/Form';

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
        {/* <MyComponent /> */}

        <main className="w-full mt-16">{children}</main>
        <div className="m-auto" />
        <Form />
        <FooterSection />
      </div>
    </>
  );
};

export default PrimaryLayout;
