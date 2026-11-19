'use client'

import Image from 'next/image';
import {  ChevronRight } from 'lucide-react';
import backgroundImage from '@/assets/Microlynk Website Material/Header Images/Header Images/Hero Section Image.png'
import { motion, Variants, animate } from "framer-motion";

export default function HeroSection() {

  // Define the motion variants for the text and the icon
const buttonTextVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -3 }, // Move text 3px to the left
};

const buttonIconVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 3 }, // Move icon 3px to the right
};
    

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
    >
      <Image
        src={backgroundImage}
        alt="Hero Section Background"
        fill
        className="object-cover"
        priority
      />
      {/* overlay to dim background for readability */}
      <div className="absolute inset-0 bg-blue/60"></div>

      {/* content container */}
      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen ml-4 lg:ml-20 mt-10'>
        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-4 lg:px-8 ">
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl sm:text-2xl lg:text-7xl font-regular font-semibold leading-tight"
        >
          Building the future<br />
          of embedded & IoT Technology
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 text-white text-lg sm:text-xl max-w-xl font-regular"
        >
          We combine hardware excellence, advanced firmware, and cloud integration to build connected systems that empower industries worldwide.
        </motion.p>
        <motion.button
          initial="initial"
          whileHover="hover"
          animate="visible"
          variants={{
            initial: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.0 } }
          }}
          onClick={() => {
            const element = document.getElementById('services');
            if (element) {
              const y = element.getBoundingClientRect().top + window.scrollY - 65;
              animate(window.scrollY, y, {
                duration: 0.6,
                ease: "easeInOut",
                onUpdate: (latest: number) => window.scrollTo(0, latest)
              });
            }
          }}
          className="flex items-center justify-center bg-backgroundLightBlue text-white font-regular py-3 px-6 mt-7 w-fit lg:w-[28%]"
        >
          {/* Wrap Text in motion.span with textVariants */}
          <motion.span variants={buttonTextVariants}>
            View Services
          </motion.span>

          {/* Wrap Icon in motion.span with iconVariants */}
          <motion.span variants={buttonIconVariants} className="ml-2">
            <ChevronRight size={20} />
          </motion.span>
        </motion.button>
        
      </div>
      </div>
      
    </div>
  );
}
