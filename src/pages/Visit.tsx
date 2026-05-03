import { SITE_INFO } from "@/data/constants";

export function Visit() {
  return (
    <div className="pb-20">
      <section className="bg-sand-100 py-20 px-4 text-center border-b border-sand-200">
        <h1 className="font-serif text-5xl mb-4">Visit the Boutique</h1>
        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-medium text-balance">
          We invite you to browse our curated collection in person.
        </p>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact & Hours */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
                  Location
                </h2>
                <p className="font-serif text-3xl mb-2">{SITE_INFO.address}</p>
                <p className="text-lg text-charcoal/80 mb-4">
                  {SITE_INFO.cityStateZip}
                </p>
                <p className="text-sm text-charcoal/60 bg-sand-50 p-4 rounded-xl border border-sand-200">
                  {SITE_INFO.locationNote}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
                  Hours
                </h2>
                <p className="font-serif text-2xl text-charcoal/80">
                  {SITE_INFO.hours}
                </p>
                <p className="text-sm mt-3 text-charcoal/60">
                  Closed on Sundays.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
                  Contact
                </h2>
                <div className="space-y-3">
                  <a
                    href={SITE_INFO.phoneLink}
                    className="block font-serif text-2xl text-charcoal hover:text-brand-blue transition-colors"
                  >
                    {SITE_INFO.phone}
                  </a>
                  <a
                    href={`mailto:${SITE_INFO.furnitureEmail}`}
                    className="block text-lg text-charcoal/80 hover:text-brand-blue transition-colors"
                  >
                    {SITE_INFO.furnitureEmail}
                  </a>
                  <p className="text-sm text-charcoal/60">
                    (For furniture consignment inquiries)
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-sand-200 rounded-[32px] overflow-hidden aspect-square md:aspect-auto md:h-full relative shadow-inner">
              <iframe
                src="https://maps.google.com/maps?q=9%20Marshellen%20Drive,%20Beaufort,%20SC%2029902&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store location on Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
