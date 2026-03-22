import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import educationJenga from "@/assets/education-jenga-classroom.jpeg";
import educationDance from "@/assets/education-let-us-dance.jpeg";
import educationBanner from "@/assets/education-banner-playground.png";

const EducationInitiativesPage = () => (
  <PageLayout>
    <Helmet>
      <title>Education Initiatives — Meaningful Miles</title>
      <meta
        name="description"
        content="Volunteer with Project WHY in Delhi — after-school education, digital literacy, and empowerment for children from underserved communities. Safeguarding-first placements for teachers, educators, and gap year volunteers."
      />
    </Helmet>

    {/* Hero */}
    <section className="section-padding bg-forest-green text-center">
      <ScrollReveal>
        <h1 className="text-primary-foreground mb-4">Education Initiatives</h1>
        <p className="font-display text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
          Safeguarding-first education placements in Delhi.
        </p>
      </ScrollReveal>
    </section>

    {/* Intro */}
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <p className="font-body text-lg text-center max-w-3xl mx-auto">
          Education placements with Meaningful Miles are built on trust, safeguarding, and a genuine commitment to children's wellbeing. Every volunteer is carefully vetted before placement begins.
        </p>
      </ScrollReveal>
    </section>

    {/* Safeguarding Requirements Box */}
    <section className="bg-parched-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-12 md:pt-16">
        <ScrollReveal>
          <div
            className="rounded-lg p-6 md:p-8"
            style={{
              backgroundColor: "#2C4A2E",
              borderTop: "4px solid #C4622D",
              color: "#F5EDD9",
            }}
          >
            <h3 className="font-display text-xl md:text-2xl mb-4" style={{ color: "#F5EDD9" }}>
              Safeguarding Requirements — Education Placements
            </h3>
            <p className="font-body mb-6" style={{ color: "#F5EDD9" }}>
              Education placements involve direct contact with children. All volunteers must meet the following requirements before their booking can be confirmed.
            </p>
            <ol className="space-y-4 font-body list-none pl-0">
              {[
                "Enhanced DBS Check (UK) or equivalent criminal background check from your home country — must be current and provided before placement is confirmed",
                "Safeguarding Training — online training must be completed and certificate submitted before booking is finalised",
                "Child Protection Policy — Meaningful Miles Child Protection & Safeguarding Policy must be read and signed before placement is confirmed",
                "Arrival Briefing — all education volunteers attend a mandatory in-person safeguarding briefing on arrival in Delhi",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{ backgroundColor: "#C4622D", color: "#F5EDD9" }}
                  >
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="font-body italic mt-6 text-sm" style={{ color: "#F5EDD9", opacity: 0.9 }}>
              No DBS check. No safeguarding training. No booking. This is non-negotiable — because children's safety always comes first.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Hero Image — Jenga Classroom */}
    <section className="bg-parched-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8">
        <ScrollReveal>
          <figure>
            <div className="rounded-lg overflow-hidden">
              <img
                src={educationJenga}
                alt="Volunteers with Meaningful Miles in a Delhi classroom playing Jenga with children."
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="font-body text-sm italic text-burnt-orange mt-3 text-center">
              Volunteers with Meaningful Miles in a Delhi classroom. 'I Travelled. I Gave. I Grew.'
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>

    {/* Project WHY Content */}
    <section id="project-why" className="section-padding bg-parched-cream">
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <div className="mm-card border-l-4 border-marigold">
            <p className="font-body text-sm uppercase tracking-wider text-mid-text mb-1">
              Education & Empowerment · South Delhi & Dehradun · Minimum 1 month
            </p>
            <h2 className="mb-4">Project WHY</h2>

            <h3 className="mt-6 mb-3">About Project WHY</h3>
            <p className="font-body">
              Project WHY has spent over two decades creating spaces where children from Delhi's most underserved communities can dream, learn and transform their lives. Running 5 after-school support centres across South Delhi and one in Dehradun, they reach over 1,200 children every year across grades 1–12. Since founding, they have transformed the lives of over 10,000 children and women. Their work spans quality education, digital literacy, skill development for women and youth, and nutrition support for the youngest learners. This is education in its most human form — showing up, every day, for children who need someone to believe in them.
            </p>

            <h3 className="mt-6 mb-3">What you'll do</h3>
            <p className="font-body">
              Volunteers at Project WHY support after-school tuition across all age groups, assist with computer and digital literacy sessions, help develop and improve teaching materials, support skill development programmes for women and youth, assist with English language teaching, contribute to fundraising and communications, and bring their professional expertise — whether in education, mental health, social work or technology — to a community that will embrace every bit of it. Teacher educators and CPD specialists are particularly valued for their ability to strengthen the capacity of Project WHY's own teaching staff.
            </p>

            {/* Mid-section image — Let us dance */}
            <figure className="mt-8 mb-8">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={educationDance}
                  alt="A joyful classroom moment with children and a volunteer dancing together."
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="font-body text-sm italic text-burnt-orange mt-3 text-center">
                'Let us dance' — a classroom moment that needed no lesson plan.
              </figcaption>
            </figure>

            <h3 className="mt-6 mb-3">Who this suits</h3>
            <ul className="space-y-2 font-body pl-1">
              <li>• Teachers & educators at any level (primary, secondary, further education)</li>
              <li>• Teaching assistants</li>
              <li>• English as a Second Language (ESOL/EFL) teachers</li>
              <li>• Teacher educators & CPD specialists — your expertise will directly strengthen Project WHY's own teaching team</li>
              <li>• Mental health & counselling professionals and students</li>
              <li>• Social workers & community development professionals</li>
              <li>• Gap year students — a month with Project WHY will change your perspective on education, on privilege, and on what genuinely matters</li>
            </ul>

            <h3 className="mt-6 mb-3">Safeguarding requirements for this placement</h3>
            <p className="font-body mb-4">
              Because this placement involves direct work with children, all of the following must be in place before your booking is confirmed:
            </p>
            <ul className="space-y-2 font-body pl-1">
              <li>• Valid enhanced DBS certificate (UK) or home country equivalent</li>
              <li>• Completed online safeguarding training certificate</li>
              <li>• Signed Meaningful Miles Child Protection & Safeguarding Policy</li>
              <li>• Attendance at mandatory in-person safeguarding briefing on arrival in Delhi</li>
            </ul>
            <p className="font-body mt-4">
              Meaningful Miles takes child safeguarding with absolute seriousness. Our Child Protection Policy is aligned with the UN Convention on the Rights of the Child, the POCSO Act 2012 (India), and international Keeping Children Safe standards. Copies are available on request.
            </p>

            <p className="font-body mt-6">
              <strong>Minimum commitment:</strong> 1 month (mandatory for all education placements)
            </p>
            <a
              href="https://www.projectwhy.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-burnt-orange font-body font-semibold text-sm hover:underline"
            >
              Visit Website →
            </a>

            {/* Closing image — Banner */}
            <figure className="mt-8">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={educationBanner}
                  alt="Two women holding a Meaningful Miles banner in a community playground."
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="font-body text-sm italic text-burnt-orange mt-3 text-center">
                Travel. Give. Grow. — Meaningful Miles in the field.
              </figcaption>
            </figure>
          </div>
        </ScrollReveal>

        {/* Downloadable policy link */}
        <ScrollReveal>
          <p className="text-center">
            <a
              href="/documents/Child_Protection_Safeguarding_Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-burnt-orange font-body font-semibold text-sm italic hover:underline"
            >
              Download our Child Protection & Safeguarding Policy (PDF) →
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-forest-green text-center">
      <ScrollReveal>
        <h2 className="text-primary-foreground mb-4">
          Ready to make a difference in a child's life?
        </h2>
        <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Education placements are safeguarding-first and personally supported from start to finish. Talk to Aansa to begin your journey.
        </p>
        <Link to="/apply" className="btn-primary">Talk to Aansa →</Link>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default EducationInitiativesPage;
