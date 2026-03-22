import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import aansaTajMahal from "@/assets/aansa-taj-mahal.jpg";
import aansaBamiyan from "@/assets/aansa-bamiyan.jpg";
import aansaCapePoint from "@/assets/aansa-cape-point.jpg";
import aansaRajasthan from "@/assets/aansa-rajasthan.jpg";
import aansaDurdleDoor from "@/assets/aansa-durdle-door.jpg";

const FounderPage = () => (
  <PageLayout>
    <Helmet>
      <title>Meet Aansa — Founder of Meaningful Miles</title>
      <meta name="description" content="Meet Aansa, founder of Meaningful Miles. Born in Zambia, solo-travelled 45 countries, international development professional. Her story is the proof behind the promise." />
    </Helmet>

    {/* Taj Mahal Hero Image */}
    <section className="bg-off-white -mt-1">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto px-4 pt-4 md:pt-8">
          <img
            src={aansaTajMahal}
            alt="Aansa sitting on the bench at the Taj Mahal reflection pool"
            className="w-full rounded-[10px] object-cover shadow-lg"
          />
          <p className="font-display italic text-lg md:text-xl mt-4 text-center text-burnt-orange">
            "This bench is waiting for you."
          </p>
        </div>
      </ScrollReveal>

      {/* Counters */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10 pb-16 md:pb-24 px-4">
        <AnimatedCounter target={45} prefix="~" label="Countries" color="terracotta-brown" />
        <AnimatedCounter target={95} suffix="%" label="Solo" color="terracotta-brown" />
        <AnimatedCounter target={18} label="Countries Lived & Worked" color="terracotta-brown" />
        <AnimatedCounter target={1} label="Untethered Soul" duration={1.5} color="terracotta-brown" />
      </div>
    </section>

    <section className="section-padding bg-off-white pt-0">
      <SectionDivider />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14">
        {/* Portrait placeholder — right on desktop, top on mobile */}
        <ScrollReveal className="order-first md:order-last md:w-[340px] flex-shrink-0">
          <div className="w-full aspect-[3/4] rounded-[10px] flex items-center justify-center" style={{ backgroundColor: "#C8B89A" }}>
            <span className="font-body text-sm text-center px-4" style={{ color: "white" }}>
              PHOTO: Aansa — founder portrait
            </span>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <div className="space-y-6 flex-1">
          <ScrollReveal>
            <p className="pull-quote">
              "I founded Meaningful Miles after witnessing the profound impact of animal welfare, inclusion and education initiatives in Delhi. I knew I had to share this incredible experience with others."
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body text-lg">
              They say never judge a book by its cover. My life is a testament to that truth. As a Muslim woman who travels — frequently solo, in places where that still raises eyebrows — I have learned that the world opens up to those who show up for it: boldly, curiously, and without waiting for permission.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body">
              I was born and raised in Zambia, surrounded by pets, shaped by safaris, by the roar of Mosi-o-Tunya — the Smoke that Thunders — and by the quiet joy of playing teacher to the children in my neighbourhood. My identity is rooted in Africa, but my soul has always been restless, pulled equally by my South Asian heritage and by every horizon I have not yet seen.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body">
              That untethered spirit has never left me. It carried me from the ancient cliffs of Bamiyan, Afghanistan, to 'Greyhounding' and youth hostelling across Canada and USA, to the fiery heights of Volcán de Fuego in Guatemala. It put me in the ocean with Great White sharks of the coast of Cape Town, on a raft on the St Lawrence River in Canada, in the floating markets of Bangkok, and in the villages outside Kathmandu where I volunteered. It persuaded me to jump out of a plane and abseil down a hospital tower — both in the name of charity. Proof that courage and a good cause make an excellent combination.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body">
              Those youth hostels were my first classrooms of the world: kitchens where backpackers traded stories from six continents, common rooms where a solo female traveller could be, simply, another adventurer passing through. I learned early and for good that the world is overwhelmingly generous when you meet it with an open heart.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body">
              Travel has never been passive for me. I have lived and worked in 18 countries as an International Development professional, because truly understanding a place means contributing to it. My identity is not a limitation — it is my compass.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-body">
              I founded Meaningful Miles because of India. After witnessing the profound impact of animal welfare, inclusion and education initiatives in Delhi, I knew I had to open that door for others — especially those who travel solo, who find India daunting, or who want their time to mean something beyond the tourist trail. India is not just a destination. It is a vibrant, humbling, life-expanding teacher.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Closing Quote */}
    <section className="section-padding bg-parched-cream text-center">
      <ScrollReveal>
        <p className="pull-quote max-w-3xl mx-auto mb-4">
          "India isn't just a destination. It's a vibrant and humbling teacher. This is my story — let me help you create yours."
        </p>
        <p className="font-body font-semibold text-forest-green">— Aansa</p>
      </ScrollReveal>
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link to="/animal-welfare/professionals" className="btn-primary">Animal Welfare →</Link>
          <Link to="/disabilities/professionals" className="btn-outline-green">Disabilities Empowerment →</Link>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default FounderPage;
