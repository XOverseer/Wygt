# Where'd You Get That? - Website Build Plan

## 1. Website Goals
- Create a modern, elegant, high-trust digital presence for "Where'd You Get That?".
- Increase foot traffic to the store from quality buyers.
- Increase the volume of high-quality items consigned, especially top-tier fashion, authentic jewelry, and distinctive furniture.
- Drastically reduce phone calls about basic rules, current intake status, and furniture submission requirements.

## 2. Target Audiences
1. **The Shopper:** Affluent, style-conscious, environmentally aware, appreciates the thrill of the hunt, values "upscale consignment" over "thrift".
2. **The Consignor:** Busy professionals or retirees in the Beaufort area who have high-quality, lightly used pieces and want a hassle-free, trusted partner to sell them for a fair split.

## 3. Conversion Strategy
- **Primary Pathways:** Direct users immediately to "Shop" (visit us) or "Consign" (submit/review rules).
- **Friction Reduction:** Present the complex rules visually (using grid layouts and accordions) rather than in a wall of text.
- **Objection Handling:** Answer FAQs explicitly on the Consign and FAQ pages so consignors know exactly what to expect.

## 4. Sitemap
1. / (Home)
2. /shop (Shop)
3. /consign (Consign - How To & Guidelines)
4. /updates (Current Intake Updates)
5. /about (About the Store)
6. /visit (Location & Contact)
7. /faq (Frequently Asked Questions)

## 5. Design System
- **Aesthetic:** Refined Coastal Boutique / Warm Luxury.
- **Color Palette:**
  - `sand-50` (#fcfbf9) / `sand-100` / `sand-200`: Warm whites and ivories for airy backgrounds.
  - `charcoal` (#2a2a2a): For grounded, high-contrast, non-harsh text.
  - `brand-blue` (#c5a880): For primary branding, buttons, and subtle premium accents.
- **Typography:**
  - Serif: `Playfair Display` (Headings, giving an editorial, sophisticated look).
  - Sans: `Inter` (Body, micro-labels, UI elements).
- **Interaction:** Soft hover states, elegant image zoom-ins, and clean accordions.

## 6. Local SEO Plan
- **Primary Keywords:** Beaufort SC consignment store, upscale consignment South Carolina Lowcountry, women's consignment Beaufort.
- **Title Tags:** Implemented universally as `Where'd You Get That? | Consignment Boutique`.
- **On-Page Strategy:** The address, phone number, and physical descriptors (Belleview Business Park) are injected as plain text.

## 7. Data Structure for Reusable Content
All core configuration is stored in `/src/data/constants.ts` so the owner can edit it centrally without diving into layout code:
- `SITE_INFO`: Hours, phone, emails, location.
- `INTAKE_SCHEDULE`: Intake day/time strings.
- `CATEGORY_GUIDELINES`: Rule lists per category.
- `FAQS`: Shared across the FAQ block.

## 8. Mobile UX Plan
- Sticky bottom action bar with quick "Call" and "Map" buttons.
- Full viewport mobile menu overlay.
- Single-column card stacking that remains highly scannable.

## 9. Accessibility & Performance Checklist
- Semantic HTML (`<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`).
- Contrast ratios verified across the Sand/Charcoal/Gold palette.
- Tap targets appropriately sized on mobile (min 44px equivalent).
- Fast page loads using Vite and optimized local React Router navigation.
