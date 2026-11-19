"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import service1 from '@/assets/Microlynk Website Material/Projects Images/Projects Images/Smart Agriculture Monitoring System.svg'
import service2 from '@/assets/Microlynk Website Material/Projects Images/Projects Images/Industrial Automation Control Unit.svg'
import service3 from '@/assets/Microlynk Website Material/Projects Images/Projects Images/Remote Health Tracking Device.svg'
import service4 from '@/assets/Microlynk Website Material/Projects Images/Projects Images/Home Energy Automation.svg'
import { motion } from "framer-motion"

import { caseStudiesData } from "../data/caseStudies"

interface ProjectCardProps {
  title: string
  description: string
  imagePlaceholder: any
  caseStudyLink?: string
  featured?: boolean
}
const buttonVariants = {
  // Define a variant for the parent button 
  hover: {},
};

const textVariants = {
  initial: { x: 0 },
  hover: { x: -2 }, // Move text slightly to the left
};

const arrowVariants = {
  initial: { x: 0 },
  hover: { x: 2 }, // Move arrow slightly to the right
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imagePlaceholder,
  caseStudyLink = "#",
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-[400px] bg-backgroundDarkBlue hover:bg-backgroundLightBlue font-regular overflow-hidden cursor-pointer transition-colors duration-300"
    >
      {/* Default State - Title and Image */}
      <div className="absolute inset-0 flex flex-col p-8 transition-opacity duration-300 opacity-100 lg:group-hover:opacity-0">
        <h3 className="text-xl font-bold mb-7 text-white pr-6 hidden lg:block">{title}</h3>
        <div className="flex-1 flex items-end lg:items-center justify-center pb-12 lg:pb-0">
          <Image
            src={imagePlaceholder}
            alt={title}
            width={160}
            height={160}
            className="object-contain w-28 h-28 lg:w-[160px] lg:h-[160px]"
          />
        </div>
      </div>

      {/* Hover State - Description and Button */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
        <div>
          <h3 className="text-xl font-bold mb-4 text-white pr-6">{title}</h3>
          <p className="text-sm leading-relaxed text-white">{description}</p>
        </div>

        {/* Case Study Button */}
        <div className="mt-auto">
          <Link
            href={caseStudyLink}
            className="inline-flex items-center gap-2 text-xs font-semibold text-white border border-slate-500 px-4 py-2  hover:bg-slate-800 transition-colors duration-200"
          >
            VIEW CASE STUDY →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

interface ProjectsSectionProps {
  onReadAll?: () => void
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onReadAll }) => {
  const projects: ProjectCardProps[] = caseStudiesData.slice(0, 4).map((study, index) => ({
    title: study.title,
    description: study.description2,
    imagePlaceholder: [service1, service2, service3, service4][index],
    caseStudyLink: `/case-study/${study.slug}`,
    featured: index === 0,
  }))

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-regular font-semibold text-backgroundDarkBlue mb-2">Projects</h2>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-regular font-bold text-backgroundDarkBlue mb-4 mt-4">
                Turning Challenges Into Success
              </h3>
              <p className="text-lightBlack font-inter">
                Discover how businesses achieve efficiency and growth with our solutions.
              </p>
            </div>

            {/* Read All Link */}
            <Link href="/case-study">
              <motion.span
                className="whitespace-nowrap text-backgroundLightBlue font-inter font-[550] flex items-center gap-2 cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
              >
                <motion.span variants={textVariants}>Read All</motion.span>
                <motion.span variants={arrowVariants}>→</motion.span>
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
