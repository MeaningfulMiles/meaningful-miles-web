import VolunteerPageTemplate from "@/components/VolunteerPageTemplate";
import disabilitiesProHero from "@/assets/disabilities-pro-hero.jpg";

const DisabilitiesPro = () => (
  <VolunteerPageTemplate
    title="Disability Professionals Volunteering India — Meaningful Miles"
    metaDesc="Bring your disability expertise to Delhi. Ethical, NGO-led placements with full ground logistics, accommodation, sightseeing and Taj Mahal included."
    heroSlides={[{ src: disabilitiesProHero, alt: "Professionals collaborating at Sarthak Educational Trust in Delhi", label: "Disabilities Professionals" }]}
    h1="Bring Your Skills Where They're Needed Most"
    h3="For disability professionals seeking meaningful international experience."
    introText="Your expertise matters here. Work alongside our established disability charity partner in Delhi, contributing specialist skills to life-changing programmes for adults with disabilities — in an ethical, partnership-led model."
    whatYoullDo={`As a volunteer with Meaningful Miles, you will be embedded within Sarthak Educational Trust — a leading Delhi-based NGO dedicated to empowering Persons with Disabilities (PwDs) through education, employment, and independent living. You will contribute your professional skills to meaningful, hands-on work that creates lasting impact.\n\nDepending on your background and expertise, your placement may involve supporting Sarthak's marketing and stakeholder engagement activities; contributing to fundraising strategy and initiatives; or providing technical guidance to improve Sarthak's suite of digital platforms — including CapSarathi, an information app on disability rights and services; Rozgar Sarathi, a dedicated job portal connecting PwDs with employers; and Gyansarthi, an e-learning portal supporting skills development.\n\nYou may also play a role in expanding Sarthak's international partnerships and global outreach, strengthening employer linkages to increase hiring opportunities for PwDs trained by Sarthak, enhancing the organisation's social media presence to raise awareness of disability inclusion, or improving the functionality and accessibility of Sarthak's website.\n\nThis is a skills-based placement where your expertise will directly support an established, impactful organisation — and where the work you contribute will be felt long after your tenure ends.`}
    whoFor="Qualified disability professionals — occupational therapists, speech and language therapists, support workers, social workers, and allied professionals."
    extraRequirements={["Volunteering insurance (mandatory)", "Enhanced DBS Certificate", "UNICEF Safeguarding Training", "Signed Code of Conduct"]}
    safeguarding
    ctaLabel="Book Now"
  />
);

export default DisabilitiesPro;
