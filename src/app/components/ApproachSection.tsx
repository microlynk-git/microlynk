"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface Phase {
  id: number
  title: string
  content: string
}

interface ApproachSectionProps {
  title: string
  description: string
  phases: Phase[]
}

const ApproachSection: React.FC<ApproachSectionProps> = ({
  title,
  description,
  phases,
}) => {
  const [activePhase, setActivePhase] = useState<number>(phases[0]?.id || 1)


  return (
    <section className="w-full py-20 bg-backgroundDarkBlue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <h2 className="text-4xl lg:text-5xl font-regular font-semibold mb-6">
            {title}
          </h2>
          <p className="text-gray-300 font-inter leading-relaxed text-lg">
            {description}
          </p>
        </motion.div>

        {/* Tabbed Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col lg:flex-row bg-white overflow-hidden"
        >
          {/* Left Side: Tabs */}
          <div className="w-full lg:w-5/12 bg-backgroundBlue flex flex-col">
            {phases.map((phase) => (
              <div key={phase.id} className="flex flex-col w-full">
                <button
                  onClick={() => setActivePhase(phase.id)}
                  onMouseEnter={() => setActivePhase(phase.id)}
                  className={`flex w-full items-center px-8 py-6 text-left transition-all duration-100 border-b border-white/10 last:border-0 ${
                    activePhase === phase.id
                      ? "bg-white"
                      : "bg-transparent hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`text-3xl font-regular font-bold mr-6 ${
                      activePhase === phase.id
                        ? "text-backgroundLightBlue"
                        : "text-blueText"
                    }`}
                  >
                    {phase.id}
                  </span>
                  <span
                    className={`text-lg font-medium font-regular ${
                      activePhase === phase.id
                        ? "text-backgroundLightBlue"
                        : "text-blueText"
                    }`}
                  >
                    {phase.title}
                  </span>
                </button>
                {/* Mobile Content */}
                {activePhase === phase.id && (
                  <div className="lg:hidden bg-white p-8 text-gray-700 font-inter text-[15px] leading-relaxed whitespace-pre-line border-b border-gray-100">
                    {phase.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Content */}
          <div 
            className="hidden lg:block w-full lg:w-7/12 bg-white overflow-hidden relative min-h-[400px] lg:min-h-0"
          >
            <div 
              className="lg:absolute lg:inset-0 p-10 lg:p-16 flex items-center text-gray-700 font-inter text-[15px] leading-relaxed whitespace-pre-line transition-all duration-150"
            >
              {phases.find((p) => p.id === activePhase)?.content}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApproachSection
