import WorldMapWithMarkers from '@/components/about/MapSection'
import Section1 from '@/components/about/Section1'
import Section3 from '@/components/about/Section3'
import Section4 from '@/components/about/Section4'
import Section5 from '@/components/about/Section5'
import Section6 from '@/components/about/Section6'
import Footer from '@/components/footer/Footer'
import Section2 from '@/components/home/Section2'
import Navbar from '@/components/navbar/Navbar'
import SeoHeader from '@/components/seo/SeoHeader'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const About = ({ meta , bluetxt , normaltxt }) => {
 
  const navRef = useRef(null)
  const sec1Ref = useRef(null)
  const sec2Ref = useRef(null)

  useEffect(() => {
    if (!sec1Ref.current || !sec2Ref.current || !navRef.current) return;
  
    if (window.innerWidth < 600) {
      gsap.set(sec1Ref.current, { opacity: 0 });
      gsap.set(sec1Ref.current.querySelector("h2"), { y: "100%" });
      gsap.set(sec2Ref.current, { y: "80", opacity: 0 });
      gsap.set(navRef.current, { opacity: 0 });
  
      var tl = gsap.timeline();
      tl
        .to(sec1Ref.current, { opacity: 1, duration: 0.4, ease: "power4.in" }, "a")
        .to(navRef.current, { opacity: 1, duration: 0.4 }, "a")
        .to(sec1Ref.current.querySelector("h2"), { y: 0, duration: 0.3 }, "b")
        .to(sec2Ref.current, { y: 0, opacity: 1, duration: 0.3 }, "b");
    } else {
      gsap.set(sec1Ref.current, { opacity: 0 });
      gsap.set(sec1Ref.current.querySelector("h2"), { y: "100%" });
      gsap.set(sec2Ref.current, { y: "80", opacity: 0 });
  
      var tl = gsap.timeline();
      tl.to(sec1Ref.current, { opacity: 1, duration: 0.2 })
        .to(sec1Ref.current.querySelector("h2"), { y: 0, duration: 0.4 }, "a")
        .to(sec2Ref.current, { y: 0, opacity: 1, duration: 0.2, delay: 0.2 }, "a");
  
      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <>
      <SeoHeader meta={meta} />
      <div className='w-full relative overflow-hidden'>
        <Navbar navRef={navRef} />
        <Section1 sec1Ref={sec1Ref} />
        <Section2 sec2Ref={sec2Ref} bluetxt={bluetxt} normaltxt={normaltxt} />
        {/* <Section3 /> */}
        <Section5 />
        <WorldMapWithMarkers/>
        <Section4 />
        {/* <Section6 /> */}
        <Footer />
      </div>
    </>
  )
}

export default About;

export async function getStaticProps() {
  const meta = {
    title:
      "Allastir Private Limited | Innovating Niche APIs Since 2010",
    description:
      "Learn about Allastir, a leading manufacturer of high-quality niche APIs. Backed by strong R&D, we prioritize innovation, quality, and customer satisfaction.",
    keywords: "Allastir, about Allastir, pharmaceutical company, niche APIs, API manufacturing, pharma R&D, drug formulation, high-quality APIs, API solutions, pharma innovation",
    author: "Allastir",
    robots: "index,follow",
  };

  const bluetxt = "Allastir is a leading pharmaceutical innovator specializing in Active Pharmaceutical Ingredients (APIs), formulations, and dietary supplements."
  const normaltxt = "With cutting-edge R&D, world-class manufacturing, and a commitment to quality, we deliver superior healthcare solutions globally. Our expertise, regulatory excellence, and industry partnerships drive advancements in medicine and patient care."

  return { props: { meta , bluetxt , normaltxt} };
}