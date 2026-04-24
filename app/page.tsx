import HeroVideo from "@/components/home/HeroVideo";
import AboutSection from "@/components/home/AboutSection";
import FeaturedVideoSection from "@/components/home/FeaturedVideoSection";
import ManifestoSection from "@/components/home/ManifestoSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ServicesSection from "@/components/home/ServicesSection";
import AlliesMarquee from "@/components/home/AlliesMarquee";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <ServicesSection />
      <AboutSection />
      <ManifestoSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <AlliesMarquee />
    </>
  );
}
