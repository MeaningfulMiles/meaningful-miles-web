import VolunteerPageTemplate from "@/components/VolunteerPageTemplate";

const DisabilitiesPro = () => (
  <VolunteerPageTemplate
    title="Disability Professionals Volunteering India — Meaningful Miles"
    metaDesc="Bring your disability expertise to Delhi. Ethical, NGO-led placements with full ground logistics, accommodation, sightseeing and Taj Mahal included."
    heroSlides={[{ label: "HERO: Disability professional working alongside service user — respectful, warm" }]}
    h1="Bring Your Skills Where They're Needed Most"
    h3="For disability professionals seeking meaningful international experience"
    introText="Your expertise matters here. Work alongside our established disability charity partner in Delhi, contributing specialist skills to life-changing programmes for adults with disabilities — in an ethical, partnership-led model."
    whatYoullDo="Professional volunteer placement at our partner disability NGO, contributing your specialist skills to established programmes supporting adults with disabilities in Delhi."
    whoFor="Qualified disability professionals — occupational therapists, speech and language therapists, support workers, social workers, and allied professionals."
    extraRequirements={["Volunteering insurance (mandatory)", "Enhanced DBS Certificate", "UNICEF Safeguarding Training", "Signed Code of Conduct"]}
    safeguarding
    ctaLabel="Book Now"
  />
);

export default DisabilitiesPro;
