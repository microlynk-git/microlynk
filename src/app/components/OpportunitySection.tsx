"use client"

import type React from "react"
import { motion } from "framer-motion"

interface OpportunitySectionProps {
  title: string
  leftParagraph1: string
  leftParagraph2: string
  bulletPoints: string[]
  rightParagraph1: string
  rightParagraph1Bold?: string
  rightParagraph2: string
}

const OpportunitySection: React.FC<OpportunitySectionProps> = ({
  title,
  leftParagraph1,
  leftParagraph2,
  bulletPoints,
  rightParagraph1,
  rightParagraph1Bold,
  rightParagraph2,
}) => {
  return (
    <section className="w-full py-20 bg-backgroundDarkBlue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-regular font-semibold mb-10">
              {title}
            </h2>
            
            <div className="space-y-6 text-gray-300 font-inter leading-relaxed">
              <p>
                {leftParagraph1}
              </p>
              
              <p>
                {leftParagraph2}
              </p>
              
              <ul className="list-disc pl-5 space-y-3">
                {bulletPoints.map((point, index) => (
                  <li key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative"
          >
            {/* Vertical Divider (Desktop only) */}
            <div className="hidden lg:block absolute left-[-40px] top-0 bottom-0 w-[1px] bg-gray-700"></div>
            
            <div className="flex flex-col justify-center h-full space-y-10  font-inter text-lg lg:text-xl leading-relaxed ">
              <p className="text-lightBlueText italic font-inter font-medium">
                {rightParagraph1}
                {rightParagraph1Bold}
              </p>
              
              <p className="text-lightBlueText italic font-inter font-medium">
                {rightParagraph2}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default OpportunitySection
