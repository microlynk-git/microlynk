"use client"

import React from "react"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface StrategiesAndOutcomesSectionProps {
  strategies: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
}

const StrategiesAndOutcomesSection: React.FC<StrategiesAndOutcomesSectionProps> = ({ strategies, outcomes }) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Our Strategies */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-regular font-semibold mb-12 text-backgroundDarkBlue"
          >
            Our Strategies
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute top-[5px] left-0 w-full h-[1px] bg-gray-300 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {strategies.map((strategy, index) => (
                <motion.div 
                  key={index} 
                  className="relative pt-6 md:pt-8 group cursor-default text-center md:text-left p-4 rounded-xl transition-colors duration-300 hover:bg-white"
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { boxShadow: "none" },
                    hover: { boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }
                  }}
                >
                  {/* Dot */}
                  <div className="absolute top-[5px] left-0 md:left-4 w-3 h-3 rounded-full bg-gray-500 hidden md:block transform -translate-y-1/2 transition-all duration-300 group-hover:bg-backgroundLightBlue group-hover:ring-4 group-hover:ring-blue-100"></div>
                  
                  <motion.h3 
                    className="text-lg font-bold mb-4 text-gray-900 font-regular transition-colors duration-300 group-hover:text-backgroundLightBlue"
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -5 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {strategy.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 font-inter text-sm leading-relaxed"
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -5 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {strategy.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expected Outcomes */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-regular font-semibold mb-12 text-backgroundDarkBlue"
          >
            Expected Outcomes
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="space-y-6"
          >
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-backgroundLightBlue" />
                </div>
                <p className="text-gray-600 font-inter text-lg">
                  {outcome}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default StrategiesAndOutcomesSection
