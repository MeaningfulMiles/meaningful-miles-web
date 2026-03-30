import VolunteerPageTemplate from "@/components/VolunteerPageTemplate";
import vetStudentsHero from "@/assets/vet-students-hero.png";

const AnimalWelfareStudents = () => (
  <VolunteerPageTemplate
    title="Veterinary EMS in India — Meaningful Miles"
    metaDesc="Supervised veterinary EMS and clinical placements in Delhi animal shelters. Fully supported with accommodation, meals, transport and Taj Mahal day trip."
    heroSlides={[{ src: vetStudentsHero, alt: "Vet student bandaging a dog alongside Indian veterinarian", label: "Vet Students EMS" }]}
    h1="Veterinary EMS in India"
    h3="Supervised clinical placements for EMS and clinical hours"
    introText="Gain invaluable clinical experience in one of the world's most unique veterinary environments — the animal shelters of Delhi. Every logistical detail is handled so you can focus entirely on learning."
    whatYoullDo="Supervised clinical placement at our partner NGO, contributing to the treatment and care of Delhi's street animals alongside experienced veterinary teams."
    whoFor="Veterinary students requiring EMS or clinical hours as part of their university programme."
    noteBox="University accreditation: EMS suitability varies by institution. Please confirm with your EMS coordinator before applying. We are happy to provide supporting documentation."
    extraRequirements={["Volunteering insurance (mandatory)", "Proof of university enrolment", "EMS placement letter", "Signed Code of Conduct"]}
    showStudentDefault
  />
);

export default AnimalWelfareStudents;
