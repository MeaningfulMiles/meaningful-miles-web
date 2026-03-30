import VolunteerPageTemplate from "@/components/VolunteerPageTemplate";
import animalWelfareProHero from "@/assets/animal-welfare-pro-hero.jpg";

const AnimalWelfarePro = () => (
  <VolunteerPageTemplate
    title="Animal Welfare for Vet Professionals — Meaningful Miles"
    metaDesc="Veterinary sabbaticals in Delhi. Clinical volunteer work at award-winning animal shelters with full ground logistics, accommodation, and Taj Mahal included."
    heroSlides={[{ src: animalWelfareProHero, alt: "Volunteer with rescue horse at Delhi animal shelter", label: "Vet Professionals" }]}
    h1="The Sabbatical That Matters"
    h3="For veterinary professionals seeking purpose, pause, and perspective"
    introText="Step away from your practice and into something extraordinary. Work alongside award-winning Delhi animal shelters, bringing your clinical skills where they're needed most — while we handle every logistical detail."
    whatYoullDo="Clinical volunteer work at our award-winning partner NGO. You'll work alongside local veterinary teams, contributing your skills to the treatment and care of Delhi's street animals in a hands-on, meaningful placement."
    whoFor="Qualified veterinarians, veterinary nurses, veterinary technicians, and allied veterinary professionals seeking purposeful international clinical experience."
    extraRequirements={["Volunteering insurance (mandatory)", "Signed Code of Conduct"]}
  />
);

export default AnimalWelfarePro;
