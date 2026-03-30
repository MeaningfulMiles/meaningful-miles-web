import { Link } from "react-router-dom";

interface PricingCardsProps {
  showStudentDefault?: boolean;
  ctaLabel?: string;
}

const PricingCards = ({ showStudentDefault, ctaLabel = "Book Now" }: PricingCardsProps) => {
  const cards = [
    { weeks: 2, price: "£1,050", popular: false },
    { weeks: 3, price: "£1,350", popular: true },
    { weeks: 4, price: "£1,650", popular: false },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.weeks} className={`mm-card text-center relative ${card.popular ? "ring-2 ring-burnt-orange" : ""}`}>
            {card.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-primary-foreground font-body text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-2xl text-primary mb-1">{card.weeks}-Week Journey</h3>
            <p className="text-burnt-orange font-display text-3xl font-medium mb-2">From {card.price}</p>
            {showStudentDefault ? (
              <span className="inline-block bg-marigold/20 text-terracotta-brown font-body text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Student Rate Available
              </span>
            ) : (
              <p className="font-body text-sm text-mid-text mb-4 italic">Student rate available — contact us</p>
            )}
            <Link to="/apply" className="btn-primary w-full text-center block">
              {ctaLabel}
            </Link>
          </div>
        ))}
      </div>

      {/* Bespoke note */}
      <p className="font-body text-center italic text-terracotta-brown mt-8 max-w-3xl mx-auto">
        Every journey is fully bespoke. Duration, charity placement and itinerary are tailored to you — these prices are your starting point, not your ceiling.
      </p>

      {/* Student discount callout */}
      <div className="mt-8 rounded-[10px] border-l-4 border-burnt-orange bg-parched-cream p-6 max-w-3xl mx-auto">
        <h3 className="font-display text-xl mb-2 text-dark-text">Student &amp; EMS Discount Available</h3>
        <p className="font-body text-dark-text text-[15px] mb-3">
          Student rates are available across all packages. UK vet students: our registered vets on placement can sign off your official EMS hours in India. Contact us for your bespoke student quote.
        </p>
        <Link to="/apply" className="font-body font-semibold text-burnt-orange hover:underline">
          Get your student quote →
        </Link>
      </div>

      {/* Small print */}
      <p className="font-body text-sm text-mid-text text-center mt-6 italic">
        Prices are indicative from prices for the ground package only. International flights and volunteering insurance are the responsibility of the guest. All packages are fully bespoke.
      </p>
    </div>
  );
};

export default PricingCards;
