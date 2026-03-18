import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  { quote: "This experience changed my perspective on veterinary practice entirely. The hands-on clinical work in Delhi shelters was extraordinary.", name: "Dr Sarah M.", info: "Veterinary Surgeon · London, UK", stream: "Animal Welfare" },
  { quote: "As a vet student, I was nervous about India. From the moment Aansa met me at the airport, every worry disappeared. The EMS hours were invaluable.", name: "Conor O'B.", info: "Vet Student · Dublin, Ireland", stream: "Animal Welfare — EMS" },
  { quote: "Working alongside the disabilities team in Delhi was the most meaningful professional development I've ever done.", name: "Michelle R.", info: "Disability Support Worker · Toronto, Canada", stream: "Disabilities Empowerment" },
  { quote: "I had no professional background but wanted to give my time somewhere it mattered. Meaningful Miles made it possible — and unforgettable.", name: "James T.", info: "Marketing Manager · Manchester, UK", stream: "Good-Hearted Soul" },
  { quote: "The safety and logistics were incredible. I never once felt alone or unsupported. And the Taj Mahal at sunrise? Life-changing.", name: "Dr Priya K.", info: "Veterinary Nurse · Birmingham, UK", stream: "Animal Welfare" },
  { quote: "An experience that will stay with me forever. The team, the people, the animals — everything was handled with such care.", name: "Sophie L.", info: "OT Student · Edinburgh, UK", stream: "Disabilities Empowerment" },
];

const TestimonialsPage = () => (
  <PageLayout>
    <Helmet>
      <title>Testimonials — Meaningful Miles Volunteering India</title>
      <meta name="description" content="Read what our guests say about volunteering with Meaningful Miles in Delhi — veterinary, disability, and general volunteering experiences." />
    </Helmet>
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-12">What Our Guests Say</h1>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="mm-card h-full flex flex-col">
              <span className="font-display text-5xl text-saffron leading-none mb-2">"</span>
              <p className="pull-quote text-lg flex-1 mb-4">{t.quote}</p>
              <div>
                <p className="font-body font-semibold text-forest-green">{t.name}</p>
                <p className="font-body text-sm text-mid-text">{t.info}</p>
                <span className="inline-block mt-2 text-xs font-body font-semibold px-3 py-1 rounded-full bg-parched-cream text-terracotta-brown">
                  {t.stream}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default TestimonialsPage;
