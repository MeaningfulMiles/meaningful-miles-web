import VolunteerPageTemplate from "@/components/VolunteerPageTemplate";
import goodHeartedHero from "@/assets/good-hearted-soul-hero.jpg";

const GoodHeartedSoul = () => (
  <VolunteerPageTemplate
    title="General Volunteering India — The Good-Hearted Soul — Meaningful Miles"
    metaDesc="No specialism required. Volunteer in Delhi with full support, accommodation, meals and Taj Mahal sightseeing included. Give back while experiencing India."
    heroSlides={[{ src: goodHeartedHero, alt: "Meaningful Miles volunteers smiling together in Delhi", label: "Good-Hearted Soul volunteers" }]}
    h1="No Specialism Required. Just You."
    h3="For generous souls who want to give time, see India, and grow"
    introText="You don't need a professional qualification to make a difference. You just need heart, curiosity, and the willingness to show up. Choose to support our animal welfare or disabilities partner — we'll match you to where your presence will matter most."
    whatYoullDo="Volunteer placement at one of our charity partners — animal welfare or disabilities empowerment, depending on your preference and availability. Your role will be hands-on, meaningful, and guided by the NGO team."
    whoFor="Anyone with generosity, curiosity, and the desire to give back while experiencing India. No specialist qualifications required."
    extraRequirements={["Volunteering insurance (mandatory)", "Signed Code of Conduct", "If working with people: Enhanced DBS and UNICEF Safeguarding Training will be required"]}
  />
);

export default GoodHeartedSoul;
