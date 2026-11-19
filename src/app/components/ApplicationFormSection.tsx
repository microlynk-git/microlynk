"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Envelope from "@/assets/Microlynk Website Material/Submission Page Icon.svg"
import Image from "next/image"
import { motion, Variants } from "framer-motion";

const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  position: z.string().min(1, "Position is required"),
  portfolio: z.string().url("Invalid URL").optional().or(z.literal("")),
  source: z.string().min(1, "Please select an option"),
  motivation: z.string().min(10, "Please provide at least 10 characters"),
  resume: z
    .custom<FileList>()
    .refine((files) => files?.length > 0, "Resume is required"),
})

type ApplicationFormData = z.infer<typeof applicationSchema>

const textVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -3 }, // Move text slightly to the left
};

const iconVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 3 }, // Move icon slightly to the right
};

const ApplicationFormSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  })

  const onSubmit = (data: ApplicationFormData) => {
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (isSubmitted) {
    return (
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-15 text-center">
          <div className="flex justify-center mb-8">
             <div className="w-24 h-24 text-backgroundLightBlue">
                <Image src={Envelope} alt="Envelope" width={100} height={100}/>
             </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-backgroundDarkBlue font-regular">
            Thanks for submitting!
          </h1>
          <p className="text-gray-600 font-inter leading-relaxed text-lg mb-12 max-w-2xl mx-auto font-inter">
            Our team will review your application and reach out if there's a suitable match. We appreciate your interest in joining Microlynk.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFileName(null)
              reset()
            }}
            className="px-8 py-4 bg-backgroundLightBlue  text-white font-regular font-bold text-sm uppercase tracking-wider hover:bg-opacity-90 transition-opacity"
          >
            Submit Another Application
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-20 bg-white ">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-15">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-regular font-semibold mb-6 text-backgroundDarkBlue">
            Apply Now Form
          </h1>
          <p className="text-gray-600 font-inter leading-relaxed text-lg">
            Join MicroLynk and help shape the future of technology and innovation. Please fill out the form below and attach your resume. Our team will review your application and get in touch if your profile matches an open position.
          </p>
        </motion.div>

        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
          
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h2 className="text-xl  font-regular font-semibold text-backgroundLightBlue uppercase mb-6 tracking-wide">
              Personal Information
            </h2>

            {/* Resume Upload */}
            <div className={`border-2 border rounded-lg p-10 mb-8 flex flex-col items-center justify-center text-center bg-white ${errors.resume ? "border-red-500" : "border-gray-400"}`}>
              <h3 className="text-lg font-regular font-bold text-gray-900 mb-2">Resume/CV</h3>
              <p className="text-sm text-gray-500 font-inter mb-6">
                You can upload a .pdf, .doc, .docx, .txt or .rtf file. <br />
                Drag and drop or add a file.
              </p>
              
              <input
                type="file"
                id="resume"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.rtf"
                {...register("resume", {
                  onChange: (e) => {
                    if (e.target.files?.[0]) {
                      setFileName(e.target.files[0].name)
                    }
                  }
                })}
              />
              
              <label
                htmlFor="resume"
                className="cursor-pointer px-6 py-2 border-2 border-gray-400 text-sm font-medium text hover:bg-gray-50 transition-colors bg-white shadow-sm font-inter flex items-center"
              >
                {fileName ? (
                  <span className="text-backgroundDarkBlue font-bold">{fileName}</span>
                ) : (
                  <>
                    Choose File <span className="text-lg font-medium ml-1">+</span>
                  </>
                )}
              </label>
              {errors.resume && (
                <p className="text-red-500 text-sm mt-2">{errors.resume.message as string}</p>
              )}
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-regular font-semibold text-backgroundDarkBlue">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  {...register("firstName")}
                  className={`w-full px-4 py-3 rounded-md border-2 ${errors.firstName ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-backgroundLightBlue focus:border-transparent placeholder-gray-400 font-inter`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-regular font-semibold text-backgroundDarkBlue">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  {...register("lastName")}
                  className={`w-full px-4 py-3 rounded-md border-2 ${errors.lastName ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-backgroundLightBlue focus:border-transparent placeholder-gray-400 font-inter`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-regular font-semibold text-backgroundDarkBlue">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-md border-2 ${errors.email ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-backgroundLightBlue focus:border-transparent placeholder-gray-400 font-inter`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-regular font-semibold text-backgroundDarkBlue">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  {...register("phone")}
                  className={`w-full px-4 py-3 rounded-md border-2 ${errors.phone ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-backgroundLightBlue focus:border-transparent placeholder-gray-400 font-inter`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Application Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h2 className="text-xl font-regular font-semibold text-backgroundLightBlue uppercase mb-6 tracking-wide">
              Application Details
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="position" className="block text-sm font-regular font-semibold text-backgroundDarkBlue">
                  Position Applying For
                </label>
                <input
                  type="text"
                  id="position"
                  placeholder="select an option"
                  {...register("position")}
                  className={`w-full px-4 py-3 rounded-md border-2 ${errors.position ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-backgroundLightBlue focus:border-transparent placeholder-gray-400 font-inter`}
                />
                {errors.position && (
                  <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="portfolio" className="block text-sm font-regular font-semibold text-backgroundDarkBlue">
                  LinkedIn / Portfolio URL
                </label>
                <input
                  type="url"
                  id="portfolio"
                  placeholder="https://linkedin.com/in/yourprofile"
                  {...register("portfolio")}
                  className={`w-full px-4 py-3 rounded-md border-2 ${errors.portfolio ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-backgroundLightBlue focus:border-transparent placeholder-gray-400 font-inter`}
                />
                {errors.portfolio && (
                  <p className="text-red-500 text-sm mt-1">{errors.portfolio.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="source" className="block text-sm font-regular font-semibold text-backgroundDarkBlue">
                  How did you hear about us?
                </label>
                <div className="relative">
                  <select
                    id="source"
                    {...register("source")}
                    className={`w-full px-4 py-3 rounded-md border-2 ${errors.source ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-backgroundLightBlue focus:border-transparent text-gray-500 font-inter appearance-none bg-white`}
                    defaultValue=""
                  >
                    <option value="" disabled>select an option</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="website">Company Website</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <ChevronDown size={18}/>
                  </div>
                  {errors.source && (
                    <p className="text-red-500 text-sm mt-1">{errors.source.message}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cover Letter / Motivation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h2 className="text-xl font-regular font-bold text-backgroundLightBlue uppercase mb-6 tracking-wide">
              Cover Letter / Motivation
            </h2>

            <div className="space-y-2">
              <label htmlFor="motivation" className="block text-sm font-regular font-semibold text-backgroundDarkBlue">
                Tell us why you'd like to join Microlynk
              </label>
              <textarea
                id="motivation"
                rows={6}
                placeholder="Share your motivation and what excites you about joining our team..."
                {...register("motivation")}
                className={`w-full px-4 py-3 rounded-md border-2 ${errors.motivation ? "border-red-500" : "border-gray-400"} focus:outline-none focus:ring-2 focus:ring-backgroundLightBlue focus:border-transparent placeholder-gray-400 font-inter resize-none`}
              ></textarea>
              {errors.motivation && (
                <p className="text-red-500 text-sm mt-1">{errors.motivation.message}</p>
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <div>
            <motion.button
  type="submit"
  // Framer Motion Props
  initial="initial"
  whileHover="hover"
  // Your existing Tailwind CSS classes
  className="px-8 py-4 bg-backgroundLightBlue text-white font-regular font-bold text-sm uppercase tracking-wider hover:bg-opacity-90 transition-opacity flex items-center gap-2"
>
  {/* 1. Wrap Text in motion.span with textVariants */}
  <motion.span variants={textVariants}>
    Submit Application
  </motion.span>
  
  {/* 2. Wrap Icon in motion.span with iconVariants */}
  <motion.span variants={iconVariants}>
    <ChevronRight size={18} />
  </motion.span>
</motion.button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default ApplicationFormSection
