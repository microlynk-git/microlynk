"use client"

import React from "react"
import { motion } from "framer-motion"

const reasons = [
  {
    number: "01",
    title: "BUILD CUTTING-EDGE TECHNOLOGY",
    description: [
      "Contribute to innovative projects in embedded systems, IoT, AI, and edge computing.",
      "Hands-on experience with hardware, firmware, and cloud integration across industries."
    ]
  },
  {
    number: "02",
    title: "COLLABORATIVE & INCLUSIVE CULTURE",
    description: [
      "Be part of a team that values diverse perspectives and open communication.",
      "Mentorship and peer support foster learning and professional growth."
    ]
  },
  {
    number: "03",
    title: "CONTINUOUS LEARNING & GROWTH",
    description: [
      "Access to workshops, certifications, and knowledge-sharing sessions.",
      "Opportunities to take on new challenges and expand your skill set."
    ]
  },
  {
    number: "04",
    title: "OWNERSHIP & REAL IMPACT",
    description: [
      "Take responsibility for projects and see your ideas come to life.",
      "Directly influence solutions that make a difference in industries like healthcare, agriculture, and automation."
    ]
  },
  {
    number: "05",
    title: "CULTURE OF INNOVATION",
    description: [
      "Work in an environment that encourages experimentation and creative problem-solving."
    ]
  }
]

const WhyJoinUs: React.FC = () => {
  return (
    <section className="w-full py-20 bg-backgroundLight">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <h2 className="text-4xl lg:text-5xl font-regular font-semibold mb-6 text-black">
            Why Join <span className="text-backgroundDarkBlue">Microlynk</span>
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed text-lg">
            Join a team that's shaping the future of technology. Our innovative environment rewards driven high-performers who are ready to make an impact through their expertise, ideas, and strategies. Here's what you can expect working with us.
          </p>
        </motion.div>

        {/* List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="border-t border-gray-300"
        >
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col md:flex-row py-12 border-b border-gray-300 gap-4 md:gap-8 items-center">
              
              {/* Number & Title */}
              <div className="flex items-center gap-6 md:w-3/4">
                <span className="text-4xl md:text-5xl font-bold text-gray-300 font-inter">
                  {reason.number}
                </span>
                <h3 className="text-xl md:text-2xl  text-backgroundDarkBlue uppercase pt-2 font-regular font-bold">
                  {reason.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:w-1/2">
                <div className="text-gray-600 font-inter leading-relaxed text-lg space-y-4">
                  {reason.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default WhyJoinUs
