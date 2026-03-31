import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import HeroSlider from "@/components/HeroSlider";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { trackCtaPlanClick } from "@/lib/analytics";
import { ExternalLink } from "lucide-react";
import safetyAirportWelcome from "@/assets/safety-airport-welcome.png";
import safetyCatSanctuary from "@/assets/safety-cat-sanctuary.jpeg";
import safetyLocalGuidance from "@/assets/safety-local-guidance.jpeg";

const commitments = [
  { icon: "✈️", title: "Airport Pickup", desc: "We meet you at Delhi arrivals. No navigating airports alone. No uncertainty about what happens next.", color: "bg-saffron" },
  { icon: "🏠", title: "Vetted Accommodation", desc: "Safe, clean, comfortable. Every property personally inspected by the Meaningful Miles team.", color: "bg-forest-green" },
  { icon: "📱", title: "24/7 WhatsApp Support", desc: "A real person. Always reachable. Throughout your entire stay — day and night.", color: "bg-burnt-orange" },
  { icon: "👩", title: "Solo Traveller Considered", desc: "Meaningful Miles was built with solo travellers — and particularly solo female travellers — front of mind.", color: "bg-royal-blue" },
  { icon: "🌏", title: "Cultural Orientation", desc: "Full arrival briefing: local customs, safety zones, how to communicate, how to get the absolute most from India.", color: "bg-marigold" },
  { icon: "🚑", title: "Emergency Protocols", desc: "Comprehensive emergency response plan in place for every single guest. You are never alone.", color: "bg-terracotta-red" },
];

const SafetyPage = () => (
  <PageLayout>
    <Helmet>
      <title>Your Safety — Meaningful Miles Safe Solo Travel India</title>
      <meta name="description" content="Safety is the foundation of Meaningful Miles. Airport pickup, vetted accommodation, 24/7 support, solo traveller focused. India without the overwhelm." />
    </Helmet>

    <HeroSlider slides={[
      {
        src: safetyAirportWelcome,
        alt: "Meaningful Miles representative welcoming guests at Delhi international arrivals.",
        label: "Airport pickup from the moment you land in Delhi",
      },
      {
        src: safetyCatSanctuary,
        alt: "Guest relaxing in a calm animal sanctuary setting with cats nearby.",
        label: "Warm, grounded environments that help you settle in safely",
      },
      {
        src: safetyLocalGuidance,
        alt: "Traveller interacting with a local in a market setting with support and confidence.",
        label: "Cultural guidance that turns uncertainty into confidence",
      },
    ]} height="60vh" />

    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-4">Your Safety. Our Priority.</h1>
        <p className="font-body text-center max-w-3xl mx-auto mb-12">
          At Meaningful Miles, safety is not a feature — it is the foundation everything else is built upon.
        </p>
      </ScrollReveal>

      {/* Aansa quote */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto rounded-lg border-2 border-forest-green p-6 md:p-8 mb-12 bg-parched-cream">
          <p className="pull-quote mb-4">
            "I have travelled nearly 45 countries, 98% solo. I know every anxiety a first-time India visitor carries — because I have felt versions of them in places far more complex than Delhi. Meaningful Miles was built so that none of those anxieties travel with you."
          </p>
          <p className="font-body font-semibold text-forest-green">— Aansa, Founder</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {commitments.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 0.08}>
            <div className="mm-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-10 rounded-full ${c.color}`} />
                <span className="text-2xl">{c.icon}</span>
              </div>
              <h3 className="font-display text-xl text-primary mb-2">{c.title}</h3>
              <p className="font-body">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Safeguarding */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="mb-6">Working with Adults and Children</h2>
          <div className="rounded-lg border-2 border-forest-green bg-parched-cream p-6 md:p-8 space-y-4">
            <div>
              <p className="font-body font-semibold text-forest-green">DBS Check</p>
              <p className="font-body text-sm">A Disclosure and Barring Service check confirms you have no criminal record that would prevent you from working with vulnerable people.</p>
              <a href="https://www.gov.uk/request-copy-criminal-record" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-burnt-orange hover:underline text-sm mt-1">
                How to apply <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div>
              <p className="font-body font-semibold text-forest-green">UNICEF Safeguarding Training</p>
              <p className="font-body text-sm">Free online course, approximately 2–3 hours.</p>
              <a href="https://agora.unicef.org/course/info.php?id=29324" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-burnt-orange hover:underline text-sm mt-1">
                Complete Training <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="font-body text-sm text-mid-text">Both must be completed before placement begins.</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Insurance */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="mb-4">Volunteering Insurance — Mandatory for All Guests</h2>
          <p className="font-body">
            Your policy must cover: volunteer activities · medical emergencies · trip cancellation · repatriation. Meaningful Miles does not sell insurance. Consult a specialist travel insurance provider and ensure your policy explicitly covers volunteering activities abroad.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-center">
          <Link to="/apply" className="btn-primary">Start My Journey →</Link>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default SafetyPage;
