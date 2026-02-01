// data/hotels.js
// Pricing notes:
// - Hotels fluctuate by date/availability.
// - USD->BDT conversion reference: ~1 USD ≈ 122.2–122.39 BDT (late Jan 2026).
// - "priceMin/priceMax" are reasonable per-night ranges based on the cited sources.

const hotels = [
  {
    id: 1,
    name: "Rose View Hotel",
    location: "Shahjalal Uposhohor (Uposhohor area)",
    country: "Bangladesh",
    category: "Hotel (5-star)",
    source: "Rose View Hotel official site",
    priceMin: 11500,
    priceMax: 18000,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "Official site lists rates in USD and mentions payment in BDT using prevailing conversion + service charge/VAT; range here is a practical converted estimate.",
  },
  {
    id: 2,
    name: "Hotel Noorjahan Grand",
    location: "Zindabazar / City Centre area",
    country: "Bangladesh",
    category: "Hotel (4-star)",
    source: "Noorjahan Grand official site",
    priceMin: 3500,
    priceMax: 6500,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "Official room pages show 'from ৳3500' (Boutique) and higher categories around ৳6500+.",
  },
  {
    id: 3,
    name: "Grand Sylhet Hotel & Resort",
    location: "Sylhet outskirts / Resort zone",
    country: "Bangladesh",
    category: "Resort/Hotel (Luxury)",
    source: "Grand Sylhet official Facebook page (package rate)",
    priceMin: 15999,
    priceMax: 16999,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "Official page shows package-style nightly rates (for 2 persons). Regular room rates may differ by date/offer.",
  },
  {
    id: 4,
    name: "Hotel Star Pacific",
    location: "City Centre (near main commercial area)",
    country: "Bangladesh",
    category: "Hotel (3–4 star range)",
    source: "Hotel Star Pacific official promotions page",
    priceMin: 5999,
    priceMax: 10999,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "Promo packages shown (e.g., 5999 net / 10999 net with sightseeing). Standard booking rates may vary.",
  },
  {
    id: 5,
    name: "Royal Mark Hotel",
    location: "City Centre / Market area",
    country: "Bangladesh",
    category: "Hotel",
    source: "Royal Mark official site",
    priceMin: 10000,
    priceMax: 18000,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "Official pages show examples like ৳10,000/night and higher tiers around ৳18,000/night.",
  },
  {
    id: 6,
    name: "La Vista Hotel",
    location: "City Centre area",
    country: "Bangladesh",
    category: "Hotel (3-star)",
    source: "Expedia price snapshot",
    priceMin: 3000,
    priceMax: 4500,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "Expedia shows a ~$25-ish baseline price snapshot for near-term dates; converted range used here.",
  },
  {
    id: 7,
    name: "Hotel Holy Gate",
    location: "Central Sylhet (near major roads/markets)",
    country: "Bangladesh",
    category: "Hotel (Budget/Mid)",
    source: "HotelsCombined rate info",
    priceMin: 2400,
    priceMax: 4400,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "HotelsCombined shows ~US$20/night level; range reflects typical low-to-mid nightly totals.",
  },
  {
    id: 8,
    name: "Hotel Supreme",
    location: "Central Sylhet",
    country: "Bangladesh",
    category: "Hotel (Budget)",
    source: "Expedia UK price snapshot",
    priceMin: 2300,
    priceMax: 3500,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "Expedia snapshot shows ~£13–£15 range for specific near-term dates; converted to BDT range.",
  },
  {
    id: 9,
    name: "Bottomhill Palace Hotel",
    location: "Central Sylhet",
    country: "Bangladesh",
    category: "Hotel (Budget)",
    source: "HotelsCombined rate info",
    priceMin: 1800,
    priceMax: 2500,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "HotelsCombined indicates ~$14–$18/night levels; converted to BDT range.",
  },
  {
    id: 10,
    name: "Jatra Flagship Sylhet City Centre",
    location: "City Centre",
    country: "Bangladesh",
    category: "Hotel/Serviced Rooms",
    source: "Tripadvisor price range",
    priceMin: 2300,
    priceMax: 4700,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    notes:
      "Tripadvisor lists a standard-room average range of ~$19–$38; converted to BDT.",
  },
];

module.exports = hotels;
