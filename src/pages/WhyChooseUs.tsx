import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const features = [
  { icon: "🛡", title: "Safety First", desc: "Designed for solo travellers and first-time India visitors. You are our personal guest from touchdown to departure.", color: "bg-royal-blue" },
  { icon: "🤝", title: "Vetted NGO Partners", desc: "Only established, award-winning charities with proven community impact. Your placement is NGO-led and genuinely meaningful.", color: "bg-forest-green" },
  { icon: "💰", title: "Social Dividend", desc: "Every guest generates a social dividend flowing directly to our charity partners — sustaining their staff, programmes, and long-term impact.", color: "bg-saffron" },
  { icon: "🏡", title: "Full Ground Logistics", desc: "Accommodation, meals, mineral water, all local transport — every logistical detail, door to door.", color: "bg-burnt-orange" },
  { icon: "🕌", title: "Taj Mahal & Beyond", desc: "Agra is in every package. Delhi sightseeing — Jama Masjid, Qutub Minar, Humayun's Tomb, Old Delhi and more — is tailored entirely to you.", color: "bg-marigold" },
  { icon: "🌱", title: "Ethical & Transparent", desc: "NGO-led placements. No performative voluntourism. Depth over scale. Fewer guests, stronger partnerships, more real impact.", color: "bg-terracotta-red" },
];

const WhyChooseUs = () => (
  <PageLayout>
    <Helmet>
      <title>Why Choose Meaningful Miles — Safe Volunteering India</title>
      <meta name="description" content="Safety-first volunteering in Delhi with vetted NGOs, full ground logistics, Taj Mahal sightseeing, and ethical partnerships. Designed for solo travellers." />
    </Helmet>



    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-12">Why Meaningful Miles?</h1>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.08}>
            <div className="mm-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-10 rounded-full ${f.color}`} />
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="font-display text-xl text-primary mb-2">{f.title}</h3>
              <p className="font-body text-base">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Safety Banner */}
    <section className="section-padding bg-forest-green text-center">
      <ScrollReveal>
        <h2 className="text-primary-foreground mb-6">India Without the Overwhelm</h2>
        <p className="font-body text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
          From the moment you land in Delhi, you are our guest. We are with you at every step — from airport arrivals to farewell dinner.
        </p>
        <Link to="/safety" className="btn-outline-white">Your Safety, Our Priority →</Link>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default WhyChooseUs;
