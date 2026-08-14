import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
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
        </script>
      </Head>
      <div>index page</div>
    </>
  );
}
