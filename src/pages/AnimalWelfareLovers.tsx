import VolunteerPageTemplate from "@/components/VolunteerPageTemplate";
import animalLoversHero from "@/assets/animal-lovers-hero.jpg";

const AnimalWelfareLovers = () => (
  <VolunteerPageTemplate
    title="Animal Welfare Volunteering for Animal Lovers — Meaningful Miles"
    metaDesc="No veterinary degree needed. Volunteer at Delhi animal shelters, help rescued street dogs and cats, with full support and Taj Mahal included."
    heroSlides={[{ src: animalLoversHero, alt: "Meaningful Miles volunteers with rescued dogs at Delhi animal shelter", label: "Animal Lovers volunteers" }]}
    h1="You Don't Need a Degree to Make a Difference"
    h3="For animal lovers who want to give time, energy, and heart"
    introText="If you love animals and want to make a tangible difference, this is your journey. Work alongside the incredible teams at Delhi's animal shelters — feeding, walking, socialising, and simply being present for animals who need it."
    whatYoullDo="Hands-on care at our partner animal welfare NGO — feeding, walking, socialising rescued animals, assisting with non-clinical tasks, and providing the compassionate presence that makes a real difference."
    whoFor="Anyone who loves animals. No veterinary qualifications required — just generosity, compassion, and the desire to help."
    extraRequirements={["Volunteering insurance (mandatory)", "Signed Code of Conduct"]}
  />
);

export default AnimalWelfareLovers;
