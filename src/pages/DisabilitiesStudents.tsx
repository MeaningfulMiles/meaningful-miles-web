import VolunteerPageTemplate from "@/components/VolunteerPageTemplate";
import disabilitiesStudentsHero from "@/assets/disabilities-students-hero.png";

const DisabilitiesStudents = () => (
  <VolunteerPageTemplate
    title="Disability Students Volunteering India — Meaningful Miles"
    metaDesc="International supervised practice for disability students in Delhi. Full support, accommodation, sightseeing and Taj Mahal included."
    heroSlides={[{ src: disabilitiesStudentsHero, alt: "Meaningful Miles volunteers playing Jenga with children in Delhi classroom", label: "Disabilities Students" }]}
    h1="Your Placement. Your Purpose."
    h3="For students in adult disability disciplines seeking international supervised practice"
    introText="Take your studies beyond the classroom. A supervised placement in Delhi, working alongside experienced professionals at our partner disability NGO — gaining international practice experience that sets you apart."
    whatYoullDo={`As a student volunteer with Meaningful Miles, you will join Sarthak Educational Trust — a leading Delhi-based NGO working to empower Persons with Disabilities (PwDs) through education, employment, and independent living. This is an exceptional opportunity to apply your academic learning in a real-world setting, gain hands-on experience, and contribute meaningfully to an organisation making a tangible difference in people's lives.\n\nDepending on your field of study and interests, you might support Sarthak's marketing and communications activities, assist with fundraising campaigns, or help with social media outreach to raise awareness of disability inclusion across wider audiences. Those with an interest in technology or digital development may contribute to improving Sarthak's innovative platforms — including CapSarathi, an information app on disability rights and services; Rozgar Sarathi, a job portal connecting PwDs with employers; and Gyansarthi, an e-learning portal supporting skills and education.\n\nYou may also assist with website improvements, support efforts to build international partnerships, or help strengthen links with employers who are committed to hiring PwDs trained by Sarthak.\n\nWhatever your background, this placement will stretch your skills, broaden your perspective, and give you direct experience of the development and disability sectors — all whilst contributing to work that genuinely matters.`}
    whoFor="Students studying occupational therapy, speech and language therapy, social work, disability studies, and allied disciplines."
    noteBox="Placement suitability for academic credit varies by institution. We can provide supporting documentation."
    extraRequirements={["Volunteering insurance (mandatory)", "Enhanced DBS Certificate", "UNICEF Safeguarding Training", "Proof of university enrolment", "Signed Code of Conduct"]}
    safeguarding
    showStudentDefault
  />
);

export default DisabilitiesStudents;
