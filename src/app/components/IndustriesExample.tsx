"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { industriesData } from "../data/industries"
import industry6 from "@/assets/Home Automation.svg"
import industry3 from "@/assets/Consumer Electronics.svg"
import industry4 from "@/assets/Automotive & Tracking Systems.svg"
import industry5 from "@/assets/Healthcare Devices.svg"
import industry2 from "@/assets/Smart Agriculture.svg"
import industry1 from "@/assets/Industrial Automation.svg"
import industry7 from "@/assets/Smart Utilities & Water Management.svg"

const industryImages: Record<number, any> = {
  1: industry1,
  2: industry2,
  3: industry3,
  4: industry4,
  5: industry5,
  6: industry6,
  7: industry7,
}

interface Industry {
  id: number
  title: string
  slug: string
  image?: any
  link: string
}

const IndustriesExample: React.FC = () => {
  // Map industry data to component format
  const industries: Industry[] = industriesData.map((industry) => ({
    id: industry.id,
    title: industry.title,
    slug: industry.slug,
    link: `/industries/${industry.slug}`,
    image: industryImages[industry.id],
  }))

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid of Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {industries.map((industry) => (
            <Link key={industry.id} href={industry.link} className="flex flex-col group cursor-pointer">
              {/* Image Placeholder */}
              <div className="w-full h-[200px] bg-gray-200 rounded-lg mb-6 overflow-hidden relative">
                {industry.image ? (
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-regular font-semibold mb-4">
                {industry.title}
              </h3>

              {/* View Full Industry Link */}
              <span
                className="inline-flex items-center text-backgroundLightBlue font-inter text-sm font-medium hover:text-backgroundDarkBlue transition-colors duration-200"
              >
                View Industry Details
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

export default IndustriesExample
