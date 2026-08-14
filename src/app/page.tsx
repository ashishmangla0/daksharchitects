import Head from "next/head";
import Script from "next/script";


 const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Daksh Architects",
    "image": "https://daksharchitects.com/logo.png",
    "description": "Modern Sustainable Architects in Delhi/NCR. Custom eco-friendly homes & commercial spaces.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "areaServed": ["Delhi", "NCR", "Gurugram", "Noida"],
    "telephone": "+91-XXXXXXXXXX",
    "url": "https://daksharchitects.com",
    "priceRange": "$$",
    "knowsAbout": [
      "Sustainable Architecture",
      "Modern Design",
      "Residential Design",
      "Commercial Architecture"
    ]
  };

export default function Home() {
  return (
    <>
      <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          strategy="beforeInteractive"
        />

      <div>index page</div>
    </>
  );
}
