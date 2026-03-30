import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinkClass = "font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors";

const Footer = () => (
  <footer className="bg-forest-green" style={{ borderTop: "3px solid hsl(var(--saffron))" }}>
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Logo */}
      <div className="mb-10">
        <span className="font-display text-2xl text-primary-foreground/70 font-normal italic">
          Meaningful Miles
        </span>
        <p className="font-display text-sm text-primary-foreground font-semibold tracking-wide mt-1">Travel <span className="text-burnt-orange mx-0.5">·</span> Give <span className="text-burnt-orange mx-0.5">·</span> Grow</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-8 mb-12">
        {/* Our Charities */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Our Charities
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/where-youll-give" className={footerLinkClass}>Where You'll Give</Link>
          </div>
        </div>

        {/* Animal Welfare */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Animal Welfare
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/animal-welfare/professionals" className={footerLinkClass}>Professionals</Link>
            <Link to="/animal-welfare/students" className={footerLinkClass}>Vet Students (EMS)</Link>
            <Link to="/animal-welfare/animal-lovers" className={footerLinkClass}>Animal Lovers</Link>
            <Link to="/animal-welfare/risk-analysis" className={footerLinkClass}>Risk Analysis</Link>
          </div>
        </div>

        {/* Disabilities Empowerment */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Disabilities Empowerment
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/disabilities/professionals" className={footerLinkClass}>Professionals</Link>
            <Link to="/disabilities/students" className={footerLinkClass}>Students</Link>
          </div>
        </div>

        {/* Education Initiatives */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Education Initiatives
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/education-initiatives" className={footerLinkClass}>Teachers & Educators</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>ESOL/EFL Teachers</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Teacher Educators & CPD</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Mental Health Professionals</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Social Workers</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Gap Year Volunteers</Link>
            <Link to="/safeguarding" className={footerLinkClass}>Safeguarding & DBS</Link>
          </div>
        </div>

        {/* For Professionals */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            For Professionals
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/where-youll-give#acgs" className={footerLinkClass}>Veterinary Professionals</Link>
            <Link to="/where-youll-give#sarthak" className={footerLinkClass}>Corporate Sabbatical</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Teachers & Educators</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Teacher Educators & CPD</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Mental Health Professionals</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Social Workers</Link>
            <Link to="/where-youll-give#sarthak" className={footerLinkClass}>Tech & Digital Specialists</Link>
          </div>
        </div>

        {/* For Students */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            For Students
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/where-youll-give#acgs" className={footerLinkClass}>Vet Students (EMS)</Link>
            <Link to="/sample-itineraries" className={footerLinkClass}>Student Discount Available</Link>
            <Link to="/where-youll-give" className={footerLinkClass}>Gap Year Volunteers</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>ESOL/EFL Students</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Teaching Students</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Social Work Students</Link>
            <Link to="/education-initiatives" className={footerLinkClass}>Mental Health Students</Link>
          </div>
        </div>

        {/* Need to Know */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Need to Know
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/code-of-conduct" className={footerLinkClass}>Volunteer Code of Conduct</Link>
            <Link to="/whats-included" className={footerLinkClass}>What's Included</Link>
            <Link to="/sample-itineraries" className={footerLinkClass}>Sample Itineraries</Link>
            <Link to="/visa" className={footerLinkClass}>Visa</Link>
            <Link to="/vaccinations" className={footerLinkClass}>Vaccinations</Link>
            <Link to="/safeguarding" className={footerLinkClass}>Safeguarding & DBS</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
            Contact
          </h4>
          <div className="flex flex-col gap-2">
            <a href="mailto:hello@meaningfulmiles.travel" className={footerLinkClass}>
              hello@meaningfulmiles.travel
            </a>
            <a href="https://wa.link/eag6c7" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
              WhatsApp
            </a>
            <div className="flex gap-3 mt-3">
              <a href="https://www.facebook.com/meaningfulmiles.travel/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/meaningfulmiles.travel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/meaningful-miles-travel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Safeguarding footer note */}
      <div className="mb-6">
        <p className="font-body text-xs italic text-primary-foreground/60 leading-relaxed text-center">
          Meaningful Miles is committed to the safeguarding and protection of children. All education volunteers are required to hold a valid DBS check and complete safeguarding training before placement is confirmed.
        </p>
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
