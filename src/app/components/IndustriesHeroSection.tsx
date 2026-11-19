"use client"

import type React from "react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

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

const IndustriesHeroSection: React.FC = () => {
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
            Industries
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-greyText font-inter mb-8">
            Delivering innovative embedded systems and IoT solutions across diverse sectors.
          </p>

          {/* CTA Button */}
          <MotionLink
            href="/contact-us"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="inline-flex items-center px-8 py-3 bg-backgroundLightBlue text-white font-medium font-regular text-base hover:bg-opacity-90 transition-colors duration-100"
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

export default IndustriesHeroSection
