"use client"

import React, { useState } from "react"
import{ motion } from "framer-motion"

interface ImpactItem {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

interface ImpactSectionProps {
  title: string
  subtitle: string
  impacts: ImpactItem[]
}

const ImpactSection: React.FC<ImpactSectionProps> = ({
  title,
  subtitle,
  impacts,
}) => {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-backgroundDarkBlue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-regular font-semibold mb-4">
            {title}
          </h2>
          <p className="text-gray-400 font-inter text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {impacts.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className={`group relative rounded-lg p-8 h-[320px] transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] ${
                  activeId === item.id 
                    ? "bg-white text-gray-900" 
                    : "bg-backgroundLightBlue text-white hover:bg-white hover:text-gray-900"
                }`}
              >
                {/* Icon + Title (Visible by default, hidden on hover) */}
                <div className={`flex flex-col items-center gap-6 transition-opacity duration-300 ${
                  activeId === item.id ? "opacity-0" : "group-hover:opacity-0"
                }`}>
                  <div className="p-4 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-regular font-medium max-w-[200px]">
                    {item.title}
                  </h3>
                </div>

                {/* Description (Hidden by default, visible on hover) */}
                <div className={`absolute inset-0 flex items-center justify-center px-8 transition-opacity duration-300 ${
                  activeId === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  <p className="text-lg font-inter leading-relaxed text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* Force line break after 2nd item for 3 or 4 items on large screens to ensure 2-on-top layout */}
              {(impacts.length === 3 || impacts.length === 4) && index === 1 && (
                <div className="hidden lg:block w-full basis-full h-0 -mt-6" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection
