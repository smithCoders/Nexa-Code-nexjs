import Image from "next/image";
import HeroSection from "./sections/01_heroSection";
import FeatureSection from "./sections/02_featureSection";
import AboutCompany from "./sections/03_sectionThree";
import Samples from "./sections/04_samples";
import HowNexaWorks from "./sections/05_howWorks";
import Services from "./sections/06_services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <AboutCompany />
      <Samples />
      <HowNexaWorks />
      <Services />
    </main>
  );
}
