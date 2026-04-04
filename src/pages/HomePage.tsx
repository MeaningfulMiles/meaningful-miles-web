import { Link } from "react-router-dom";
import { trackCtaPlanClick, trackWhatsAppClick } from "@/lib/analytics";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import HeroSlider from "@/components/HeroSlider";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import PhotoStrip from "@/components/PhotoStrip";
import { useState, useEffect, useCallback } from "react";
import { Plane, Shield, Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import heroTajGuests from "@/assets/hero-taj-guests.jpeg";
import aansaHeadshot from "@/assets/aansa-headshot.png";
import heroVetClinic from "@/assets/hero-vet-clinic.jpeg";
import heroDisabilitiesGroup from "@/assets/hero-disabilities-group.jpeg";
import heroAansaQutub from "@/assets/hero-aansa-qutub.jpeg";
import heroWelcomeMeeting from "@/assets/special-needs-cafe.png";
import heroAnimalSanctuary from "@/assets/hero-animal-sanctuary.jpeg";
import heroOldDelhiMarket from "@/assets/hero-old-delhi-market.png";
import heroBannerPlayground from "@/assets/education-banner-playground.png";
import heroOldDelhiFood from "@/assets/hero-old-delhi-food.jpeg";
import heroAnimalSanctuaryFriends from "@/assets/hero-animal-sanctuary-friends.jpeg";
import journeyMonkeyCare from "@/assets/journey-monkey-care.png";
import journeyMarketBangles from "@/assets/journey-market-bangles.png";
import journeyMountainSelfie from "@/assets/journey-mountain-selfie.jpeg";
import journeyEmuCare from "@/assets/journey-emu-care.png";
import journeyGroupBanner from "@/assets/journey-group-banner.jpeg";
import journeyTajBacks from "@/assets/journey-taj-backs.jpeg";
import journeyPlaygroundBanner from "@/assets/journey-playground-banner.jpeg";
import journeyCommunityMeal from "@/assets/journey-community-meal.jpeg";
import heroProjectWhyClassroom from "@/assets/project-why-classroom-blurred.jpeg";
import glimpseClassroomTeaching from "@/assets/glimpse-classroom-teaching.png";
import glimpseMarketCouple from "@/assets/glimpse-market-couple.png";

const heroSlides = [
  {
    src: heroTajGuests,
    alt: "Meaningful Miles guests standing in front of the Taj Mahal in Agra.",
    label: "Guests at the Taj Mahal — wonder, arrival, and shared purpose",
  },
  {
    src: heroVetClinic,
    alt: "Volunteer and local clinician treating a dog at a Delhi animal shelter.",
    label: "Animal welfare in action at a Delhi shelter",
  },
  {
    src: heroDisabilitiesGroup,
    alt: "Group activity session with volunteers and participants in a disabilities programme.",
    label: "Disabilities empowerment through joyful, shared activity",
  },
  {
    src: heroOldDelhiMarket,
    alt: "Warm, vibrant market scene evoking the colour and life of Old Delhi.",
    label: "The spirit of Old Delhi — colour, food, and connection",
  },
  {
    src: heroOldDelhiFood,
    alt: "Meaningful Miles guests enjoying street food in a vibrant Old Delhi market.",
    label: "Old Delhi food experiences — flavour, culture, and joy",
  },
  {
    src: heroAansaQutub,
    alt: "Aansa smiling in front of Qutub Minar holding a Meaningful Miles cap.",
    label: "Aansa in Delhi — confidence, care, and local guidance",
  },
  {
    src: heroWelcomeMeeting,
    alt: "Meaningful Miles guests and team sharing a warm welcome meeting in a café setting.",
    label: "A personal welcome from arrival to departure",
  },
  {
    src: heroAnimalSanctuary,
    alt: "Guest spending time with rescued animals at a sanctuary in India.",
    label: "Compassionate animal encounters beyond the clinic",
  },
  {
    src: heroAnimalSanctuaryFriends,
    alt: "Two Meaningful Miles guests standing together at an animal sanctuary with rescued farm animals behind them.",
    label: "Sanctuary visits that feel personal, warm, and memorable",
  },
  {
    src: heroBannerPlayground,
    alt: "Two women holding a Meaningful Miles banner at a community playground with children playing.",
    label: "Travel. Give. Grow. — Meaningful Miles in the field",
  },
];

const galleryImages = [
  {
    src: journeyMonkeyCare,
    alt: "Volunteer feeding a rescued baby monkey while seated on grass.",
    caption: "Animal care in tender, unforgettable moments.",
  },
  {
    src: journeyMarketBangles,
    alt: "Traveller exploring a colourful market stall in India with a local guide.",
    caption: "Markets, craftsmanship, and everyday connection.",
  },
  {
    src: journeyMountainSelfie,
    alt: "Two Meaningful Miles travellers smiling for a selfie at sunset in the mountains.",
    caption: "Shared adventure beyond the expected route.",
  },
  {
    src: journeyEmuCare,
    alt: "Volunteer spending time with emus at an animal sanctuary.",
    caption: "Encounters with animals that stay with you.",
  },
  {
    src: journeyGroupBanner,
    alt: "Group of Meaningful Miles guests posing with a banner in front of a Delhi monument.",
    caption: "Travel together, give together, grow together.",
  },
  {
    src: journeyTajBacks,
    alt: "Three travellers facing the Taj Mahal wearing Meaningful Miles shirts.",
    caption: "The Taj Mahal, seen as part of a bigger journey.",
  },
  {
    src: journeyPlaygroundBanner,
    alt: "Two women holding a Meaningful Miles banner in a community playground.",
    caption: "Purposeful visits rooted in real community connection.",
  },
  {
    src: journeyCommunityMeal,
    alt: "Meaningful Miles guests sharing a community meal in a decorated hall.",
    caption: "Meals, culture, and belonging woven into the experience.",
  },
];

const testimonials = [
  { quote: "This experience changed my perspective on veterinary practice entirely. The hands-on clinical work in Delhi shelters was extraordinary.", name: "Dr Sarah M.", info: "Veterinary Surgeon · London, UK" },
  { quote: "As a vet student, I was nervous about India. From the moment Aansa met me at the airport, every worry disappeared. The EMS hours were invaluable.", name: "Conor O'B.", info: "Vet Student · Dublin, Ireland" },
  { quote: "Working alongside the disabilities team in Delhi was the most meaningful professional development I've ever done. And the Taj Mahal was a bonus I'll never forget.", name: "Michelle R.", info: "Disability Support Worker · Toronto, Canada" },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="font-display text-6xl text-saffron leading-none">"</span>
      <p className="pull-quote mt-2 mb-6">{t.quote}</p>
      <p className="font-body font-semibold text-forest-green">{t.name}</p>
      <p className="font-body text-sm text-mid-text">{t.info}</p>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-burnt-orange" : "bg-burnt-orange/30"}`} aria-label={`Testimonial ${i+1}`} />
        ))}
      </div>
    </div>
  );
};

const HomePage = () => (
  <PageLayout>
    <Helmet>
      <title>Meaningful Miles — Volunteering & Sightseeing in Delhi, India</title>
      <meta name="description" content="Fully supported volunteering and sightseeing in Delhi and Agra. Veterinary, disability and general volunteering with safety, accommodation and the Taj Mahal included." />
    </Helmet>

    {/* Hero Slider */}
    <HeroSlider slides={heroSlides} />

    {/* Value Proposition */}
    <section className="section-padding bg-off-white text-center">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="mb-4">Let Every Mile Mean Something</h1>
        <p className="font-body text-xl text-mid-text max-w-3xl mx-auto mb-8">
          Fully supported volunteering and sightseeing in Delhi and Agra. You give your time. We handle absolutely everything else.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Link to="/apply" className="btn-primary">Find My Journey →</Link>
          <Link to="/why-choose-us" className="btn-outline-green">Why Choose Us</Link>
        </div>
        <Link to="/where-youll-give" className="inline-block font-display text-lg sm:text-xl font-bold text-saffron hover:underline tracking-wide uppercase mb-2">
          Proud Partners of Award-Winning Charities →
        </Link>
        <p className="font-body text-sm text-mid-text italic">
          Every volunteer generates a social dividend that flows directly to our charity partners.
        </p>
      </ScrollReveal>
    </section>

    {/* Three Paths */}
    <section className="section-padding bg-parched-cream">
      <SectionDivider />
      <ScrollReveal>
        <h2 className="text-center mb-12">Find Your Path</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          { icon: "🐾", title: "Animal Welfare", desc: "Vet professionals and students — and anyone who loves animals — working alongside award-winning Delhi shelters.", color: "text-saffron", link: "/animal-welfare/professionals" },
          { icon: "♿", title: "Disabilities Empowerment", desc: "Bring specialist skills or simply a compassionate presence to life-changing programmes for adults with disabilities.", color: "text-fuchsia-accent", link: "/disabilities/professionals" },
          { icon: "📚", title: "Education Initiatives", desc: "Teachers, educators and gap year volunteers — safeguarding-first placements supporting children in Delhi's underserved communities.", color: "text-marigold", link: "/education-initiatives" },
          { icon: "💛", title: "The Good-Hearted Soul", desc: "No specialism required. Just generosity, curiosity, and the desire to give back while experiencing India.", color: "text-burnt-orange", link: "/good-hearted-soul" },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="mm-card text-center h-full flex flex-col">
              <span className={`text-4xl mb-4 ${item.color}`}>{item.icon}</span>
              <h3 className="text-primary mb-3 font-display text-xl">{item.title}</h3>
              <p className="font-body text-base text-mid-text mb-4 flex-1">{item.desc}</p>
              <Link to={item.link} className="text-burnt-orange font-body font-semibold text-sm hover:underline">
                Learn More →
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Difference */}
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h2 className="text-center mb-12">Your Journey. Our Commitment.</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          { title: "Social Dividend", desc: "Every guest generates a meaningful social dividend flowing directly to our charity partners — sustaining their work long after you leave.", color: "bg-saffron" },
          { title: "Door to Door", desc: "Airport pickup on arrival. Drop-off on departure. Accommodation, meals, mineral water, every journey in between — handled.", color: "bg-forest-green" },
          { title: "Taj Mahal Included", desc: "Agra is part of every package. Delhi sightseeing — from Jama Masjid to Qutub Minar — is curated entirely around your interests.", color: "bg-burnt-orange" },
          { title: "Solo Traveller Safe", desc: "Designed from the ground up for solo travellers and first-time India visitors. You are never navigating this alone.", color: "bg-royal-blue" },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="mm-card flex gap-4">
              <div className={`w-1 rounded-full flex-shrink-0 ${item.color}`} />
              <div>
                <h3 className="font-display text-xl text-primary mb-2">{item.title}</h3>
                <p className="font-body text-base">{item.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Safety Promise */}
    <section className="section-padding bg-forest-green text-center">
      <ScrollReveal>
        <h2 className="text-primary-foreground mb-6">India Without the Overwhelm</h2>
        <p className="font-body text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-10">
          We know India can feel daunting. That's why Meaningful Miles exists. From the moment you land in Delhi, you are our guest. We are with you at every step — from airport arrivals to farewell dinner.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          {[
            { icon: <Plane className="w-6 h-6" />, label: "Airport pickup included" },
            { icon: <Shield className="w-6 h-6" />, label: "24/7 WhatsApp support" },
            { icon: <HomeIcon className="w-6 h-6" />, label: "Vetted accommodation" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3 text-primary-foreground">
              {b.icon}
              <span className="font-body text-sm">{b.label}</span>
            </div>
          ))}
        </div>
        <Link to="/safety" className="btn-outline-white">Your Safety, Our Priority →</Link>
      </ScrollReveal>
    </section>

    {/* Meet Aansa */}
    <section className="section-padding bg-parched-cream">
      <SectionDivider />
      <ScrollReveal>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <img
            src={aansaHeadshot}
            alt="Aansa, founder of Meaningful Miles"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover flex-shrink-0 shadow-lg"
            style={{ objectPosition: "calc(50% - 5mm) 50%" }}
          />
          <div>
            <h3 className="mb-4">Meet Aansa</h3>
            <p className="pull-quote mb-6">
              "They say never judge a book by its cover. My life is a testament to that truth."
            </p>
            <p className="font-body mb-4">
              Born in Zambia to the sound of Victoria Falls, Aansa has solo-travelled nearly 45 countries and worked as an international development professional across 18 of them. She has dived with Great White sharks in Cape Town, stood at the edge of Volcán de Fuego in Guatemala, skydived for charity, and navigated the ancient cliffs of Bamiyan.
            </p>
            <p className="font-body mb-6">
              She founded Meaningful Miles so that you don't have to figure India out alone. If she can take on the world, she can take care of you in Delhi.
            </p>
            <Link to="/founder" className="btn-primary">Read Aansa's Full Story →</Link>
          </div>
        </div>
      </ScrollReveal>
    </section>


    {/* Itinerary Preview */}
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h2 className="text-center mb-2">Your Journey, Your Timeline</h2>
        <p className="font-body text-mid-text text-center mb-10 italic max-w-2xl mx-auto">
          Every package is tailored to you — your specialism, your interests, your dates. Below are example journeys.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { weeks: "2-Week", price: "£1,050", items: ["Days 1–2: Arrival, airport pickup, welcome orientation", "Days 3–9: Volunteer placement at NGO partner", "Days 10–11: Delhi sightseeing curated to your interests", "Day 12: Agra — Taj Mahal & Agra Fort", "Days 13–14: Wrap-up & departure"], popular: false },
          { weeks: "3-Week", price: "£1,350", items: ["Days 1–3: Arrival, orientation, cultural immersion", "Days 4–16: Volunteer placement at NGO partner", "Days 17–19: Delhi sightseeing curated to your interests", "Day 20: Agra — Taj Mahal & Agra Fort", "Days 20–21: Wrap-up & departure"], popular: true },
          { weeks: "4-Week", price: "£1,650", items: ["Days 1–3: Arrival, full orientation, city familiarisation", "Days 4–22: Volunteer placement at NGO partner", "Days 23–26: Extended Delhi sightseeing + Agra", "Days 27–28: Rest, farewell dinner, departure", "Longer stays warmly accommodated"], popular: false },
        ].map((c, i) => (
          <ScrollReveal key={c.weeks} delay={i * 0.1}>
            <div className={`mm-card h-full flex flex-col relative ${c.popular ? "ring-2 ring-burnt-orange" : ""}`}>
              {c.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-primary-foreground font-body text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>}
              <h3 className="font-display text-xl text-primary mb-1">{c.weeks} Journey</h3>
              <p className="text-burnt-orange font-display text-2xl font-medium mb-1">From {c.price}</p>
              <p className="font-body text-xs text-mid-text italic mb-4">Student rate available — contact us</p>
              <ul className="space-y-2 mb-6 flex-1">
                {c.items.map((item) => <li key={item} className="font-body text-sm">{item}</li>)}
              </ul>
              <Link to="/sample-itineraries" className="text-burnt-orange font-body font-semibold text-sm hover:underline">
                View Sample Itinerary →
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <p className="font-body text-sm text-mid-text text-center mt-6 italic max-w-3xl mx-auto">
        Prices are indicative from prices for the ground package only. International flights and volunteering insurance are the responsibility of the guest. All packages are fully bespoke.
      </p>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-parched-cream">
      <SectionDivider />
      <ScrollReveal>
        <h2 className="text-center mb-10">What Our Guests Say</h2>
        <TestimonialSlider />
      </ScrollReveal>
    </section>

    {/* Gallery */}
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h2 className="text-center mb-2">A Glimpse of Your Journey</h2>
        <p className="font-body text-mid-text text-center mb-10 italic">
          Delhi. Agra. The shelters. The people. The moments that change you.
        </p>
      </ScrollReveal>
      <GalleryCarousel />
    </section>

    {/* Final CTA */}
    <section className="section-padding bg-terracotta-brown text-center">
      <ScrollReveal>
        <h2 className="text-primary-foreground mb-4">Ready to Make Your Miles Meaningful?</h2>
        <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Places are limited to ensure every guest receives the personal experience they deserve. Reach out today — we'll design your journey together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/apply" onClick={() => trackCtaPlanClick("Start My Journey")} className="btn-primary">Start My Journey →</Link>
          <a href="https://wa.link/eag6c7" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("homepage_cta")} className="btn-outline-white">
            WhatsApp Us
          </a>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

const GalleryCarousel = () => {
  const [offset, setOffset] = useState(0);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxOffset = galleryImages.length - itemsPerView;

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${offset * (100 / itemsPerView)}%)` }}>
          {galleryImages.map((img, i) => (
            <div key={i} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
              <figure className="flex flex-col gap-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden" style={{ boxShadow: "0 2px 20px rgba(45,80,22,0.08)" }}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <figcaption className="font-body text-sm text-mid-text leading-relaxed px-1">
                  {img.caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setOffset(Math.max(0, offset - 1))} className="absolute left-0 top-[38%] -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-primary-foreground" disabled={offset === 0} aria-label="Previous">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => setOffset(Math.min(maxOffset, offset + 1))} className="absolute right-0 top-[38%] -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-primary-foreground" disabled={offset >= maxOffset} aria-label="Next">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HomePage;
