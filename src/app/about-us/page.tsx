"use client"

import Image from "next/image";
import backgroundImage from "@/assets/About us Images/01 (1).svg"
import Navbar from "../components/Navbar";
import CTASection from "../components/CTASection";
import OurPeopleSection from "../components/OurPeopleSection";
import Footer from "../components/Footer";
import CoreValuesSection from "../components/CoreValuesSection";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-[500px] bg-cover bg-center relative">
      <Image
        src={backgroundImage}
        alt="About Us Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-blue/60"></div>

      {/* Use flexbox to center vertically and apply consistent left padding */}
      <div className='absolute inset-0 flex items-center px-4 lg:px-38'> 
        {/* Increased px-20 (or whatever value looks right) for horizontal padding */}
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-white text-4xl sm:text-2xl lg:text-5xl font-regular font-semibold leading-tight"
        >
          About Us
        </motion.h1>
      </div>
      

    </div>

    {/* Intro Text Section */}
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="space-y-8 text-lg md:text-xl text-gray-600 font-inter leading-relaxed"
        >
          <p>
            At <strong>Microlynk</strong>, we design and build intelligent embedded systems and IoT solutions that connect innovation with real-world performance. With over a decade of international experience, we've delivered smart, scalable, and reliable technologies that power automation, connectivity, and digital transformation.

          </p>
          <p>
            Backed by a multidisciplinary team of engineers, researchers, and developers, we bring deep expertise in hardware, firmware, and cloud integration. Together, we help businesses across industries — from agriculture to healthcare — turn complex challenges into intelligent, connected solutions.
          </p>
        </motion.div>
      </div>
    </section>
    <OurPeopleSection/>
    <CoreValuesSection/>
            <CTASection />
            <Footer />
        </div>
    )

  }
