import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const FounderPage = () => (
  <PageLayout>
    <Helmet>
      <title>Meet Aansa — Founder of Meaningful Miles</title>
      <meta name="description" content="Meet Aansa, founder of Meaningful Miles. Born in Zambia, solo-travelled 45 countries, international development professional. Her story is the proof behind the promise." />
    </Helmet>

    {/* Hero photo placeholder */}
    <div className="w-full h-[50vh] flex items-center justify-center" style={{ backgroundColor: "#C8B89A" }}>
      <span className="font-body text-base px-8 text-center" style={{ color: "white" }}>
        PHOTO: Aansa — full quality, confident, warm. Outdoor or travel setting. She wears hijab.
      </span>
    </div>

    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-10">Hi, I'm Aansa.</h1>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto space-y-6">
        <ScrollReveal>
          <p className="font-body text-lg">
            They say you should never judge a book by its cover, and my life is a testament to that truth. As a Muslim woman who chooses to travel, often traditionally dressed and in hijab, I am often met with unconscious biases — yet behind the fabric lies a soul that has roamed nearly 45 countries, 98% of them entirely solo.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body">
            My journey began in Zambia, where I was born and raised, surrounded by the wild beauty of safaris and the roar of Mosi-o-Tunya — the Smoke that Thunders — the majestic Victoria Falls.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body">
            Since then, my path has taken me from the ancient cliffs of Bamiyan, Afghanistan, to the fiery heights of Volcán de Fuego in Guatemala. I have dived with Great White sharks in Cape Town, white-water rafted the St Lawrence River in Canada, navigated the floating markets of Bangkok, volunteered in villages outside Kathmandu, and skydived for charity. My identity is not a limitation. It is my strength.
          </p>
        </ScrollReveal>

        {/* Midpage image */}
        <ScrollReveal>
          <div className="w-full aspect-video rounded-lg flex items-center justify-center my-8" style={{ backgroundColor: "#C8B89A" }}>
            <span className="font-body text-sm text-center px-4" style={{ color: "white" }}>
              PHOTO: Aansa in travel context — at landmark, in nature, or at NGO work
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body">
            I haven't just visited these places. I have lived and worked in 18 countries as an International Development professional — because for me, travel has always been about understanding, contributing, and growing.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-body">
            I founded Meaningful Miles to share something I fell in love with: the transformative power of India. After seeing the profound impact of animal welfare and education initiatives in Delhi, I knew I had to open the door for others — particularly those who find India daunting, who travel solo, or who want their time to mean something beyond the tourist trail.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="pull-quote text-center py-8">
            "India isn't just a destination. It's a vibrant teacher. This is my story. Let me help you create yours."
          </p>
          <p className="font-body text-center font-semibold text-forest-green">— Aansa</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/animal-welfare/professionals" className="btn-primary">Animal Welfare →</Link>
            <Link to="/disabilities/professionals" className="btn-outline-green">Disabilities Empowerment →</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export default FounderPage;
