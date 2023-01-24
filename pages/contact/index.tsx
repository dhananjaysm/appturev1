import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Contact: NextPageWithLayout = () => {
  return <div>Contact</div>;
};

export default Contact;
Contact.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
