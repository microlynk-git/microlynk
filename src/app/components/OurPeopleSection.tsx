"use client"

import type React from "react"
import { motion } from "framer-motion"

const OurPeopleSection: React.FC = () => {
  const expertiseItems = [
    "Embedded systems and firmware development",
    "Hardware and PCB design",
    "IoT connectivity and cloud integration",
    "Data analytics, AI, and edge computing",
    "Product strategy and R&D",
  ]

  return (
    <section className="w-full py-20 bg-backgroundLight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-regular font-semibold mb-12 text-backgroundDarkBlue"
        >
          Our People
        </motion.h2>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="space-y-8 text-lg text-gray-600 font-inter leading-relaxed"
        >
          <p>
            At <span className="font-bold text-gray-900">Microlynk</span>, our greatest strength is our people. Our team of engineers, designers, researchers, and strategists brings together <span className="font-bold text-gray-900">over a decade of international experience</span> in embedded systems, IoT solutions, and smart automation.
          </p>

          <p>
            Our <span className="font-bold text-gray-900">multidisciplinary team</span> combines expertise in:
          </p>

          {/* List */}
          <ul className="space-y-4 py-4">
            {expertiseItems.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                {/* Check Icon */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-backgroundLightBlue flex items-center justify-center">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-backgroundLightBlue"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <p>
            By bringing together diverse perspectives and deep domain knowledge, we transform ideas into actionable solutions that solve real-world challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default OurPeopleSection
