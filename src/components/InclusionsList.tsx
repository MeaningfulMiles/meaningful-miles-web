import { Check, X } from "lucide-react";

const included = [
  "Airport pickup on arrival in Delhi",
  "Airport drop-off on departure",
  "All accommodation for the full duration",
  "All meals — breakfast, lunch and dinner",
  "Unlimited mineral water throughout",
  "All local transport to placement, sightseeing, everywhere",
  "Day trip to Agra: Taj Mahal & Agra Fort",
  "Delhi sightseeing curated to your individual interests",
  "Cultural & safety orientation on arrival",
  "24/7 WhatsApp support throughout",
  "Placement coordination with NGO partner",
  "Social dividend generated on your behalf",
];

const notIncluded = [
  "International flights — your responsibility",
  "Volunteering insurance — mandatory, your responsibility",
  "Personal spending money",
];

const InclusionsList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    <div>
      <h3 className="mb-6">Included ✓</h3>
      <ul className="space-y-3">
        {included.map((item) => (
          <li key={item} className="flex gap-3 font-body text-base">
            <Check className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="mb-6">Not Included</h3>
      <ul className="space-y-3">
        {notIncluded.map((item) => (
          <li key={item} className="flex gap-3 font-body text-base">
            <X className="w-5 h-5 text-mid-text flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default InclusionsList;
