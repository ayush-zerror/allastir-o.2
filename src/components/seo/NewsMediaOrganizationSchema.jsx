import React from "react";

const NewsMediaOrganizationSchema = ({
  name,
  clientLink,
  logoUrl,
  addresses, // Now an array instead of a single object
  contact,
  sameAs,
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: name, // Fixed incorrect destructuring
    url: clientLink,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    address: addresses?.map((address) => ({
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact?.telephone,
      contactType: contact?.contactType,
      areaServed: contact?.areaServed,
      availableLanguage: contact?.availableLanguage,
      hoursAvailable: {
        opens: contact?.hoursAvailable?.opens,
        closes: contact?.hoursAvailable?.closes,
      },
    },
    // sameAs: sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    ></script>
  );
};

export default NewsMediaOrganizationSchema;
