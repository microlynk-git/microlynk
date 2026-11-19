"use client"
import Image from "next/image"
import project1 from "@/assets/projects_images/Industrial Smart Electrical Distribution Panel.svg"
import project2 from "@/assets/projects_images/IoT-Based Smart Energy Meter (Three-Phase Industrial Metering System).svg"
import project3 from "@/assets/projects_images/LoRaWAN-Based Smart Campus Monitoring & Automation System.svg"
import project4 from "@/assets/projects_images/BLE-Based Worker Attendance & Bus Tracking Ecosystem.svg"
import project5 from "@/assets/projects_images/indoor-positioning-system.svg"
import project6 from "@/assets/projects_images/Smart IoT Water Quality Monitoring & Automated Dosing Controller.svg"
import project7 from "@/assets/projects_images/Aeroponic Growroom Automation & Environmental Intelligence System.svg"
import project8 from "@/assets/projects_images/ESP32-S3 Smart Display & Cross-Platform Synchronization System.svg"
import project9 from "@/assets/projects_images/Wireless Audio Playback Device with Battery Management.svg"
import project10 from "@/assets/projects_images/real-time-dsp.svg"
import project11 from "@/assets/projects_images/autonomous-warehouse-navigation.svg"
import project12 from "@/assets/projects_images/remote-gsm-camera.svg"

import type React from "react"
import Link from "next/link"
import { caseStudiesData } from "../data/caseStudies"

interface CaseStudy {
  id: number
  title: string
  title2?: string
  slug: string
  image?: any 
  link: string
}

const CaseStudiesExample: React.FC = () => {
  // Map project images to an array
  const projectImages = [
    project1, project2, project3, project4, project5, project6,
    project7, project8, project9, project10, project11, project12
  ];

  // Map case study data to component format
  const caseStudies: CaseStudy[] = caseStudiesData.map((study, index) => ({
    id: index + 1,
    title: study.title,
    title2: study.title2,
    slug: study.slug,
    link: `/case-study/${study.slug}`,
    image: projectImages[index], 
  }))

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {caseStudies.map((study) => (
            <Link href={study.link} key={study.id} className="flex flex-col group cursor-pointer">
              {/* Project Image */}
              <div className="w-full h-[200px] bg-gray-200 rounded-lg mb-6 overflow-hidden">
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-regular font-semibold mb-4">
                {study.title}
                {study.title2 && (
                  <>
                    
                    <span className="text-xl font-regular font-semibold ">{` `}{study.title2}</span>
                  </>
                )}
              </h3>

              {/* View Full Case Study Link */}
              <span
                className="inline-flex items-center text-backgroundLightBlue font-inter text-sm font-medium hover:text-backgroundDarkBlue transition-colors duration-200"
              >
                View Full Case Study
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesExample
