"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import deliver1 from "@/assets/Microlynk Website Material/Approach - how we deliver/Approach - how we deliver/Deployment & Support.svg"
import deliver2 from "@/assets/Microlynk Website Material/Approach - how we deliver/Approach - how we deliver/Design & Prototyping.svg"
import deliver3 from "@/assets/Microlynk Website Material/Approach - how we deliver/Approach - how we deliver/Innovation & Continuous Improvement.svg"
import deliver4 from "@/assets/Microlynk Website Material/Approach - how we deliver/Approach - how we deliver/Integrated Development.svg"
import deliver5 from "@/assets/Microlynk Website Material/Approach - how we deliver/Approach - how we deliver/Research & Discovery.svg"
import deliver6 from "@/assets/Microlynk Website Material/Approach - how we deliver/Approach - how we deliver/Testing & Quality Assurance.svg"


interface DeliveryItem {
  id: string
  icon: React.ReactNode
  description: string
}

const HowWeDeliverSection: React.FC = () => {
  const deliveryItems: DeliveryItem[] = [
    {
      id: "analysis",
      icon: <Image src={deliver5} alt="Research & Discovery" width={48} height={48} />,
      
      description:
        "We analyze your goals, challenges, and technical environment to define the right solution pathway through deep research and feasibility evaluation.",
    },
    {
      id: "design",
      icon: <Image src={deliver2} alt="Design & Prototyping" width={48} height={48} />,
      
      description:
        "Our team creates tailored system architectures and prototypes, enabling fast validation, refinement, and alignment with your requirements.",
    },
    {
      id: "integration",
      icon: <Image src={deliver4} alt="Integrated Development" width={48} height={48} />,
      
      description:
        "We build fully unified hardware, firmware, and IoT/cloud systems focused on performance, reliability, and long-term scalability.",
    },
    {
      id: "testing",
      icon: <Image src={deliver6} alt="Testing & Quality Assurance" width={48} height={48} />,
      
      description:
        "Each solution undergoes strict validation and stress testing to ensure flawless real-world performance and compliance with global standards.",
    },
    {
      id: "support",
      icon: <Image src={deliver1} alt="Deployment & Support" width={48} height={48} />,
      
      description:
        "We offer smooth deployment, ongoing support, and easy upgrade paths to ensure stable, long-term operation.",
    },
    {
      id: "innovation",
      icon: <Image src={deliver3} alt="Innovation & Continuous Improvement" width={48} height={48} />,
      
      description:
        "We integrate the latest technologies — AI, edge computing, and advanced analytics — to keep your solutions modern and future-ready.",
    },
  ]

  return (
    <section className="w-full py-20 mt-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-regular font-bold mb-2"
          >
            How We Deliver
          </motion.h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {deliveryItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-start cursor-pointer group"
            >
              {/* Icon */}
              <div className="mb-6 flex-shrink-0 transition-all duration-100 group-hover:scale-110 group-hover:drop-shadow-lg">{item.icon}</div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base font-inter">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeDeliverSection
