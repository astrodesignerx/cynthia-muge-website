import type { Source } from "@/lib/types";

const officialPage: Source = {
  label: "Cynthia Muge, official Facebook page",
  publisher: "Cynthia Muge, official Facebook page",
  date: "August 2026",
  url: "https://www.facebook.com/profile.php?id=100083334182719",
};

export type FieldNote = {
  slug: string;
  title: string;
  programme: string;
  place: string;
  lede: string;
  body: string;
  openQuestion: string;
  image: string;
  alt: string;
  source: Source;
};

/** Documented field notes, kept separate from consented first-person stories. */
export const fieldNotes: FieldNote[] = [
  {
    slug: "chepkemel-groups",
    title: "Two groups, one handover",
    programme: "Group Empowerment",
    place: "Chepkemel DIP Grounds · Tindiret Ward",
    lede: "At Chepkemel, local groups received support to put their plans to work.",
    body:
      "In August 2026, Baraka 112 Women Group and Chepkemel Youth Group each received a KSh 100,000 cheque. The next update will follow what the groups put the grants towards.",
    openQuestion:
      "The next update will follow the groups' purchases and enterprise activity.",
    image:
      "/img/facebook/baraka-112-women-group-and-chepkemel-youth-2-2048x1366.jpg",
    alt: "A women and youth group handover at Chepkemel",
    source: {
      ...officialPage,
      label: "Economic empowerment handover at Chepkemel DIP Grounds",
    },
  },
  {
    slug: "lelmokwo-shade",
    title: "A place to wait out the weather",
    programme: "Health and Infrastructure",
    place: "Lelmokwo Centre · Nandi County",
    lede: "At Lelmokwo Centre, riders have a place to wait and work through the weather.",
    body:
      "The completed boda boda shade at Lelmokwo Centre carries the NGAAF and office attribution. The next update will follow how riders use and maintain the space.",
    openQuestion:
      "Usage, maintenance, and the full list of shade locations will be added as the office gathers the information.",
    image: "/img/facebook/well-designed-bodaboda-shades-1-1280x960.jpg",
    alt: "A completed boda boda shade at Lelmokwo Centre",
    source: {
      ...officialPage,
      label: "Boda boda shade at Lelmokwo Centre",
    },
  },
  {
    slug: "koilot-seedlings",
    title: "Twenty-two thousand seedlings at Koilot",
    programme: "Kahawa na Mama",
    place: "Koilot ACC · Ol'lessos Ward, Nandi Hills",
    lede: "At Koilot, coffee seedlings began their journey into the hands of farmers.",
    body:
      "Phase III distributed 22,000 coffee seedlings at Koilot ACC. Future updates will follow the trees into their first harvest and the farmers who care for them.",
    openQuestion:
      "Future updates will include seedling survival, cherry volume, and the price paid to the first beneficiaries.",
    image:
      "/img/facebook/i-m-pleased-to-report-that-22-000-coffee-s-1-1200x1600.jpg",
    alt: "Coffee seedlings ready for distribution in Nandi County",
    source: {
      ...officialPage,
      label: "22,000 coffee seedlings reported at Koilot ACC",
    },
  },
];

export function getFieldNote(slug: string): FieldNote | undefined {
  return fieldNotes.find((note) => note.slug === slug);
}
