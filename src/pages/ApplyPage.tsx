import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { trackLeadFormSubmit, trackWhatsAppClick, trackEmailClick } from "@/lib/analytics";

const volunteeringOptions = [
  "Animal Welfare — Veterinary Professional",
  "Animal Welfare — Veterinary Student (EMS)",
  "Animal Welfare — Animal Lover",
  "Disabilities Empowerment — Professional",
  "Disabilities Empowerment — Student",
  "The Good-Hearted Soul",
  "Not sure yet — help me decide",
];

const isPeopleFacing = (v: string) =>
  v.includes("Disabilities") || v === "The Good-Hearted Soul";

const ApplyPage = () => {
  const [preference, setPreference] = useState("");
  const [hasDbs, setHasDbs] = useState("");
  const [hasSafeguarding, setHasSafeguarding] = useState("");
  const [isStudent, setIsStudent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageLayout>
        <Helmet><title>Application Submitted — Meaningful Miles</title></Helmet>
        <section className="section-padding bg-off-white text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="mb-4">Thank You</h1>
          <p className="font-body text-lg max-w-2xl mx-auto mb-6">
            Your enquiry has been received. We'll be in touch within 2 working days via your chosen contact method. In the meantime, explore our sample itineraries.
          </p>
          <Link to="/sample-itineraries" className="btn-primary">View Sample Itineraries →</Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Helmet>
        <title>Apply — Start Your Meaningful Miles Journey</title>
        <meta name="description" content="Apply for a volunteering placement in Delhi with Meaningful Miles. Fill in the form and we'll be in touch within 2 working days." />
      </Helmet>
      <section className="section-padding bg-off-white">
        <SectionDivider />
        <ScrollReveal>
          <h1 className="text-center mb-2">Start Your Meaningful Miles Journey</h1>
          <h3 className="text-center mb-10">Fill in the form and we'll be in touch within 2 working days via your preferred method.</h3>
        </ScrollReveal>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Title</label>
              <select className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm">
                <option value="">Select</option>
                {["Mr", "Mrs", "Ms", "Dr", "Prof", "Other"].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">First Name *</label>
              <input required className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Family Name *</label>
              <input required className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Email *</label>
              <input required type="email" className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Contact Number *</label>
              <input required type="tel" className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
          </div>

          <div>
            <label className="font-body text-sm font-semibold text-forest-green block mb-1">Preferred Contact Method</label>
            <div className="flex gap-4 font-body text-sm">
              {["Email", "WhatsApp", "Phone call"].map(m => (
                <label key={m} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="contact-method" value={m} className="accent-burnt-orange" />
                  {m}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Date of Birth</label>
              <input type="date" className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Nationality</label>
              <input className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
          </div>

          {/* Volunteering Preference */}
          <div>
            <label className="font-body text-sm font-semibold text-forest-green block mb-1">Volunteering Preference *</label>
            <select
              required
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm"
            >
              <option value="">Select your preference</option>
              {volunteeringOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* Conditional: DBS */}
          {isPeopleFacing(preference) && (
            <>
              <div>
                <label className="font-body text-sm font-semibold text-forest-green block mb-1">Do you have an Enhanced DBS?</label>
                <select value={hasDbs} onChange={(e) => setHasDbs(e.target.value)} className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="in-progress">In progress</option>
                </select>
              </div>
              {hasDbs === "yes" && (
                <div>
                  <label className="font-body text-sm font-semibold text-forest-green block mb-1">Upload DBS Certificate</label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="font-body text-sm" />
                </div>
              )}
              <div>
                <label className="font-body text-sm font-semibold text-forest-green block mb-1">Completed UNICEF Safeguarding Training?</label>
                <select value={hasSafeguarding} onChange={(e) => setHasSafeguarding(e.target.value)} className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {hasSafeguarding === "yes" && (
                  <div className="mt-2">
                    <label className="font-body text-sm text-mid-text block mb-1">Upload Certificate</label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="font-body text-sm" />
                  </div>
                )}
                {hasSafeguarding === "no" && (
                  <a href="https://agora.unicef.org/course/info.php?id=29324" target="_blank" rel="noopener noreferrer" className="text-burnt-orange hover:underline text-sm font-body mt-1 inline-block">
                    Complete Training — free, ~2–3 hours →
                  </a>
                )}
              </div>
            </>
          )}

          {/* Student */}
          <div>
            <label className="font-body text-sm font-semibold text-forest-green block mb-1">Are you a student?</label>
            <select value={isStudent} onChange={(e) => setIsStudent(e.target.value)} className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {isStudent === "yes" && (
              <p className="font-body text-sm text-saffron mt-1">Student rate will be applied — proof of enrolment required.</p>
            )}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Preferred Outbound Date</label>
              <input type="date" className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Preferred Return Date</label>
              <input type="date" className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
          </div>

          {/* Profession */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Profession / Specialism</label>
              <input className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">How did you hear about us?</label>
              <input className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
          </div>

          <div>
            <label className="font-body text-sm font-semibold text-forest-green block mb-1">Referral name / discount code (optional)</label>
            <input className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Allergies (optional)</label>
              <textarea className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" rows={2} />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Health conditions or disabilities (optional)</label>
              <textarea className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" rows={2} />
            </div>
          </div>

          {/* Emergency Contact */}
          <h3 className="pt-4">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Name</label>
              <input className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Relationship</label>
              <input className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-forest-green block mb-1">Phone</label>
              <input type="tel" className="w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm" />
            </div>
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input required type="checkbox" className="mt-1 accent-burnt-orange" />
            <span className="font-body text-sm">
              I consent to Meaningful Miles contacting me for the purpose of enquiries and booking.
            </span>
          </label>

          <button type="submit" className="btn-primary w-full md:w-auto">
            Submit My Enquiry →
          </button>
        </form>

        {/* Contact tiles */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <a href="https://wa.link/eag6c7" target="_blank" rel="noopener noreferrer" className="mm-card bg-forest-green text-center py-6">
            <span className="font-body font-semibold text-primary-foreground uppercase tracking-wider text-sm">Message Us on WhatsApp</span>
          </a>
          <a href="mailto:hello@meaningfulmiles.travel" className="mm-card text-center py-6" style={{ backgroundColor: "hsl(var(--burnt-orange))" }}>
            <span className="font-body font-semibold uppercase tracking-wider text-sm" style={{ color: "white" }}>Email Us</span>
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default ApplyPage;
