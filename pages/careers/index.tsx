import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Career: NextPageWithLayout = () => {
  return <div>Career</div>;
};

export default Career;
Career.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
