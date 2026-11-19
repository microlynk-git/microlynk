"use client"

import { ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { useRouter } from "next/navigation"

interface CTAButtonProps {
  text: string
  variant?: "primary" | "secondary"
  onClick?: () => void
}
// 1. Define the variants for the text and the arrow
const textVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -3 }, // Move text slightly to the left
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 3 }, // Move arrow slightly to the right
}

//  A variant for the parent button to define the transition
const buttonVariants: Variants = {
  initial: {},
  hover: {
    
    transition: {
      duration: 0.2, // Quicken the transition slightly
      ease: "easeInOut",
    }
  }
}

const CTAButton = ({ text, variant = "primary", onClick }: CTAButtonProps) => {
  const isPrimary = variant === "primary"

  return (
    
    <motion.button
      onClick={onClick}
      // Apply Framer Motion props
      variants={buttonVariants}
      initial="initial" // Set the initial state
      whileHover="hover" // Trigger the 'hover' state and propagate it to children
      
 
      className={`
        px-6 py-3 font-semibold text-sm uppercase tracking-wide
        flex items-center gap-2 transition-all duration-300
        ${
          isPrimary
            ? "bg-backgroundLightBlue text-white hover:bg-opacity-90" // Added a slight hover background change for primary
            : "border border-white text-white hover:bg-white hover:text-backgroundLightBlue" // Added hover background change for secondary
        }
      `}
    >
     
      <motion.span variants={textVariants}>
        {text}
      </motion.span>
      
      
      <motion.span variants={arrowVariants}>
        <ArrowRight size={16} />
      </motion.span>
    </motion.button>
  )
}

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}



export default function CTASection({ title, subtitle }: CTASectionProps) {
  const router = useRouter()

  const handleBuildClick = () => {
    router.push("/service/embedded-systems")
  }

  const handleConsultationClick = () => {
    router.push("/contact-us")
  }

  return (
    <section className="w-full bg-linear-to-b from-backgroundLightBlue to-gradientBlue to-86% py-20 px-4">
      <div className="max-w-4xl mx-auto text-center font-regular">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight"
        >
          {title || "Build reliable embedded"}
        </motion.h2>

        {/* Second Heading */}
        {!title && (
          <motion.h2 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-regular font-bold text-white mb-6 leading-tight"
          >
            systems that power the future
          </motion.h2>
        )}
        
        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
        >
          {subtitle || "Turn your product vision into high-performance embedded reality."}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          
          <CTAButton text="Schedule a Consultation" variant="secondary" onClick={handleConsultationClick} />
        </motion.div>
      </div>
    </section>
  )
}
