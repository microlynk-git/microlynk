import industry1 from "@/assets/Industries Inner page Images/Industrial Automation.svg"
import industry2 from "@/assets/Industries Inner page Images/Smart Agriculture.svg"
import industry3 from "@/assets/Industries Inner page Images/Consumer Electronics.svg"
import industry4 from "@/assets/Industries Inner page Images/Automotive & Tracking Systems.svg"
import industry5 from "@/assets/Industries Inner page Images/Healthcare Devices.svg"
import industry6 from "@/assets/Industries Inner page Images/Home Automation.svg"
import industry7 from "@/assets/Industries Inner page Images/Smart Utilities & Water Management.svg"

export interface IndustryData {
  id: number
  title: string
  slug: string
  description: string
  description2: string
  areas: string[]
  image?: string
  headerImage: any
}

export const industriesData: IndustryData[] = [
  {
    id: 1,
    title: "Industrial Automation",
    slug: "industrial-automation",
    headerImage: industry1,
    description: "In today's competitive industrial landscape, efficiency, precision, and reliability are paramount. At Microlynk, we provide advanced embedded systems, IoT-enabled monitoring, and intelligent automation solutions that help industrial enterprises streamline operations, reduce downtime, and maximize productivity. Our solutions integrate seamlessly with existing infrastructure while enabling real-time control and actionable insights.",
    description2: "Streamlining operations with intelligent automation for maximum efficiency and reduced downtime.",
    areas: [
      "Process Automation: We design and implement intelligent control systems that manage complex industrial processes with precision. By integrating microcontroller-based automation, real-time feedback loops, and embedded control logic, we ensure consistent product quality. We minimize human error and optimize operational efficiency across manufacturing lines",
      "Predictive Maintenance: Our IoT-enabled solutions continuously monitor equipment health using sensor data and advanced analytics. Predictive algorithms detect anomalies and potential failures before they occur, allowing maintenance teams to schedule interventions proactively. This approach reduces unplanned downtime, extends machinery life, and lowers overall maintenance costs.",
      "Industrial Monitoring & Analytics: We develop integrated monitoring platforms that collect real-time data from sensors, actuators, and control systems. Advanced dashboards provide actionable insights into operational efficiency, energy consumption, and system performance. We empower decision-makers with the visibility required to optimize production and resource allocation.",
      "Robotics Integration: From robotic arms and conveyors to automated handling systems, we deliver embedded solutions that control and synchronize robotic operations with high precision. Our systems ensure reliable task execution, reduce manual labor. We enable flexible manufacturing processes.",
      "Energy Management Systems: We implement intelligent energy monitoring and control systems to optimize electricity usage across industrial facilities. Our solutions track energy consumption in real time, identify inefficiencies, and automate energy-saving operations, reducing operational costs and environmental footprint.",
      "Custom Control Systems: We provide tailored PLC, HMI, and microcontroller-based control systems for unique industrial applications. Each system is engineered to meet specific operational requirements, ensuring precise control, reliability, and long-term scalability.",
    ],
  },
  {
    id: 2,
    title: "Smart Agriculture",
    slug: "smart-agriculture",
    headerImage: industry2,
    description: "In modern agriculture, data-driven decision-making, automation, and connectivity are key to maximizing yield, conserving resources, and ensuring sustainability. At Microlynk, we provide advanced embedded systems, IoT solutions, and intelligent automation technologies that empower farmers and agribusinesses to monitor crops, livestock, and environmental conditions with precision. Our solutions transform traditional farming practices into smart, efficient, and scalable operations.",
    description2: "Empowering farmers with data-driven insights for sustainable and high-yield crop production.",
    areas: [
      "Precision Farming: We deploy sensor-driven systems to monitor soil moisture, nutrient composition, and crop health in real time. By integrating IoT devices with predictive analytics, farmers gain actionable insights that allow precise irrigation, fertilization, and crop management. These systems improve yield while minimizing resource wastage.",
      "Automated Irrigation Systems: Our intelligent irrigation controllers adjust water delivery based on soil conditions, weather forecasts, and crop requirements. These systems conserve water, reduce operational costs, and ensure crops receive optimal hydration at all times.",
      "Greenhouse Automation: We design embedded systems for controlled environment agriculture, managing temperature, humidity, ventilation, and lighting. Our solutions maintain optimal growing conditions, improve crop quality, and enable continuous monitoring and remote adjustments for maximum efficiency.",
      "Livestock Monitoring: Wearable sensors and IoT-enabled devices track the health, activity, and location of livestock. Real-time monitoring enables early detection of health issues, optimized feeding schedules. We help  improve herd management, increasing productivity and animal welfare.",
      "Crop Disease Detection: Using sensor data and AI-assisted analytics, our systems detect early signs of crop stress or disease. Timely alerts enable rapid intervention. This process reduces losses and improves overall crop health.",
      "Farm Data Analytics: We provide centralized dashboards that consolidate data from multiple sensors and devices. Farmers and agribusiness managers can visualize trends, monitor key performance indicators. We empower users to make informed decisions that drive productivity and sustainability.",
    ],
  },
  {
    id: 3,
    title: "Consumer Electronics",
    slug: "consumer-electronics",
    headerImage: industry3,
    description: "In today's fast-evolving market, smart, connected devices define user experience and convenience. At Microlynk, we design and develop embedded systems, IoT-enabled products, and intelligent automation solutions for the consumer electronics sector. Our focus is on creating reliable, innovative, and user-friendly devices that enhance everyday life, while maintaining scalability and manufacturability for global markets.",
    description2: "Designing smart, connected devices that enhance user experience and everyday convenience.",
    areas: [
      "Smart Home Devices: We develop connected devices such as smart lighting, thermostats, security systems, and energy management solutions. Our embedded systems and IoT integration ensure seamless communication, remote control, and automation. These solutions deliver convenience and efficiency to end users.",
      "Wearables & Health Gadgets: Our solutions include fitness trackers, health monitors, and wearable devices that collect real-time physiological and activity data. We utilize embedded systems, low-power design, and cloud connectivity. These features enable accurate monitoring and actionable insights for healthier lifestyles.",
      "Audio & Entertainment Systems: We design intelligent consumer electronics including smart speakers, streaming devices, and audio systems. Our designs include embedded controls, connectivity, and optimized performance. We focus on delivering a superior user experience and reliability.",
      "Connected Appliances: From kitchen gadgets to home appliances, we provide microcontroller-based solutions and IoT integration. Our systems allow for smart functionality, remote management, and predictive maintenance. These integrations improve efficiency and user convenience.",
      "Mobile Accessories & Peripheral Devices: Our embedded hardware and firmware solutions extend to high-performance mobile peripherals such as chargers, docks, and IoT-enabled controllers. We ensure compatibility, safety, and seamless operation across all devices.",
      "Product Lifecycle & Firmware Updates: We implement OTA  (Over-the-Air) firmware updates, device management platforms, and embedded diagnostics. These measures enhance longevity, security, and post-sale support for consumer electronics products.",
    ],
  },
  {
    id: 4,
    title: "Automotive & Tracking Systems",
    slug: "automotive-tracking-systems",
    headerImage: industry4,
    description: "The automotive industry is rapidly evolving with connected vehicles, telematics, and intelligent transportation solutions. At Microlynk, we develop embedded systems, IoT platforms, and smart tracking technologies that enhance vehicle performance, safety, and fleet management. Our solutions integrate real-time data, connectivity, and automation to enable smarter mobility, predictive maintenance, and operational efficiency.",
    description2: "Enhancing vehicle safety and fleet management through advanced tracking and connectivity.",
    areas: [
      "Vehicle Telematics: We design embedded systems that capture and transmit vehicle data, including location, speed, fuel consumption, and diagnostic information. These systems enable fleet operators and manufacturers to monitor performance, improve safety, and optimize operations.",
      "Fleet Management Solutions: Our IoT-enabled platforms provide centralized control and real-time tracking for commercial fleets. Features include route optimization and predictive maintenance alerts. We provide driver behavior monitoring and asset utilization reporting.",
      "Vehicle Diagnostics & Predictive Maintenance: We develop systems that monitor engine health, battery status, and critical vehicle components. Predictive analytics allow early detection of potential failures, reducing maintenance costs and avoiding downtime.",
      "Connected Vehicle Solutions: Embedded hardware and firmware enable vehicles to communicate with external networks, mobile apps, and cloud platforms. This connectivity supports remote monitoring and software updates. We enable integration with smart city infrastructure.",
      "Asset Tracking & GPS Solutions: We create GPS and IoT-enabled tracking devices for vehicles, shipments, and high-value assets. We provide real-time location tracking, geofencing, and data logging. These solutions ensure security, accountability, and operational efficiency.",
      "Driver Assistance & Safety Systems: Embedded control systems for ADAS (Advanced Driver Assistance Systems) help monitor speed, braking, lane departure, and proximity sensors. These systems enhance vehicle safety. We focus on improving the overall user experience. ",
    ],
  },
  {
    id: 5,
    title: "Healthcare Devices",
    slug: "healthcare-devices",
    headerImage: industry5,
    description: "The healthcare industry demands precision, reliability, and real-time monitoring to deliver better patient outcomes. At Microlynk, we design and develop embedded systems, IoT-enabled medical devices, and smart healthcare solutions that enhance patient care, streamline operations, and enable remote monitoring. Our solutions bridge medical technology with digital intelligence, ensuring accuracy, compliance, and usability.",
    description2: "Delivering precise, real-time patient monitoring for better care and operational efficiency.",
    areas: [
      "Patient Monitoring Systems: We develop embedded and IoT-enabled devices for continuous monitoring of vital signs such as heart rate, blood pressure, oxygen levels, and temperature. Real-time data collection and cloud connectivity allow healthcare providers to track patient health remotely. These systems enable providers to respond quickly to critical changes.",
      "Wearable Health Devices: Our solutions include fitness trackers, smart watches, and medical wearables that provide real-time insights into activity, sleep patterns, and physiological metrics. We utilize low-power embedded systems and secure wireless communication. We ensure continuous operation and accurate data for users.",
      "Telemedicine & Remote Care: We integrate embedded devices with cloud platforms to enable remote consultations, diagnostics, and patient management. Our IoT solutions facilitate real-time communication between patients and healthcare providers. These integrations improve healthcare accessibility and efficiency.",
      "Medical Device Automation: We design control systems for devices such as infusion pumps, diagnostic tools, and laboratory equipment. Our designs ensure precise operation and compliance with safety standards. We focus on seamless integration into hospital workflows.",
      "Data Analytics & Healthcare Dashboards: Our systems consolidate data from multiple devices into centralized dashboards. Advanced analytics provide actionable insights for patient care and operational efficiency. We support the implementation of preventive healthcare strategies.",
      "Regulatory Compliance & Security: We implement secure data protocols and adhere to medical standards (such as ISO, HIPAA). We ensure patient data privacy and device reliability. Our processes are built to guarantee full regulatory compliance.",
    ],
  },
  {
    id: 6,
    title: "Home Automation",
    slug: "home-automation",
    headerImage: industry6,
    description: "Smart homes are redefining convenience, security, and energy efficiency. At Microlynk, we design and implement embedded systems, IoT-enabled devices, and intelligent automation solutions that make homes more connected, safe, and energy-efficient. Our solutions seamlessly integrate lighting, climate control, security, and entertainment systems to provide a fully automated, user-friendly living experience.",
    description2: "Creating connected, energy-efficient homes for a seamless and secure living experience.",
    areas: [
      "Smart Lighting Systems: We develop intelligent lighting solutions that allow homeowners to control brightness, color, and scheduling through mobile apps or voice assistants. Energy-efficient embedded systems ensure minimal power consumption. We provide maximum convenience through these automated systems.",
      "Climate & Energy Management: Our smart thermostats, HVAC controls, and energy monitoring systems optimize home heating, cooling, and power usage. IoT connectivity enables real-time adjustments and remote access. We provide analytics for efficient energy consumption.",
      "Security & Surveillance: We provide embedded systems for smart locks, cameras, motion sensors, and alarms. Integrated IoT solutions allow remote monitoring and automated alerts. Our secure control systems enhance safety and peace of mind.",
      "Home Entertainment Integration: Our solutions connect audio, video, and streaming systems to create seamless entertainment experiences. Centralized control and automation enhance usability. We improve convenience for all household devices.",
      "Appliance Automation: We design embedded control systems for everyday appliances, enabling smart scheduling, remote operation, and energy optimization. Connected devices improve user convenience. Our solutions focus on reducing energy costs.",
      "Voice & App Control: Our systems integrate with mobile applications and popular voice assistants, providing intuitive control over all automated home devices. Embedded connectivity ensures reliable communication. We ensure a fast response across the home ecosystem.",
    ],
  },
  {
    id: 7,
    title: "Smart Utilities & Water Management",
    slug: "smart-utilities-and-water-management",
    headerImage: industry7,
    description: "Efficient management of utilities and water resources is critical for sustainability and operational efficiency. At Microlynk, we provide advanced embedded systems, IoT-enabled sensors, and intelligent automation solutions that help utilities, municipalities, and industrial clients monitor, control, and optimize resource usage. Our solutions enable real-time data collection, predictive analytics, and automated control to ensure sustainable and cost-effective operations.",
    description2: "Empowering utility providers with intelligent monitoring and automated control for resource management.",
    areas: [
      "Smart Water Metering: We design IoT-enabled sensor systems to track water quality, flow, and usage in realtime. These systems provide actionable insights for leak detection and consumption patterns. We focus on resource optimization through constant data monitoring.",
      "Automated Metering & Billing: Our embedded solutions allow automated data collection from water, electricity, and gas meters. This enables accurate billing and reduces human error. We provide real-time consumption data to both providers and consumers.",
      "Wastewater & Effluent Management: We develop monitoring systems for wastewater treatment facilities and industrial effluent management. Sensors track chemical composition, flow rates, and treatment efficiency. Our systems allow proactive interventions and ensure regulatory compliance.",
      " Energy & Resource Optimization: Integrated IoT systems monitor utility usage and automate control mechanisms. We work to reduce wastage and optimize resource allocation. Our solutions improve overall operational efficiency",
      "Predictive Maintenance for Utility Infrastructure: By analyzing sensor data, our systems detect potential failures in pumps, valves, pipelines, and other infrastructure components before they occur. This proactive approach reduces downtime. We help clients lower their long-term maintenance costs.",
    "Data Analytics & Dashboard Solutions: We provide centralized dashboards that consolidate utility and water data. Our platforms deliver actionable insights for operators and decision-makers. Real-time alerts and predictive analytics enable smarter management and planning.",
    ],
  },
]

// Helper function to get industry by slug
export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((industry) => industry.slug === slug)
}

// Helper function to get all industry slugs
export function getAllIndustrySlugs(): string[] {
  return industriesData.map((industry) => industry.slug)
}
