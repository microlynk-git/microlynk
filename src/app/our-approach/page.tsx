"use client"

import Image from "next/image"
import backgroundImage from "@/assets/About us Images/01 (2).svg"
import HowWeDeliverSection from "../components/HowWeDeliver"
import Navbar from "../components/Navbar"
import PrinciplesSection from "../components/PrinciplesSection"
import Footer from "../components/Footer";
import CTASection from "../components/CTASection"
import WhyOurApproachWorks from "@/app/components/WhyOurApproachWorks"


export default function OurApproach(){
  return (
    <>
    <Navbar/>
    <div className="w-full h-[500px] bg-cover bg-center relative">
      <Image
        src={backgroundImage}
        alt="Hero Section Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-blue/60"></div>

      {/* Use flexbox to center vertically and apply consistent left padding */}
      <div className='absolute inset-0 flex items-center px-4 lg:px-38'> 
        
        <h1 className="relative z-10 text-white text-4xl sm:text-2xl lg:text-5xl font-regular font-semibold leading-tight">
          Our Approach
        </h1>
      </div>
      

    </div>
    <HowWeDeliverSection/>
    <WhyOurApproachWorks/>
    <PrinciplesSection/>
    <CTASection/>
    <Footer/>
    </>
  )
}