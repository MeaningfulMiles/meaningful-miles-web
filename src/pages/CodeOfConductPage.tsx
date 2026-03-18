import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

const CodeOfConductPage = () => (
  <PageLayout>
    <Helmet>
      <title>Volunteer Code of Conduct — Meaningful Miles</title>
      <meta name="description" content="All Meaningful Miles volunteers must read, sign and adhere to the Code of Conduct before placement begins." />
    </Helmet>
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-10">Volunteer Code of Conduct</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-body">
            All volunteers must read, sign and adhere to the Meaningful Miles Code of Conduct before their placement begins. This ensures the safety, dignity, and wellbeing of everyone involved — our charity partners, their service users, and you.
          </p>
          <h3>Key Principles</h3>
          <ul className="space-y-3 font-body">
            <li>• <strong>Respect:</strong> Treat all people with dignity, regardless of background, ability, or belief.</li>
            <li>• <strong>Professionalism:</strong> Conduct yourself to the highest ethical and professional standards throughout your placement.</li>
            <li>• <strong>Confidentiality:</strong> Respect the privacy of all service users, staff, and partner organisations.</li>
            <li>• <strong>Safeguarding:</strong> Report any safeguarding concerns immediately to the Meaningful Miles team.</li>
            <li>• <strong>Cultural Sensitivity:</strong> Approach Indian culture, customs, and communities with openness and humility.</li>
            <li>• <strong>No Photography Without Consent:</strong> Never photograph service users, particularly vulnerable adults or children, without explicit consent from the NGO partner.</li>
          </ul>
          <p className="font-body text-mid-text italic text-sm">
            The full Code of Conduct will be provided as part of your application pack and must be signed before your placement is confirmed.
          </p>
          <button className="btn-primary">Download Code of Conduct PDF</button>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default CodeOfConductPage;
