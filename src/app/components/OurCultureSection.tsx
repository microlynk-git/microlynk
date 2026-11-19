"use client"

import React from "react"
import { motion } from "framer-motion"

const culturePoints = [
  {
    title: "Collaboration at Our Core",
    description: "We thrive on working together, combining diverse skills and perspectives to solve complex problems. Teamwork isn't just encouraged - it's embedded in everything we do, from brainstorming new ideas to delivering end-to-end solutions."
  },
  {
    title: "Innovation & Learning",
    description: "Curiosity drives us. We stay ahead of emerging trends in IoT, embedded systems, AI, and edge computing, continuously learning and applying new knowledge to our projects. At Microlynk, experimentation is welcomed, and failures are seen as opportunities to grow."
  },
  {
    title: "Ownership & Impact",
    description: "Every team member has a voice and a stake in the success of our solutions. We empower individuals to take ownership of their work, contribute ideas, and see them through to real-world impact. Your work here directly influences how industries innovate and operate."
  },
  {
    title: "Inclusive & Supportive Environment",
    description: "We value diversity, respect different perspectives, and foster an environment where everyone can bring their authentic selves to work. Open communication, mentorship, and mutual support are key pillars of our team culture."
  },
  {
    title: "Balance & Wellbeing",
    description: "We recognize that great work requires a healthy work-life balance. Microlynk encourages flexibility, wellness, and personal growth alongside professional achievement, ensuring our team thrives both inside and outside the office."
  },
  {
    title: "Continuous Growth",
    description: "Our people grow as fast as our technology. From workshops and certifications to hands-on project challenges, we invest in developing your skills, knowledge, and career, preparing you for tomorrow's opportunities."
  }
]

const OurCultureSection: React.FC = () => {
  return (
    <section id="culture" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-regular font-semibold mb-8 text-backgroundDarkBlue">
            Our Culture
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed text-lg">
            <span className="font-bold text-gray-800">At Microlynk, we believe</span> that great technology starts with great people. <span className="font-bold text-gray-800">Our culture</span> is built on collaboration, curiosity, and creativity - a place where every team member is empowered to explore, innovate, and make a real impact.
          </p>
        </motion.div>

        {/* Culture Points */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          {culturePoints.map((point, index) => (
            <div key={index}>
              <h3 className="text-2xl font-regular font-semibold text-backgroundLightBlue mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed text-lg">
                {point.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Closing */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 font-inter leading-relaxed text-lg">
            <span className="font-bold text-gray-800">At Microlynk, culture isn't just a set of values</span> - it's the way we work, innovate, and succeed together. <br />
            If you're passionate about technology, eager to learn, and excited to make an impact, you'll find a home here.
          </p>
        </div>

      </div>
    </section>
  )
}

export default OurCultureSection
