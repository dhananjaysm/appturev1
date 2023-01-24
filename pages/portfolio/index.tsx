import PrimaryLayout from '#/ui/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Portfolio: NextPageWithLayout = () => {
  return <div>Portfolio</div>;
};

export default Portfolio;
Portfolio.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
