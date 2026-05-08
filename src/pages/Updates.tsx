import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function Updates() {
  const updates = [
    {
      category: "Women's Clothing",
      status: "Accepting",
      statusType: "open" as const,
      notes: "Currently looking for light jackets, premium denim, and high-end transitional tops. No heavy winter coats at this time.",
      updated: "May 1, 2026",
    },
    {
      category: "Home Goods & Decor",
      status: "Accepting",
      statusType: "open" as const,
      notes: "High demand for small accent pieces, unique lamps, and coastal-inspired art.",
      updated: "May 1, 2026",
    },
    {
      category: "Jewelry",
      status: "Accepting",
      statusType: "open" as const,
      notes: "Always accepting unique, chunky, and statement pieces. Limit 5 per visit.",
      updated: "April 28, 2026",
    },
    {
      category: "Handbags & Accessories",
      status: "Accepting High-End Only",
      statusType: "limited" as const,
      notes: "Designer bags in excellent condition only. Must be authenticatable.",
      updated: "April 28, 2026",
    },
    {
      category: "Holiday & Seasonal",
      status: "Paused",
      statusType: "paused" as const,
      notes: "We are not currently accepting holiday or seasonal merchandise.",
      updated: "January 15, 2026",
    },
  ];

  const badge: Record<string, string> = {
    open: "bg-teal/10 text-teal border border-teal/20",
    limited: "bg-gold/10 text-gold border border-gold/20",
    paused: "bg-red-50 text-red-700 border border-red-200",
  };

  return (
    <div className="pb-14 md:pb-0">

      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="bg-charcoal py-24 lg:py-32 px-4 text-center">
        <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4">Live Updates</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 text-balance leading-[1.05]">
          Current<br /><em>Intake Updates</em>
        </h1>
        <p className="text-text-soft text-lg max-w-2xl mx-auto leading-relaxed">
          Our needs change with the season and current inventory space. Check below before you bring items in.
        </p>
      </section>

      {/* ── Updates List ────────────────────────────────────── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-5">
            {updates.map((update, idx) => (
              <div
                key={idx}
                className="bg-cream-dark rounded-2xl p-6 sm:p-8 border border-sand hover:border-teal/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-serif text-2xl text-charcoal">{update.category}</h3>
                  <span className={`px-3 py-1 text-[10px] uppercase tracking-[0.15em] rounded-full font-semibold ${badge[update.statusType]}`}>
                    {update.status}
                  </span>
                </div>
                <p className="text-text-mid leading-relaxed mb-4">{update.notes}</p>
                <p className="text-[10px] text-text-soft uppercase tracking-[0.2em]">Last Updated: {update.updated}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/consign">
              <Button variant="outline">Review General Guidelines</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
