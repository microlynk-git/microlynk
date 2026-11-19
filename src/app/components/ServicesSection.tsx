"use client"

import { useState } from "react"
import { ChevronRight, Cpu, CircuitBoard, Radio, Zap, Brain, Cog, Smartphone, Car,  Home, Droplet, ArrowRight, ChevronLeft, ChevronUp, ChevronDown } from "lucide-react"
import automation from "@/assets/industries-icons/industrial-automation-svg.svg"
import Link from "next/link"
import { motion } from "framer-motion"
import { industriesData } from "@/app/data/industries"

const MotionLink = motion.create(Link);

const services = [
  {
    id: 1,
    title: "Embedded Systems Development",
    description: "Custom firmware and embedded architectures built for speed, reliability, and real-world performance.",
    icon: Cpu,
    linkTo: "/service/embedded-systems",
  },
  {
    id: 2,
    title: "Hardware & PCB Design",
    description: "High-quality PCB layouts and hardware engineering optimized for functionality and production.",
    icon: CircuitBoard,
    linkTo: "/service/hardware-pcb-design",
  },
  {
    id: 3,
    title: "IoT Solutions",
    description: "End-to-end IoT ecosystems connecting devices, data, and cloud for smarter operations.",
    icon: Radio,
    linkTo: "/service/iot-solutions",
  },
  {
    id: 4,
    title: "Custom Product Development",
    description: "From concept to deployment - we design, engineer, and deliver fully tailored electronic products.",
    icon: Zap,
    linkTo: "/service/custom-product-development",
  },
  {
    id: 5,
    title: "Consulting & R&D",
    description: "Expert guidance and deep research support to help you innovate, optimize, and scale smarter.",
    icon: Brain,
    linkTo: "/service/consulting-and-rd",
  },
]

// Custom Health Icon Component
const HealthIcon = ({ className }: { className?: string }) => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 22 22" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M17.2134 3.53185C14.8416 2.07702 12.7716 2.6633 11.528 3.59718C11.0181 3.98009 10.7632 4.17155 10.6132 4.17155C10.4632 4.17155 10.2083 3.98009 9.69831 3.59718C8.45481 2.6633 6.38476 2.07702 4.01301 3.53185C0.900342 5.44116 0.196019 11.74 7.37572 17.0542C8.74323 18.0664 9.42697 18.5725 10.6132 18.5725C11.7994 18.5725 12.4831 18.0664 13.8507 17.0542C21.0303 11.74 20.326 5.44116 17.2134 3.53185Z" stroke="currentColor" strokeWidth="1.32666" strokeLinecap="round"/>
    <path d="M10.6133 7.95996V13.2666M7.95996 10.6133H13.2666" stroke="currentColor" strokeWidth="1.32666" strokeLinecap="round"/>
  </svg>
)

// Custom Plant Icon Component
const PlantIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M2.41675 9.125C2.41675 11.6667 3.42642 14.1042 5.22364 15.9014C7.02086 17.6987 9.45842 18.7083 12.0001 18.7083C14.5417 18.7083 16.9793 17.6987 18.7765 15.9014C20.5737 14.1042 21.5834 11.6667 21.5834 9.125" stroke="currentColor" strokeWidth="1.15979" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18.7083C12 16.1667 13.0097 13.7291 14.8069 11.9319C16.6041 10.1347 19.0417 9.125 21.5833 9.125" stroke="currentColor" strokeWidth="1.15979" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.41675 9.125C3.67525 9.125 4.92143 9.37288 6.08413 9.85449C7.24683 10.3361 8.30329 11.042 9.19319 11.9319C10.0831 12.8218 10.789 13.8782 11.2706 15.041C11.7522 16.2037 12.0001 17.4498 12.0001 18.7083" stroke="currentColor" strokeWidth="1.15979" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 4.3335C12.9658 5.25547 13.7216 6.37467 14.2161 7.61494C14.7105 8.85522 14.932 10.1875 14.8654 11.521" stroke="currentColor" strokeWidth="1.15979" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.13461 11.521C9.06803 10.1875 9.2895 8.85522 9.78395 7.61494C10.2784 6.37467 11.0342 5.25547 12 4.3335" stroke="currentColor" strokeWidth="1.15979" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Map industry slugs to icons
const industryIcons: { [key: string]: any } = {
  "industrial-automation": Cog,
  "smart-agriculture": PlantIcon,
  "consumer-electronics": Smartphone,
  "automotive-tracking-systems": Car,
  "healthcare-devices": HealthIcon,
  "home-automation": Home,
  "smart-utilities-and-water-management": Droplet,
}

const industries = industriesData.map(industry => ({
  id: industry.id,
  title: industry.title,
  description: industry.description2,
  icon: industryIcons[industry.slug] || Cog, // Default icon if not found
  linkTo: `/industries/${industry.slug}`,
}))

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'services' | 'industries'>('services')
  const [startIndex, setStartIndex] = useState(0)

  // Show 5 industries at a time with carousel for both mobile and desktop
  const items = activeTab === 'services' 
    ? services 
    : industries.slice(startIndex, startIndex + 5)

  const handleNext = () => {
    if (startIndex + 5 < industries.length) {
      setStartIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1)
    }
  }

  return (
    <section id="services" className="bg-backgroundDarkBlue py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-col gap-4 mb-8 md:mb-16">
          <div className="md:relative flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-0">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <button 
                onClick={() => setActiveTab('industries')}
                className={`text-base md:text-lg font-regular px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-100 hover:scale-105 ${
                  activeTab === 'industries' 
                    ? 'text-white underline underline-offset-6 decoration-2 ' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Discover our industries
              </button>
              <button 
                onClick={() => setActiveTab('services')}
                className={`text-base md:text-lg font-regular px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-100 transform-gpu hover:scale-105 ${
                  activeTab === 'services' 
                    ? 'text-white underline underline-offset-6 decoration-2 ' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Discover our services
              </button>
            </div>

            {/* Read All Link - Desktop only (positioned absolutely on right) */}
            {activeTab === 'industries' && (
              <Link 
                href="/industries" 
                className="hidden md:flex text-gray-400 hover:text-white items-center gap-2 text-sm transition-colors duration-200 font-inter absolute right-0 top-1/2 -translate-y-1/2"
              >
                Read All <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Read All Link - Mobile only (left-aligned below tabs) */}
          {activeTab === 'industries' && (
            <Link 
              href="/industries" 
              className="md:hidden text-gray-400 hover:text-white flex items-center justify-end gap-2 text-sm transition-colors duration-200 font-inter pl-4 pr-4"
            >
              Read All <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="relative md:px-0">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <MotionLink
                  layout
                  key={item.id}
                  href={item.linkTo}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  whileHover={{ y: -8, transition: { duration: 0.2, delay: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="relative group font-regular p-4 md:p-6 flex flex-col bg-cardBlue hover:bg-backgroundLightBlue transition-colors duration-100"
                >
                  {/* Icon */}
                  <div className="bg-backgroundDarkBlue group-hover:bg-cardBlue group-hover:shadow-md group-hover:shadow-white/20 group-hover:scale-110 p-2 rounded-xl w-fit mb-3 md:mb-4 h-fit transition-all duration-100">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white"/>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white h-16 md:h-24 mb-3 md:mb-4">{item.title}</h3>
                  
                  {/* Description */}
                  <p className="text-xs md:text-sm leading-relaxed h-16 md:h-24 mb-3 md:mb-4 text-white">
                    {item.description}
                  </p>

                  {/* Action Icon */}
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mt-auto border border-white group-hover:bg-white transition-colors duration-300">
                    <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:text-backgroundDarkBlue transition-colors duration-300" />
                  </div>
                </MotionLink>
              )
            })}
          </motion.div>

          {/* Carousel Controls - Vertical on mobile, Horizontal on desktop */}
          {activeTab === 'industries' && (
            <>
              {/* Previous Button */}
              {startIndex > 0 && (
                <>
                  {/* Mobile: Top Button with ChevronUp */}
                  <button 
                    onClick={handlePrev}
                    className="md:hidden absolute -top-16 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                    aria-label="Previous industries"
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                  {/* Desktop: Left Button */}
                  <button 
                    onClick={handlePrev}
                    className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                    aria-label="Previous industries"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </>
              )}
              {/* Next Button */}
              {startIndex + 5 < industries.length && (
                <>
                  {/* Mobile: Bottom Button with ChevronDown */}
                  <button 
                    onClick={handleNext}
                    className="md:hidden absolute -bottom-16 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                    aria-label="Next industries"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  {/* Desktop: Right Button */}
                  <button 
                    onClick={handleNext}
                    className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                    aria-label="Next industries"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
