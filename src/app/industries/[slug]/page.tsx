import { notFound } from "next/navigation"
import Navbar from "../../components/Navbar"
import CTASection from "../../components/CTASection"
import Footer from "../../components/Footer"
import IndustryDetailHeroSection from "../../components/IndustryDetailHeroSection"
import AreasSection from "../../components/AreasSection"
import { getIndustryBySlug, getAllIndustrySlugs } from "../../data/industries"

// Generate static params for all industries
export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  // If industry not found, show 404
  if (!industry) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <IndustryDetailHeroSection 
        title={industry.title}
        description={industry.description}
        headerImage={industry.headerImage}
      />
      <AreasSection 
        title="Areas We Cover"
        areas={industry.areas}
      />
      <CTASection />
      <Footer />
    </>
  )
}
