import { FAQS } from "@/data/constants";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function FAQ() {
  return (
    <div className="pb-14 md:pb-0">

      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="bg-charcoal py-24 lg:py-32 px-4 text-center">
        <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4">Quick Answers</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 text-balance leading-[1.05]">
          Frequently<br /><em>Asked Questions</em>
        </h1>
        <p className="text-text-soft text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about shopping and consigning with us.
        </p>
      </section>

      {/* ── FAQs ────────────────────────────────────────────── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-sand bg-cream overflow-hidden open:bg-white open:border-teal/20 open:shadow-sm transition-all duration-200"
              >
                <summary className="flex justify-between items-center gap-4 px-7 py-5 cursor-pointer list-none bg-cream-dark group-open:bg-white transition-colors">
                  <span className="font-serif text-xl text-charcoal">{faq.question}</span>
                  <span className="text-teal text-2xl font-light leading-none shrink-0 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-7 pb-6 bg-white">
                  <p className="text-text-mid leading-relaxed border-t border-sand pt-4 mt-1">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-charcoal rounded-3xl p-10 md:p-12 text-center">
            <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4">Need More Help?</p>
            <h2 className="font-serif text-3xl text-cream mb-4">Still Have Questions?</h2>
            <p className="text-text-soft mb-8 leading-relaxed">
              Review our detailed consignment guidelines or reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/consign#guidelines">
                <Button variant="primary">View Guidelines</Button>
              </Link>
              <Link to="/visit">
                <Button variant="outline-light">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
