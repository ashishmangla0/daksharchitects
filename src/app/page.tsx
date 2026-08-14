import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        type="application/ld+json"
        id="schema-local-business"
        strategy="beforeInteractive"
      >
        {`
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
  `}
      </Script>

      <div>index page</div>
    </>
  );
}
