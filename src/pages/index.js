import Footer from '@/components/footer/Footer'
import Popup from '@/components/home/Popup'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import Section5 from '@/components/home/Section5'
import Section6 from '@/components/home/Section6'
import Navbar from '@/components/navbar/Navbar'
import SeoHeader from '@/components/seo/SeoHeader'
import React, { useRef } from 'react'

const Home = ({meta, bluetxt, normaltxt }) => {
  const navRef = useRef(null)
  const popup = useRef(null)
  const bell = useRef(null)
  return (
   <>
   <SeoHeader meta={meta}/>
    <div className='relative overflow-hidden'>
      <Navbar navRef={navRef} />
      <Popup popup={popup} bell={bell}/>
      <Section1 navRef={navRef} popup={popup} bell={bell} />
      <Section2 bluetxt={bluetxt} normaltxt={normaltxt} />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
   </>
  )
}

export default Home;

export async function getStaticProps() {
  const meta = {
    title: "Allastir Private Limited | High-Quality Niche APIs",
    description:
      "Allastir Private Limited specializes in high-quality niche APIs for the pharmaceutical industry. Backed by strong R&D, we ensure innovation, precision, and reliability.",
    keywords:
      "Niche APIs, pharmaceutical APIs, API manufacturing, high-quality APIs, pharmaceutical ingredients, research-based APIs, custom API solutions, API formulations, pharmaceutical R&D, drug formulation APIs",
    author: "Allastir",
    robots: "index,follow",
  };

  const bluetxt =
    "Allastir is a globally recognized leader in pharmaceutical innovation, driving advancements in Active Pharmaceutical Ingredients (APIs), pharmaceutical formulations, and dietary supplements.";
  const normaltxt =
    "With world-class manufacturing facilities, state-of-the-art research, and a team of industry experts, we are committed to transforming healthcare through cutting-edge science, quality, and excellence. Our unwavering dedication to regulatory compliance and breakthrough solutions ensures that we consistently deliver superior healthcare products to markets worldwide.";

  return { props: { meta, bluetxt, normaltxt } };
};
