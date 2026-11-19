"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface KeyServicesSectionProps {
  keyServices: {
    title: string;
    description: string;
  }[];
}

const KeyServicesSection: React.FC<KeyServicesSectionProps> = ({ keyServices }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Key Services
          </motion.h2>
        </div>

        {/* Accordion List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="border-t border-gray-200"
        >
          {keyServices.map((service, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleService(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <h3 className={`text-xl font-regular font-medium transition-colors duration-100 ${isOpen ? "text-backgroundLightBlue" : "text-gray-700 group-hover:text-backgroundLightBlue"}`}>
                    {service.title}
                  </h3>
                  <span className="text-gray-500">
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 font-inter leading-relaxed pb-6 text-lg">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default KeyServicesSection
