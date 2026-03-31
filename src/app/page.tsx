import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import PromoTiles from "@/components/PromoTiles";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
const HERO_BANNER_SRC = "/images/hero-banner.png";

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Hero bannerSrc={HERO_BANNER_SRC} />
        <Products />
        <PromoTiles />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
