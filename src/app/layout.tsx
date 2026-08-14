import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Script from "next/script";

const interSans = Inter({
  variable: "--font-inter",
    weight: ['300','400', '500', '600',  '800', '900'],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Modern Sustainable Architects | Daksh Architects | Delhi/NCR",
  description: "Transform your vision into reality. We design eco-friendly, modern homes and commercial spaces. Certified architects with award-winning portfolio. Schedule your free design consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interSans.variable}>
      <body>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
