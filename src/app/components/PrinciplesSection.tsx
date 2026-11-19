"use client"

import type React from "react"
import { motion } from "framer-motion"

interface PrincipleItem {
  title: string
  description: string
}

const PrinciplesSection: React.FC = () => {
  const principles: PrincipleItem[] = [
    {
      title: "Human-Centered Design",
      description:
        "Our solutions prioritize usability, accessibility, and end-user experience, ensuring technology works seamlessly for people.",
    },
    {
      title: "End-to-End Integration",
      description:
        "From embedded systems to cloud platforms, we design fully integrated systems that work seamlessly across every layer.",
    },
    {
      title: "Scalability & Flexibility",
      description:
        "We build solutions that scale with your business needs, adapting to new technologies, processes, or market demands.",
    },
    {
      title: "Reliability & Robustness",
      description:
        "Our systems are engineered to perform consistently under real-world conditions, ensuring uptime and maximizing efficiency.",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "We leverage analytics and real-time monitoring to inform design choices, improve performance, and deliver measurable outcomes.",
    },
    {
      title: "Sustainable Innovation",
      description:
        "We focus on building long-term, energy-efficient, environmentally responsible and designed for long-term operational sustainability.",
    },
  ]

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* The Principles We Follow Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-regular font-semibold mb-12 text-center"
          >
            The Principles We Follow
          </motion.h2>

          {/* Grid of Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {principles.map((principle, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="flex flex-col cursor-pointer"
              >
                {/* Title */}
                <h3 className="text-lg font-semibold font-regular mb-3">{principle.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 font-inter leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrinciplesSection
