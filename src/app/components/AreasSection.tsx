"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AreaItem {
  id: number
  title: string
  description: string
}

interface AreasSectionProps {
  title?: string
  areas: string[]
}

const AreasSection: React.FC<AreasSectionProps> = ({ 
  title = "Areas We Cover",
  areas 
}) => {
  // Parse areas array to extract title and description
  const parsedAreas: AreaItem[] = areas.map((area, index) => {
    const colonIndex = area.indexOf(":")
    if (colonIndex > -1) {
      return {
        id: index + 1,
        title: area.substring(0, colonIndex).trim(),
        description: area.substring(colonIndex + 1).trim(),
      }
    }
    return {
      id: index + 1,
      title: `Area ${index + 1}`,
      description: area.trim(),
    }
  })

  return (
    <section className="w-full py-20 mt-18 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-regular font-bold mb-2"
          >
            {title}
          </motion.h2>
        </div>

        {/* Grid of Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {parsedAreas.map((item) => (
            <motion.div 
              key={item.id} 
              className="flex flex-col items-start p-6 rounded-lg transition-shadow duration-300"
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              {/* Number Badge */}
              <div className="mb-6 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-backgroundLightBlue text-white flex items-center justify-center text-xl font-regular font-bold">
                  {item.id}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold font-regular mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base font-inter">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AreasSection
