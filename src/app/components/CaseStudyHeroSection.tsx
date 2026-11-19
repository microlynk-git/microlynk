"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import type { CaseStudyData } from "@/app/data/caseStudies"
import backgroundImage from "@/assets/Microlynk Website Material/Header Images/Header Images/Projects.jpg"

const MotionLink = motion.create(Link)

const textVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -3 },
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 3 },
}

const buttonVariants: Variants = {
  initial: {},
  hover: {
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    }
  }
}

interface CaseStudyHeroSectionProps {
  caseStudy?: CaseStudyData
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({ caseStudy }) => {
  // If no specific case study is provided, show the generic hero
  if (!caseStudy) {
    return (
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back to Microlynk Link */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-700 hover:text-backgroundLightBlue transition-colors duration-200 font-inter text-sm"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              Back to Microlynk
            </Link>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-regular font-semibold mb-6">
              Success Stories
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-greyText font-inter mb-8">
              How we turned complex challenges into measurable results.
            </p>

            {/* CTA Button */}
            <MotionLink
              href="/contact-us"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="inline-flex items-center px-8 py-3 bg-backgroundLightBlue text-white font-medium font-regular text-base hover:bg-backgroundDarkBlue transition-colors duration-100"
            >
              <motion.span variants={textVariants}>
                CONNECT WITH US
              </motion.span>
              <motion.span variants={arrowVariants}>
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </motion.span>
            </MotionLink>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full h-[750px] relative overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Case Study Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Projects Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white font-inter text-lg mb-4"
          >
            Projects
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-regular font-semibold mb-6 text-white"
          >
            {caseStudy.title}
          </motion.h1>

          {/* Subtitle - Display title2 if available */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="text-xl text-white font-inter mb-20"
          >
            {caseStudy.title2}
          </motion.p>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="flex items-center justify-center gap-8 md:gap-16"
          >
            {caseStudy.stats.map((stat, index) => (
              <React.Fragment key={index}>
                {/* Stat Item */}
                <div className="flex flex-col items-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-regular font-semibold text-white mb-5">
                    {stat.value}
                  </div>
                  <div className="text-md sm:text-lg text-white font-inter">
                    {stat.label}
                  </div>
                </div>
                
                {/* Divider */}
                {index < caseStudy.stats.length - 1 && (
                  <div className="h-29 w-px bg-white/60" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyHeroSection
