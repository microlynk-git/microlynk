"use client"

import type React from "react"

interface CaseDetailHeroSectionProps {
  title: string
}

const CaseDetailHeroSection: React.FC<CaseDetailHeroSectionProps> = ({ title }) => {
  return (
    <section 
      className="w-full relative flex flex-col items-center justify-center text-white overflow-hidden"
      style={{ 
        height: '600px',
        background: 'radial-gradient(at bottom left, #0056AB 0%, #0F172A 60%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-regular font-semibold leading-tight">
          {title}
        </h1>
      </div>

      {/* Optional: Subtle overlay or texture can be added here if needed */}
    </section>
  )
}

export default CaseDetailHeroSection
