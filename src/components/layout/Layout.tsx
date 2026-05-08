import { Link, Outlet, useLocation } from "react-router-dom";
import { SITE_INFO } from "@/data/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Consign", path: "/consign" },
    { name: "Guidelines", path: "/consign#guidelines" },
    { name: "About", path: "/about" },
    { name: "Visit Us", path: "/visit" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) =>
    location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Announcement Bar */}
      <div className="bg-charcoal text-cream px-4 py-2.5 text-center text-[10px] uppercase tracking-[0.2em] flex justify-center items-center gap-4 sm:gap-6">
        <span className="text-gold">★★</span>
        <span>Voted Best Consignment Store in Beaufort — 2024 &amp; 2025</span>
        <Link
          to="/updates"
          className="hidden sm:inline-block text-gold hover:text-gold-light transition-colors underline underline-offset-2"
        >
          View Intake Updates
        </Link>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.07)]"
            : "bg-cream border-b border-sand/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif italic text-xl lg:text-[22px] font-bold tracking-tight text-charcoal hover:text-teal transition-colors duration-200"
            >
              Where'd You Get That?
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-teal"
                      : "text-text hover:text-teal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/visit">
                <Button variant="ghost" size="sm">Get Directions</Button>
              </Link>
              <Link to="/consign">
                <Button size="sm">Start Consigning</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                className="text-charcoal p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-cream border-b border-sand shadow-xl md:hidden px-4 py-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-serif text-lg py-3 border-b border-sand transition-colors ${
                  isActive(link.path) ? "text-teal" : "text-charcoal"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/updates" className="font-serif text-lg text-charcoal py-3 border-b border-sand">
              Intake Updates
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Link to="/visit">
                <Button variant="outline" className="w-full">Get Directions</Button>
              </Link>
              <Link to="/consign">
                <Button className="w-full">Start Consigning</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Sticky Mobile CTAs */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex shadow-lg rounded-full overflow-hidden border border-black/5">
        <a href={SITE_INFO.phoneLink} className="flex-1 bg-white text-charcoal h-14 flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.05em] hover:bg-cream-dark transition-colors border-r border-sand">
          <Phone size={13} />
          Call
        </a>
        <Link to="/visit" className="flex-1 bg-white text-charcoal h-14 flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.05em] hover:bg-cream-dark transition-colors border-r border-sand">
          <MapPin size={13} />
          Directions
        </Link>
        <Link to="/consign" className="flex-1 bg-teal text-cream h-14 flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.05em] hover:bg-teal-dark transition-colors">
          Consign
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-cream pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-serif italic text-2xl font-bold mb-4 text-cream">Where'd You Get That?</h2>
              <p className="text-text-soft mb-6 max-w-sm leading-relaxed">
                Beaufort's award-winning curated consignment boutique for women's fashion, jewelry, and distinctive home furnishings.
              </p>
              <div className="space-y-1 text-sm text-text-soft">
                <p>{SITE_INFO.address}</p>
                <p>{SITE_INFO.cityStateZip}</p>
                <p className="pt-2">{SITE_INFO.hours}</p>
                <p><a href={SITE_INFO.phoneLink} className="hover:text-cream transition-colors underline">{SITE_INFO.phone}</a></p>
                <p><a href={`mailto:${SITE_INFO.furnitureEmail}`} className="hover:text-cream transition-colors underline">{SITE_INFO.furnitureEmail}</a></p>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5 text-text-soft">Quick Links</h3>
              <ul className="space-y-3 text-text-soft text-sm">
                <li><Link to="/shop" className="hover:text-cream transition-colors">Shop</Link></li>
                <li><Link to="/about" className="hover:text-cream transition-colors">About</Link></li>
                <li><Link to="/visit" className="hover:text-cream transition-colors">Visit &amp; Contact</Link></li>
                <li><Link to="/faq" className="hover:text-cream transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5 text-text-soft">Consign</h3>
              <ul className="space-y-3 text-text-soft text-sm">
                <li><Link to="/consign" className="hover:text-cream transition-colors">How it Works</Link></li>
                <li><Link to="/consign#guidelines" className="hover:text-cream transition-colors">Guidelines</Link></li>
                <li><Link to="/updates" className="hover:text-cream transition-colors">Intake Updates</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10 text-center text-[10px] uppercase tracking-[0.15em] text-text-soft flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Where'd You Get That? · Beaufort, South Carolina</p>
            <div className="flex gap-4">
              <span className="text-gold">★★</span>
              <span>Best in Beaufort 2024 &amp; 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
