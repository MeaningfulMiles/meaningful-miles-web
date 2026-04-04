import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const charities = [
  {
    id: "acgs",
    name: "All Creatures Great and Small (ACGS)",
    type: "Animal Welfare · Faridabad, near Delhi",
    about:
      "All Creatures Great and Small was founded by Anjali Gopalan — named by Time Magazine as one of the world's 100 most influential people. Set on a sanctuary outside Delhi, the shelter is home to over 300 dogs alongside rescued donkeys, horses, mules, cats, cows and emus. Every animal here receives the individual care and dignity they deserve. This is not a passing-through place. It is a place of genuine rescue and healing.",
    whatYouDo:
      "Volunteers spend their days feeding, bathing and exercising animals, assisting the veterinary team with clinical care, supporting animal rehabilitation, helping with the sanctuary's organic farm, and contributing to adoption outreach and administrative support. Veterinary professionals and vet students work directly alongside qualified Indian vets — and registered vets on site are able to sign off official UK student EMS hours.",
    suits: [
      "Veterinary professionals and vet nurses",
      "UK vet students seeking EMS hours in India",
      "Animal lovers with no clinical background",
      "Anyone who wants their hands — and heart — full every single day",
    ],
    commitment: "2 weeks",
    website: "https://www.allcreaturesgreatandsmall.in",
    accent: "saffron",
  },
  {
    id: "sarthak",
    name: "Sarthak Educational Trust",
    type: "Disability Inclusion, Skills & Employment · Delhi & across India",
    about:
      "Founded in 2008, Sarthak Educational Trust is one of India's leading NGOs empowering Persons with Disabilities (PwDs) through skill development, inclusive employment, free therapy and pioneering digital solutions. With 27 centres across India, Sarthak has touched over one million lives and built vocational skills for nearly 47,000 individuals with disabilities, creating sustainable employment for over 31,000 PwDs. Their three ground-breaking platforms — CapSarathi (disability rights information app), Rozgar Sarathi (job portal for PwDs) and Gyansarathi (e-learning platform) — are changing what inclusion looks like in India.",
    whatYouDo:
      "This is a placement for professionals who want to use their career skills — not set them aside. Volunteers support Sarthak's marketing and stakeholder outreach, assist with fundraising campaigns, provide technical guidance on their digital platforms, help build international partnerships, strengthen employer engagement for PwD job placement, support social media and communications, and contribute to improving their website and digital presence.",
    suits: [
      "Corporate professionals on sabbatical",
      "Tech, digital and web development specialists",
      "Marketing and communications professionals",
      "HR and recruitment professionals",
      "Adult care and mental health professionals and students",
    ],
    commitment: "3–4 weeks",
    website: "https://www.sarthakindia.org",
    accent: "fuchsia-accent",
  },
  {
    id: "project-why",
    name: "Project WHY",
    type: "Education & Community Development · Delhi & Dehradun, India",
    about:
      "Founded in 2000 by Anouradha Bakshi, Project WHY has spent over two decades creating spaces for underprivileged children and women to dream, learn and transform their lives. Operating five after-school support centres across South Delhi — in Giri Nagar, Govind Puri, Madanpur Khadar, Okhla and Yamuna — plus a centre in Dehradun, the organisation reaches over 1,200 children every year and has touched the lives of more than 10,000 children and women. Project WHY's work spans quality education support from grades 1 to 12, computer literacy, skill development for women and youth, and a mid-day meal programme for the youngest learners. Crucially, it employs people from within the communities it serves — including its own alumni — ensuring that change comes from within.",
    whatYouDo:
      "Volunteers at Project WHY work directly alongside community teachers and staff in the after-school centres. Depending on your background, you might support classroom learning and literacy, assist with English language teaching, help develop teacher training resources, use your professional skills to strengthen the organisation's communications or digital presence, or simply offer consistent, caring adult support to children who need it. No two placements look the same — Project WHY responds to what you bring and what the children need.",
    suits: [
      "Teachers & Educators looking to bring their classroom skills into a community setting",
      "ESOL/EFL Teachers wanting to support English language learning in underserved urban communities",
      "Teacher Educators & CPD professionals interested in building local teacher capacity",
      "Mental Health Professionals and Social Workers who can offer pastoral support and safeguarding insight",
      "Gap Year Volunteers ready to commit meaningfully and be genuinely useful",
    ],
    commitment: "3–4 weeks",
    website: "https://www.projectwhy.org",
    accent: "marigold",
  },
];

const accentBorderClasses: Record<string, string> = {
  saffron: "border-l-4 border-saffron",
  "fuchsia-accent": "border-l-4 border-fuchsia-accent",
};

const WhereYoullGivePage = () => (
  <PageLayout>
    <Helmet>
      <title>Where You'll Give — Meaningful Miles</title>
      <meta
        name="description"
        content="Meet our award-winning partner charities in Delhi — animal welfare and disability inclusion. Discover where your skills and time will matter most."
      />
    </Helmet>

    {/* Hero */}
    <section className="section-padding bg-forest-green text-center">
      <ScrollReveal>
        <h1 className="text-primary-foreground mb-4">Where You'll Give</h1>
        <p className="font-display text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
          Award-winning Indian charities. One transformative journey.
        </p>
      </ScrollReveal>
    </section>

    {/* Intro */}
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <p className="font-body text-lg text-center max-w-3xl mx-auto">
          At Meaningful Miles, travel is never just about what you see. It's about what you leave behind. Our carefully chosen partner charities are not projects — they are living, breathing communities where your skills, your time and your presence will matter long after you've gone home.
        </p>
      </ScrollReveal>
    </section>

    {/* ACGS & Sarthak */}
    {charities.map((c, i) => (
      <section
        key={c.name}
        id={c.id}
        className={`section-padding ${i % 2 === 0 ? "bg-parched-cream" : "bg-off-white"}`}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <ScrollReveal>
            <div className={`mm-card ${accentBorderClasses[c.accent]}`}>
              <p className="font-body text-sm uppercase tracking-wider text-mid-text mb-1">
                {c.type}
              </p>
              <h2 className="mb-4">{c.name}</h2>

              <h3 className="mt-6 mb-3">About</h3>
              <p className="font-body">{c.about}</p>

              <h3 className="mt-6 mb-3">What you'll do</h3>
              <p className="font-body">{c.whatYouDo}</p>

              <h3 className="mt-6 mb-3">Who this suits</h3>
              <ul className="space-y-2 font-body pl-1">
                {c.suits.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>

              <p className="font-body mt-6">
                <strong>Minimum commitment:</strong> {c.commitment}
              </p>
              <a
                href={c.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-burnt-orange font-body font-semibold text-sm hover:underline"
              >
                Visit Website →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding bg-forest-green text-center">
      <ScrollReveal>
        <h2 className="text-primary-foreground mb-4">
          Not sure which placement is right for you?
        </h2>
        <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          That's exactly what Meaningful Miles is here for. We'll match you to the right charity based on your skills, your timeline and what you want to give — and we'll take care of everything from there.
        </p>
        <Link to="/apply" className="btn-primary">Talk to Aansa →</Link>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default WhereYoullGivePage;
