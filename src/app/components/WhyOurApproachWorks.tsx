"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ApproachItem {
  id: number
  title: string
  description: string
}

const WhyOurApproachWorks: React.FC = () => {
  const approachItems: ApproachItem[] = [
    {
      id: 1,
      title: "Client-Centric",
      description: "We collaborate closely to ensure solutions meet your exact needs.",
    },
    {
      id: 2,
      title: "Structured & Agile",
      description: "Our methodology balances careful planning with flexibility to adapt to evolving requirements.",
    },
    {
      id: 3,
      title: "End-to-End Excellence",
      description: "From hardware to cloud, we handle every layer of the system.",
    },
    {
      id: 4,
      title: "Innovation-Driven",
      description: "We integrate emerging technologies to deliver smarter, future-ready solutions.",
    },
  ]

  return (
    <section className="w-full py-20 bg-backgroundLight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-4xl font-regular font-semibold mb-12"
        >
          Why Our Approach Works
        </motion.h2>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 hidden md:block" />

          {/* Grid of Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {approachItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-start cursor-pointer"
              >
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full bg-backgroundDarkBlue text-white flex items-center justify-center font-semibold text-lg mb-4 relative z-10 group-hover:bg-backgroundLightBlue font-regular transition-colors duration-100">
                  {item.id}
                </div>

                {/* Title and Description Container with Hover Effect */}
                <motion.div
                  whileHover={{ 
                    y: -8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  {/* Title */}
                  <h3 className="text-lg font-semibold font-regular mb-2 group-hover:text-backgroundLightBlue transition-colors duration-300">{item.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 font-inter leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyOurApproachWorks
