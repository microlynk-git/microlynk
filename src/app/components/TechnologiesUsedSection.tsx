"use client"

import React from "react"
import { motion } from "framer-motion"

interface TechnologiesUsedSectionProps {
  technologyUsed: string;
}

const TechnologiesUsedSection: React.FC<TechnologiesUsedSectionProps> = ({ technologyUsed }) => {
  // Parse the comma-separated string into an array
  const technologies = technologyUsed.split(',').map(tech => tech.trim());
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-regular font-semibold mb-6 text-backgroundDarkBlue"
          >
            Technology Used
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-600 font-inter leading-relaxed text-lg"
          >
            Our expertise spans the full spectrum of embedded systems technologies, platforms, and communication protocols.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className={`border border-gray-300 rounded-xl  flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-100 bg-white h-14 ${
                index === technologies.length - 1 ? 'col-span-2' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-backgroundLightBlue font-regular">
                {tech}
              </h3>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default TechnologiesUsedSection
