import '../globals.css';
import Image from 'next/image';

// Row 1 Icons
import armLogo from "@/assets/ICONS/armcortex.svg";
import stm32Logo from "@/assets/ICONS/stm32.svg";
import esp32Logo from "@/assets/ICONS/esp32.svg";
import arduinoLogo from "@/assets/TechSVGs/arduino-icon.svg";
import raspberryPiLogo from "@/assets/TechSVGs/raspberry-pi-icon.svg";
import cLogo from "@/assets/TechSVGs/c-program-icon.svg";
import cppLogo from "@/assets/TechSVGs/c-plus-plus-programming-language-icon.svg";
import freertosLogo from "@/assets/ICONS/freertos.svg";

// Row 2 Icons
import linuxLogo from "@/assets/TechSVGs/linux-icon.svg";
import mqttLogo from "@/assets/ICONS/mqtt.svg";
import bleLogo from "@/assets/ICONS/BLE.svg";
import awsIotLogo from "@/assets/ICONS/aws iot core.svg";
import blynkLogo from "@/assets/ICONS/blynk.png";
import azureIotLogo from "@/assets/ICONS/azure iot.svg";
import thingsBoardLogo from "@/assets/ICONS/things-board.jpeg";

const TechnologyPartners = () => {
  const partners = [
    { name: "Raspberry Pi", logo: raspberryPiLogo },
    { name: "ESP32", logo: esp32Logo },
    { name: "Arduino", logo: arduinoLogo },
    { name: "FreeRTOS", logo: freertosLogo },
    { name: "Blynk", logo: blynkLogo },
    { name: "Azure", logo: azureIotLogo },
  ];

  const row1 = partners;
  const row2 = partners;

  return (
    <section className="py-10 bg-white overflow-hidden mb-5">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Row 1 - Scrolling Left */}
        <div
          className="relative overflow-hidden mb-10"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <div
            className="flex animate-slide-left"
            style={{
              willChange: 'transform',
              // @ts-ignore - CSS custom properties
              '--marquee-offset': `-${row1.length * 200}px`,
              '--marquee-duration': '20s',
            }}
          >
            {[...row1, ...row1].map((partner, index) => (
              <div
                key={`row1-${partner.name}-${index}`}
                className="flex-none w-[200px] h-auto min-h-[100px] flex flex-col items-center justify-center p-5"
                aria-hidden={index >= row1.length}
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

        {/* Row 2 - Scrolling Right */}
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
            className="flex animate-slide-right"
            style={{
              willChange: 'transform',
              // @ts-ignore - CSS custom properties
              '--marquee-offset': `-${row2.length * 200}px`,
              '--marquee-duration': '20s',
            }}
          >
            {[...row2, ...row2].map((partner, index) => (
              <div
                key={`row2-${partner.name}-${index}`}
                className="flex-none w-[200px] h-auto min-h-[100px] flex flex-col items-center justify-center p-5"
                aria-hidden={index >= row2.length}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[140px] h-[60px] object-contain transition-transform duration-300 mb-2"
                />
                <p className="text-secondary font-semibold text-center text-sm">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyPartners;
