import SmoothScroll from "@/components/smoothScroll/SmoothScroll";
import "@/styles/globals.css";
import Wrapper from "@/utils/context/Wrapper";
import 'remixicon/fonts/remixicon.css'
import { ToastContainer, toast } from 'react-toastify';


export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroll />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <ToastContainer />
    </>
  );
}
