import { Link } from "react-router-dom";

interface PricingCardsProps {
  showStudentDefault?: boolean;
}

const PricingCards = ({ showStudentDefault }: PricingCardsProps) => {
  const cards = [
    { weeks: 2, price: "£1,250", popular: false },
    { weeks: 3, price: "£1,750", popular: true },
    { weeks: 4, price: "£2,250", popular: false },
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
              Apply Now
            </Link>
          </div>
        ))}
      </div>
      <p className="font-body text-sm text-mid-text text-center mt-6 italic">
        Prices are indicative from prices for the ground package only. International flights and volunteering insurance are the responsibility of the guest. All packages are fully bespoke.
      </p>
    </div>
  );
};

export default PricingCards;
