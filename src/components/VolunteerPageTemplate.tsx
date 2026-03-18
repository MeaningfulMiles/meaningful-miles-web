import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import HeroSlider from "@/components/HeroSlider";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import InclusionsList from "@/components/InclusionsList";
import PricingCards from "@/components/PricingCards";
import { Link } from "react-router-dom";

interface VolunteerPageProps {
  title: string;
  metaDesc: string;
  heroSlides: { label: string }[];
  h1: string;
  h3: string;
  introText: string;
  whatYoullDo: string;
  whoFor: string;
  extraRequirements?: string[];
  noteBox?: string;
  safeguarding?: boolean;
  showStudentDefault?: boolean;
  ctaLabel?: string;
}

const VolunteerPageTemplate = ({
  title, metaDesc, heroSlides, h1, h3, introText, whatYoullDo, whoFor,
  extraRequirements, noteBox, safeguarding, showStudentDefault, ctaLabel = "Apply Now",
}: VolunteerPageProps) => (
  <PageLayout>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDesc} />
    </Helmet>

    <HeroSlider slides={heroSlides} height="60vh" />

    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-2">{h1}</h1>
        <h3 className="text-center mb-8">{h3}</h3>
        <p className="font-body text-center max-w-3xl mx-auto mb-12">{introText}</p>
      </ScrollReveal>

      {noteBox && (
        <ScrollReveal>
          <div className="rounded-lg border-2 border-forest-green bg-parched-cream p-6 max-w-3xl mx-auto mb-12">
            <p className="font-body text-sm italic">{noteBox}</p>
          </div>
        </ScrollReveal>
      )}

      <div className="max-w-5xl mx-auto space-y-12">
        <ScrollReveal>
          <h2 className="mb-4">What You'll Do</h2>
          <p className="font-body">{whatYoullDo}</p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="mb-4">Who This Is For</h2>
          <p className="font-body">{whoFor}</p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="mb-6">What's Included & Not Included</h2>
          <InclusionsList />
        </ScrollReveal>

        {extraRequirements && (
          <ScrollReveal>
            <h2 className="mb-4">Requirements</h2>
            <ul className="space-y-2">
              {extraRequirements.map(r => <li key={r} className="font-body">• {r}</li>)}
            </ul>
          </ScrollReveal>
        )}

        {safeguarding && (
          <ScrollReveal>
            <div className="rounded-lg border-2 border-forest-green bg-parched-cream p-6 md:p-8">
              <h3 className="mb-4">Safeguarding Requirements</h3>
              <ul className="space-y-3 font-body">
                <li>
                  <span className="font-semibold text-forest-green">Enhanced DBS Certificate required</span>
                  <br />
                  <a href="https://www.gov.uk/request-copy-criminal-record" target="_blank" rel="noopener noreferrer" className="text-burnt-orange hover:underline text-sm">How to Apply for a DBS →</a>
                </li>
                <li>
                  <span className="font-semibold text-forest-green">UNICEF Safeguarding Training required</span>
                  <br />
                  <a href="https://agora.unicef.org/course/info.php?id=29324" target="_blank" rel="noopener noreferrer" className="text-burnt-orange hover:underline text-sm">Complete Training — free, ~2–3 hours →</a>
                </li>
                <li className="text-sm text-mid-text">Both must be completed and uploaded before placement begins.</li>
              </ul>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <h2 className="mb-6">Duration & Pricing</h2>
          <PricingCards showStudentDefault={showStudentDefault} ctaLabel={ctaLabel} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center pt-4">
            <Link to="/apply" className="btn-primary">{ctaLabel} →</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export default VolunteerPageTemplate;
