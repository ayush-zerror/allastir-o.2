import SmoothScroll from "@/components/smoothScroll/SmoothScroll";
import "@/styles/globals.css";
import Wrapper from "@/utils/context/Wrapper";
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </Wrapper>
  );
}
