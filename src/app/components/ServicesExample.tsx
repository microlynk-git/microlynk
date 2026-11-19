"use client"

import type React from "react"
import Link from "next/link"
import { servicesData } from "../data/services"

const ServicesExample: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {servicesData.map((service) => (
            <div key={service.id} className="flex flex-col group">
              {/* Image Placeholder - using a gradient for now as in IndustriesExample */}
              <div className="w-full h-[200px] bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-regular font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description Snippet */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* View Full Service Link */}
              <Link
                href={`/service/${service.slug}`}
                className="inline-flex items-center text-backgroundLightBlue font-inter text-sm font-medium hover:text-backgroundDarkBlue transition-colors duration-200"
              >
                View Service Details
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesExample
