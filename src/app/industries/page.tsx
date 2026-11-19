import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import IndustriesHeroSection from "../components/IndustriesHeroSection";
import IndustriesExample from "../components/IndustriesExample";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <IndustriesHeroSection />
      <IndustriesExample />
      <CTASection />
      <Footer />
    </>
  );
}
