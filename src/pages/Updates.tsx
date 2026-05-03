import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function Updates() {
  const updates = [
    {
      category: "Women's Clothing",
      status: "Accepting Transition Pieces",
      notes: "Currently looking for light jackets, premium denim, and high-end transitional tops. No heavy winter coats at this time.",
      updated: "May 1, 2026"
    },
    {
      category: "Home Goods & Decor",
      status: "Accepting",
      notes: "High demand for small accent pieces, unique lamps, and coastal-inspired art.",
      updated: "May 1, 2026"
    },
    {
      category: "Jewelry",
      status: "Accepting",
      notes: "Always accepting unique, chunky, and statement pieces. Limit 5 per visit.",
      updated: "April 28, 2026"
    },
    {
      category: "Handbags & Accessories",
      status: "Accepting High-End Only",
      notes: "Designer bags in excellent condition only. Must be authenticatable.",
      updated: "April 28, 2026"
    },
    {
      category: "Holiday Seasonal",
      status: "Temporarily Paused",
      notes: "We are not currently accepting holiday or seasonal merchandise.",
      updated: "January 15, 2026"
    }
  ];

  return (
    <div className="pb-20">
      <section className="bg-sand-100 py-20 px-4 text-center border-b border-sand-200">
        <h1 className="font-serif text-5xl mb-4">Current Intake Updates</h1>
        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-medium text-balance">
          Our needs change based on season and current inventory space. Check below to see what we are currently looking for.
        </p>
      </section>

      <section className="py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid gap-6">
               {updates.map((update, idx) => (
                  <div key={idx} className="bg-sand-50 rounded-[24px] p-6 sm:p-8 border border-sand-200 flex flex-col sm:flex-row gap-6 justify-between items-start">
                     <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                           <h3 className="font-serif text-2xl">{update.category}</h3>
                           <span className={`px-3 py-1 text-[10px] uppercase tracking-widest rounded-full font-bold
                              ${update.status.includes('Paused') ? 'bg-red-100 text-red-800' : 
                                update.status.includes('Accepting') ? 'bg-green-100 text-green-800' : 'bg-sand-200 text-charcoal'}`}>
                              {update.status}
                           </span>
                        </div>
                        <p className="text-charcoal/80 leading-relaxed mb-4">{update.notes}</p>
                        <p className="text-xs text-charcoal/50 uppercase tracking-widest font-semibold">Last Updated: {update.updated}</p>
                     </div>
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
