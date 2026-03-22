import ScrollReveal from "@/components/ScrollReveal";

const placeholderPhotos = [
  { alt: "Cape Point, South Africa — Aansa arms wide open at the Cape Point sign" },
  { alt: "Bamiyan, Afghanistan — Aansa in front of the ancient cliff niches" },
  { alt: "Rajasthan, India — Aansa in the blue arched doorway" },
  { alt: "Taj Mahal, India — Aansa in pink on the bench at the reflection pool" },
];

const PhotoStrip = () => (
  <section className="section-padding bg-off-white overflow-hidden">
    <ScrollReveal>
      <h2 className="text-center mb-10">
        Nearly 45 countries. 95% solo. 100% unforgettable.
      </h2>
    </ScrollReveal>
    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-[1400px] mx-auto">
      {placeholderPhotos.map((photo, i) => (
        <ScrollReveal key={i} delay={i * 0.08}>
          <div
            className="flex-shrink-0 w-[280px] md:w-[320px] h-[360px] md:h-[420px] rounded-[10px] overflow-hidden flex items-center justify-center snap-center"
            style={{ backgroundColor: "#C8B89A" }}
          >
            <span className="font-body text-sm text-center px-6" style={{ color: "white" }}>
              {photo.alt}
            </span>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default PhotoStrip;
