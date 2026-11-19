"use client"

import React from "react"
import { motion } from "framer-motion"

const steps = [
  {
    id: 1,
    title: "Application Submission",
    description: "Fill out the job application form with detailed information",
    align: "left"
  },
  {
    id: 2,
    title: "Initial Screening",
    description: "We review applications to match skills with job requirements",
    align: "right"
  },
  {
    id: 3,
    title: "Technical Assessment",
    description: "Fundamental knowledge test conducted online or onsite",
    align: "left"
  },
  {
    id: 4,
    title: "Interviews",
    description: "Technical interview with team lead to assess expertise",
    align: "right"
  },
  {
    id: 5,
    title: "Offer & Onboarding",
    description: "In-depth technical interview with our CTO",
    align: "left"
  },
  
]

const HiringStepsSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-backgroundDarkBlue text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-regular font-semibold">
            Steps of Hiring
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="relative"
        >
          <div className="flex flex-col">
            {steps.map((step, index) => {
              const isEven = step.id % 2 === 0
              const circleColor = isEven ? "bg-blueText" : "bg-backgroundLightBlue"
              const shadowColor = isEven ? "rgba(38,129,218,0.5)" : "rgba(0,59,117,0.5)"
              
              // Previous step color for the top line
              const prevIsEven = (step.id - 1) % 2 === 0
              const prevColor = index === 0 ? "bg-transparent" : (prevIsEven ? "bg-blueText" : "bg-backgroundLightBlue")
              
              // Current step color for the bottom line
              const nextColor = index === steps.length - 1 ? "bg-transparent" : circleColor

              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-stretch ${step.align === 'right' ? 'md:flex-row-reverse' : ''} w-full`}>
                  
                  {/* Text Content */}
                  <div className={`w-full md:w-1/2 px-6 ${step.align === 'right' ? 'md:text-left' : 'md:text-right'} text-center py-4 md:py-12 order-2 md:order-none`}>
                    <h3 className="text-xl font-regular font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 font-inter text-sm md:text-base max-w-md mx-auto md:mx-0 inline-block">
                      {step.description}
                    </p>
                  </div>

                  {/* Number Circle & Lines (Center) */}
                  <div className="relative flex flex-col items-center justify-center w-full md:w-24 shrink-0 mb-4 md:mb-0 order-1 md:order-none">
                     {/* Top Line */}
                     <div className={`absolute top-0 bottom-1/2 w-0.5 left-1/2 -translate-x-1/2 hidden md:block ${prevColor}`}></div>
                     
                     {/* Bottom Line */}
                     <div className={`absolute top-1/2 bottom-0 w-0.5 left-1/2 -translate-x-1/2 hidden md:block ${nextColor}`}></div>

                     {/* Circle */}
                     <div 
                        className={`relative z-10 w-12 h-12 rounded-full ${circleColor} flex items-center justify-center text-white font-regular font-bold text-lg`}
                        style={{ boxShadow: `0 0 15px ${shadowColor}` }}
                     >
                       {step.id}
                     </div>
                  </div>

                  {/* Empty Space for the other side */}
                  <div className="w-full md:w-1/2 px-6 hidden md:block"></div>
                  
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HiringStepsSection
