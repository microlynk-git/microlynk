"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import value1 from "@/assets/Microlynk Website Material/About us - our core value - icons/Collaboration.svg"
import value2 from "@/assets/Microlynk Website Material/About us - our core value - icons/Continuous Learning.svg"
import value3 from "@/assets/Microlynk Website Material/About us - our core value - icons/Customer Focus.svg"
import value4 from "@/assets/Microlynk Website Material/About us - our core value - icons/Excellence.svg"
import value5 from "@/assets/Microlynk Website Material/About us - our core value - icons/Innovation.svg"
import value6 from "@/assets/Microlynk Website Material/About us - our core value - icons/Integrity.svg"

interface CoreValue {
  title: string
  description: string
  icon: React.ReactNode
}

const CoreValuesSection: React.FC = () => {
  const values: CoreValue[] = [
    {
      title: "Innovation",
      description:
        "We embrace new technologies, approaches, and ideas to deliver cutting-edge solutions that drive meaningful impact for our clients.",
      icon: <Image src={value5} alt="Innovation" width={48} height={48} />,
    },
    {
      title: "Excellence",
      description:
        "Every project is approached with meticulous attention to detail, ensuring the highest standards of quality, reliability, and performance.",
      icon: <Image src={value4} alt="Excellence" width={48} height={48} />,
    },
    {
      title: "Collaboration",
      description:
        "We work closely with clients, partners, and within our team, fostering open communication and a shared commitment to success.",
      icon: <Image src={value1} alt="Collaboration" width={48} height={48} />,
    },
    {
      title: "Integrity",
      description:
        "Transparency, honesty, and ethical practices are the foundation of all our engagements, building trust with every stakeholder.",
      icon: <Image src={value6} alt="Integrity" width={48} height={48} />,
    },
    {
      title: "Customer Focus",
      description:
        "We prioritize the needs and goals of our clients, ensuring solutions are practical, scalable, and aligned with business objectives.",
      icon: <Image src={value3} alt="Customer Focus" width={48} height={48} />,
    },
    {
      title: "Continuous Learning",
      description:
        "We cultivate curiosity and knowledge growth, staying ahead of industry trends and technological advancements to provide future-ready solutions.",
      icon: <Image src={value2} alt="Continuous Learning" width={48} height={48} />,
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-regular font-semibold mb-16 text-backgroundDarkBlue"
        >
          Our Core Values
        </motion.h2>

        {/* Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-start cursor-pointer group"
            >
              {/* Icon */}
              <div className="mb-6 text-backgroundLightBlue transition-all duration-100 group-hover:scale-110 group-hover:drop-shadow-lg">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-regular font-semibold mb-4 text-backgroundDarkBlue">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-inter leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CoreValuesSection
