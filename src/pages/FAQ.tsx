import { FAQS } from "@/data/constants";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function FAQ() {
  return (
    <div className="pb-20">
      <section className="bg-sand-100 py-20 px-4 text-center border-b border-sand-200">
        <h1 className="font-serif text-5xl mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-medium text-balance">
          Everything you need to know about shopping and consigning with us.
        </p>
      </section>

      <section className="py-24 bg-white">
         <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-4">
               {FAQS.map((faq, idx) => (
                  <details key={idx} className="group bg-sand-50 rounded-2xl border border-sand-200 overflow-hidden open:bg-white open:ring-1 open:ring-sand-200 transition-all">
                     <summary className="font-serif text-xl px-6 py-5 cursor-pointer list-none flex justify-between items-center bg-sand-50 group-open:bg-white">
                        {faq.question}
                        <span className="text-brand-blue group-open:rotate-45 transition-transform text-2xl font-light leading-none">+</span>
                     </summary>
                     <div className="px-6 pb-6 text-charcoal/80 bg-white">
                        <p className="leading-relaxed border-t border-sand-100 pt-4 mt-2">{faq.answer}</p>
                     </div>
                  </details>
               ))}
            </div>

            <div className="mt-16 text-center bg-sand-50 p-12 rounded-[32px] border border-sand-200">
               <h2 className="font-serif text-2xl mb-3">Still have questions?</h2>
               <p className="text-charcoal/70 mb-8">Review our detailed consignment guidelines or contact the store.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/consign#guidelines">
                     <Button className="w-full sm:w-auto">View Guidelines</Button>
                  </Link>
                  <Link to="/visit">
                     <Button variant="outline" className="w-full sm:w-auto bg-white">Contact Us</Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
