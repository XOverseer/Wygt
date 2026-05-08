import { Button } from "@/components/ui/Button";
import { SITE_INFO } from "@/data/constants";
import { Link } from "react-router-dom";

export function Shop() {
  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1596821864109-17f4ebbe99db?q=80&w=800&auto=format&fit=crop",
      label: "Home Decor",
    },
    {
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop",
      label: "Boutique Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1590740924976-508fb3e95079?q=80&w=800&auto=format&fit=crop",
      label: "Clothing Collection",
    },
    {
      src: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop",
      label: "Designer Handbags",
    },
    {
      src: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800&auto=format&fit=crop",
      label: "Jewelry & Accessories",
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
      label: "Home Furnishings",
    },
  ];

  const categories = [
    { title: "Women's Apparel", desc: "Up to 8 garments per visit accepted. Current styles, 2 years or newer." },
    { title: "Jewelry", desc: "Unique, chunky & statement pieces. Up to 5 per visit." },
    { title: "Handbags & Accessories", desc: "High-end designer goods in excellent pre-owned condition only." },
    { title: "Home Furnishings", desc: "Distinctive decor, art, lamps, and quality furniture." },
  ];

  return (
    <div className="pb-14 md:pb-0">

      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="bg-charcoal py-24 lg:py-32 px-4 text-center">
        <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4">The Boutique</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 text-balance leading-[1.05]">
          Discover Something<br /><em>Distinctive</em>
        </h1>
        <p className="text-text-soft text-lg max-w-2xl mx-auto leading-relaxed">
          New arrivals come in daily — from polished wardrobe pieces to statement jewelry and home furnishings with character.
        </p>
      </section>

      {/* ── Categories We Carry ─────────────────────────────── */}
      <section className="py-20 bg-cream px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">Categories</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">What We Carry</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-8 border border-sand hover:border-teal/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-8 h-0.5 bg-teal mb-6 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{cat.title}</h3>
                <p className="text-text-mid text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ─────────────────────────────────────────── */}
      <section className="py-20 bg-cream-dark px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-[10px] uppercase tracking-[0.3em] mb-3">Gallery</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">A Peek Inside the Boutique</h2>
            <p className="mt-3 text-text-soft">Inventory changes daily. Visit us in person to shop these looks and more.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {gallery.map((item, idx) => (
              <div key={idx} className="break-inside-avoid rounded-3xl overflow-hidden bg-sand relative group">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent px-5 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-cream text-[11px] uppercase tracking-[0.15em] font-semibold">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to Shop CTA ───────────────────────────────── */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-xl mx-auto text-center bg-cream-dark p-12 rounded-3xl border border-sand">
          <h3 className="font-serif text-3xl text-charcoal mb-4">Ready to Shop?</h3>
          <p className="text-text-mid mb-8 leading-relaxed">
            We are open {SITE_INFO.hours}. Connect with us to check availability of specific pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE_INFO.phoneLink}>
              <Button className="w-full sm:w-auto">Call to Inquire</Button>
            </a>
            <Link to="/visit">
              <Button variant="outline" className="w-full sm:w-auto">Get Directions</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
