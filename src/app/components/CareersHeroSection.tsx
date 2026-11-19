"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import backgroundImage from "@/assets/Microlynk Website Material/Header Images/Header Images/Careers.jpg"
import { motion, Variants } from "framer-motion";

const linkTextVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -3 }, // Move text slightly to the left
};

const linkIconVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 3 }, // Move icon slightly to the right
};

const CareersHeroSection: React.FC = () => {
  const MotionLink = motion.create(Link);
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Careers Background"
        fill
        className="object-cover z-0"
        priority
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-backgroundDarkBlue/80 z-[1]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subheading */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-gray-300 uppercase tracking-widest text-md font-medium mb-6 font-inter"
        >
          Careers
        </motion.span>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-10 font-regular leading-tight"
        >
          <span className="font-bold">Join Us</span> to Shape the Future of <br className="hidden md:block" />
          IoT & Embedded Systems
        </motion.h1>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="#culture"
            className="px-8 py-3 bg-backgroundLightBlue font-regular text-white font-bold text-sm uppercase tracking-wider"
          >
            Our Culture
          </Link>
          <MotionLink
  href="/application-form"
  // Framer Motion Props
  initial="initial"
  whileHover="hover"

  className="px-8 py-3 border border-white text-white font-regular font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-backgroundDarkBlue flex items-center gap-2 "
>
  {/* Wrap Text in motion.span with textVariants */}
  <motion.span variants={linkTextVariants}>
    Apply Now
  </motion.span>
  
  {/* Wrap Icon in motion.span with iconVariants */}
  <motion.span variants={linkIconVariants}>
    <ChevronRight size={16} />
  </motion.span>
</MotionLink>
        </motion.div>
      </div>
    </section>
  )
}

export default CareersHeroSection
