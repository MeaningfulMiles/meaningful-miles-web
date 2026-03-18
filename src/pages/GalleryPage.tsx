import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const images = [
  "Taj Mahal — iconic view, dawn light",
  "Street dog receiving gentle treatment",
  "Old Delhi alleyway — colour and life",
  "Jama Masjid — grand and peaceful",
  "Qutub Minar — ancient, striking",
  "Humayun's Tomb — symmetry and stillness",
  "Agra Fort — ochre walls, expansive",
  "Volunteer in genuine moment — smiling",
  "Delhi spice market — vibrant",
  "Rescued animals at shelter — hopeful",
  "Volunteer with disability team — warmth",
  "Sunset over Delhi skyline — beautiful",
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <PageLayout>
      <Helmet>
        <title>Gallery — Meaningful Miles Volunteering India</title>
        <meta name="description" content="Photos from Meaningful Miles volunteering journeys in Delhi and Agra — the shelters, the sightseeing, and the moments that change you." />
      </Helmet>
      <section className="section-padding bg-off-white">
        <SectionDivider />
        <ScrollReveal>
          <h1 className="text-center mb-12">Your Journey in Pictures</h1>
        </ScrollReveal>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <ScrollReveal key={i}>
              <button
                onClick={() => setLightbox(i)}
                className="w-full mb-4 block"
              >
                <div
                  className="rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "#C8B89A",
                    aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1",
                    boxShadow: "0 2px 20px rgba(45,80,22,0.08)",
                  }}
                >
                  <span className="font-body text-sm text-center px-4" style={{ color: "white" }}>{img}</span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-3xl w-full">
            <div className="rounded-lg flex items-center justify-center aspect-[4/3]" style={{ backgroundColor: "#C8B89A" }}>
              <span className="font-body text-lg text-center px-8" style={{ color: "white" }}>{images[lightbox]}</span>
            </div>
            <p className="font-body text-sm text-center mt-4 text-primary-foreground/70">{images[lightbox]}</p>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default GalleryPage;
