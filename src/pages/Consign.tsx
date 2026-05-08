import { Button } from "@/components/ui/Button";
import { INTAKE_SCHEDULE, CATEGORY_GUIDELINES, SITE_INFO } from "@/data/constants";

export function Consign() {
  return (
    <div className="pb-14 md:pb-0">

      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="bg-charcoal py-24 lg:py-32 px-4 text-center">
        <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4">Partner With Us</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 text-balance leading-[1.05]">
          Consign<br />
          <em>With Us</em>
        </h1>
        <p className="text-text-soft text-lg max-w-2xl mx-auto leading-relaxed">
          Give your quality pieces a second life through Beaufort's trusted curated consignment boutique — and earn 40% of every sale.
        </p>
      </section>

      {/* ── Why Consign Here ────────────────────────────────── */}
      <section className="py-20 bg-cream px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">The Benefits</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Why Consign Here</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Earn 40%", desc: "You receive 40% of the final sale price for every item sold. For furniture with pickup, terms may vary." },
              { title: "Hassle-Free", desc: "Drop off your items and let us handle the rest — pricing, merchandising, and finding the right buyer." },
              { title: "Award-Winning Platform", desc: "Your items are sold in Beaufort's top-rated consignment boutique, reaching quality-conscious shoppers." },
              { title: "60-Day Clothing Window", desc: "Clothing stays on the floor for 60 days — 30 at full price, 30 at 50% off — maximizing your chances of a sale." },
              { title: "90-Day Home & Jewelry", desc: "Furniture, home goods, and jewelry remain on display for 90 days." },
              { title: "Locally Trusted", desc: "Two-time Best in Beaufort winner. Consignors trust us because we treat their pieces with genuine care." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-sand hover:border-teal/30 hover:shadow-md transition-all duration-300 group">
                <div className="w-8 h-0.5 bg-teal mb-6 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-text-mid text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intake Schedule ─────────────────────────────────── */}
      <section className="py-20 bg-cream-dark px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">When to Come</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Consignment Schedule</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-sand shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="text-teal text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">Clothing</p>
                <p className="font-serif text-xl text-charcoal mb-2">Mon, Wed &amp; Fri</p>
                <p className="text-text-mid text-sm">{INTAKE_SCHEDULE.clothing}</p>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-sand pt-8 md:pt-0 md:pl-12">
                <p className="text-teal text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">Home Goods &amp; Jewelry</p>
                <p className="font-serif text-xl text-charcoal mb-2">Mon, Wed, Thu, Fri &amp; Sat</p>
                <p className="text-text-mid text-sm">{INTAKE_SCHEDULE.homeGoods}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-sand text-center">
              <p className="bg-red-50 text-red-800 font-medium text-sm py-3 px-6 rounded-xl inline-flex items-center gap-2">
                <span className="font-bold">⚠</span> {INTAKE_SCHEDULE.notAccepted}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guidelines ──────────────────────────────────────── */}
      <section id="guidelines" className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">Before You Come</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">What We Accept</h2>
            <p className="text-text-mid mt-4">Please review these guidelines carefully before bringing items to the boutique.</p>
          </div>

          <div className="space-y-5">
            {CATEGORY_GUIDELINES.map((category) => (
              <div key={category.category} className="bg-cream-dark rounded-2xl p-8 border border-sand">
                <h3 className="font-serif text-2xl text-charcoal mb-5">{category.category}</h3>
                <ul className="space-y-3">
                  {category.rules.map((rule, idx) => (
                    <li key={idx} className="flex gap-3 text-text-mid">
                      <span className="text-teal font-bold mt-0.5 shrink-0">·</span>
                      <span className="leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-charcoal rounded-2xl p-8 mt-4 text-center">
              <h3 className="font-serif text-2xl text-cream mb-4">Payout Overview</h3>
              <p className="text-text-soft mb-4 max-w-2xl mx-auto text-balance leading-relaxed">
                Consignors generally receive 40% of the sale price for clothing, furniture, accessories, jewelry, and household items. Furniture delivery arrangements may vary the structure.
              </p>
              <p className="text-[10px] text-text-soft uppercase tracking-[0.2em]">Please review the full consignor agreement in store for complete terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pre-Register Form ───────────────────────────────── */}
      <section className="py-20 bg-cream-dark px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-sand shadow-sm">
            <div className="text-center mb-10">
              <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">Get Started</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Pre-Register to Consign</h2>
              <p className="text-text-mid text-sm">Save time in store by completing your details below.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully! You will receive an email with your consignor number."); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-mid">Full Name</label>
                  <input required type="text" className="w-full bg-cream-dark border border-sand rounded-xl px-4 py-3 outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all text-charcoal" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-mid">Phone</label>
                  <input required type="tel" className="w-full bg-cream-dark border border-sand rounded-xl px-4 py-3 outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all text-charcoal" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-mid">Email Address</label>
                <input required type="email" className="w-full bg-cream-dark border border-sand rounded-xl px-4 py-3 outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all text-charcoal" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-mid">Street Address</label>
                <input required type="text" className="w-full bg-cream-dark border border-sand rounded-xl px-4 py-3 outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all text-charcoal" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-mid">City</label>
                  <input required type="text" className="w-full bg-cream-dark border border-sand rounded-xl px-4 py-3 outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all text-charcoal" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-mid">State</label>
                  <input required type="text" defaultValue="SC" className="w-full bg-cream-dark border border-sand rounded-xl px-4 py-3 outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all text-charcoal" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-mid">Zip Code</label>
                  <input required type="text" className="w-full bg-cream-dark border border-sand rounded-xl px-4 py-3 outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all text-charcoal" />
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2">
                <input required type="checkbox" id="consent" className="mt-1 w-5 h-5 rounded border-sand accent-teal" />
                <label htmlFor="consent" className="text-sm text-text-mid leading-relaxed">
                  I confirm that I have reviewed the consignment guidelines and understand what items are currently accepted.
                </label>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full" size="lg">Submit Application</Button>
              </div>
            </form>

            <div className="mt-10 text-center text-sm text-text-soft pt-8 border-t border-sand">
              <p>Have furniture? <a href={`mailto:${SITE_INFO.furnitureEmail}`} className="underline hover:text-charcoal font-medium transition-colors">Email photos directly instead</a>.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
