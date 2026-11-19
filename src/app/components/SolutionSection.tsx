"use client"

import type React from "react"
import { motion } from "framer-motion"

interface FeatureItem {
  number: string
  title: string
  description: string
}

interface SolutionSectionProps {
  title: string
  introductionParagraph: string
  featuresLabel: string
  features: FeatureItem[]
  footerText: string
  footerBoldText?: string
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  title,
  introductionParagraph,
  featuresLabel,
  features,
  footerText,
  footerBoldText,
}) => {
  return (
    <section className="w-full py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-regular font-semibold mb-8 text-backgroundDarkBlue">
            {title}
          </h2>
          
          <p className="text-gray-600 font-inter leading-relaxed mb-8">
            {introductionParagraph}
          </p>
          
          <p className="text-gray-600 font-inter font-medium">
            {featuresLabel}
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="border-t border-gray-200"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="py-7 border-b border-gray-200 grid grid-cols-1 md:grid-cols-[100px_1fr]  "
            >
              {/* Number */}
              <div className="text-4xl font-regular font-semibold text-backgroundLightBlue">
                {feature.number}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-regular font-semibold mb-3 text-backgroundDarkBlue">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <div className="mt-12 max-w-4xl">
          <p className="text-gray-600 font-inter leading-relaxed">
            {footerText}
            {footerBoldText && <> <span className="font-semibold text-gray-900">{footerBoldText}</span></>}
          </p>
        </div>

      </div>
    </section>
  )
}

export default SolutionSection
