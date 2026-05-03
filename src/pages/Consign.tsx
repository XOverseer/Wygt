import { Button } from "@/components/ui/Button";
import { INTAKE_SCHEDULE, CATEGORY_GUIDELINES, SITE_INFO } from "@/data/constants";

export function Consign() {
  return (
    <div className="pb-20">
      <section className="bg-sand-200 text-charcoal py-24 px-4 text-center border-b border-sand-300">
        <h1 className="font-serif text-[48px] md:text-[60px] mb-4 text-charcoal">Consign With Us</h1>
        <p className="text-lg text-text-medium max-w-2xl mx-auto leading-[1.6] text-balance">
          Give your quality pieces a second life through Beaufort’s trusted curated consignment boutique.
        </p>
      </section>

      <section className="py-20 bg-sand-50 border-b border-sand-200">
         <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-3xl mb-8 text-center">Consignment Schedule</h2>
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-sand-200 text-center">
               <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-sand-200">
                  <div className="pt-8 md:pt-0">
                     <h3 className="uppercase tracking-widest text-xs font-semibold text-brand-blue mb-3">Clothing</h3>
                     <p className="font-medium text-lg leading-relaxed">{INTAKE_SCHEDULE.clothing}</p>
                  </div>
                  <div className="pt-8 md:pt-0 pl-0 md:pl-8">
                     <h3 className="uppercase tracking-widest text-xs font-semibold text-brand-blue mb-3">Home Goods & Jewelry</h3>
                     <p className="font-medium text-lg leading-relaxed">{INTAKE_SCHEDULE.homeGoods}</p>
                  </div>
               </div>
               <div className="mt-8 pt-8 border-t border-sand-200">
                  <p className="text-red-700 font-medium bg-red-50 p-4 rounded-xl inline-block">{INTAKE_SCHEDULE.notAccepted}</p>
               </div>
            </div>
         </div>
      </section>

      <section id="guidelines" className="py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
               <h2 className="font-serif text-3xl mb-4">What We Accept</h2>
               <p className="text-charcoal/70">Please review these guidelines carefully before bringing items to the boutique.</p>
            </div>

            <div className="space-y-8">
               {CATEGORY_GUIDELINES.map((category) => (
                  <div key={category.category} className="bg-sand-50 rounded-[24px] p-8 border border-sand-200">
                     <h3 className="font-serif text-2xl mb-6">{category.category}</h3>
                     <ul className="space-y-3">
                        {category.rules.map((rule, idx) => (
                           <li key={idx} className="flex gap-3 text-charcoal/80">
                              <span className="text-brand-blue font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{rule}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
               
               <div className="bg-brand-blue text-white rounded-[24px] p-8 mt-12 text-center">
                  <h3 className="font-serif text-2xl mb-4">Payout Overview</h3>
                  <p className="text-white/90 mb-4 max-w-2xl mx-auto text-balance">
                     Consignors generally receive 40% of the sale price for clothing, furniture, accessories, jewelry, and household items. Furniture delivery arrangements may vary the structure.
                  </p>
                  <p className="text-xs text-white/70 uppercase tracking-widest">Please review the full consignor agreement in store for complete terms.</p>
               </div>
            </div>
         </div>
      </section>

      <section className="py-20 bg-sand-100 border-t border-sand-200">
         <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-sand-200">
               <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl mb-3">Pre-Register to Consign</h2>
                  <p className="text-charcoal/60 text-sm">Save time in store by completing your details below.</p>
               </div>
               
               <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully! You will receive an email with your consignor number."); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-charcoal/70">Full Name</label>
                        <input required type="text" className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-charcoal/70">Phone</label>
                        <input required type="tel" className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-xs font-semibold uppercase tracking-widest text-charcoal/70">Email Address</label>
                     <input required type="email" className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-semibold uppercase tracking-widest text-charcoal/70">Street Address</label>
                     <input required type="text" className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="md:col-span-1 space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-charcoal/70">City</label>
                        <input required type="text" className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
                     </div>
                     <div className="md:col-span-1 space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-charcoal/70">State</label>
                        <input required type="text" defaultValue="SC" className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
                     </div>
                     <div className="md:col-span-1 space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-charcoal/70">Zip Code</label>
                        <input required type="text" className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
                     </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4">
                     <input required type="checkbox" id="consent" className="mt-1 w-5 h-5 rounded border-sand-200 text-brand-blue focus:ring-brand-blue accent-brand-blue" />
                     <label htmlFor="consent" className="text-sm text-charcoal/70">
                        I confirm that I have reviewed the consignment guidelines and understand what items are currently accepted.
                     </label>
                  </div>

                  <div className="pt-6">
                     <Button type="submit" className="w-full" size="lg">Submit Application</Button>
                  </div>
               </form>

               <div className="mt-12 text-center text-sm text-charcoal/60 pt-8 border-t border-sand-200">
                  <p>Have furniture? <a href={`mailto:${SITE_INFO.furnitureEmail}`} className="underline hover:text-charcoal font-medium">Email photos directly instead</a>.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
