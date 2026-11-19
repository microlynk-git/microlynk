'use client'
import '../App.css'
const awsLogo = '/assets/svgs/aws.svg';
const microsoftLogo = '/assets/svgs/microsoft.svg';
const k8sLogo = '/assets/svgs/k8s.svg';
const tensorflowLogo = '/assets/svgs/tensorflow.svg';
const dockerLogo = '/assets/svgs/docker.svg';
const googleCloudLogo = '/assets/svgs/google-cloud.svg';
const openAILogo = '/assets/svgs/openai.svg';
const pytorchLogo = '/assets/svgs/pytorch.svg';


const TechnologyPartners = () => {
  const allPartners = [
  { name: "Amazon", logo: awsLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Kubernetes", logo: k8sLogo },
  { name: "TensorFlow", logo: tensorflowLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "Google Cloud", logo: googleCloudLogo },
  { name: "OpenAI", logo: openAILogo },
  { name: "Pytorch", logo: pytorchLogo },
];

const partnersRow1 = allPartners.slice(0, 4); // First 4 partners (0 to 3)
    const partnersRow2 = allPartners.slice(4);
  const getMarqueeStyle = (partnersArray: { name: string, logo: string }[], duration: string) => ({
        willChange: 'transform',
        '--marquee-offset': `-${partnersArray.length * 200}px`, 
        '--marquee-duration': duration,
    } as React.CSSProperties);

  return (
    <section className="py-10 bg-white overflow-hidden mb-5">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[45px] font-semibold text-brand-primary mb-14">Technology Partners</h2>
        
        {/* First Row - Scrolling Left */}
        <div
          className="relative overflow-hidden mb-8"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <div
            className="flex animate-slide-left"
            style={getMarqueeStyle(partnersRow1, '16s')}
          >
            {/* Map over the first partner list, doubled for the loop */}
            {[...partnersRow1, ...partnersRow1].map((partner, index) => (
              <div
                // Use a unique key combining row, name, and index
                key={`row1-${partner.name}-${index}`}
                className="flex-none w-[200px] h-[60px] flex items-center justify-center p-5"
                aria-hidden={index >= partnersRow1.length}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[140px] h-[60px] object-contain transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right with Different Icons */}
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
            style={getMarqueeStyle(partnersRow2, '20s')} // Increased duration for a different speed
          >
            {/* Map over the second partner list, doubled for the loop */}
            {[...partnersRow2, ...partnersRow2].map((partner, index) => (
              <div
                // Use a unique key combining row, name, and index
                key={`row2-${partner.name}-${index}`}
                className="flex-none w-[200px] h-[60px] flex items-center justify-center p-5"
                aria-hidden={index >= partnersRow2.length}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[140px] h-[60px] object-contain transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
