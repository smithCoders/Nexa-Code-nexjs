import Image from "next/image";
import HeroSection from "./sections/01_heroSection";
import FeatureSection from "./sections/02_featureSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
