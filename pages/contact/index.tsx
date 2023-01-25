import FormContact from '#/ui/contact/FormContact';
import ContactLayout from '#/ui/layouts/primary/ContactLayout';
import { NextPageWithLayout } from '../page';

const Contact: NextPageWithLayout = () => {
  return (
    <div className="py-6 bg-gray-900">
      {/* <div className="mx-auto">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
      </div> */}

      <div>
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
Contact.getLayout = (page) => {
  return <ContactLayout>{page}</ContactLayout>;
};
