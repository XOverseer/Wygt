import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <div className="pb-20">
      <section className="bg-sand-100 py-20 px-4 text-center border-b border-sand-200">
        <h1 className="font-serif text-5xl mb-4">Our Story</h1>
        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-medium text-balance">
          Discover the premier destination for upscale consignment in South Carolina’s Lowcountry.
        </p>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="relative aspect-[4/5] md:aspect-square bg-sand-200 rounded-[32px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200&auto=format&fit=crop" alt="Boutique owner" className="w-full h-full object-cover" />
               </div>
               
               <div className="max-w-xl">
                  <h2 className="font-serif text-4xl mb-6">A New Era of Curated Consignment</h2>
                  <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
                     <p>
                        Where’d You Get That? is not a thrift store. We are a refined, curated consignment destination where sophisticated coastal style meets the joy of discovery. Entering a new era of ownership in 2023, the boutique has been elevated to serve shoppers and consignors in the Beaufort area with unparalleled care.
                     </p>
                     <p>
                        We’re proud to have been voted the Best Consignment Store in Beaufort for both 2024 and 2025, and honored to be recognized among South Carolina’s Top 10 Consignment Stores.
                     </p>
                     <p>
                        Whether you are hunting for designer apparel, unique jewelry, or distinctive home furnishings to complete a room, our daily arriving inventory means there is always something new to find.
                     </p>
                  </div>
                  <div className="mt-10">
                     <Link to="/visit">
                        <Button>Plan Your Visit</Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      <section className="bg-brand-dark text-white py-24 text-center px-4">
         <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl mb-6 text-balance">Ready to Give Your Items a Second Life?</h2>
            <p className="text-white/90 mb-10 text-lg">Partner with us to consign your high-quality pieces.</p>
            <Link to="/consign">
               <Button variant="primary" className="bg-white text-brand-dark hover:bg-sand-100 border-none">Become a Consignor</Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
