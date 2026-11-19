import embeddedSystems from "@/assets/Embedded Systems.svg";
import hardwarePcbDesign from "@/assets/Hardware & PCB Design.svg";
import iotSolutions from "@/assets/IoT Solutions.svg";
import CustomProductDevelopment from "@/assets/Custom Product Development.svg";
import consulting_RD from "@/assets/Consulting & R&D.svg";
import altiumdesignerIcon from "@/assets/ICONS/altium designer.svg";
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


export interface ServiceData {
  id: number;
  title: string;
  slug: string;
  headerImage: string;
  description: string;
  keyServices: {
    title: string;
    description: string;
  }[];
  strategies: {
    title: string;
    description: string;
  }[];
  technologyUsed: string;
  expectedOutcomes: string[];
  ctaText: string;
  supportLine: string;
  caseStudies: string[]; // Array of case study slugs
  technologiesUsed2?: {
    name: string;
    icon?: any;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Embedded Systems",
    slug: "embedded-systems",
    headerImage: embeddedSystems,
    description:
      "In today’s connected and automated world, embedded systems form the foundation of modern technology — from industrial machines and medical devices to consumer electronics and smart sensors. At Microlynk, we specialize in designing, developing, and optimizing embedded systems that bring intelligence, precision, and reliability to hardware. With over a decade of international experience, we create microcontroller-based systems that seamlessly combine hardware and software, ensuring real-time performance, energy efficiency, and long-term stability.",
    keyServices: [
      {
        title: "Microcontroller-Based System Design",
        description:
          "Architecture design using industry-standard platforms like ARM, STM32, PIC, AVR, and ESP.",
      },
      {
        title: "Firmware Development",
        description:
          "High-performance programming in C/C++ and RTOS for optimized system control and real-time responsiveness.",
      },
      {
        title: "Custom Protocols & Device Drivers",
        description:
          "Development of efficient communication layers and peripheral drivers for custom hardware.",
      },
      {
        title: "Real-Time Performance Tuning",
        description:
          "Optimization for speed, stability, and power efficiency across embedded applications.",
      },
      {
        title: "Hardware-Software Co-Design",
        description:
          "Integrated development that ensures firmware and hardware function flawlessly together.",
      },
    ],
    strategies: [
      {
        title: "Hardware-Software Harmony",
        description:
          "We ensure firmware is precisely tuned to hardware specifications for maximum performance.",
      },
      {
        title: "Reliability at Core",
        description:
          "Every design undergoes extensive validation and testing to meet industrial-grade standards.",
      },
      {
        title: "Scalability & Flexibility",
        description:
          "Systems built to adapt — whether you need a prototype or a production-ready design.",
      },
      {
        title: "Client-Centered Collaboration",
        description:
          "We work closely with you to ensure each feature aligns with your technical and business goals.",
      },
    ],
    technologyUsed:
      "C, C++, RTOS, FreeRTOS, STM32, ESP32, ARM Cortex, Raspberry Pi, AVR, I²C, SPI, UART, CAN, Modbus, Custom communication stacks.",
    expectedOutcomes: [
      "Smarter, faster, and more efficient embedded systems.",
      "Enhanced automation and process control.",
      "Improved hardware reliability and reduced downtime.",
      "Long-term scalability and maintainability of devices.",
    ],
    ctaText: "Build reliable embedded systems that power the future.",
    supportLine: "Turn your product vision into high-performance embedded reality.",
    caseStudies: [
      "smart-distribution-panel",
      "iot-based-smart-energy-meter",
      "smart-iot-water-quality-monitoring",
      "autonomous-warehouse-navigation-robot"
    ],
    technologiesUsed2: [
      { name: "C", icon: cIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "RTOS" },
      { name: "FreeRTOS" },
      { name: "STM32" },
      { name: "ESP32" },
      { name: "ARM Cortex" },
      { name: "Raspberry Pi", icon: raspberryPiIcon },
    ],
  },
  {
    id: 2,
    title: "Hardware & PCB Design",
    slug: "hardware-pcb-design",
    headerImage: hardwarePcbDesign,
    description:
      "Every great product begins with strong hardware. At Microlynk, we turn ideas into robust, manufacturable electronics through precision circuit design, PCB layout, and validation. Our engineers combine creativity with technical depth to deliver hardware that’s optimized for performance, power efficiency, and real-world durability. Whether you’re developing a prototype or scaling for production, we ensure your hardware is reliable, efficient, and ready for integration.",
    keyServices: [
      {
        title: "Circuit Design & Simulation",
        description:
          "Comprehensive electronic circuit design using advanced tools for analog, digital, and mixed-signal systems.",
      },
      {
        title: "PCB Layout & Fabrication",
        description:
          "Multi-layer, compact, and low-power PCB layouts optimized for manufacturability and performance.",
      },
      {
        title: "Prototyping & Validation",
        description:
          "Rapid prototype development with functional testing to ensure stability before mass production.",
      },
      {
        title: "Sensor & Actuator Integration",
        description:
          "Intelligent interfacing for motion control, environmental sensing, and industrial automation.",
      },
      {
        title: "Design for Manufacturing (DFM)",
        description:
          "Ensuring designs are cost-effective, scalable, and production-ready.",
      },
    ],
    strategies: [
      {
        title: "Precision Engineering",
        description:
          "Every trace, via, and component is designed with purpose — minimizing noise and maximizing reliability.",
      },
      {
        title: "Iterative Testing",
        description:
          "Continuous testing and refinement at each stage of the design process for faster, fault-free output.",
      },
      {
        title: "Cost & Power Optimization",
        description:
          "Balancing performance with energy efficiency and manufacturing feasibility.",
      },
      {
        title: "Collaborative Development",
        description:
          "We align hardware design with firmware and system-level requirements for seamless integration.",
      },
    ],
    technologyUsed:
      "Altium Designer, KiCad, Proteus, Eagle, OrCAD, LTSpice, STM32, ESP32, Arduino, Sensors, Actuators, Industrial control modules.",
    expectedOutcomes: [
      "Reliable and efficient electronic hardware.",
      "Reduced time from concept to prototype.",
      "Lower production costs with improved design quality.",
      "Ready-to-scale hardware for industrial or consumer products.",
    ],
    ctaText: "Engineer hardware that drives innovation.",
    supportLine: "From schematic to prototype — we bring your electronics to life",
    caseStudies: [
      "smart-distribution-panel",
      "wireless-audio-playback-device",
      "esp32-s3-smart-display",
      "iot-based-smart-energy-meter"
    ],
    technologiesUsed2: [
      { name: "Altium Designer", icon: altiumdesignerIcon },
      { name: "KiCad" },
      { name: "Proteus" },
      { name: "Eagle" },
      { name: "OrCAD" },
      { name: "LTSpice" },
      { name: "STM32" },
      { name: "ESP32" },
      { name: "Arduino", icon: arduinoIcon },
    ],
  },
  {
    id: 3,
    title: "IoT Solutions",
    slug: "iot-solutions",
    headerImage: iotSolutions,
    description:
      "In an increasingly connected world, smart devices and data-driven systems are reshaping how industries operate. At Microlynk, we design and deploy end-to-end IoT solutions that bridge the gap between physical devices and digital intelligence. From sensor integration and wireless connectivity to cloud dashboards and edge computing, we empower businesses to monitor, automate, and optimize their operations in real time. Our IoT solutions are built for performance, scalability, and security — enabling seamless data flow between devices, gateways, and the cloud. Whether you’re building a smart farm, connected vehicle, or industrial automation system, we provide the technology backbone that makes it possible.",
    keyServices: [
      {
        title: "Connectivity Integration",
        description:
          "Wi-Fi, Bluetooth, LoRa, Zigbee, GSM/4G, and other communication standards for diverse use cases.",
      },
      {
        title: "Cloud & Edge Systems",
        description:
          "Real-time data exchange through MQTT, REST, and WebSockets for low-latency operations.",
      },
      {
        title: "IoT Dashboard & Analytics",
        description:
          "Custom dashboards for data visualization, performance tracking, and remote control.",
      },
      {
        title: "Edge Computing & Data Processing",
        description:
          "Localized computation for reduced latency, increased reliability, and data privacy.",
      },
      {
        title: "API Development & Integration",
        description:
          "Secure APIs for seamless cloud-to-device communication and third-party integration.",
      },
    ],
    strategies: [
      {
        title: "Data-Driven Design",
        description:
          "Turning raw device data into actionable insights that improve efficiency and decision-making.",
      },
      {
        title: "Security by Design",
        description:
          "End-to-end encryption, secure boot, and OTA updates to protect connected devices.",
      },
      {
        title: "Modular & Scalable Architecture",
        description:
          "Systems that grow with your business — from pilot projects to full-scale deployments.",
      },
      {
        title: "Cross-Platform Compatibility",
        description:
          "Integration across diverse hardware and software ecosystems for unified control.",
      },
    ],
    technologyUsed:
      "AWS IoT Core, Azure IoT Hub, Node-RED, Firebase, MQTT, REST APIs, LoRaWAN, ESP32, Raspberry Pi, STM32, Cloud-based dashboards.",
    expectedOutcomes: [
      "Real-time visibility and control over connected assets.",
      "Increased automation and operational efficiency.",
      "Predictive maintenance through intelligent data insights.",
      "Faster decision-making powered by continuous data flow.",
    ],
    ctaText: "Connect your world through smart IoT innovation.",
    supportLine:
      "Enable real-time insights, automation, and control with Microlynk IoT solutions.",
    caseStudies: [
      "smart-iot-water-quality-monitoring",
      "aeroponic-growroom-automation",
      "indoor-positioning-system",
      "iot-based-smart-energy-meter"
    ],
    technologiesUsed2: [
      { name: "AWS IoT Core" },
      { name: "Azure IoT Hub", icon: azureIcon },
      { name: "Node-RED", icon: nodeRedIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "ESP32" },
      { name: "Raspberry Pi", icon: raspberryPiIcon },
      { name: "STM32" },
    ],
  },
  {
    id: 4,
    title: "Custom Product Development",
    slug: "custom-product-development",
    headerImage: CustomProductDevelopment,
    description:
      "At Microlynk, we transform ideas into market-ready smart products. From concept and design to manufacturing and deployment, our Custom Product Development services cover the entire journey of bringing intelligent electronics to life. Whether it’s a consumer IoT device, industrial automation system, or connected vehicle component, we deliver fully integrated solutions that combine hardware, firmware, and cloud technologies. With over a decade of hands-on experience, our team ensures that every product we build meets the highest standards of performance, usability, and scalability — helping businesses innovate faster and smarter.",
    keyServices: [
      {
        title: "Smart Device Development",
        description:
          "Design and engineering of connected electronics for commercial and industrial use.",
      },
      {
        title: "Automation Systems",
        description:
          "Intelligent control solutions for buildings, vehicles, and manufacturing processes.",
      },
      {
        title: "Consumer IoT Products",
        description:
          "Compact, user-friendly devices that simplify daily life through seamless connectivity.",
      },
      {
        title: "End-to-End Integration",
        description:
          "Unified hardware, firmware, and cloud architecture for complete product ecosystems.",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Rapid MVP and prototype creation for early validation and investor presentation.",
      },
    ],
    strategies: [
      {
        title: "Innovation First",
        description:
          "Every product is built around unique ideas that deliver measurable impact.",
      },
      {
        title: "Agile Development Process",
        description:
          "Iterative design, prototyping, and refinement for faster time-to-market.",
      },
      {
        title: "User-Centric Design",
        description:
          "Solutions that are intuitive, efficient, and built for real-world reliability.",
      },
      {
        title: "Sustainability & Scalability",
        description:
          "Designs that can evolve with future technologies and market needs.",
      },
    ],
    technologyUsed:
      "ESP32, STM32, Raspberry Pi, NodeMCU, BLE, GSM/4G, AWS IoT, Azure Cloud, Custom PCB design, Companion mobile app integration.",
    expectedOutcomes: [
      "Accelerated product innovation and launch cycles.",
      "Smart, connected products tailored to market demand.",
      "Reduced development risk through validated prototyping.",
      "Competitive advantage through intelligent, high-performance design.",
    ],
    ctaText: "Turn your concept into a smart, market-ready product.",
    supportLine:
      "From prototype to production — Microlynk makes your innovation tangible",
    caseStudies: [
      "real-time-dsp-echo-playback",
      "autonomous-warehouse-navigation-robot",
      "remote-gsm-camera-system",
      "smart-distribution-panel"
    ],
    technologiesUsed2: [
      { name: "ESP32" },
      { name: "STM32" },
      { name: "Raspberry Pi", icon: raspberryPiIcon },
      { name: "NodeMCU" },
      { name: "AWS IoT" },
      { name: "Azure Cloud", icon: azureIcon },
    ],
  },
  {
    id: 5,
    title: "Consulting & R&D",
    slug: "consulting-and-rd",
    headerImage: consulting_RD,
    description:
      "Innovation begins with insight — and at Microlynk, our Consulting and R&D services help businesses explore new ideas, validate concepts, and design the technologies of tomorrow. Whether you’re refining a system architecture, testing technical feasibility, or building an MVP, we provide the expertise and research-driven approach to turn concepts into viable, scalable solutions. Our multidisciplinary team of engineers, researchers, and product strategists collaborates closely with you to ensure that every project is guided by both technical precision and market relevance — bridging the gap between innovation and implementation.",
    keyServices: [
      {
        title: "System Architecture Consulting",
        description:
          "Designing optimized, scalable system architectures aligned with business goals.",
      },
      {
        title: "Feasibility Studies",
        description:
          "Evaluating technical and economic viability to de-risk product development.",
      },
      {
        title: "Prototype & MVP Development",
        description:
          "Building functional models for testing, validation, and investor presentations.",
      },
      {
        title: "Technology Research",
        description:
          "Exploring emerging trends in embedded systems, IoT, and automation.",
      },
      {
        title: "R&D Partnerships",
        description:
          "Collaborating with startups, universities, and enterprises to co-develop innovative technologies.",
      },
    ],
    strategies: [
      {
        title: "Insight-Driven Approach",
        description:
          "Each project starts with deep analysis of market needs, user challenges, and technical pathways.",
      },
      {
        title: "Collaborative Process",
        description:
          "We work as an extension of your team, ensuring transparency and alignment throughout.",
      },
      {
        title: "Future-Focused Thinking",
        description:
          "Solutions designed for long-term scalability, adaptability, and integration with upcoming technologies.",
      },
      {
        title: "Rapid Validation",
        description:
          "Early-stage testing and iteration to accelerate innovation cycles and reduce time-to-market.",
      },
    ],
    technologyUsed:
      "Embedded Linux, Edge AI, Advanced sensor networks, IoT frameworks, Data analytics, Cloud connectivity, Prototyping platforms.",
    expectedOutcomes: [
      "Reduced technical and financial risk in product development.",
      "Faster innovation through validated concepts and prototypes.",
      "Future-ready systems designed for scalability and performance.",
      "A clear roadmap from research to market deployment.",
    ],
    ctaText: "Accelerate innovation with expert embedded consulting.",
    supportLine:
      "Explore, validate, and scale with confidence through Microlynk R&D.",
    caseStudies: [
      "esp32-s3-smart-display",
      "smart-iot-water-quality-monitoring",
      "remote-gsm-camera-system",
      "wireless-audio-playback-device"
    ],
    technologiesUsed2: [
      { name: "Embedded Linux", icon: linuxIcon },
      { name: "AWS IoT" },
      { name: "Azure Cloud", icon: azureIcon },
    ],
  },
];
