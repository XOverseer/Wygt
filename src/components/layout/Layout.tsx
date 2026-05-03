import { Link, Outlet, useLocation } from "react-router-dom";
import { SITE_INFO } from "@/data/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Consign", path: "/consign" },
    { name: "Guidelines", path: "/consign#guidelines" },
    { name: "About", path: "/about" },
    { name: "Visit Us", path: "/visit" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Announcement Bar */}
      <div className="bg-muted-gold text-white px-4 py-2 text-center text-[11px] uppercase tracking-[0.1em] flex justify-center items-center gap-4">
        <span>Voted Best Consignment Store in Beaufort 2024 & 2025</span>
        <span className="hidden sm:inline-block">•</span>
        <Link to="/updates" className="hover:text-sand-50 transition-colors hidden sm:inline-block">South Carolina's Top 10</Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-sand-200/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="font-serif italic text-2xl font-bold tracking-tight text-charcoal">
                Where'd You Get That?
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[13px] font-medium tracking-[0.05em] uppercase text-charcoal hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex space-x-4">
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
          <div className="absolute top-20 left-0 w-full bg-sand-50 border-b border-sand-200 shadow-xl md:hidden px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-serif font-medium text-charcoal py-2 border-b border-sand-200"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/updates" className="text-lg font-serif font-medium text-charcoal py-2 border-b border-sand-200">
               Current Intake Updates
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

      {/* Sticky Mobile CTAs (only on mobile) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex shadow-lg rounded-full overflow-hidden border border-black/5">
        <a href={SITE_INFO.phoneLink} className="flex-1 bg-white text-charcoal h-14 flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.05em] hover:bg-sand-100 transition-colors border-r border-sand-200">
          Call
        </a>
        <Link to="/visit" className="flex-1 bg-white text-charcoal h-14 flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.05em] hover:bg-sand-100 transition-colors border-r border-sand-200">
          Directions
        </Link>
        <Link to="/consign" className="flex-1 bg-brand-dark text-white h-14 flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.05em] hover:bg-opacity-90 transition-colors">
          Consign
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-sand-200 text-charcoal pt-16 pb-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-text-light">
            <div className="col-span-1 md:col-span-2 text-charcoal">
              <h2 className="font-serif italic text-2xl font-bold mb-4">Where'd You Get That?</h2>
              <p className="text-text-medium mb-6 max-w-sm">
                Beaufort's award-winning curated consignment boutique for women’s fashion, jewelry, and distinctive home furnishings.
              </p>
              <div className="space-y-1 text-sm text-text-medium">
                <p>{SITE_INFO.address}</p>
                <p>{SITE_INFO.cityStateZip}</p>
                <p className="pt-2">{SITE_INFO.hours}</p>
                <p><a href={SITE_INFO.phoneLink} className="hover:text-brand-blue transition-colors underline">{SITE_INFO.phone}</a></p>
                <p><a href={`mailto:${SITE_INFO.furnitureEmail}`} className="hover:text-brand-blue transition-colors underline">{SITE_INFO.furnitureEmail}</a></p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-text-light">Quick Links</h3>
              <ul className="space-y-3 text-text-medium text-sm font-medium">
                <li><Link to="/shop" className="hover:text-brand-blue transition-colors">Shop</Link></li>
                <li><Link to="/about" className="hover:text-brand-blue transition-colors">About</Link></li>
                <li><Link to="/visit" className="hover:text-brand-blue transition-colors">Visit & Contact</Link></li>
                <li><Link to="/faq" className="hover:text-brand-blue transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-text-light">Consign</h3>
              <ul className="space-y-3 text-text-medium text-sm font-medium">
                <li><Link to="/consign" className="hover:text-brand-blue transition-colors">How it Works</Link></li>
                <li><Link to="/consign#guidelines" className="hover:text-brand-blue transition-colors">Guidelines</Link></li>
                <li><Link to="/updates" className="hover:text-brand-blue transition-colors">Intake Updates</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-6 border-t border-black/5 text-center text-[11px] uppercase tracking-[0.1em] text-text-light flex flex-col md:flex-row justify-between items-center gap-4">
             <p>&copy; {new Date().getFullYear()} Where'd You Get That? • Beaufort, South Carolina</p>
             <div className="flex gap-4">
               <span className="hover:text-brand-blue cursor-pointer transition-colors">Call (843) 379-4900</span>
               <span className="hover:text-brand-blue cursor-pointer transition-colors">Sustainable Shopping Since 2023</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
