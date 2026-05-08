import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <div className="pb-14 md:pb-0">

      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="bg-charcoal py-24 lg:py-32 px-4 text-center">
        <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4">Our Story</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 text-balance leading-[1.05]">
          A New Era of<br />
          <em>Curated Consignment</em>
        </h1>
        <p className="text-text-soft text-lg max-w-2xl mx-auto leading-relaxed">
          Where'd You Get That? is Beaufort's refined consignment destination — elevated to serve the Lowcountry with unparalleled quality and care.
        </p>
      </section>

      {/* ── Story Section ───────────────────────────────────── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200&auto=format&fit=crop"
                alt="Boutique owner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-4">Who We Are</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 text-balance">
                Not a Thrift Store.<br /><em>A Boutique.</em>
              </h2>
              <div className="space-y-5 text-text-mid leading-relaxed">
                <p>
                  Where'd You Get That? is not a thrift store. We are a refined, curated consignment destination where sophisticated coastal style meets the joy of discovery. Entering a new era of ownership in 2023, the boutique has been elevated to serve shoppers and consignors in the Beaufort area with unparalleled care.
                </p>
                <p>
                  We're proud to have been voted the Best Consignment Store in Beaufort for both 2024 and 2025, and honored to be recognized among South Carolina's Top 10 Consignment Stores.
                </p>
                <p>
                  Whether you are hunting for designer apparel, unique jewelry, or distinctive home furnishings, our daily arriving inventory means there is always something new to find.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/visit">
                  <Button>Plan Your Visit</Button>
                </Link>
                <Link to="/shop">
                  <Button variant="outline">See What We Carry</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards Section ──────────────────────────────────── */}
      <section className="py-24 bg-cream-dark px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-2xl mb-4">★★</p>
            <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">Recognition</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal text-balance">
              Award-Winning Excellence
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { award: "Best Consignment Store", detail: "Beaufort, SC — 2024", icon: "★" },
              { award: "Best Consignment Store", detail: "Beaufort, SC — 2025", icon: "★" },
              { award: "Top 10 Consignment Stores", detail: "South Carolina Statewide", icon: "✧" },
            ].map((item) => (
              <div key={item.detail} className="bg-white rounded-2xl p-8 border border-sand text-center">
                <p className="text-gold text-2xl mb-4">{item.icon}</p>
                <h3 className="font-serif text-xl text-charcoal mb-2">{item.award}</h3>
                <p className="text-text-soft text-sm uppercase tracking-widest">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-charcoal text-cream py-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">Ready to Give Your Items a Second Life?</h2>
          <p className="text-text-soft mb-10 text-lg leading-relaxed">Partner with us to consign your high-quality pieces and earn 40% of every sale.</p>
          <Link to="/consign">
            <Button variant="outline-light" size="lg">Become a Consignor</Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
