"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"



interface ServiceHeroSectionProps {
  title: string;
  description: string;
  headerImage: any; // Using any to support both StaticImageData and string paths if needed
}

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({ title, description, headerImage }) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 mt-5">
          <motion.h1 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-regular font-semibold mb-4 text-backgroundDarkBlue"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-600 font-inter leading-relaxed text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]  rounded-lg overflow-hidden"
        >
          <Image
            src={headerImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  )
}

export default ServiceHeroSection
