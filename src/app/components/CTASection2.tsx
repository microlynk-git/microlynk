"use client"

import { ArrowRight, ChevronRight } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Link from "next/link"

interface CTAButtonProps {
  text: string
  href: string
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


const buttonVariants: Variants = {
  initial: {},
  hover: {
    transition: {
      duration: 0.2, // Quicken the transition slightly
      ease: "easeInOut",
    }
  }
}

const CTAButton = ({ text, href }: CTAButtonProps) => {
  return (
    <Link href="/application-form">
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        className={`
          px-8 py-4 font-semibold text-sm uppercase tracking-wide
          flex items-center gap-2 transition-all duration-300
          bg-backgroundDarkBlue text-white hover:bg-opacity-90
        `}
      >
        <motion.span variants={textVariants}>
          {text}
        </motion.span>
        
        <motion.span variants={arrowVariants}>
          <ChevronRight size={16} />
        </motion.span>
      </motion.button>
    </Link>
  )
}

export default function CTASection2() {
  return (
    <section className="w-full bg-linear-to-b from-backgroundLightBlue to-gradientBlue to-86% py-20 px-4">
      <div className="max-w-4xl mx-auto text-center font-regular">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-regular font-bold text-white mb-6 leading-tight"
        >
          Be Part of the Innovation
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-inter"
        >
          Build your career while creating real impact.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex justify-center items-center"
        >
          <CTAButton text="APPLY NOW" href="/application-form" />
        </motion.div>
      </div>
    </section>
  )
}
