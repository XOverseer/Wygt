import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { SITE_INFO, INTAKE_SCHEDULE } from "@/data/constants";
import womensApparelImg from "../assets/images/regenerated_image_1777834456002.png";

export function Home() {
  return (
    <div className="flex flex-col w-full pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-sand-100 overflow-hidden">
        <div className="absolute inset-0 z-0 flex md:grid md:grid-cols-2 opacity-10 md:opacity-100">
           <div className="hidden md:block bg-sand-100"></div>
           <div className="w-full h-full">
             <img 
               src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2600&auto=format&fit=crop" 
               alt="Elegant boutique interior" 
               className="w-full h-full object-cover rounded-l-[120px] shadow-2xl"
             />
           </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 w-full pt-12 md:pt-0">
          <div className="md:pr-12 flex flex-col justify-center text-center md:text-left pt-10">
            <h1 className="font-serif text-[48px] md:text-[60px] lg:text-[72px] font-normal leading-[1.1] text-charcoal mb-6 text-balance">
              Curated Consignment for Beautiful <span className="italic block mt-1">Homes & Wardrobes</span>
            </h1>
            <p className="text-lg text-text-medium mb-10 max-w-xl mx-auto md:mx-0 leading-[1.6]">
              Shop upscale women’s fashion, jewelry, accessories, and distinctive home furnishings at Beaufort’s award-winning consignment boutique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Link to="/consign" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full">Start Consigning</Button>
              </Link>
              <Link to="/visit" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full bg-white/80 backdrop-blur-sm border-brand-dark text-brand-dark">Plan Your Visit</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-14 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-sand-200">
            <div className="px-4">
              <div className="flex justify-center mb-3">
                 <span className="text-muted-gold text-2xl">★</span>
              </div>
              <p className="font-serif text-lg font-medium text-charcoal mb-1">Best Consignment Store</p>
              <p className="text-[11px] uppercase tracking-widest text-text-medium mt-1">Beaufort 2024 & 2025</p>
            </div>
            <div className="px-4">
              <div className="flex justify-center mb-3">
                 <span className="text-muted-gold text-2xl">★</span>
              </div>
              <p className="font-serif text-lg font-medium text-charcoal mb-1">Top 10 in SC</p>
              <p className="text-[11px] uppercase tracking-widest text-text-medium mt-1">Statewide Recognition</p>
            </div>
            <div className="px-4">
              <div className="flex justify-center mb-3">
                 <span className="text-muted-gold text-2xl">✧</span>
              </div>
              <p className="font-serif text-lg font-medium text-charcoal mb-1">New Arrivals Daily</p>
              <p className="text-[11px] uppercase tracking-widest text-text-medium mt-1">Inventory Changes Often</p>
            </div>
            <div className="px-4">
              <div className="flex justify-center mb-3">
                 <span className="text-muted-gold text-2xl">✧</span>
              </div>
              <p className="font-serif text-lg font-medium text-charcoal mb-1">Locally Curated</p>
              <p className="text-[11px] uppercase tracking-widest text-text-medium mt-1">In Beaufort, SC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Split */}
      <section className="py-20 lg:py-24 bg-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Shoppers Card */}
            <div className="bg-white p-8 rounded-[12px] border-l-4 border-l-brand-blue shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
               <h3 className="font-serif text-xl font-normal mb-2 text-charcoal">For Shoppers</h3>
               <p className="text-text-light mb-4 max-w-sm text-[13px] leading-[1.4]">
                 Find distinctive pieces, designer details, and one-of-a-kind treasures for your wardrobe and home.
               </p>
               <Link to="/shop" className="inline-block mt-2">
                 <button className="text-brand-blue text-[11px] font-bold uppercase tracking-[0.1em] hover:text-charcoal transition-colors">Plan Your Visit →</button>
               </Link>
            </div>

            {/* Consignors Card */}
            <div className="bg-white p-8 rounded-[12px] border-l-4 border-l-sand-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
               <h3 className="font-serif text-xl font-normal mb-2 text-charcoal">For Consignors</h3>
               <p className="text-text-light mb-4 max-w-sm text-[13px] leading-[1.4]">
                 Turn quality pieces into value with a trusted local consignment partner. Let us find the perfect buyer.
               </p>
               <Link to="/consign" className="inline-block mt-2">
                 <button className="text-brand-blue text-[11px] font-bold uppercase tracking-[0.1em] hover:text-charcoal transition-colors">Learn How →</button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Curated Assortment</h2>
            <p className="text-charcoal/60 uppercase tracking-widest text-sm font-medium">What You'll Find Inside</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Women's Apparel", desc: "Upscale fashion & contemporary styles", img: womensApparelImg },
              { title: "Jewelry", desc: "Unique, chunky & statement pieces", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" },
              { title: "Handbags & Accessories", desc: "High-end authentic designer goods", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop" },
              { title: "Home Furnishings", desc: "Distinctive decor & quality furniture", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" }
            ].map((cat) => (
              <div key={cat.title} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-4 bg-sand-200">
                  <img src={cat.img} alt={cat.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="font-serif text-xl mb-1 text-center">{cat.title}</h3>
                <p className="text-sm text-charcoal/60 text-center">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview & Intake block */}
      <section className="py-24 bg-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Process Steps */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl mb-10">How Consignment Works</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-sand-200 before:to-transparent">
                {[
                  { step: "01", title: "Review Guidelines", desc: "Check what we are currently accepting to ensure your items are a good fit." },
                  { step: "02", title: "Prepare Items", desc: "Clean, press, and place clothing on hangers. Clean home goods." },
                  { step: "03", title: "Drop Off", desc: "Bring eligible items during accepted intake hours." },
                  { step: "04", title: "We Sell", desc: "We curate, merchandise, and market your items to our shoppers." },
                  { step: "05", title: "Get Paid", desc: "Receive your percentage once the item sells." }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     {/* Icon/Number */}
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sand-100 text-charcoal font-serif text-sm font-semibold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {item.step}
                     </div>
                     {/* Content */}
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-[20px] shadow-sm border border-sand-200">
                        <h4 className="font-serif text-lg font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center md:text-left">
                <Link to="/consign">
                  <Button variant="outline">See Full Process</Button>
                </Link>
              </div>
            </div>

            {/* Intake Reminder Card */}
            <div className="lg:col-span-5 w-full">
               <div className="bg-white rounded-[16px] p-10 border border-black/5 sticky top-28 flex flex-col justify-between">
                 <h4 className="text-[12px] uppercase tracking-[0.2em] text-sage-200 mb-6 font-sans">Current Intake Status</h4>
                 
                 <div className="mb-6 border-b border-sage-100 pb-4">
                   <div className="flex justify-between mb-2">
                     <span className="font-bold text-[14px] text-charcoal">Apparel & Clothing</span>
                     <span className="text-brand-blue text-[12px] font-semibold">OPEN</span>
                   </div>
                   <p className="text-[13px] text-text-light leading-[1.4]">{INTAKE_SCHEDULE.clothing}</p>
                 </div>
                 
                 <div className="mb-6 border-b border-sage-100 pb-4">
                   <div className="flex justify-between mb-2">
                     <span className="font-bold text-[14px] text-charcoal">Home & Accessories</span>
                     <span className="text-brand-blue text-[12px] font-semibold">OPEN</span>
                   </div>
                   <p className="text-[13px] text-text-light leading-[1.4]">{INTAKE_SCHEDULE.homeGoods}</p>
                 </div>
                 
                 <div className="bg-sand-100 p-4 rounded-lg text-[12px] leading-[1.4] text-text-light mb-6">
                    <strong className="text-charcoal font-semibold">Note:</strong> {INTAKE_SCHEDULE.notAccepted}
                 </div>

                 <Link to="/consign#guidelines" className="block w-full text-center">
                    <Button variant="outline" className="w-full">View Detailed Guidelines</Button>
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Furniture Consignment CTA */}
      <section className="bg-brand-blue text-white py-20 px-4 text-center">
         <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl mb-4">Have Furniture to Consign?</h2>
            <p className="text-lg text-white/90 mb-8 text-balance">
              Furniture consignment starts with photos. Email clear photos from all angles, dimensions, and manufacturer details if known. Our team will review your pieces before scheduling next steps.
            </p>
            <a href={`mailto:${SITE_INFO.furnitureEmail}`}>
              <Button variant="primary" className="bg-white text-brand-blue hover:bg-sand-100">
                Email Furniture Photos
              </Button>
            </a>
         </div>
      </section>
      
    </div>
  );
}
