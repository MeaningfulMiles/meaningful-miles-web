import { ExternalLink } from "lucide-react";

const SafeguardingBox = () => (
  <div className="rounded-lg border-2 border-forest-green bg-parched-cream p-6 md:p-8">
    <h3 className="mb-4">Safeguarding Requirements</h3>
    <ul className="space-y-4 font-body">
      <li className="flex flex-col gap-1">
        <span className="font-semibold text-forest-green">Enhanced DBS Certificate required</span>
        <a
          href="https://www.gov.uk/request-copy-criminal-record"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-burnt-orange hover:underline text-sm"
        >
          How to Apply for a DBS <ExternalLink className="w-3 h-3" />
        </a>
      </li>
      <li className="flex flex-col gap-1">
        <span className="font-semibold text-forest-green">UNICEF Safeguarding Training required</span>
        <a
          href="https://agora.unicef.org/course/info.php?id=29324"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-burnt-orange hover:underline text-sm"
        >
          Complete Training — free, ~2–3 hours <ExternalLink className="w-3 h-3" />
        </a>
      </li>
      <li className="text-sm text-mid-text">
        Both must be completed and uploaded before placement begins.
      </li>
    </ul>
  </div>
);

export default SafeguardingBox;
