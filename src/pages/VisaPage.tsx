import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

const VisaPage = () => (
  <PageLayout>
    <Helmet>
      <title>Visa Information for India — Meaningful Miles</title>
      <meta name="description" content="Guidance on Indian e-visa for UK and international visitors volunteering with Meaningful Miles in Delhi." />
    </Helmet>
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-10">Visa Information</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-body">Most visitors to India will need a visa. The Indian e-Visa system makes this straightforward for citizens of most countries, including the UK, Ireland, USA, Canada, and most European nations.</p>
          <h3>How to Apply</h3>
          <p className="font-body">Visit the official Indian e-Visa portal to submit your application online. Processing typically takes 3–5 business days.</p>
          <a href="https://indianvisaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-burnt-orange font-body font-semibold hover:underline">
            Official Indian e-Visa Portal <ExternalLink className="w-4 h-4" />
          </a>
          <h3>Key Points</h3>
          <ul className="space-y-2 font-body">
            <li>• Apply at least 4 weeks before your intended travel date</li>
            <li>• You will need a passport valid for at least 6 months beyond your arrival date</li>
            <li>• A recent passport-sized photograph will be required</li>
            <li>• Select "e-Tourist Visa" as your visa type</li>
          </ul>
          <p className="font-body text-mid-text italic text-sm">
            Meaningful Miles does not process visa applications. If you need guidance on the process, we are happy to point you in the right direction.
          </p>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default VisaPage;
