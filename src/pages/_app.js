import SmoothScroll from "@/components/smoothScroll/SmoothScroll";
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'
import { ToastContainer, toast } from 'react-toastify';
import Layout from "@/components/layout/Layout";


export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroll />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}
