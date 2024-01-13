import Image from "next/image";
import HeroSection from "./sections/01_heroSection";
import FeatureSection from "./sections/02_featureSection";
import AboutCompany from "./sections/03_sectionThree";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeatureSection />
      <AboutCompany />
    </main>
  );
}
