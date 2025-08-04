import Section1 from '@/components/contact/Section1'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import SeoHeader from '@/components/seo/SeoHeader'
import React from 'react'

const Contact = ({meta}) => {
  return (
    <>
    <SeoHeader meta={meta}/>
    <div className='w-full relative overflow-hidden'>
        {/* <Navbar/> */}
        <Section1/>
        {/* <Footer/> */}
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