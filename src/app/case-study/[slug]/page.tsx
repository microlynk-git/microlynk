import { notFound } from "next/navigation"
import Navbar from "../../components/Navbar"
import CTASection from "../../components/CTASection"
import Footer from "../../components/Footer"
import CaseStudyHeroSection from "../../components/CaseStudyHeroSection"
import OpportunitySection from "../../components/OpportunitySection"
import SolutionSection from "../../components/SolutionSection"
import ApproachSection from "../../components/ApproachSection"
import ImpactSection from "../../components/ImpactSection"
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "../../data/caseStudies"

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  // If case study not found, show 404
  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <CaseStudyHeroSection caseStudy={caseStudy} />
      <OpportunitySection
        title={caseStudy.opportunity.title}
        leftParagraph1={caseStudy.opportunity.leftParagraph1}
        leftParagraph2={caseStudy.opportunity.leftParagraph2}
        bulletPoints={caseStudy.opportunity.bulletPoints}
        rightParagraph1={caseStudy.opportunity.rightParagraph1}
        rightParagraph1Bold={caseStudy.opportunity.rightParagraph1Bold}
        rightParagraph2={caseStudy.opportunity.rightParagraph2}
      />
      <SolutionSection
        title={caseStudy.solution.title}
        introductionParagraph={caseStudy.solution.introductionParagraph}
        featuresLabel={caseStudy.solution.featuresLabel}
        features={caseStudy.solution.features}
        footerText={caseStudy.solution.footerText}
        footerBoldText={caseStudy.solution.footerBoldText}
      />
      <ApproachSection
        title={caseStudy.approach.title}
        description={caseStudy.approach.description}
        phases={caseStudy.approach.phases}
      />
      <ImpactSection
        title={caseStudy.impact.title}
        subtitle={caseStudy.impact.subtitle}
        impacts={caseStudy.impact.impacts}
      />
      <CTASection />
      <Footer />
    </>
  )
}