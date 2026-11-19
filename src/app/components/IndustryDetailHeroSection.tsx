"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface IndustryDetailHeroSectionProps {
  title: string
  description: string
  headerImage: any
}

const IndustryDetailHeroSection: React.FC<IndustryDetailHeroSectionProps> = ({
  title,
  description,
  headerImage,
}) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 max-w-5xl mt-6">
          <motion.h1 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-regular font-semibold mb-4 text-backgroundDarkBlue"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-gray-600 font-inter leading-relaxed text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] mb-12 rounded-lg overflow-hidden"
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

export default IndustryDetailHeroSection
