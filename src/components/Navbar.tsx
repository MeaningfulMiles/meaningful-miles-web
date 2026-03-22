import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  {
    label: "Animal Welfare",
    children: [
      { label: "Professionals", path: "/animal-welfare/professionals" },
      { label: "Vet Students (EMS)", path: "/animal-welfare/students" },
      { label: "Animal Lovers", path: "/animal-welfare/animal-lovers" },
      { label: "Risk Analysis", path: "/animal-welfare/risk-analysis" },
    ],
  },
  {
    label: "Disabilities Empowerment",
    children: [
      { label: "Professionals", path: "/disabilities/professionals" },
      { label: "Students", path: "/disabilities/students" },
    ],
  },
  { label: "Safeguarding & DBS", path: "/safeguarding" },
  { label: "Where You'll Give", path: "/where-youll-give" },
  { label: "The Good-Hearted Soul", path: "/good-hearted-soul" },
  { label: "Your Safety", path: "/safety" },
  { label: "Meet Aansa", path: "/founder" },
  {
    label: "Need to Know",
    children: [
      { label: "What's Included", path: "/whats-included" },
      { label: "Sample Itineraries", path: "/sample-itineraries" },
      { label: "Volunteer Code of Conduct", path: "/code-of-conduct" },
      { label: "Visa", path: "/visa" },
      { label: "Vaccinations", path: "/vaccinations" },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-off-white shadow-md" : "bg-off-white/95"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-display text-xl lg:text-2xl text-forest-green font-medium">
              Meaningful Miles
            </span>
            <span className="font-body text-[11px] text-mid-text tracking-wide">
              Travel. Give. Grow.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-[14px] font-body text-forest-green hover:text-burnt-orange transition-colors">
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-off-white rounded-lg shadow-lg py-2 min-w-[220px] border border-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-[14px] font-body text-forest-green hover:text-burnt-orange hover:bg-parched-cream transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={`px-3 py-2 text-[14px] font-body transition-colors ${
                    location.pathname === item.path
                      ? "text-burnt-orange"
                      : "text-forest-green hover:text-burnt-orange"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/apply" className="btn-primary ml-3 text-[13px] py-2 px-5">
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-forest-green"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-forest-green flex flex-col pt-20 overflow-y-auto xl:hidden">
          <div className="flex flex-col px-8 py-6 gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full py-3 text-lg font-body text-primary-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 text-base font-body text-primary-foreground/80 hover:text-primary-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className="py-3 text-lg font-body text-primary-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <div className="px-8 pb-8 mt-auto">
            <Link to="/apply" className="btn-primary w-full text-center block">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
