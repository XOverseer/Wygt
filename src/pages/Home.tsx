import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { SITE_INFO, INTAKE_SCHEDULE } from "@/data/constants";

export function Home() {
  const categories = [
    {
      title: "Women's Apparel",
      desc: "Upscale fashion & contemporary styles",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Jewelry",
      desc: "Unique, chunky & statement pieces",
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Handbags & Accessories",
      desc: "High-end authentic designer goods",
      img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Home Furnishings",
      desc: "Distinctive decor & quality furniture",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-14 md:pb-0">

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="flex flex-col lg:flex-row min-h-[100svh]">
        {/* Text panel */}
        <div className="lg:w-[46%] bg-charcoal flex items-center px-8 sm:px-12 lg:px-16 py-20 lg:py-0">
          <div className="max-w-lg w-full">
            <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-medium">
              Beaufort, South Carolina · Est. 2023
            </p>
            <h1 className="font-serif text-[52px] md:text-[62px] lg:text-[68px] leading-[1.02] text-cream font-normal mb-8 text-balance">
              Curated for<br />
              <em>Discerning</em><br />
              Taste.
            </h1>
            <p className="text-text-soft text-lg leading-relaxed mb-12 max-w-md">
              Where'd You Get That? is Beaufort's award-winning consignment boutique — designer fashion, statement jewelry, and distinctive home furnishings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/visit" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full">Plan Your Visit</Button>
              </Link>
              <Link to="/consign" className="w-full sm:w-auto">
                <Button variant="outline-light" size="lg" className="w-full">Start Consigning</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image panel */}
        <div className="lg:w-[54%] h-[62vw] sm:h-[55vw] lg:h-auto relative order-first lg:order-last">
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2600&auto=format&fit=crop"
            alt="Boutique interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/20 lg:bg-none" />
          {/* Award badge */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 text-center shadow-2xl">
            <p className="text-gold font-serif text-lg leading-none">★ ★</p>
            <p className="font-serif text-sm font-semibold text-charcoal mt-1">Best in Beaufort</p>
            <p className="text-[10px] text-text-soft uppercase tracking-[0.15em] mt-0.5">2024 &amp; 2025</p>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ─────────────────────────────────────── */}
      <section className="bg-white py-14 border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-sand">
            {[
              { icon: "★", title: "Best Consignment Store", sub: "Beaufort 2024 & 2025" },
              { icon: "★", title: "Top 10 in SC", sub: "Statewide Recognition" },
              { icon: "✧", title: "New Arrivals Daily", sub: "Inventory Changes Often" },
              { icon: "✧", title: "Locally Curated", sub: "In Beaufort, SC" },
            ].map((item) => (
              <div key={item.title} className="px-4">
                <p className="text-gold text-2xl mb-3">{item.icon}</p>
                <p className="font-serif text-lg font-medium text-charcoal mb-1">{item.title}</p>
                <p className="text-[11px] uppercase tracking-widest text-text-soft">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ──────────────────────────────────────── */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">The Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">What You'll Find Inside</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4 bg-sand">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="font-serif text-xl mb-1 text-center text-charcoal">{cat.title}</h3>
                <p className="text-sm text-text-soft text-center">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience Split ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream-dark p-10 rounded-3xl border border-sand hover:border-teal/30 hover:shadow-md transition-all duration-300 group">
              <div className="w-8 h-0.5 bg-teal mb-6 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-serif text-2xl text-charcoal mb-3">For Shoppers</h3>
              <p className="text-text-mid leading-relaxed mb-6 max-w-sm">
                Find distinctive pieces, designer details, and one-of-a-kind treasures for your wardrobe and home.
              </p>
              <Link to="/shop">
                <Button variant="ghost" size="sm" className="px-0">Plan Your Visit →</Button>
              </Link>
            </div>

            <div className="bg-charcoal p-10 rounded-3xl hover:shadow-md transition-all duration-300 group">
              <div className="w-8 h-0.5 bg-gold mb-6 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-serif text-2xl text-cream mb-3">For Consignors</h3>
              <p className="text-text-soft leading-relaxed mb-6 max-w-sm">
                Turn quality pieces into value with a trusted local consignment partner. Earn 40% of every sale.
              </p>
              <Link to="/consign">
                <Button variant="outline-light" size="sm">Learn How →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works + Intake ───────────────────────────── */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Process Steps */}
            <div className="lg:col-span-7">
              <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">The Process</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-10">How Consignment Works</h2>
              <div className="space-y-5">
                {[
                  { step: "01", title: "Review Guidelines", desc: "Check what we're currently accepting to ensure your items are a good fit." },
                  { step: "02", title: "Prepare Your Items", desc: "Clean, press, and hang clothing. Wipe down home goods." },
                  { step: "03", title: "Drop Off", desc: "Bring eligible items during our scheduled intake hours." },
                  { step: "04", title: "We Sell for You", desc: "We curate, merchandise, and market your pieces to our shoppers." },
                  { step: "05", title: "Receive Your Payment", desc: "Earn 40% of the final sale price once your item sells." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full bg-charcoal text-cream flex items-center justify-center font-serif text-sm font-semibold shrink-0">
                      {item.step}
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-sand flex-1">
                      <h4 className="font-serif text-lg text-charcoal mb-1">{item.title}</h4>
                      <p className="text-sm text-text-mid leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/consign">
                  <Button variant="outline">See Full Process</Button>
                </Link>
              </div>
            </div>

            {/* Intake Reminder Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-8 border border-sand sticky top-28">
                <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-6">Current Intake Status</p>

                <div className="mb-5 pb-5 border-b border-sand">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-serif text-charcoal">Apparel &amp; Clothing</span>
                    <span className="text-[10px] uppercase tracking-widest text-teal font-bold bg-teal/10 px-2 py-1 rounded-full">Open</span>
                  </div>
                  <p className="text-sm text-text-mid leading-relaxed">{INTAKE_SCHEDULE.clothing}</p>
                </div>

                <div className="mb-5 pb-5 border-b border-sand">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-serif text-charcoal">Home &amp; Accessories</span>
                    <span className="text-[10px] uppercase tracking-widest text-teal font-bold bg-teal/10 px-2 py-1 rounded-full">Open</span>
                  </div>
                  <p className="text-sm text-text-mid leading-relaxed">{INTAKE_SCHEDULE.homeGoods}</p>
                </div>

                <div className="bg-cream-dark p-4 rounded-xl text-sm text-text-mid leading-relaxed mb-6">
                  <strong className="text-charcoal">Note:</strong> {INTAKE_SCHEDULE.notAccepted}
                </div>

                <Link to="/consign#guidelines" className="block">
                  <Button variant="outline" className="w-full">View Detailed Guidelines</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Furniture CTA ───────────────────────────────────── */}
      <section className="bg-teal text-cream py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Have Furniture to Consign?</h2>
          <p className="text-cream/80 text-lg mb-8 leading-relaxed text-balance">
            Furniture consignment starts with photos. Email clear photos from all angles, dimensions, and manufacturer details. Our team will review your pieces before scheduling next steps.
          </p>
          <a href={`mailto:${SITE_INFO.furnitureEmail}`}>
            <Button variant="dark">Email Furniture Photos</Button>
          </a>
        </div>
      </section>

    </div>
  );
}
