import { SITE_INFO } from "@/data/constants";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function Visit() {
  return (
    <div className="pb-14 md:pb-0">

      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="bg-charcoal py-24 lg:py-32 px-4 text-center">
        <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4">Come See Us</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 text-balance leading-[1.05]">
          Visit<br /><em>The Boutique</em>
        </h1>
        <p className="text-text-soft text-lg max-w-2xl mx-auto leading-relaxed">
          We invite you to browse our curated collection in person. There's always something new waiting to be discovered.
        </p>
      </section>

      {/* ── Info + Map ──────────────────────────────────────── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Contact & Hours */}
            <div className="space-y-12">
              <div>
                <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-4">Location</p>
                <h2 className="font-serif text-4xl text-charcoal mb-2">{SITE_INFO.address}</h2>
                <p className="text-xl text-text-mid mb-5">{SITE_INFO.cityStateZip}</p>
                <p className="text-sm text-text-mid bg-cream-dark p-5 rounded-xl border border-sand leading-relaxed">
                  {SITE_INFO.locationNote}
                </p>
              </div>

              <div>
                <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-4">Hours</p>
                <h2 className="font-serif text-3xl text-charcoal mb-2">{SITE_INFO.hours}</h2>
                <p className="text-sm text-text-soft">Closed on Sundays.</p>
              </div>

              <div>
                <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-4">Contact</p>
                <div className="space-y-3">
                  <a
                    href={SITE_INFO.phoneLink}
                    className="block font-serif text-3xl text-charcoal hover:text-teal transition-colors"
                  >
                    {SITE_INFO.phone}
                  </a>
                  <a
                    href={`mailto:${SITE_INFO.furnitureEmail}`}
                    className="block text-text-mid hover:text-charcoal transition-colors"
                  >
                    {SITE_INFO.furnitureEmail}
                  </a>
                  <p className="text-[11px] text-text-soft uppercase tracking-widest">
                    Furniture consignment inquiries only
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com/?q=9+Marshellen+Drive+Beaufort+SC+29902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full">Get Directions</Button>
                </a>
                <Link to="/consign" className="flex-1">
                  <Button variant="outline" className="w-full">Start Consigning</Button>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-full min-h-[400px] relative shadow-sm border border-sand">
              <iframe
                src="https://maps.google.com/maps?q=9%20Marshellen%20Drive,%20Beaufort,%20SC%2029902&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store location on Google Maps"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
