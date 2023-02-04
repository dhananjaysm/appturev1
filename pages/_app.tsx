import '#/styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
