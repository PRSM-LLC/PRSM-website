import Head from "next/head";

import Hero from "@/components/hero";
import { Footer } from "@/components/footer";
import Nav from "@/components/navbar";
import Gallery from "@/components/gallerytwo";
import TabsFeatures from "@/components/steps";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>PRSM | Agency</title>
        <meta
          name="description"
          content="PRSM is a agancy determined to bring your organization or business to new heights. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/prsmlogo.png" />
      </Head>
      <Nav />
      <Hero />
      <Gallery />
      <TabsFeatures />
      <FAQ />
      <Footer />
    </>
  );
}
