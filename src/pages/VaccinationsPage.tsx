import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

const VaccinationsPage = () => (
  <PageLayout>
    <Helmet>
      <title>Vaccinations for India Travel — Meaningful Miles</title>
      <meta name="description" content="Recommended vaccinations and health guidance for volunteering in Delhi, India with Meaningful Miles." />
    </Helmet>
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-10">Staying Healthy on Your Journey</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-body">We recommend consulting your GP or a specialist travel clinic at least 6–8 weeks before departure to discuss vaccinations and health precautions for India.</p>
          <h3>Commonly Recommended Vaccinations</h3>
          <ul className="space-y-2 font-body">
            <li>• Hepatitis A</li>
            <li>• Hepatitis B</li>
            <li>• Typhoid</li>
            <li>• Tetanus / Diphtheria / Polio booster</li>
            <li>• Rabies (particularly recommended for animal welfare volunteers)</li>
            <li>• Japanese Encephalitis (depending on season and duration)</li>
          </ul>
          <p className="font-body text-mid-text italic text-sm">
            This is informational guidance only and does not constitute medical advice. Please consult a qualified healthcare professional.
          </p>
          <a href="https://www.nhs.uk/conditions/travel-vaccinations/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-burnt-orange font-body font-semibold hover:underline">
            NHS Travel Vaccinations Guidance <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default VaccinationsPage;
