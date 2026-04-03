import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useMemo } from "react";
import { addMonths, isBefore, parseISO } from "date-fns";
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

const interestOptions = [
  "History & heritage",
  "Architecture",
  "Shopping & markets",
  "Street food",
  "Restaurants & fine dining",
  "Music & live performance",
  "Theatre & arts",
  "Spiritual & religious sites",
  "Photography",
  "Nature & wildlife",
  "Wellness & yoga",
];

const inputClass = "w-full rounded-lg border border-border bg-off-white px-3 py-2 font-body text-sm";
const labelClass = "font-body text-sm font-semibold text-forest-green block mb-1";

const ApplyPage = () => {
  const [preference, setPreference] = useState("");
  const [hasDbs, setHasDbs] = useState("");
  const [dbsLevel, setDbsLevel] = useState("");
  const [dbsRefused, setDbsRefused] = useState("");
  const [hasSafeguarding, setHasSafeguarding] = useState("");
  const [willingSafeguarding, setWillingSafeguarding] = useState("");
  const [isStudent, setIsStudent] = useState("");
  const [travelledIndia, setTravelledIndia] = useState("");
  const [soloComfort, setSoloComfort] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [otherInterest, setOtherInterest] = useState("");
  const [showOtherInterest, setShowOtherInterest] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    trackLeadFormSubmit();
  };

  if (submitted) {
    return (
      <PageLayout>
        <Helmet><title>Registration Submitted — Meaningful Miles</title></Helmet>
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
        <title>Register My Interest — Meaningful Miles</title>
        <meta name="description" content="Register your interest for a volunteering placement in Delhi with Meaningful Miles. Fill in the form and we'll be in touch within 2 working days." />
      </Helmet>
      <section className="section-padding bg-off-white">
        <SectionDivider />
        <ScrollReveal>
          <h1 className="text-center mb-2">Register My Interest</h1>
          <h3 className="text-center mb-10">Fill in the form and we'll be in touch within 2 working days via your preferred method.</h3>
        </ScrollReveal>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          {/* ── Name ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Title</label>
              <select className={inputClass}>
                <option value="">Select</option>
                {["Mr", "Mrs", "Ms", "Dr", "Prof", "Other"].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>First Name *</label>
              <input required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Family Name *</label>
              <input required className={inputClass} />
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Email *</label>
              <input required type="email" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Contact Number *</label>
              <input required type="tel" className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Preferred Contact Method</label>
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
              <label className={labelClass}>Date of Birth</label>
              <input type="date" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Nationality</label>
              <input className={inputClass} />
            </div>
          </div>

          {/* ── Volunteering Preference ── */}
          <div>
            <label className={labelClass}>Volunteering Preference *</label>
            <select
              required
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className={inputClass}
            >
              <option value="">Select your preference</option>
              {volunteeringOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* ── Safeguarding & DBS (conditional) ── */}
          {isPeopleFacing(preference) && (
            <div className="space-y-4 p-4 rounded-lg border border-forest-green/20 bg-forest-green/5">
              <h3 className="text-forest-green">Safeguarding & DBS</h3>

              <div>
                <label className={labelClass}>Do you hold a valid DBS check?</label>
                <select value={hasDbs} onChange={(e) => setHasDbs(e.target.value)} className={inputClass}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="in-progress">In progress</option>
                </select>
              </div>

              {hasDbs === "yes" && (
                <>
                  <div>
                    <label className={labelClass}>What level?</label>
                    <select value={dbsLevel} onChange={(e) => setDbsLevel(e.target.value)} className={inputClass}>
                      <option value="">Select</option>
                      <option value="basic">Basic</option>
                      <option value="standard">Standard</option>
                      <option value="enhanced">Enhanced</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Expiry date of your DBS certificate</label>
                    <input type="date" className={inputClass} />
                  </div>
                </>
              )}

              <div>
                <label className={labelClass}>Have you ever had a DBS application refused or had any concerns raised?</label>
                <select value={dbsRefused} onChange={(e) => setDbsRefused(e.target.value)} className={inputClass}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <p className="font-body text-xs text-mid-text mt-1 italic">Answering yes does not automatically disqualify you.</p>
              </div>

              <div>
                <label className={labelClass}>Have you recently completed Safeguarding Training?</label>
                <select value={hasSafeguarding} onChange={(e) => setHasSafeguarding(e.target.value)} className={inputClass}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {hasSafeguarding === "no" && (
                <div>
                  <label className={labelClass}>Are you willing to complete safeguarding training before your placement is confirmed?</label>
                  <select value={willingSafeguarding} onChange={(e) => setWillingSafeguarding(e.target.value)} className={inputClass}>
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <a href="https://agora.unicef.org/course/info.php?id=29324" target="_blank" rel="noopener noreferrer" className="text-burnt-orange hover:underline text-sm font-body mt-1 inline-block">
                    Complete UNICEF Training — free, ~2–3 hours →
                  </a>
                </div>
              )}
            </div>
          )}

          {/* ── Student ── */}
          <div>
            <label className={labelClass}>Are you a student?</label>
            <select value={isStudent} onChange={(e) => setIsStudent(e.target.value)} className={inputClass}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {isStudent === "yes" && (
              <p className="font-body text-sm text-saffron mt-1">Student rate will be applied — proof of enrolment required.</p>
            )}
          </div>

          {/* ── Dates ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Preferred Outbound Date</label>
              <input type="date" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Preferred Return Date</label>
              <input type="date" className={inputClass} />
            </div>
          </div>

          {/* ── Profession ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Profession / Specialism</label>
              <input className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>How did you hear about us?</label>
              <input className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Referral name / discount code (optional)</label>
            <input className={inputClass} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Allergies (optional)</label>
              <textarea className={inputClass} rows={2} />
            </div>
            <div>
              <label className={labelClass}>Health conditions or disabilities (optional)</label>
              <textarea className={inputClass} rows={2} />
            </div>
          </div>

          {/* ── Emergency Contact ── */}
          <h3 className="pt-4">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Name</label>
              <input className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Relationship</label>
              <input className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input type="tel" className={inputClass} />
            </div>
          </div>

          {/* ── Travel Experience ── */}
          <h3 className="pt-4">Travel Experience</h3>
          <div>
            <label className={labelClass}>Have you travelled to India before?</label>
            <select value={travelledIndia} onChange={(e) => setTravelledIndia(e.target.value)} className={inputClass}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>How comfortable are you with solo travel? (1 = not at all, 5 = very comfortable)</label>
            <div className="flex gap-4 font-body text-sm mt-1">
              {[1, 2, 3, 4, 5].map(n => (
                <label key={n} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="solo-comfort"
                    value={n}
                    checked={soloComfort === String(n)}
                    onChange={(e) => setSoloComfort(e.target.value)}
                    className="accent-burnt-orange"
                  />
                  {n}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Any specific concerns about travelling to India?</label>
            <textarea className={inputClass} rows={3} />
          </div>

          {/* ── Personal Interests & Sightseeing Preferences ── */}
          <h3 className="pt-4">Personal Interests & Sightseeing Preferences</h3>
          <p className="font-body text-sm text-mid-text mb-2">Please select all that interest you:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {interestOptions.map(interest => (
              <label key={interest} className="flex items-center gap-2 cursor-pointer font-body text-sm">
                <input
                  type="checkbox"
                  checked={interests.includes(interest)}
                  onChange={() => toggleInterest(interest)}
                  className="accent-burnt-orange"
                />
                {interest}
              </label>
            ))}
            <label className="flex items-center gap-2 cursor-pointer font-body text-sm">
              <input
                type="checkbox"
                checked={showOtherInterest}
                onChange={() => setShowOtherInterest(!showOtherInterest)}
                className="accent-burnt-orange"
              />
              Other
            </label>
          </div>
          {showOtherInterest && (
            <div className="mt-2">
              <input
                placeholder="Please specify…"
                value={otherInterest}
                onChange={(e) => setOtherInterest(e.target.value)}
                className={inputClass}
              />
            </div>
          )}

          {/* ── Open-Ended Questions ── */}
          <div>
            <label className={labelClass}>What do you hope to get out of your Meaningful Miles experience?</label>
            <textarea className={inputClass} rows={3} />
          </div>
          <div>
            <label className={labelClass}>Is there anything else you'd like us to know?</label>
            <textarea className={inputClass} rows={3} />
          </div>

          {/* ── Privacy & Safeguarding Notices ── */}
          <div className="p-4 rounded-lg bg-forest-green/5 border border-forest-green/20">
            <p className="font-body text-sm text-mid-text">
              <strong className="text-forest-green">Your privacy matters.</strong> All information provided is held in strict confidence and used solely for the purpose of designing your Meaningful Miles journey. Your data will be deleted securely once your journey has been completed.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-forest-green/5 border border-forest-green/20">
            <p className="font-body text-sm text-mid-text">
              <strong className="text-forest-green">Safeguarding.</strong> Meaningful Miles is committed to the safeguarding and protection of children and vulnerable adults. Education and disability empowerment volunteers are required to hold a valid DBS check and complete safeguarding training before placement is confirmed.
            </p>
          </div>

          {/* ── Declaration & Consent ── */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input required type="checkbox" className="mt-1 accent-burnt-orange" />
            <span className="font-body text-sm">
              I confirm that the information provided is accurate and complete. I understand that Meaningful Miles is committed to the safeguarding and protection of children and vulnerable adults, and that certain placements require a valid DBS check and completed safeguarding training before confirmation.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input required type="checkbox" className="mt-1 accent-burnt-orange" />
            <span className="font-body text-sm">
              I consent to Meaningful Miles contacting me for the purpose of enquiries and booking.
            </span>
          </label>

          <div>
            <label className={labelClass}>Signature — type your full name *</label>
            <input required placeholder="Type your full name" className={inputClass} />
          </div>

          <button type="submit" className="btn-primary w-full md:w-auto">
            Submit My Enquiry →
          </button>
        </form>

        {/* Contact tiles */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <a href="https://wa.link/eag6c7" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("apply_page")} className="mm-card bg-forest-green text-center py-6">
            <span className="font-body font-semibold text-primary-foreground uppercase tracking-wider text-sm">Message Us on WhatsApp</span>
          </a>
          <a href="mailto:hello@meaningfulmiles.travel" onClick={() => trackEmailClick("apply_page")} className="mm-card text-center py-6" style={{ backgroundColor: "hsl(var(--burnt-orange))" }}>
            <span className="font-body font-semibold uppercase tracking-wider text-sm" style={{ color: "white" }}>Email Us</span>
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default ApplyPage;
