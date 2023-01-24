import FooterSection from '#/ui/landing/FooterSection';
import NavbarTail from '#/ui/universal/NavbarTail';
import Head from 'next/head';

export interface IContactLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const ContactLayout: React.FC<IContactLayout> = ({
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
        {/* <Form /> */}
        <FooterSection />
      </div>
    </>
  );
};

export default ContactLayout;
