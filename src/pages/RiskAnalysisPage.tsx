import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

const riskMatrix = [
  {
    disease: "Rabies Virus",
    transmission: "Saliva via bite, scratch, or lick on broken skin",
    level: "Critical",
    mitigation:
      "Pre-Exposure Prophylaxis (PrEP) is mandatory. No handling of neurological or unknown-status animals without senior supervision.",
  },
  {
    disease: "Leptospirosis",
    transmission: "Contact with infected urine, water, or soil",
    level: "High",
    mitigation:
      "Full-cover footwear and gloves are mandatory. Avoid contact with stagnant water in shelter drains.",
  },
  {
    disease: "Brucellosis (B. canis / B. abortus)",
    transmission: "Contact with reproductive fluids and tissues",
    level: "Medium-High",
    mitigation:
      "Double-gloving and eye protection during assisted births, spay/neuter surgeries, or wound cleaning.",
  },
  {
    disease: "Dermatophytosis (Ringworm)",
    transmission: "Direct contact or contaminated surfaces",
    level: "Common",
    mitigation:
      "Isolate suspected cases. Mandatory handwashing and change of clothes between wards.",
  },
  {
    disease: "Sarcoptic Mange",
    transmission: "Direct contact with infected canines",
    level: "High",
    mitigation:
      "Use gowns and long gloves when handling skin-condition cases. Dedicated grooming tools per animal.",
  },
  {
    disease: "Intestinal Parasites (Hookworm / Roundworm)",
    transmission: "Fecal-oral route or larval skin penetration",
    level: "High",
    mitigation:
      "No open-toed shoes. Strict disinfection of fecal disposal areas.",
  },
  {
    disease: "Bartonellosis (Cat Scratch Disease)",
    transmission: "Scratches or flea bites",
    level: "Medium",
    mitigation:
      "Immediate wound irrigation for 15 minutes with soap and water. Maintain flea prevention on shelter residents.",
  },
];

const sops = [
  "Vaccination Documentation: All veterinary students must submit a copy of their rabies pre-exposure certificate and up-to-date tetanus status.",
  "The “Wound Toilet” Protocol: In the event of any bite or scratch, the volunteer must immediately wash with soap and running water for at least 15 minutes and report to the Meaningful Miles lead for assessment of post-exposure prophylaxis (PEP).",
  "PPE Compliance: Meaningful Miles provides medical-grade gloves and masks. We recommend students bring their own dedicated shelter scrubs that can be bleached or commercially laundered.",
  "Surgical Participation: Students participating in the spay/neuter programme will work under the direct supervision of licensed Indian veterinarians to ensure both patient safety and student protection.",
];

const RiskAnalysisPage = () => (
  <PageLayout>
    <Helmet>
      <title>Risk Analysis — Animal Welfare | Meaningful Miles</title>
      <meta
        name="description"
        content="Risk analysis for Meaningful Miles Animal Welfare placements, including endemic zoonotic risk guidance, mitigation protocols, and veterinary volunteer SOPs."
      />
    </Helmet>

    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="mb-4">Risk Analysis</h1>
          <p className="font-body text-lg text-mid-text">
            A practical risk overview for animal welfare placements, designed to support a clear, clinically grounded, and safety-first experience for veterinary participants.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto space-y-14">
        <ScrollReveal>
          <div className="mm-card bg-parched-cream">
            <h2 className="mb-4">Endemic Zoonotic Risk Matrix</h2>
            <p className="font-body text-mid-text">
              Volunteering in Indian animal shelters offers unparalleled clinical exposure but requires a rigorous understanding of endemic zoonotic disease. This assessment supports a One Health approach to participant safety.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="hidden lg:block overflow-hidden rounded-[10px] border border-border bg-off-white" style={{ boxShadow: "var(--card-shadow)" }}>
            <table className="w-full border-collapse">
              <thead className="bg-parched-cream">
                <tr>
                  <th className="p-4 text-left font-body text-sm font-semibold text-forest-green">Disease / Pathogen</th>
                  <th className="p-4 text-left font-body text-sm font-semibold text-forest-green">Transmission Route</th>
                  <th className="p-4 text-left font-body text-sm font-semibold text-forest-green">Risk Level</th>
                  <th className="p-4 text-left font-body text-sm font-semibold text-forest-green">Clinical Mitigation Protocols</th>
                </tr>
              </thead>
              <tbody>
                {riskMatrix.map((item) => (
                  <tr key={item.disease} className="border-t border-border align-top">
                    <td className="p-4 font-body font-semibold text-foreground">{item.disease}</td>
                    <td className="p-4 font-body text-sm text-mid-text">{item.transmission}</td>
                    <td className="p-4">
                      <span className="inline-flex rounded-full bg-parched-cream px-3 py-1 font-body text-xs font-semibold text-terracotta-brown">
                        {item.level}
                      </span>
                    </td>
                    <td className="p-4 font-body text-sm text-mid-text">{item.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:hidden">
            {riskMatrix.map((item) => (
              <article key={item.disease} className="mm-card">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-primary font-display text-xl">{item.disease}</h3>
                  <span className="inline-flex rounded-full bg-parched-cream px-3 py-1 font-body text-xs font-semibold text-terracotta-brown whitespace-nowrap">
                    {item.level}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-forest-green">Transmission Route</p>
                    <p className="font-body text-sm text-mid-text">{item.transmission}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-forest-green">Clinical Mitigation</p>
                    <p className="font-body text-sm text-mid-text">{item.mitigation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8">
            <section className="mm-card">
              <h2 className="mb-5">Standard Operating Procedures (SOPs)</h2>
              <ol className="space-y-4 list-decimal pl-5">
                {sops.map((item) => (
                  <li key={item} className="font-body text-base text-mid-text pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            </section>

            <aside className="mm-card bg-parched-cream">
              <h2 className="mb-4">Why This Matters for Your Career</h2>
              <p className="font-body text-mid-text mb-4">
                This programme is not only about service. It is also about tropical veterinary medicine and learning to work responsibly in a different clinical context.
              </p>
              <p className="font-body text-mid-text">
                You may encounter presentations such as advanced distemper, leishmaniasis, and parvovirus that are rarely seen in many domestic clinics. Managing risk well is the first step in becoming a globally competent veterinary professional.
              </p>
            </aside>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export default RiskAnalysisPage;
