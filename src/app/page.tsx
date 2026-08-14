import Script from "next/script";

export default function Home() {
  return (
    <>
     <Script id="show-banner" type="application/ld+json">
  {`
    "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Company Name]",
  "image": "[Logo URL]",
  "description": "[Your company mission]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Your Address]",
    "addressLocality": "[City]",
    "postalCode": "[ZIP]"
  },
  "telephone": "[Your Phone]",
  "url": "[Your Website]",
  "priceRange": "$$"
    
  `}
</Script>
    <div>
      index page
    </div>
    </>
    
  );
}
