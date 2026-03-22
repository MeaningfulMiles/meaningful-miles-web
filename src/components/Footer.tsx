import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-forest-green" style={{ borderTop: "3px solid hsl(var(--saffron))" }}>
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Logo */}
      <div className="mb-10">
        <span className="font-display text-2xl text-primary-foreground font-medium">
          Meaningful Miles
        </span>
        <p className="font-body text-sm text-primary-foreground/70 mt-1">Travel. Give. Grow.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Our Charities */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Our Charities
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/where-youll-give" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Where You'll Give</Link>
          </div>
        </div>

        {/* Animal Welfare */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Animal Welfare
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/animal-welfare/professionals" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Professionals</Link>
            <Link to="/animal-welfare/students" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Vet Students (EMS)</Link>
            <Link to="/animal-welfare/animal-lovers" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Animal Lovers</Link>
            <Link to="/animal-welfare/risk-analysis" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Risk Analysis</Link>
          </div>
        </div>

        {/* Disabilities */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Disabilities Empowerment
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/disabilities/professionals" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Professionals</Link>
            <Link to="/disabilities/students" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Students</Link>
          </div>
        </div>

        {/* Need to Know */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Need to Know
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/whats-included" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">What's Included</Link>
            <Link to="/sample-itineraries" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Sample Itineraries</Link>
            <Link to="/code-of-conduct" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Volunteer Code of Conduct</Link>
            <Link to="/visa" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Visa</Link>
            <Link to="/vaccinations" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Vaccinations</Link>
            <Link to="/safeguarding" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Safeguarding & DBS</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Contact
          </h4>
          <div className="flex flex-col gap-2">
            <a href="mailto:aansa@meaningfulmiles.travel" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              aansa@meaningfulmiles.travel
            </a>
            <a href="https://wa.link/eag6c7" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              WhatsApp
            </a>
            <div className="flex gap-3 mt-3">
              <a href="https://www.facebook.com/profile.php?id=61587641143325" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/meaningfulmiles.travel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/meaningful-miles-travel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@meaningfulmiles.travel" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13v-3.5a6.37 6.37 0 0 0-.88-.07 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 3.76.92V6.69z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hr-subtle pt-6">
        <p className="font-body text-xs text-primary-foreground/50 leading-relaxed">
          Meaningful Miles provides ground-based packages including accommodation, meals, mineral water, local transport and curated sightseeing. International flights are not included. Volunteering insurance is mandatory and the sole responsibility of the guest. © 2026 Meaningful Miles. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
