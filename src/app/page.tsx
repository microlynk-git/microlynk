"use client"
import './globals.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import TechnologyPartners from './components/PartnersSection'

import FadeIn from './components/FadeIn'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <HeroSection />
    <AboutUsSection />
    <FadeIn>
      <TechnologyPartners />
    </FadeIn>
    <FadeIn>
      <ServicesSection />
    </FadeIn>
    <FadeIn>
      <ProjectsSection />
    </FadeIn>
    <FadeIn>
      <CTASection />
    </FadeIn>
    <FadeIn>
      <Footer />
    </FadeIn>
    </div>
  )
}