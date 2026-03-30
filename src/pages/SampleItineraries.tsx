import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ItineraryItem {
  day: string;
  desc: string;
}

interface SampleProps {
  title: string;
  price: string;
  track: string;
  items: ItineraryItem[];
  popular?: boolean;
}

const SampleItinerary = ({ title, price, track, items, popular }: SampleProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`mm-card ${popular ? "ring-2 ring-burnt-orange" : ""}`}>
      {popular && <span className="inline-block bg-saffron text-primary-foreground font-body text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-3">Most Popular</span>}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
        <h3 className="font-display text-xl text-primary">{title}</h3>
        <span className="text-burnt-orange font-display text-2xl font-medium">From {price}</span>
      </div>
      <p className="font-body text-sm text-mid-text italic mb-4">{track} · Student rate available</p>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 text-burnt-orange font-body font-semibold text-sm mb-2">
        {open ? "Hide" : "View"} Day-by-Day
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="space-y-3 mt-4 pl-4 border-l-2 border-burnt-orange/20">
          {items.map((item, i) => (
            <li key={i} className="font-body text-sm">
              <span className="font-semibold text-forest-green">{item.day}:</span> {item.desc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SampleItineraries = () => (
  <PageLayout>
    <Helmet>
      <title>Sample Itineraries — Meaningful Miles Volunteering India</title>
      <meta name="description" content="Example 2, 3, and 4-week volunteering journeys in Delhi and Agra with sightseeing, Taj Mahal, and NGO placements." />
    </Helmet>

    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-2">Sample Journeys</h1>
        <h3 className="text-center mb-4">Every package is bespoke — these give a flavour of what your time might look like</h3>
        <p className="font-body text-mid-text text-center italic mb-12 max-w-3xl mx-auto">
          Delhi sightseeing is always curated to your individual interests — history, food, architecture, markets, spiritual sites. No two guests see the same Delhi.
        </p>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <SampleItinerary
            title="2-Week Journey"
            price="£1,050"
            track="Animal Welfare Track"
            items={[
              { day: "Days 1–2", desc: "Arrival · Airport pickup · Welcome orientation · Cultural briefing · Rest and settle in" },
              { day: "Days 3–9", desc: "Volunteer placement at NGO partner (weekday mornings and afternoons)" },
              { day: "Day 10", desc: "Old Delhi — food lanes, spice market, heritage walk" },
              { day: "Day 11", desc: "Day trip to Agra — Taj Mahal at sunrise · Agra Fort · return to Delhi" },
              { day: "Day 12", desc: "Choice of Jama Masjid · Qutub Minar · or Humayun's Tomb — curated to your interest" },
              { day: "Day 13", desc: "Rest · farewell dinner" },
              { day: "Day 14", desc: "Airport drop-off · departure" },
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <SampleItinerary
            title="3-Week Journey"
            price="£1,350"
            track="Disabilities Track"
            popular
            items={[
              { day: "Days 1–3", desc: "Arrival · orientation · safeguarding induction at partner NGO" },
              { day: "Days 4–15", desc: "Placement weekdays · weekend afternoons curated Delhi sightseeing" },
              { day: "Day 16", desc: "Full sightseeing day — Jama Masjid & Old Delhi food experience" },
              { day: "Day 17", desc: "Day trip to Agra — Taj Mahal & Agra Fort" },
              { day: "Day 18", desc: "Qutub Minar & Humayun's Tomb" },
              { day: "Days 19–20", desc: "Rest · packing · farewell" },
              { day: "Day 21", desc: "Airport drop-off · departure" },
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <SampleItinerary
            title="4-Week Journey"
            price="£1,650"
            track="Good-Hearted Soul Track"
            items={[
              { day: "Days 1–3", desc: "Arrival · full orientation · city familiarisation walk with Meaningful Miles host" },
              { day: "Days 4–20", desc: "Placement at chosen charity partner (weekdays) · curated Delhi sightseeing on weekends" },
              { day: "Days 21–22", desc: "Extended Delhi — Old Delhi · Jama Masjid · local markets · street food" },
              { day: "Day 23", desc: "Day trip to Agra — Taj Mahal & Agra Fort" },
              { day: "Days 24–25", desc: "Qutub Minar · Humayun's Tomb · rest and reflection" },
              { day: "Days 26–27", desc: "Farewell dinner · flexible departure prep" },
              { day: "Days 28–30", desc: "Departure (flex days available)" },
            ]}
          />
        </ScrollReveal>

        <p className="font-body text-sm text-mid-text italic text-center">
          Stays longer than one month warmly accommodated — contact us to discuss.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default SampleItineraries;
