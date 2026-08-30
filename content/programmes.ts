import type { Programme, Source } from "@/lib/types";

/**
 * Every figure on this site comes from here.
 *
 * To update a number: change it here, change its source, change `lastUpdated`.
 * No component hard-codes a statistic. See README.
 */

const KNA: Source = {
  label: "Kahawa na Mama programme uplifts Nandi's women and revives a lost crop",
  publisher: "Kenya News Agency",
  date: "15 June 2025",
  url: "https://www.kenyanews.go.ke/kahawa-na-mama-programme-uplifts-nandis-women-and-revives-a-lost-crop/",
};

const MYGOV: Source = {
  label: "Nandi's Kahawa na Mama initiative revives coffee sector and empowers women",
  publisher: "MyGov",
  date: "2025",
  url: "https://mygov.go.ke/index.php/nandis-kahawa-na-mama-initiative-revives-coffee-sector-and-empowers-women",
};

const COB: Source = {
  label: "County budget implementation report, FY 2024/25",
  publisher: "Controller of Budget",
  date: "FY 2024/25",
};

const REGISTER: Source = {
  label: "Beneficiary register",
  publisher: "Office of the Woman Representative, Nandi County",
  date: "Held by the office",
};

const HER_PAGE: Source = {
  label: "Elimu Ni Mwangaza dedication service, posted by the office",
  publisher: "Cynthia Muge, official Facebook page",
  date: "21 August 2026",
  url: "https://www.facebook.com/profile.php?id=100083334182719",
};

const NGAAF_GRAPHIC: Source = {
  label: "Elimu Ni Mwangaza: students on full scholarship, by sub-county",
  publisher: "Office of the Woman Representative / NGAAF, published graphic",
  date: "Undated",
};

export const programmes: Programme[] = [
  {
    slug: "kahawa-na-mama",
    hero: "/img/coffee-planting.jpg",
    heroAlt: "Women planting coffee seedlings together in Nandi County",
    name: "Kahawa na Mama",
    oneLine:
      "Putting coffee trees, and the income from them, into the hands of Nandi women, and registering those trees in their own names.",
    started: "2023",
    status: "Phase III running",
    lastUpdated: "29 August 2026",
    figures: [
      {
        status: "verified",
        value: "650,000+",
        label: "Certified seedlings distributed to date",
        source: KNA,
      },
      {
        status: "verified",
        value: "~4,000",
        label: "Women reached across the programme",
        source: KNA,
      },
      {
        status: "verified",
        value: "63",
        label: "Self-help groups in the pilot cohort",
        source: KNA,
      },
      {
        status: "verified",
        value: "6 / 6",
        label: "Sub-counties with registered beneficiaries",
        source: KNA,
      },
    ],
    phases: [
      {
        name: "Pilot",
        period: "2023 – 24",
        quantity: "150,000",
        beneficiaries: "900",
        detail: "63 self-help groups. Certified Ruiru 11 and Batian stock.",
      },
      {
        name: "Phase II",
        period: "From June 2025",
        quantity: "500,000",
        beneficiaries: "~3,100 more",
        detail:
          "Launched at Maraba Primary, Aldai. Cumulative total passes 650,000.",
      },
      {
        name: "Phase III",
        period: "Running, 2026",
        quantity: "In progress",
        beneficiaries: "—",
        detail:
          "22,000 distributed at Koilot ACC, Ol'lessos Ward, Nandi Hills.",
      },
    ],
    coverage: [
      { area: "Nandi Hills", value: 1000, display: "1,000+", lead: true },
      { area: "Aldai", value: null, display: "—" },
      { area: "Mosop", value: null, display: "—" },
      { area: "Chesumei", value: null, display: "—" },
      { area: "Emgwen", value: null, display: "—" },
      { area: "Tinderet", value: null, display: "—" },
    ],
    coverageNote:
      "Counted figures for the remaining sub-counties are being compiled from the beneficiary register.",
    distinctive: {
      title: "The trees are registered in both spouses' names.",
      body:
        "The programme includes a charter requiring joint registration of coffee bushes between husband and wife. A woman who does the work on the farm is named on the asset, and on the payment that follows from it.",
    },
    partners: [
      { name: "NGAAF", role: "National Government Affirmative Action Fund: programme funding" },
      { name: "Agriculture and Food Authority", role: "Certification and agronomy standards" },
      { name: "Nandi County Government", role: "Extension services and coordination" },
      { name: "Baraka Agricultural College", role: "Nursery capacity and farmer training" },
    ],
    gaps: [
      {
        title: "Seedling survival rate",
        body:
          "No count of how many distributed trees are alive. A figure of 90% circulates publicly. It is an estimate, not a survey.",
        tag: "Not measured",
      },
      {
        title: "Cherry delivered and paid",
        body:
          "Pilot trees reach bearing age in 2026. No cooperative delivery or payment data has been collected yet.",
        tag: "Not measured",
      },
      {
        title: "Joint registrations completed",
        body:
          "The number of households that have signed is not yet recorded.",
        tag: "Not measured",
      },
      {
        title: "Market and processing capacity",
        body:
          "Whether Nandi has the factory capacity and buyers to absorb the volume these trees will produce at maturity.",
        tag: "Open question",
      },
    ],
    sources: [KNA, MYGOV, REGISTER],
  },

  {
    slug: "elimu-ni-mwangaza",
    hero: "/img/scholars-walk.jpg",
    heroAlt: "Students supported through the Elimu Ni Mwangaza scholarship programme",
    name: "Elimu Ni Mwangaza",
    oneLine:
      "Full scholarships for students from families who could not otherwise keep them in school.",
    started: "2023",
    status: "Pioneer cohort sitting KCSE",
    lastUpdated: "29 August 2026",
    figures: [
      {
        status: "verified",
        value: "206",
        label: "Candidates dedicated ahead of KCSE 2026",
        source: {
          label: "Dedication service, Kapsabet",
          publisher: "Savannahmax Media House",
          date: "August 2026",
        },
      },
      {
        status: "verified",
        value: "449",
        label: "Students on full scholarship, all cohorts",
        source: HER_PAGE,
        note:
          "The 206 above are the pioneer cohort. The rest sit KCSE in later years.",
      },
      {
        status: "verified",
        value: "4,000",
        label: "Stated target, or 120 per ward",
        source: HER_PAGE,
        note:
          "A target for an expanded mandate, not a figure reached.",
      },
      {
        status: "unconfirmed",
        label: "Launch year",
        note:
          "Sources give both 2022 and 2023. The pioneer cohort entered Form One in 2023, which the office should confirm as the programme start.",
      },
    ],
    phases: [
      {
        name: "Pioneer cohort",
        period: "2023 – 2026",
        quantity: "—",
        beneficiaries: "206 candidates",
        detail:
          "Entered Form One in 2023, sitting KCSE in 2026. The first full four-year cycle.",
      },
    ],
    coverage: [
      { area: "Emgwen", value: 74, display: "74" },
      { area: "Tinderet", value: 72, display: "72" },
      { area: "Aldai", value: 69, display: "69" },
      { area: "Mosop", value: 67, display: "67" },
      { area: "Nandi Hills", value: 66, display: "66" },
      { area: "Chesumei", value: 63, display: "63" },
    ],
    coverageNote:
      "From the programme's published breakdown, which sums to 411. That breakdown predates the current total of 449.",
    distinctive: {
      title: "It is not only school fees.",
      body:
        "The commitment runs across four years: walking alongside students, tracking academic growth, and giving them the peace of mind required to excel.",
    },
    partners: [
      { name: "NGAAF", role: "National Government Affirmative Action Fund: scholarship funding" },
    ],
    gaps: [
      {
        title: "The sub-county split for the current 449",
        body:
          "The published breakdown sums to 411 and is undated. The 38 students added since have not been assigned to a sub-county here.",
        tag: "Unconfirmed",
      },
      {
        title: "Completion and results",
        body:
          "The pioneer cohort has not yet sat KCSE. Outcomes will be published when results are released.",
        tag: "Not measured",
      },
    ],
    sources: [
      HER_PAGE,
      NGAAF_GRAPHIC,
      {
        label: "Elimu Ni Mwangaza dedication service coverage",
        publisher: "Savannahmax Media House",
        date: "August 2026",
      },
      REGISTER,
    ],
  },

  {
    slug: "boso-supercup",
    hero: "/img/football.jpeg",
    heroAlt: "BOSO Supercup football in Nandi County",
    name: "BOSO Supercup",
    oneLine:
      "A football and volleyball league that reached every ward in Nandi in three months.",
    started: "2026",
    status: "Sub-county stage; county final December 2026",
    lastUpdated: "29 August 2026",
    figures: [
      {
        status: "verified",
        value: "30 / 30",
        label: "Wards reached",
        source: {
          label: "BOSO Football Tournament report",
          publisher: "Nandi Updates",
          date: "August 2026",
        },
      },
      {
        status: "verified",
        value: "499",
        label: "Teams registered",
        source: {
          label: "BOSO Football Tournament report",
          publisher: "Nandi Updates",
          date: "August 2026",
        },
      },
      {
        status: "verified",
        value: "846",
        label: "Matches played",
        source: {
          label: "BOSO Football Tournament report",
          publisher: "Nandi Updates",
          date: "August 2026",
        },
      },
      {
        status: "verified",
        value: "KSh 2.7m",
        label: "Ward-level prize money, men's and women's",
        source: {
          label: "BOSO Football Tournament report",
          publisher: "Nandi Updates",
          date: "August 2026",
        },
      },
    ],
    phases: [
      {
        name: "Ward stage",
        period: "Three months to Aug 2026",
        quantity: "846 matches",
        beneficiaries: "499 teams",
        detail: "All 30 wards, 83 playing fields, six constituencies.",
      },
      {
        name: "Sub-county stage",
        period: "From September 2026",
        quantity: "—",
        beneficiaries: "Qualifying teams",
        detail: "Winners progress from each ward.",
      },
      {
        name: "County final",
        period: "December 2026",
        quantity: "—",
        beneficiaries: "—",
        detail: "County grand finale.",
      },
    ],
    coverage: [],
    distinctive: {
      title: "Thirty wards, in three months, for men and women.",
      body:
        "Thirty wards, 83 playing fields and 499 registered teams, in men's and women's competitions running to the same rules and the same prize structure.",
    },
    partners: [],
    gaps: [
      {
        title: "Livelihoods after the whistle",
        body:
          "No data yet on how many players find sustained income after the tournament.",
        tag: "Open question",
      },
      {
        title: "Total programme cost",
        body:
          "Prize money is published. Total spend on the tournament is not.",
        tag: "Not measured",
      },
    ],
    sources: [
      {
        label: "BOSO Football Tournament report",
        publisher: "Nandi Updates",
        date: "August 2026",
      },
    ],
  },

  {
    slug: "health-and-infrastructure",
    hero: "/img/ambulance-speech.jpg",
    heroAlt: "The ambulance handed over at Kabiemit Health Centre, Mosop",
    name: "Health and Infrastructure",
    oneLine:
      "Equipment, water and workspaces delivered to named facilities and centres.",
    started: "2022",
    status: "Ongoing",
    lastUpdated: "29 August 2026",
    figures: [
      {
        status: "verified",
        value: "1",
        label: "Fully kitted ambulance, Kabyemit Dispensary, Mosop",
        source: {
          label: "Constituency delivery record",
          publisher: "Office of the Woman Representative",
          date: "2026",
        },
      },
      {
        status: "verified",
        value: "2",
        label: "Boreholes at Tulwo Girls High and Kabolebo Primary",
        source: {
          label: "Empowerment programmes",
          publisher: "cynthiamuge.com",
          date: "2026",
        },
      },
      {
        status: "verified",
        value: "2",
        label: "Boda boda shades at Ndalat Centre and Kapkilel",
        source: {
          label: "Constituency delivery record",
          publisher: "Office of the Woman Representative",
          date: "2026",
        },
      },
      {
        status: "unmeasured",
        label: "Patients carried by the ambulance",
        note:
          "The facility keeps a log. It has not yet been compiled.",
      },
    ],
    phases: [],
    coverage: [],
    distinctive: {
      title: "Each item sits in a named place.",
      body:
        "An ambulance at Kabiemit, boreholes at Tulwo Girls High and Kabolebo Primary, boda boda shades at Ndalat Centre and Kapkilel.",
    },
    partners: [
      { name: "NGAAF", role: "National Government Affirmative Action Fund" },
    ],
    gaps: [
      {
        title: "Usage and maintenance",
        body:
          "No data yet on utilisation of the ambulance or the condition of the boreholes over time.",
        tag: "Not measured",
      },
    ],
    sources: [
      {
        label: "Empowerment Programs",
        publisher: "cynthiamuge.com",
        date: "2026",
        url: "https://cynthiamuge.com/empowerment",
      },
    ],
  },
];

export function getProgramme(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}

/** County finance, used in the /record explainer. */
export const countyFinance = {
  year: "FY 2024/25",
  total: "KSh 10.2bn",
  absorption: "98%",
  recurrent: { amount: "KSh 6.6bn", ofBudget: "102%", flex: 6.6 },
  development: { amount: "KSh 3.3bn", ofBudget: "90%", flex: 3.3 },
  source: COB,
};

/**
 * The six pillars, in the order she published them.
 * Source: her declaration post, official Facebook page, August 2026.
 * Wording of the pillar names is hers. The one-liners describe scope only.
 */
export const pillars = [
  {
    n: "01",
    name: "Road Network",
    body: "Access between the wards, the markets and the tea and coffee collection points.",
  },
  {
    n: "02",
    name: "Education",
    body: "Scholarships, and the schools that hold the students already sponsored.",
  },
  {
    n: "03",
    name: "Health",
    body: "Facilities within reach of the townships that have none.",
  },
  {
    n: "04",
    name: "Water",
    body: "Boreholes, storage and supply across the six sub-counties.",
  },
  {
    n: "05",
    name: "Wealth Creation",
    body: "Coffee, dairy, tea and the enterprises run by women and young people.",
  },
  {
    n: "06",
    name: "Governance",
    body: "How the county budget is set, spent and accounted for.",
  },
];

export const declaration = {
  quote:
    "The race for the county's top seat is demanding, but when I look at 15 years of devolution and the many unmet needs across Nandi, I know fear is a luxury we cannot afford. Nandi deserves empathetic, disciplined and foresighted leadership.",
  source: {
    label: "Declaration of candidacy for Governor of Nandi County",
    publisher: "Cynthia Muge, official Facebook page",
    date: "August 2026",
    url: "https://www.facebook.com/profile.php?id=100083334182719",
  } as Source,
};
