"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { servicesData } from "@/app/data/services"
import { caseStudiesData } from "@/app/data/caseStudies"
import service1 from "@/assets/Microlynk Website Material/Success Stories Images/Success Stories Images/Automotive Diagnostic Module.jpg"
import Aeroponic from "@/assets/CS IMAGES/AEROPONIC-GROWROOM.png"
import Autonomous from "@/assets/CS IMAGES/AUTONOMOUS WAREOUSE.png"
import ElectricalDistribution from "@/assets/CS IMAGES/DistibutionPanel.png"
import EnergyMeter from "@/assets/CS IMAGES/Smart-Energy-meter.png"
import ESP32 from "@/assets/CS IMAGES/ESP32 SMART DISPLAY.png"
import IndoorPositioningSystem from "@/assets/CS IMAGES/INDOOR-POSITIONING-SYSTEM.png"
import IoTWaterQuality from "@/assets/CS IMAGES/WaterQuality.jpg"
import LoRaWAN from "@/assets/CS IMAGES/LORAWAN-BASED-CAMPUS-MONITOTING.png"
import RTDSP from "@/assets/CS IMAGES/REAL-TIME-DSP.png"
import RemoteGSM from "@/assets/CS IMAGES/REMOTE-GSM.png"
import WirelessAudioPlayback from "@/assets/CS IMAGES/WIRELESS-AUDIOPLAYBACK.png"
import WorkerAttendance from "@/assets/CS IMAGES/WORKER-ATTENDANCE.png"


// Define the motion variants for the text and the icon
const linkTextVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -2 }, // Move text 2px to the left
};

const linkIconVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 2 }, // Move icon 2px to the right
};

// Helper function to get relevant SVG for a case study
const getCaseStudyImage = (slug: string) => {
  const imageMap: Record<string, any> = {
    "smart-distribution-panel": ElectricalDistribution,
    "iot-based-smart-energy-meter": EnergyMeter,
    "lorawan-smart-campus-monitoring": LoRaWAN,
    "ble-worker-attendance-tracking": WorkerAttendance,
    "indoor-positioning-system": IndoorPositioningSystem,
    "smart-iot-water-quality-monitoring": IoTWaterQuality,
    "aeroponic-growroom-automation": Aeroponic,
    "esp32-s3-smart-display": ESP32,
    "wireless-audio-playback-device": WirelessAudioPlayback,
    "real-time-dsp-echo-playback": RTDSP,
    "autonomous-warehouse-navigation-robot": Autonomous,
    "remote-gsm-camera-system": RemoteGSM,
  };
  return imageMap[slug] || service1; // Fallback to service1 if no mapping found
};

interface SuccessStoriesSectionProps {
  serviceSlug?: string; // Optional service slug to filter case studies
}

const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ serviceSlug }) => {
  const MotionLink = motion.create(Link);
  
  // Get case studies for the specific service, or use first 4 case studies if no service specified
  const getCaseStudies = () => {
    if (serviceSlug) {
      const service = servicesData.find(s => s.slug === serviceSlug);
      if (service && service.caseStudies) {
        return service.caseStudies.map(slug => 
          caseStudiesData.find(cs => cs.slug === slug)
        ).filter(Boolean);
      }
    }
    // Default: return first 4 case studies
    return caseStudiesData.slice(0, 4);
  };

  const caseStudies = getCaseStudies();

  // Map case studies to stories format
  const stories = caseStudies.map((caseStudy) => ({
    title: caseStudy!.title,
    description: caseStudy!.description2,
    image: getCaseStudyImage(caseStudy!.slug),
    link: `/case-study/${caseStudy!.slug}`
  }));

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-regular font-semibold mb-6 text-backgroundDarkBlue">
              Success Stories
            </h2>
            <p className="text-gray-600 font-inter leading-relaxed text-lg">
              Real-world case studies showcasing how our embedded and IoT systems are driving innovation, reducing costs, and improving performance.
            </p>
          </div>
          
          <MotionLink
  href="/case-study"
  
  initial="initial"
  whileHover="hover"
  className="text-backgroundLightBlue font-semibold flex items-center gap-2 whitespace-nowrap mb-2 font-inter"
>
  {/*  Wrap Text in motion.span with textVariants */}
  <motion.span variants={linkTextVariants}>
    Find More Success Stories
  </motion.span>

  {/*  Wrap Icon in motion.span with iconVariants */}
  <motion.span variants={linkIconVariants}>
    <ChevronRight size={16} />
  </motion.span>
</MotionLink>
        </motion.div>

        {/* Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stories.map((story, index) => (
            <Link key={index} href={story.link} className="group relative h-[450px] rounded-lg overflow-hidden cursor-pointer bg-gray-900 block">
              
              {/* Background Image */}
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col">
                
                {/* Title (Top) */}
                <h3 className="text-2xl font-bold text-white mb-2 font-regular">
                  {story.title}
                </h3>

                {/* Hidden Content (Description + Button) - Appears at Bottom */}
                <div className="mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-gray-200 text-sm mb-6 leading-relaxed font-inter">
                    {story.description}
                  </p>
                  
                  <div className="bg-white text-backgroundDarkBlue px-4 py-2 text-xs font-regular font-semibold uppercase tracking-wide inline-flex items-center gap-2 border border-slate-500 hover:text-backgroundLightBlue transition-colors duration-200">
                    VIEW CASE STUDY <ChevronRight size={14} />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default SuccessStoriesSection
