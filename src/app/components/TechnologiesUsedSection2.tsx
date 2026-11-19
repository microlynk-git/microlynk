'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Code, 
  Server, 
  Database, 
  Wifi, 
  Layers, 
  Smartphone, 
  Cloud, 
  Settings, 
  Activity,
  Box,
  Terminal,
  Globe,
  Zap
} from 'lucide-react';


// Import new SVGs
import altiumdesignerIcon from "@/assets/TechSVGs/altiumdesigner-icon.svg";
import arduinoIcon from "@/assets/TechSVGs/arduino-icon.svg"
import azureIcon from "@/assets/TechSVGs/azure-icon.svg"
import cPlusPlusIcon from "@/assets/TechSVGs/c-plus-plus-programming-language-icon.svg"
import cIcon from "@/assets/TechSVGs/c-program-icon.svg"
import firebaseIcon from "@/assets/TechSVGs/google-firebase-icon.svg"
import linuxIcon from "@/assets/TechSVGs/linux-icon.svg"
import nodeRedIcon from "@/assets/TechSVGs/node-red-icon.svg"
import raspberryPiIcon from "@/assets/TechSVGs/raspberry-pi-icon.svg"
import armCortexIcon from "@/assets/ICONS/armcortex.svg";
import KiCadIcon from "@/assets/ICONS/KiCad-Logo.svg.svg";
import OrCadIcon from "@/assets/ICONS/OrCAD_Logo.svg.svg";
import rtosIcon from "@/assets/ICONS/rtos-768x768.png.svg";
import stm32Icon from "@/assets/ICONS/stm32.svg";
import nodeMCUIcon from "@/assets/ICONS/nodemcu.svg";
import freeRTOSIcon from "@/assets/ICONS/freertos.svg";
import esp32Icon from "@/assets/ICONS/esp32.svg";
import awsIoTIcon from "@/assets/ICONS/aws iot core.svg";
import azureIoTIcon from "@/assets/ICONS/azure iot.svg";
import eagleIcon from "@/assets/ICONS/Eagle--Streamline-Simple-Icons.svg";
import ltspiceIcon from "@/assets/ICONS/Ltspice--Streamline-Simple-Icons.svg";

interface TechnologiesUsedSection2Props {
  technologyUsed: string;
  technologiesUsed2?: {
    name: string;
    icon?: any;
  }[];
}

const TechnologiesUsedSection2: React.FC<TechnologiesUsedSection2Props> = ({ technologyUsed, technologiesUsed2 }) => {
  // Parse the comma-separated string into an array
  const technologies = technologyUsed.split(',').map(tech => tech.trim());

  // Helper to get icon for technology
  const getIconForTech = (techName: string) => {
    const lowerName = techName.toLowerCase();

    // 1. Check specific SVGs
    // if (lowerName.includes('aws')) return <img src={awsLogo} alt={techName} className="w-12 h-12 object-contain" />;
    // if (lowerName.includes('microsoft')) return <img src={microsoftLogo} alt={techName} className="w-12 h-12 object-contain" />;
    // if (lowerName.includes('kubernetes') || lowerName.includes('k8s')) return <img src={k8sLogo} alt={techName} className="w-12 h-12 object-contain" />;
    // if (lowerName.includes('tensorflow')) return <img src={tensorflowLogo} alt={techName} className="w-12 h-12 object-contain" />;
    // if (lowerName.includes('docker')) return <img src={dockerLogo} alt={techName} className="w-12 h-12 object-contain" />;
    // if (lowerName.includes('google cloud') || lowerName.includes('gcp')) return <img src={googleCloudLogo} alt={techName} className="w-12 h-12 object-contain" />;
    // if (lowerName.includes('openai')) return <img src={openAILogo} alt={techName} className="w-12 h-12 object-contain" />;
    // if (lowerName.includes('pytorch')) return <img src={pytorchLogo} alt={techName} className="w-12 h-12 object-contain" />;
    
    if (lowerName.includes('altium')) return <img src={altiumdesignerIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('arduino')) return <img src={arduinoIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('azure')) return <img src={azureIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName === 'c++') return <img src={cPlusPlusIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName === 'c') return <img src={cIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('firebase')) return <img src={firebaseIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('linux')) return <img src={linuxIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('node-red') || lowerName.includes('node red')) return <img src={nodeRedIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('raspberry pi')) return <img src={raspberryPiIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    
    // New mappings
    if (lowerName.includes('arm cortex') || lowerName === 'arm') return <img src={armCortexIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('kicad')) return <img src={KiCadIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('orcad')) return <img src={OrCadIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('eagle')) return <img src={eagleIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('ltspice')) return <img src={ltspiceIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName === 'rtos') return <img src={rtosIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('stm32')) return <img src={stm32Icon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('nodemcu')) return <img src={nodeMCUIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('freertos')) return <img src={freeRTOSIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('esp32')) return <img src={esp32Icon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('aws iot') || lowerName === 'aws') return <img src={awsIoTIcon.src} alt={techName} className="w-12 h-12 object-contain" />;
    if (lowerName.includes('azure iot')) return <img src={azureIoTIcon.src} alt={techName} className="w-12 h-12 object-contain" />;

    // 2. Check Lucide fallbacks based on keywords
    if (lowerName.includes('rtos') || lowerName.includes('freertos')) return <Cpu className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('stm32') || lowerName.includes('esp32') || lowerName.includes('arm') || lowerName.includes('avr')) return <Cpu className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('i²c') || lowerName.includes('spi') || lowerName.includes('uart') || lowerName.includes('can') || lowerName.includes('modbus')) return <Activity className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('pcb') || lowerName.includes('kicad') || lowerName.includes('eagle') || lowerName.includes('orcad') || lowerName.includes('proteus')) return <Layers className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('sensor') || lowerName.includes('actuator')) return <Wifi className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('mqtt') || lowerName.includes('rest') || lowerName.includes('websocket') || lowerName.includes('api')) return <Globe className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('lora') || lowerName.includes('zigbee') || lowerName.includes('gsm') || lowerName.includes('4g') || lowerName.includes('ble') || lowerName.includes('bluetooth')) return <Wifi className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('cloud') || lowerName.includes('dashboard')) return <Cloud className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('app') || lowerName.includes('mobile')) return <Smartphone className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('python')) return <Terminal className="w-12 h-12 text-gray-700" />;
    if (lowerName.includes('data') || lowerName.includes('analytics')) return <Database className="w-12 h-12 text-gray-700" />;

    // Default
    return <Box className="w-12 h-12 text-gray-700" />;
  };

  const getMarqueeStyle = (duration: string) => ({
    willChange: 'transform',
    '--marquee-duration': duration,
  } as React.CSSProperties);

  // Prepare items for marquee
  let marqueeItems: { name: string, icon: React.ReactNode }[] = [];

  if (technologiesUsed2 && technologiesUsed2.length > 0) {
    marqueeItems = technologiesUsed2.map(item => ({
      name: item.name,
      icon: item.icon ? <img src={item.icon.src || item.icon} alt={item.name} className="w-12 h-12 object-contain" /> : getIconForTech(item.name)
    }));
  } else {
    marqueeItems = technologies.map(tech => ({
      name: tech,
      icon: getIconForTech(tech)
    }));
  }

  // Duplicate the array to ensure seamless scrolling
  const displayItems = [
    ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems,
    ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems,
    ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems,
    ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems,
    ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems,
    ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems,
    ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems,
    ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-[45px] font-semibold text-brand-primary mb-14 text-left font-regular">Technologies Used</h2>
        
        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <motion.div
            className="flex items-center"
            animate={{ x: "-200%" }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex-none flex flex-col items-center justify-center gap-4 min-w-[120px] mr-16"
              >
                <div className="h-16 flex items-center justify-center">
                    {item.icon}
                </div>
                <span className="text-lg font-semibold font-inter text-gray-800 text-center max-w-[150px] leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesUsedSection2;
