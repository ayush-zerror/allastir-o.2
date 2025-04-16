import Section1 from '@/components/career/Section1'
import Section2 from '@/components/career/Section2'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import SeoHeader from '@/components/seo/SeoHeader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Contact = ({ meta }) => {

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
        <Section2 sec2Ref={sec2Ref} />
        <Footer />
      </div>
    </>
  )
}

export default Contact;

export async function getStaticProps() {
  const meta = {
    title:
      "Allastir Private Limited | Get in Touch with Allastir",
    description:
      "Reach out to Allastir for high-quality niche APIs. Contact us for inquiries, collaborations, and pharmaceutical API solutions. We’re here to assist you.",
    keywords: "Contact Allastir, Allastir support, API supplier contact, pharmaceutical inquiries, API manufacturing support, pharma contact, drug formulation help, API provider",
    author: "Allastir",
    robots: "index,follow",
  };
  return { props: { meta: meta } };
}