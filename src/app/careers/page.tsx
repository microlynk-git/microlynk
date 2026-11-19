import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection2 from "../components/CTASection2";
import CareersHeroSection from "../components/CareersHeroSection"
import OurCultureSection from "../components/OurCultureSection";
import WhyJoinUs from "../components/WhyJoinUs";
import HiringStepsSection from "../components/HiringStepsSection";

export default function Careers(){
  return (
    <>
      <Navbar/>
      <CareersHeroSection />
      <OurCultureSection />
      <WhyJoinUs />
      <HiringStepsSection />
      <CTASection2/>
      <Footer/>
    </>
  )
}