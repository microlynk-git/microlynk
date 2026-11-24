import '../globals.css';
import Image from 'next/image';
import type { CSSProperties } from 'react';

import esp32Logo from "@/assets/ICONS/esp32.svg";
import arduinoLogo from "@/assets/TechSVGs/arduino-icon.svg";
import raspberryPiLogo from "@/assets/TechSVGs/raspberry-pi-icon.svg";
import freertosLogo from "@/assets/ICONS/freertos.svg";
import blynkLogo from "@/assets/ICONS/blynk.png";
import azureIotLogo from "@/assets/ICONS/azure iot.svg";

const TechnologyPartners = () => {
  const partners = [
    { name: "Raspberry Pi", logo: raspberryPiLogo },
    { name: "ESP32", logo: esp32Logo },
    { name: "Arduino", logo: arduinoLogo },
    { name: "FreeRTOS", logo: freertosLogo },
    { name: "Blynk", logo: blynkLogo },
    { name: "Azure", logo: azureIotLogo },
  ];

  return (
    <section className="py-10 bg-white overflow-hidden mb-5">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Single row scrolling from right to left. */}
        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <div
            className="flex w-max flex-nowrap animate-slide-left"
            style={{
              willChange: 'transform',
              '--marquee-offset': `-${partners.length * 200}px`,
              '--marquee-duration': '20s',
            } as CSSProperties}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-none w-[200px] h-auto min-h-[100px] flex flex-col items-center justify-center p-5"
                aria-hidden={index >= partners.length}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[140px] h-[60px] object-contain transition-transform duration-300 mb-2"
                />
                <p className="text-secondary font-semibold text-center text-sm font-satoshi">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyPartners;
