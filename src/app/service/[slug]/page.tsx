import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import ServiceHeroSection from "../../components/ServiceHeroSection";
import StrategiesAndOutcomesSection from "../../components/StrategiesAndOutcomesSection";
import TechnologiesUsedSection2 from "../../components/TechnologiesUsedSection2";
import SuccessStoriesSection from "../../components/SuccessStoriesSection";
import KeyServicesSection from "../../components/KeyServicesSection";
import { servicesData } from "../../data/services";


interface ServiceProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Service({ params }: ServiceProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceHeroSection 
        title={service.title} 
        description={service.description} 
        headerImage={service.headerImage} 
      />
      <KeyServicesSection 
        keyServices={service.keyServices} 
      />
      <StrategiesAndOutcomesSection 
        strategies={service.strategies} 
        outcomes={service.expectedOutcomes} 
      />
      <TechnologiesUsedSection2 
        technologyUsed={service.technologyUsed} 
        technologiesUsed2={service.technologiesUsed2}
      />
      <SuccessStoriesSection serviceSlug={service.slug} /> 
      <CTASection 
        title={service.ctaText} 
        subtitle={service.supportLine} 
      />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}