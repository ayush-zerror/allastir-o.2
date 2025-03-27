import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Const } from '../../utils/Constant';
import WebPageSchema from "@/components/seo/WebPageSchema";
import NewsMediaOrganizationSchema from "@/components/seo/NewsMediaOrganizationSchema";
import SiteNavigationSchema from "@/components/seo/SiteNavigationSchema";

const SeoHeader = ({ meta }) => {
  
  const router = useRouter();
  const canonical = `${Const.ClientLink}/${router.asPath?.slice(1)}`;
  return (
    <Head>
      <title>{meta?.title ?? ""}</title>
      <meta name="description" content={meta?.description ?? ""} />
      <meta name="keywords" content={meta?.keywords ?? ""} />
      <meta name="author" content={meta?.author ?? "Allastir"} />
      <meta
        name="robots"
        content={
          `${meta?.robots}, max-image-preview:large` ??
          "index,follow, max-image-preview:large"
        }
      />
      <link rel="canonical" href={meta?.canonical ?? canonical} />
      {/* OG Tags */}
      {/* <meta property="fb:app_id" content="446498535209610" /> */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta?.og?.title ?? ""} />
      <meta property="og:description" content={meta?.og?.description ?? ""} />
      <meta property="og:url" content={meta?.canonical ?? canonical} />
      <meta property="og:site_name" content={"Allastir"} />
      <meta property="og:image" content={meta?.og?.image ?? ""} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Tag */}
      <meta
        name="twitter:card"
        content={meta?.twitter?.card ?? "summary_large_image"}
      />
      <meta
        name="twitter:title"
        content={meta?.twitter?.title ?? meta?.title}
      />
      <meta
        name="twitter:description"
        content={meta?.twitter?.description ?? meta?.description}
      />
      <meta name="twitter:site" content={"@Allastir"} />
      <meta name="twitter:image" content={meta?.twitter?.image ?? ""} />
      <meta name="twitter:creator" content={"@Allastir"} />
      <meta charset="UTF-8" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon.jpg"
      />
      <link rel="apple-touch-icon" href="/favicon.jpg" />
      <link
        rel="alternate"
        hreflang="en-in"
        href={meta?.canonical ?? canonical}
      />
      <WebPageSchema
        name={meta?.title ?? ""}
        description={meta?.description ?? ""}
        url={meta?.canonical ?? canonical}
      />
      <NewsMediaOrganizationSchema
        name={"Allastir"}
        clientLink={`${Const.ClientLink}/`}
        logoUrl={`${Const.ClientLink}/favicon.jpg`}
        address={[
          {
            streetAddress:
              "Plot No. 12, Shed No. 9A, Sidco Industrial Estate, Vichoor, Manali New Town, Chennai - 600103, Tamilnadu, INDIA",
            addressLocality: "Tamilnadu",
            addressRegion: "India",
            postalCode: "600103",
          },
          {
            streetAddress:
              "Plot No. 8-7, 8-8, 8-17, 8-18, APIIC Industrial Park, Attivaram Village, Ozili Mandal, Tirupati District, Andhra Pradesh -524 421",
            addressLocality: "Andhra Pradesh",
            addressRegion: "India",
            postalCode: "524421",
          }
        ]}
        contact={{
          telephone: "+9198400 51621",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: "English",
          hoursAvailable: {
            opens: "10:00",
            closes: "18:00",
          },
        }}
        // sameAs={[
        //   "https://www.instagram.com/Allastir/",
        //   "https://www.behance.net/Allastir",
        //   "https://www.linkedin.com/company/Allastir/",
        // ]}
      />
      <SiteNavigationSchema />
    </Head>
  );
};

export default SeoHeader;
