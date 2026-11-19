import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import CaseStudyHeroSection from "../components/CaseStudyHeroSection";
import CaseStudiesExample from "../components/CaseStudiesExample"

export default function CaseStudy(){
  return(
    <>
    <Navbar/>
    <CaseStudyHeroSection/>
    <CaseStudiesExample/>    
    <CTASection/>
    <Footer/>
    </>
  )
}
