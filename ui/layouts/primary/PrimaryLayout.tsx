import Navbar from '#/ui/landing/navbar';
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
        <div className="width70">
          <Navbar />
        </div>

        <main className="w-full px-5">{children}</main>
        <div className="m-auto" />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PrimaryLayout;
