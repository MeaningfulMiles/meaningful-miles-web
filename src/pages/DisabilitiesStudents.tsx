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
    whatYoullDo="Supervised volunteer placement at our partner disability NGO, contributing to programmes for adults with disabilities under guidance from experienced professionals."
    whoFor="Students studying occupational therapy, speech and language therapy, social work, disability studies, and allied disciplines."
    noteBox="Placement suitability for academic credit varies by institution. We can provide supporting documentation."
    extraRequirements={["Volunteering insurance (mandatory)", "Enhanced DBS Certificate", "UNICEF Safeguarding Training", "Proof of university enrolment", "Signed Code of Conduct"]}
    safeguarding
    showStudentDefault
  />
);

export default DisabilitiesStudents;
