"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

const textVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -3 },
}

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 3 },
}

const buttonVariants: Variants = {
  initial: {},
  hover: {
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    }
  }
}

const MotionLink = motion.create(Link);

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

const Counter = ({ value, direction = "up", delay = 0, suffix = "" }: { value: number, direction?: "up" | "down", delay?: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showSuffix, setShowSuffix] = useState(false)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value)
        setShowSuffix(true)
      }, delay * 1000)
    }
  }, [motionValue, isInView, delay, value, direction])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest))
      }
    })
  }, [springValue])

  return (
    <span className="flex items-center">
      <span ref={ref} />
      {showSuffix && <span>{suffix}</span>}
    </span>
  )
}

export default function AboutUsSection() {
  const stats = [
    {
      label: "Projects Delivered",
      value: 1000,
      suffix: "+",
    },
    {
      label: "Years of Industry Experience",
      value: 8,
      suffix: "+",
    },
    {
      label: "Embedded Systems Designed",
      value: 300,
      suffix: "+",
    },
    {
      label: "IoT Products & Deployments",
      value: 150,
      suffix: "+",
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero Section with Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Left Column - Heading */}
          <div className="flex flex-col justify-start">
            <motion.h1 
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-regular font-semibold text-foreground leading-tight "
            >
              Your Partner in Intelligent Embedded Systems
            </motion.h1>
          </div>

          {/* Right Column - Description and CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-regular text-gray-600">
              At Microlynk, we design and build intelligent embedded systems and IoT solutions that connect innovation
              with real-world performance. With over a decade of international experience, we've delivered smart,
              scalable, and reliable technologies that power automation, connectivity, and digital transformation.
            </p>
            <div>
<MotionLink 
                href="/about-us" 
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                className="inline-flex items-center justify-center text-sm font-regular transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  border border-backgroundLightBlue bg-transparent text-backgroundLightBlue hover:bg-primary/10 h-10 px-4 py-2 font-semibold"
              >
                <motion.span variants={textVariants}>
                  KNOW MORE ABOUT US
                </motion.span>
                <motion.span variants={arrowVariants}>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </MotionLink>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12 md:my-16" />

        {/* Stats Section with Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-3 flex flex-col items-center text-center">
              <p className="text-md md:text-base text-muted-foreground font-regular">{stat.label}</p>
              <p className="text-5xl md:text-6xl font-black text-backgroundLightBlue font-regular flex items-center justify-center">
                <Counter value={stat.value} delay={0.8} suffix={stat.suffix} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
