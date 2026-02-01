// data/attractions.js
// Notes:
// - Some attractions have free entry (priceMin=0).
// - For places like Ratargul / Lalakhal / Bisnakandi / Pangthumai, the "real cost" is often BOAT fare.
// - Prices vary by season + negotiation; we store typical ranges in BDT.

const attractions = [
  {
    id: 1,
    name: "Ratargul Swamp Forest",
    location: "Gowainghat",
    category: "Nature / Swamp Forest",
    priceMin: 50,
    priceMax: 1400,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes:
      "Entry fee (adult) ~Tk50; plus typical boat/trawler costs (return) vary (season/negotiation).",
    bestTransport:
      "From Sylhet: reserve CNG/auto-rickshaw to Gowainghat (~Tk450–500), then reserve a trawler/boat to the forest (~Tk800–1400 return).",
    source:
      "The Business Standard (entry fee); Nijhoom (transport + boat range)",
  },

  {
    id: 2,
    name: "Lalakhal (Piain River boat ride)",
    location: "Lalakhal",
    category: "River / Boat Ride",
    priceMin: 500,
    priceMax: 5000,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes:
      "Boat costs vary: regular boat ~Tk500–700 (or Tk1000–1500 from Sarighat); speedboat can be ~Tk2000–5000 depending on point/operator.",
    bestTransport:
      "Best: reserve microbus from Sylhet city (6–8 people ~Tk3500–4000) OR go to Sarighat and hire a boat (~Tk1000–1500).",
    source:
      "Sylhet district portal + BeautifulBangladesh + SylhetTouristPlaces",
  },

  {
    id: 3,
    name: "Bisnakandi / Bichnakandi",
    location: "Bisnakandi",
    category: "Nature / Stone beds & river",
    priceMin: 0,
    priceMax: 1500,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes:
      "Commonly no fixed entry ticket; typical boat rental is the main cost (ranges by season).",
    bestTransport:
      "Best: reserve private microbus for the day (~Tk3000–4000 return) and rent a boat (~Tk800–1500 for 5–6 people).",
    source: "SylhetTouristPlaces (transport + boat range)",
  },

  {
    id: 4,
    name: "Jaflong",
    location: "Jaflong",
    category: "Scenic / Viewpoints",
    priceMin: 0,
    priceMax: 80,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes:
      "Commonly treated as free/low-cost to visit; Sylhet district portal notes bus fare around Tk80.",
    bestTransport:
      "Best budget option: local bus from Sylhet to Jaflong (~Tk80). Private microbus also common for groups.",
    source: "Sylhet district portal (transport cost guidance)",
  },

  {
    id: 5,
    name: "Pangthumai Waterfall",
    location: "Hadarpar",
    category: "Waterfall / Nature",
    priceMin: 800,
    priceMax: 1500,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes:
      "No standard entry ticket; typical cost is boat hire from Hadarpar to reach viewing area (Bangladesh side).",
    bestTransport:
      "From Sylhet: go to Hadarpar (often by reserved CNG/day hire), then hire a boat (~Tk800–1500).",
    source: "Tripadvisor (route via Hadarpar) + Evendo (boat cost range)",
  },

  {
    id: 6,
    name: "Tilagor Eco Park",
    location: "Tilagor",
    category: "Eco Park / Nature",
    priceMin: 0,
    priceMax: 23,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes:
      "Entry fee reported as Tk23 per person; free for children.",
    bestTransport:
      "Within Sylhet city: easiest by CNG/auto-rickshaw or private vehicle (short city trip).",
    source: "BSS (entry fee) + Tripadvisor (easy access by auto/private vehicle)",
  },

  {
    id: 7,
    name: "Adventure World (Fun & Family Tourism Park)",
    location: "Salutikor Road",
    category: "Theme Park",
    priceMin: 30,
    priceMax: 50,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes:
      "Ticket commonly cited: Tk50 adult / Tk30 child (rides may cost extra).",
    bestTransport:
      "From Sylhet city: taxi/ride-share/CNG to Salutikor Road (short trip).",
    source: "SylhetTouristGuide + Tripadvisor",
  },

  {
    id: 8,
    name: "Shapla Bill (Dibir Haor)",
    location: "Shapla Bill",
    category: "Wetland / Water lilies",
    priceMin: 0,
    priceMax: 150,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes:
      "Typically no formal entry ticket; bus fare guidance is often Tk100–150 depending on route.",
    bestTransport:
      "Best budget option: local bus from Subhanighat bus stand (ticket ~Tk100–150). CNG possible but not recommended (higher cost).",
    source: "SylhetTouristPlaces (bus route + fare guidance)",
  },

  {
    id: 9,
    name: "Keane Bridge",
    location: "Keane Bridge",
    category: "Landmark / City spot",
    priceMin: 0,
    priceMax: 0,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes: "Public landmark; no entry ticket.",
    bestTransport:
      "Anywhere in Sylhet city: CNG/auto-rickshaw/rickshaw to Dak-bangla road / Shah Jalal road area; then short walk.",
    source: "OffRoadBangladesh (how to reach)",
  },

  {
    id: 10,
    name: "Ali Amjad Clock Tower",
    location: "Chandnighat",
    category: "Landmark / Historic",
    priceMin: 0,
    priceMax: 0,
    currency: "BDT",
    pricingAsOf: "2026-02-01",
    pricingNotes: "Public landmark; no entry ticket.",
    bestTransport:
      "Within Sylhet: go to Chandnighat (near Surma river / Keane Bridge area) by CNG/auto-rickshaw; then walk.",
    source: "Tripadvisor (location description)",
  },
];

module.exports = attractions;
