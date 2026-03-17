import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  label: string;
  bg?: string;
}

interface HeroSliderProps {
  slides: Slide[];
  interval?: number;
  height?: string;
}

const HeroSlider = ({ slides, interval = 5000, height = "100vh" }: HeroSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [paused, next, interval]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div
            className={`w-full h-full flex items-center justify-center ${i === current ? "animate-ken-burns" : ""}`}
            style={{ backgroundColor: slide.bg || "#C8B89A" }}
          >
            <span className="font-body text-base px-8 text-center" style={{ color: "white" }}>
              {slide.label}
            </span>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-forest-green" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-forest-green" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
