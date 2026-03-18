import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import InclusionsList from "@/components/InclusionsList";
import PricingCards from "@/components/PricingCards";
import HeroSlider from "@/components/HeroSlider";
import { Link } from "react-router-dom";

const WhatsIncluded = () => (
  <PageLayout>
    <Helmet>
      <title>What's Included — Meaningful Miles Volunteering India</title>
      <meta name="description" content="Everything included in your Meaningful Miles package: accommodation, meals, transport, Taj Mahal, Delhi sightseeing, 24/7 support. Flights not included." />
    </Helmet>

    <HeroSlider slides={[{ label: "HERO: Safe, comfortable Delhi accommodation — welcoming" }]} height="50vh" />

    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-12">Everything Included. Nothing Left to Chance.</h1>
      </ScrollReveal>
      <div className="max-w-5xl mx-auto space-y-12">
        <ScrollReveal><InclusionsList /></ScrollReveal>
        <ScrollReveal>
          <h2 className="mb-6">Duration & Pricing</h2>
          <PricingCards />
        </ScrollReveal>
        <ScrollReveal>
          <div className="text-center">
            <Link to="/apply" className="btn-primary">Design My Journey →</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export default WhatsIncluded;
