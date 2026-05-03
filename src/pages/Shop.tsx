import { Button } from "@/components/ui/Button";
import { SITE_INFO } from "@/data/constants";

export function Shop() {
  const images = [
    "https://images.unsplash.com/photo-1596821864109-17f4ebbe99db?q=80&w=800&auto=format&fit=crop", // Home Decor
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop", // Elegant interior
    "https://images.unsplash.com/photo-1590740924976-508fb3e95079?q=80&w=800&auto=format&fit=crop", // Clothes Rack
    "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop", // Handbag
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800&auto=format&fit=crop", // Accessories/Jewelry
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop", // Furniture
  ];

  return (
    <div className="pb-20">
      <section className="bg-sand-100 py-20 px-4 text-center border-b border-sand-200">
        <h1 className="font-serif text-5xl mb-4">Discover Something Distinctive</h1>
        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-medium text-balance">
          New arrivals come in daily, from polished wardrobe pieces to statement jewelry and home furnishings with character.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
           <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-4">Gallery</h2>
           <p className="font-serif text-3xl">A Peek Inside the Boutique</p>
           <p className="mt-2 text-charcoal/60">Inventory changes daily. Visit us in person to shop these looks and more.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div key={idx} className="break-inside-avoid rounded-[24px] overflow-hidden bg-sand-200">
               <img src={src} alt="Boutique item" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-xl mx-auto bg-white p-12 rounded-[32px] border border-sand-200 shadow-sm">
           <h3 className="font-serif text-2xl mb-4">Ready to shop?</h3>
           <p className="text-charcoal/70 mb-8">We are open {SITE_INFO.hours}. Connect with us to check availability of specific pieces.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={SITE_INFO.phoneLink}>
                <Button className="w-full sm:w-auto">Call to Inquire</Button>
              </a>
              <a href="/visit">
                <Button variant="outline" className="w-full sm:w-auto">Get Directions</Button>
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}
