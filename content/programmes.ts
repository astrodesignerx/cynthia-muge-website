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

const HER_PAGE_DAIRY: Source = {
  label: "Milk cooler flagging-off at Nandi Dairy Cooperative Union, Kabiyet",
  publisher: "Cynthia Muge, official Facebook page",
  date: "August 2026",
  url: "https://www.facebook.com/profile.php?id=100083334182719",
};

const HER_PAGE_DELIVERY: Source = {
  label: "Delivery posts, official page",
  publisher: "Cynthia Muge, official Facebook page",
  date: "August 2026",
  url: "https://www.facebook.com/profile.php?id=100083334182719",
};

const LEGACY_PAGE: Source = {
  label: "Kabiemit Health Centre equipment delivery, posted by the office",
  publisher: "Cynthia Muge, Facebook, 2024 archive",
  date: "July to September 2024",
};

const NGAAF_GRAPHIC: Source = {
  label: "Elimu Ni Mwangaza: students on full scholarship, by sub-county",
  publisher: "Office of the Woman Representative / NGAAF, published graphic",
  date: "Undated",
};

export const BOSO_REPORT: Source = {
  label: "BOSO Football Tournament report",
  publisher: "Nandi Updates",
  date: "August 2026",
};

export const programmes: Programme[] = [
  {
    slug: "kahawa-na-mama",
    hero: "/img/coffee-seedling-landscape-wide.jpg",
    heroAlt: "Hands holding a bagged coffee seedling in a Nandi nursery",
    heroPos: "50% 28%",
    gallery: [
      {
        src: "/img/coffee-seedling-wide.jpg",
        alt: "Seedlings ready for collection",
        pos: "50% 50%",
      },
      {
        src: "/img/coffee-portrait.jpg",
        alt: "Cynthia Muge with a coffee seedling",
        pos: "50% 30%",
      },
      {
        src: "/img/coffee-loading.jpg",
        alt: "Seedlings loaded for distribution",
        pos: "50% 50%",
      },
      {
        src: "/img/coffee-beneficiaries.jpg",
        alt: "Beneficiaries of Kahawa na Mama with their seedlings",
        pos: "50% 45%",
      },
      {
        src: "/img/coffee-distributing.jpg",
        alt: "Seedlings handed over one by one",
        pos: "50% 45%",
      },
      {
        src: "/img/coffee-handover-b.jpg",
        alt: "A distribution point in Nandi County",
        pos: "50% 45%",
      },
      {
        src: "/img/coffee-crowd.jpg",
        alt: "Women hold up their seedlings at a distribution point",
        pos: "50% 45%",
      },
      {
        src: "/img/coffee-planting.jpg",
        alt: "A planting ceremony on a farm in Nandi",
        pos: "50% 60%",
      },
      {
        src: "/img/coffee-planting-field.jpg",
        alt: "Planting a coffee seedling on the farm",
        pos: "50% 55%",
      },
    ],
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
      {
        status: "verified",
        value: "2026",
        label: "First harvest",
        source: HER_PAGE_DELIVERY,
        note:
          "The pilot beneficiaries began picking cherries this year, opening what she calls forty years or more of income from the same trees.",
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
      title: "A long-term coffee asset for women.",
      body:
        "The programme places certified coffee seedlings with women and persons with disability, supports training and registration, and follows the trees from planting to harvest. Its joint-registration approach puts both spouses on the coffee asset and payment record.",
    },
    partners: [
      { name: "NGAAF", role: "National Government Affirmative Action Fund: programme funding" },
      { name: "Agriculture and Food Authority", role: "Certification and agronomy standards" },
      { name: "Nandi County Government", role: "Extension services and coordination" },
      { name: "Baraka Agricultural College", role: "Nursery capacity and farmer training" },
    ],
    gaps: [
      {
        title: "The programme total and the 2026 plan",
        body:
          "A Mama na Kahawa graphic describes 100,000 seedlings in 2024, 500,000 in 2025 and 1,000,000 for 2026, with nearly 4,800 beneficiaries and projected income once the trees mature. The published total here is 650,000+; the office can clarify how the 2026 figure relates to the distribution programme.",
        tag: "Unconfirmed",
      },
      {
        title: "Seedling survival rate",
        body:
          "A survival count will show how many of the distributed trees are growing. The 90% figure circulating publicly is not yet a survey result.",
        tag: "Not measured",
      },
      {
        title: "Cherry volume and price",
        body:
          "The first beneficiaries began harvesting cherries in 2026. The next update will include the volume delivered and the price paid by cooperatives.",
        tag: "Not measured",
      },
      {
        title: "Joint registrations completed",
        body:
          "The next update will record households that have completed the joint registration.",
        tag: "Not measured",
      },
      {
        title: "Market and processing capacity",
        body:
          "The next update will describe the processing capacity and buyers available as the trees mature.",
        tag: "Open question",
      },
    ],
    sources: [KNA, MYGOV, REGISTER],
  },

  {
    slug: "elimu-ni-mwangaza",
    hero: "/img/scholars-walk.jpg",
    heroAlt: "Students supported through the Elimu Ni Mwangaza scholarship programme",
    gallery: [
      {
        src: "/img/elimu-service-a.jpg",
        alt: "The KCSE dedication service",
        pos: "50% 35%",
      },
      {
        src: "/img/elimu-candidates.jpg",
        alt: "Candidates at the dedication service",
        pos: "50% 35%",
      },
      {
        src: "/img/elimu-service-b.jpg",
        alt: "Students at the commitment service",
        pos: "50% 35%",
      },
      {
        src: "/img/elimu-ready.jpg",
        alt: "Preparations for the commitment service",
        pos: "50% 40%",
      },
      {
        src: "/img/elimu-preparation.jpg",
        alt: "Final preparations at Namgoi",
        pos: "50% 45%",
      },
      {
        src: "/img/scholars-line.jpg",
        alt: "Scholarship students in their school uniforms",
        pos: "50% 30%",
      },
      {
        src: "/img/elimu-banner.jpg",
        alt: "The Elimu Ni Mwangaza commitment service",
        pos: "50% 45%",
      },
    ],
    name: "Elimu Ni Mwangaza",
    oneLine:
      "Full scholarships that help students stay in school and plan for what comes next.",
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
          "The 206 are the pioneer cohort. The remaining students sit KCSE in later years.",
      },
      {
        status: "verified",
        value: "4,000",
        label: "Stated target, or 120 per ward",
        source: HER_PAGE,
        note:
          "An expansion target for a larger mandate.",
      },
      {
        status: "unconfirmed",
        label: "Launch year",
        note:
          "Public sources give 2022 and 2023. The office can confirm the programme start alongside the pioneer cohort's 2023 entry into Form One.",
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
      "The published breakdown sums to 411. The current total is 449; the remaining 38 students will be assigned in a future update.",
    distinctive: {
      title: "A four-year commitment to each scholar.",
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
          "The published breakdown sums to 411 and is undated. The 38 students added since will be assigned to a sub-county in a future update.",
        tag: "Unconfirmed",
      },
      {
        title: "Completion and results",
        body:
          "The pioneer cohort sits KCSE in 2026. Results will be added when they are released.",
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
    hero: "/img/boso-prize-a.jpg",
    heroAlt: "BOSO Supercup football in Nandi County",
    gallery: [
      {
        src: "/img/boso-women-prize.jpg",
        alt: "A women's champion collecting her prize money",
        pos: "50% 35%",
      },
      {
        src: "/img/boso-women-champions.jpg",
        alt: "Women champions at a ward final",
        pos: "50% 35%",
      },
      {
        src: "/img/boso-speaking.jpg",
        alt: "Cynthia Muge at a ward round",
        pos: "50% 35%",
      },
      {
        src: "/img/boso-ground.jpg",
        alt: "A ward crowd on the touchline",
        pos: "50% 50%",
      },
      {
        src: "/img/boso-celebration.jpg",
        alt: "Supporters celebrating a ward result",
        pos: "50% 40%",
      },
      {
        src: "/img/boso-seated.jpg",
        alt: "Spectators seated for a ward final",
        pos: "50% 50%",
      },
      {
        src: "/img/boso-quarter.jpg",
        alt: "A quarter final in play",
        pos: "50% 45%",
      },
      {
        src: "/img/boso-arrival.jpg",
        alt: "Arriving at a ward final",
        pos: "50% 30%",
      },
    ],
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
        name: "Sports kitting",
        period: "2024",
        quantity: "Team kit and equipment",
        beneficiaries: "Named teams",
        detail:
          "Playing kit and equipment handed to active teams, including Kabirer volleyball and football, before the wider tournament programme.",
      },
      {
        name: "Ward stage, mid-point",
        period: "July 2026",
        quantity: "642 of 798 played",
        beneficiaries: "22 of 30 wards",
        detail: "156 matches still to play at the time of the progress report.",
      },
      {
        name: "Ward stage, close",
        period: "August 2026",
        quantity: "846 matches",
        beneficiaries: "499 teams",
        detail:
          "All 30 wards, 83 playing fields, six constituencies. The final count exceeded the 798 originally scheduled.",
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
      title: "Rules applied at the ward stage.",
      body:
        "At Chepkunyuk, Seroi FC was disqualified for fielding an ineligible player. The matches were nullified, the affected teams received three points each, and the decision was published alongside the results.",
    },
    partners: [],
    gaps: [
      {
        title: "Livelihoods after the whistle",
        body:
          "Future updates will follow the opportunities and income that grow around the tournament.",
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
      HER_PAGE_DELIVERY,
    ],
  },

  {
    slug: "health-and-infrastructure",
    hero: "/img/ambulance-team.jpg",
    heroAlt: "Staff at Kabiemit Health Centre with the ambulance",
    gallery: [
      {
        src: "/img/boda-shade-lelmokwo.jpg",
        alt: "The boda boda shade at Lelmokwo Centre, funded by NGAAF",
        pos: "50% 50%",
      },
      {
        src: "/img/boda-shade-b.jpg",
        alt: "A boda boda shade in use",
        pos: "50% 50%",
      },
      {
        src: "/img/boda-shade-c.jpg",
        alt: "Riders under a completed shade",
        pos: "50% 50%",
      },
      {
        src: "/img/boda-shade-d.jpg",
        alt: "A shade at a trading centre",
        pos: "50% 50%",
      },
      {
        src: "/img/health-scanner.jpg",
        alt: "Diagnostic equipment at Kabiemit Health Centre",
        pos: "50% 40%",
      },
      {
        src: "/img/ambulance-speech.jpg",
        alt: "The ambulance handover at Kabiemit Health Centre",
        pos: "50% 35%",
      },
      {
        src: "/img/ambulance-inside.jpg",
        alt: "Inside the ambulance",
        pos: "50% 45%",
      },
      {
        src: "/img/budget-line.jpg",
        alt: "The two facilities on the national development estimates",
        pos: "50% 20%",
      },
      {
        src: "/img/ambulance-team.jpg",
        alt: "The ambulance crew at Kabiemit Health Centre",
        pos: "50% 40%",
      },
      {
        src: "/img/health-equipment.jpg",
        alt: "New diagnostic equipment delivered for Kabiemit",
        pos: "50% 45%",
      },
      {
        src: "/img/handover-gathering.jpg",
        alt: "Residents gather for a project handover",
        pos: "50% 45%",
      },
    ],
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
        label: "Fully kitted ambulance, Kabiemit Health Centre, Ndalat Ward",
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
        value: "4",
        label: "Boda boda shades: Lelmokwo, Lessos, Chebarbar, Soy-Sitet",
        source: HER_PAGE_DELIVERY,
        note:
          "Funded by NGAAF, as stated on the Lelmokwo shade itself.",
      },
      {
        status: "verified",
        value: "2",
        label: "Health facilities funded for construction",
        source: HER_PAGE_DELIVERY,
        note:
          "Chebirir in Aldai, then Kipkaren Salient in Mosop. Funding has been secured; construction dates will be added as they are published.",
      },
      {
        status: "verified",
        value: "8",
        label: "Units of diagnostic and maternity equipment, Kabiemit",
        source: LEGACY_PAGE,
        note:
          "A bedside X-ray machine, three protection screens, three aprons and an ultrasound, delivered July 2024.",
      },
      {
        status: "unmeasured",
        label: "Patients carried by the ambulance",
        note:
          "The facility keeps a patient log. A summary can be added in a future update.",
      },
    ],
    phases: [],
    coverage: [],
    distinctive: {
      title: "A proposal brought diagnostic equipment to Kabiemit.",
      body:
        "The office wrote the proposal that brought diagnostic and maternity equipment to Kabiemit through the Government of Japan. An Embassy Second Secretary visited the facility to verify the delivery.",
    },
    partners: [
      { name: "NGAAF", role: "National Government Affirmative Action Fund" },
      {
        name: "Embassy of Japan in Kenya",
        role: "Funded the Kabiemit diagnostic and maternity equipment, on a proposal from the office",
      },
      {
        name: "Lake Basin Development Authority",
        role: "Partner on the Kabolebo Primary borehole, which also serves Maraba Market",
      },
    ],
    gaps: [
      {
        title: "Water tanks and sanitary towels",
        body:
          "The office can add school water tanks and sanitary towel distribution when the delivery details are available.",
        tag: "Unconfirmed",
      },
      {
        title: "The full shade location list",
        body:
          "The public list names Lelmokwo, Lessos, Chebarbar and Soy-Sitet. An earlier office record also names Ndalat Centre and Kapkilel. The office can confirm whether those are additional locations.",
        tag: "Unconfirmed",
      },
      {
        title: "Construction at Chebirir and Kipkaren Salient",
        body:
          "Funding is secured. No start date, contractor or completion date has been published for either facility.",
        tag: "Open question",
      },
      {
        title: "Usage and maintenance",
        body:
          "Future updates will follow ambulance use and the condition of the boreholes over time.",
        tag: "Not measured",
      },
    ],
    sources: [
      HER_PAGE_DELIVERY,
      LEGACY_PAGE,
      {
        label: "Empowerment Programs",
        publisher: "cynthiamuge.com",
        date: "2026",
        url: "https://cynthiamuge.com/empowerment",
      },
    ],
  },
  {
    slug: "dairy-value-chain",
    hero: "/img/milk-coolers.jpg",
    heroAlt: "Bulk milk coolers arriving for Nandi dairy cooperatives",
    gallery: [
      {
        src: "/img/dairy-handover.jpg",
        alt: "The flagging-off at Nandi Dairy Cooperative Union",
        pos: "50% 45%",
      },
      {
        src: "/img/dairy-cooperative.jpg",
        alt: "Cooperative members at the handover",
        pos: "50% 40%",
      },
      {
        src: "/img/dairy-speaking.jpg",
        alt: "Cynthia Muge at the cooperative",
        pos: "50% 30%",
      },
      {
        src: "/img/milk-coolers.jpg",
        alt: "Milk coolers delivered for the dairy cooperative",
        pos: "50% 50%",
      },
    ],
    name: "Dairy Value Chain",
    oneLine:
      "Ten solar-powered bulk milk coolers placed with named Nandi cooperatives.",
    started: "2026",
    ended: "2026",
    status: "All ten delivered",
    lastUpdated: "30 August 2026",
    figures: [
      {
        status: "verified",
        value: "10",
        label: "Bulk milk coolers allocated to Nandi County",
        source: HER_PAGE_DAIRY,
        note:
          "Delivered in two tranches under the Livestock Value Chain Support Project.",
      },
      {
        status: "verified",
        value: "5",
        label: "Cooperatives named in the final tranche",
        source: HER_PAGE_DAIRY,
        note:
          "Kaptiltil, Chepterwai, Kipshangui, Tabolwa and Kosoiywo.",
      },
      {
        status: "unconfirmed",
        label: "Cooperatives in the first tranche",
        note:
          "Five earlier coolers complete the ten. The first five cooperative names will be added when the office confirms them.",
      },
      {
        status: "unmeasured",
        label: "Milk volume preserved",
        note:
          "No post-harvest loss figures have been collected before or after installation.",
      },
    ],
    phases: [
      {
        name: "First tranche",
        period: "2026",
        quantity: "5 coolers",
        beneficiaries: "Not named",
        detail: "Delivered before the flagging-off ceremony at Kabiyet.",
      },
      {
        name: "Final tranche",
        period: "August 2026",
        quantity: "5 coolers",
        beneficiaries: "5 cooperatives",
        detail:
          "Flagged off at Nandi Dairy Cooperative Union, Kabiyet. Kaptiltil, Chepterwai, Kipshangui, Tabolwa and Kosoiywo.",
      },
    ],
    coverage: [],
    distinctive: {
      title: "A county allocation for dairy cooperatives.",
      body:
        "The coolers came through the State Department for Livestock Development under the Livestock Value Chain Support Project. The office secured the county allocation and followed the delivery it had announced ten weeks earlier.",
    },
    partners: [
      {
        name: "State Department for Livestock Development",
        role: "Livestock Value Chain Support Project: funding and delivery",
      },
      {
        name: "Nandi Dairy Cooperative Union",
        role: "Distribution point, Kabiyet",
      },
    ],
    gaps: [
      {
        title: "The first five recipients",
        body:
          "Ten coolers were allocated and ten delivered. Only the final five cooperatives have been named.",
        tag: "Unconfirmed",
      },
      {
        title: "Farmer earnings",
        body:
          "The next update will follow whether cooling changes the price paid to farmers.",
        tag: "Not measured",
      },
    ],
    sources: [HER_PAGE_DAIRY],
  },
  {
    slug: "group-empowerment",
    hero: "/img/empowerment-group.jpg",
    heroAlt: "A group member addressing the empowerment meeting at Chepkemel",
    gallery: [
      {
        src: "/img/empowerment-cheque.jpg",
        alt: "A cheque handed to a registered group",
        pos: "50% 40%",
      },
      {
        src: "/img/empowerment-handover.jpg",
        alt: "A handover at Ol'lessos Centre",
        pos: "50% 40%",
      },
      {
        src: "/img/empowerment-speaker.jpg",
        alt: "A group member addressing the meeting",
        pos: "50% 30%",
      },
      {
        src: "/img/empowerment-meeting.jpg",
        alt: "A group representative speaking at Chepkemel",
        pos: "50% 25%",
      },
      {
        src: "/img/empowerment-group.jpg",
        alt: "A community group meeting under the tent",
        pos: "50% 40%",
      },
    ],
    name: "Group Empowerment",
    oneLine:
      "Cash grants to registered women and youth groups, paid at ward level.",
    started: "2023",
    status: "Ongoing",
    lastUpdated: "30 August 2026",
    figures: [
      {
        status: "verified",
        value: "100,000",
        label: "Shillings per group cheque",
        source: HER_PAGE_DELIVERY,
        note:
          "The amount handed to each group at the Chepkemel, Keben and Ol'lessos Centre handovers.",
      },
      {
        status: "verified",
        value: "18",
        label: "Groups named publicly to date",
        source: HER_PAGE_DELIVERY,
        note:
          "Across five handovers since 2024, in Tindiret, Ol'lessos, Kaptumo/Kaboi and Songhor/Soba wards.",
      },
      {
        status: "unconfirmed",
        label: "Groups funded in total",
        note:
          "The office holds the disbursement record. Only two handovers have been published.",
      },
      {
        status: "unmeasured",
        label: "Enterprises still trading",
        note:
          "No follow-up on what the grants were spent on, or which groups are still operating.",
      },
    ],
    phases: [
      {
        name: "Chepkemel DIP Grounds",
        period: "August 2026",
        quantity: "2 cheques",
        beneficiaries: "2 groups",
        detail:
          "Baraka 112 Women Group and Chepkemel Youth Group. Tindiret Ward, Tinderet.",
      },
      {
        name: "Keben",
        period: "August 2026",
        quantity: "3 cheques",
        beneficiaries: "3 groups",
        detail:
          "Kimolwet SH Group, Konyitkei Women Group and Sobentroba 2001 Youth Group. Ol'lessos Ward, Nandi Hills.",
      },
      {
        name: "Ol'lessos Centre",
        period: "August 2026",
        quantity: "3 cheques",
        beneficiaries: "3 groups",
        detail:
          "Ol'lessos Soko Women Group, Chomyet Women Group and Ilen Nee Inyee Self-Help Group. Ol'lessos Ward, Nandi Hills.",
      },
      {
        name: "Kaptumo/Kaboi Ward",
        period: "2024",
        quantity: "KSh 900,000",
        beneficiaries: "8 groups",
        detail:
          "Kapkeruge Youth, Kogilgei Youth, Aldai Kaptumo Kaboi CBO, Ebenezer Women, Kapkonuch Women, Ogilgei Sinendet Women, Zion Women, and Kaptumo Siriat Disability Group.",
      },
      {
        name: "Sokosik Primary School",
        period: "2024",
        quantity: "2 cheques",
        beneficiaries: "2 groups",
        detail:
          "Sokosik CBO and Sokosik General Grocery, with civic education on how the grants work. Songhor/Soba Ward, Tinderet.",
      },
    ],
    coverage: [],
    distinctive: {
      title: "Support reaches registered groups through their own accounts.",
      body:
        "The cheque goes to a registered group with its own officials and account. Women, young people and persons with disability receive support through organisations that keep records and answer to their members.",
    },
    partners: [
      { name: "NGAAF", role: "National Government Affirmative Action Fund" },
    ],
    gaps: [
      {
        title: "How many groups, and where",
        body:
          "Eighteen groups in four wards are named so far. The office can add the wider total and ward distribution as the register is compiled.",
        tag: "Unconfirmed",
      },
      {
        title: "What the money did",
        body:
          "The next update will follow what the grants bought and which enterprises are still operating.",
        tag: "Not measured",
      },
    ],
    sources: [HER_PAGE_DELIVERY, LEGACY_PAGE],
  },
];

export function getProgramme(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}

/** Source-backed figures used on the homepage. Keep them in content, not JSX. */
export const homeStats = [
  {
    value: "650,000+",
    label: "Certified coffee seedlings",
    note: "Distributed across all six sub-counties.",
    source: KNA,
  },
  {
    value: "449",
    label: "Students on full scholarship",
    note: "All cohorts. 206 sit KCSE this year.",
    source: HER_PAGE,
  },
  {
    value: "30 / 30",
    label: "Wards reached by BOSO",
    note: "846 matches in three months.",
    source: BOSO_REPORT,
  },
  {
    value: "KSh 2.7m",
    label: "Ward-level prize money",
    note: "Men's and women's competitions.",
    source: BOSO_REPORT,
  },
];

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
    body:
      "Access between the wards, the markets and the tea and coffee collection points.",
    detail:
      "Good roads connect homes, markets, collection points, and the services that keep local enterprise moving. She lists the road network first because every other priority depends on that connection.",
    already:
      "Boda boda shades at Lelmokwo, Lessos, Chebarbar and Soy-Sitet, for the riders who carry most of that traffic.",
    question:
      "A costed sequence of roads: routes, order, and cost per kilometre.",
    source: HER_PAGE_DELIVERY,
  },
  {
    n: "02",
    name: "Education",
    body:
      "Scholarships, the schools that hold the students already sponsored, and foundational literacy at ECDE.",
    detail:
      "Her stated target is 4,000 students on full scholarship, or a minimum of 120 per ward. She has also called foundational literacy in ECDE a non-negotiable priority for Nandi's children.",
    already:
      "449 students on full scholarship across all cohorts, 206 of them sitting KCSE this year.",
    question:
      "How an expanded resource envelope can support the stated target.",
    source: HER_PAGE,
  },
  {
    n: "03",
    name: "Health",
    body:
      "Facilities within reach of the townships that have none, and the equipment to make them work.",
    detail:
      "Kipkaren Salient had no public health facility within five kilometres. The Kabiemit proposal pairs facilities with diagnostic equipment so care can begin with the tools staff need.",
    already:
      "Two facilities carried on the national development estimates at KSh 20m each, an ambulance and eight units of diagnostic and maternity equipment at Kabiemit.",
    question:
      "The staffing and running costs that keep facilities open.",
    source: HER_PAGE_DELIVERY,
  },
  {
    n: "04",
    name: "Water",
    body: "Boreholes, storage and supply across the six sub-counties.",
    detail:
      "Reliable water is part of the daily rhythm of a household, a school, and a market. The priority is to extend supply and keep each point working over time.",
    already:
      "Boreholes at Tulwo Girls High and Kabolebo Primary, the second with Lake Basin Development Authority, serving the school, the community and Maraba Market.",
    question:
      "The yield and upkeep of the existing boreholes.",
    source: HER_PAGE_DELIVERY,
  },
  {
    n: "05",
    name: "Wealth Creation",
    body:
      "Coffee, dairy, tea and the enterprises run by women, young people and persons with disability.",
    detail:
      "Her approach links coffee, dairy, tea, and group enterprise to household income over time. Tea remains an important future priority for the county's farming communities.",
    already:
      "650,000 coffee seedlings, the first harvest in 2026, ten milk coolers, and eighteen groups funded at KSh 100,000 each.",
    question:
      "A county-wide approach to tea, the crop at the centre of many Nandi households.",
    source: HER_PAGE_DELIVERY,
  },
  {
    n: "06",
    name: "Governance",
    body: "How the county budget is set, spent and accounted for.",
    detail:
      "Nandi spent KSh 10.2bn in FY 2024/25 at 98% absorption. The next responsibility is to understand how the county can protect essential services while growing development investment.",
    already:
      "Public participation forums before the budget year, and a tournament that applied its published rules and shared the result.",
    question:
      "How the development share can grow while essential county services remain strong.",
    source: COB,
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

/**
 * The thirty wards of Nandi, in the order she listed them when reporting
 * that the BOSO ward series had reached all of them.
 */
export const wards = [
  "Kabiyet", "Kabisaga", "Chepterwai", "Kipkaren", "Kurgung/Surungai",
  "Ndalat", "Sang'alo/Kebulonik", "Chemundu/Kapng'etuny", "Kosirai",
  "Lelmokwo/Ngechek", "Kaptel/Kamoiywo", "Kiptuya", "Kilibwoni",
  "Kapkangani", "Chepkumia", "Kapsabet", "Tinderet", "Songhor/Soba",
  "Chemelil/Chemase", "Kapsimotwo", "Nandi Hills", "Chepkunyuk",
  "Ol'lessos", "Kapchorua", "Kabwareng", "Terik", "Kemeloi/Maraba",
  "Kobujoi", "Kaptumo/Kaboi", "Koyo/Ndurio",
];

/** The ward stage of the BOSO Supercup, narrowing to the sub-county round. */
export const bosoFunnel = [
  { value: 846, display: "846", label: "Matches played" },
  { value: 499, display: "499", label: "Teams registered" },
  { value: 120, display: "120", label: "Teams through to sub-county" },
  { value: 83, display: "83", label: "Playing fields used" },
  { value: 30, display: "30", label: "Wards reached" },
  { value: 6, display: "6", label: "Constituencies" },
];

/** Headline figures for the ward-stage ring on the homepage. */
export const bosoWardStats = [
  { value: "846", label: "Matches played" },
  { value: "499", label: "Teams registered" },
  { value: "83", label: "Playing fields used" },
  { value: "KSh 2.7m", label: "Ward-level prize money" },
];

/**
 * Health facilities carried in the national development estimates.
 * Read off the printed vote she published.
 */
export const healthVote = {
  vote: "Vote 1082, State Department for Medical Services",
  table: "Development Expenditure Estimates 2026/2027",
  rows: [
    { k: "Kapsengre Dispensary, approved 2025/26", v: "KSh 20m" },
    { k: "Salient Kipkaren Health Centre, approved 2025/26", v: "KSh 20m" },
    { k: "Salient Kipkaren Health Centre, 2026/27", v: "KSh 20m" },
  ],
  source: {
    label: "Vote 1082 development estimates, as published by the office",
    publisher: "Cynthia Muge, official Facebook page",
    date: "August 2026",
    url: "https://www.facebook.com/profile.php?id=100083334182719",
  } as Source,
};

/**
 * Work in the National Assembly, and positions taken on public questions.
 * Sourced from her own posts. The site includes both her programme work and
 * her service as a legislator.
 */
export const parliament = {
  committees: [
    "Implementation",
    "Health",
    "Sports, Youth and Social Welfare (County Assembly, 2017 to 2022, as chair)",
  ],
  items: [
    {
      title: "Social Health Insurance Fund tariffs",
      year: "2024",
      body:
        "At the National Assembly's Health Committee, she took part in reviewing the Social Health Insurance Fund tariffs and benefit package, including primary healthcare, maternity, emergency care, critical care and chronic disease. She invited constituents to share their views while the legislation was being drafted.",
      tag: "Committee",
    },
    {
      title: "Karebe Goldmine, Kibisem",
      year: "2024",
      body:
        "On the expansion of mining at Karebe, alongside the Cabinet Secretary for Mining: \u201cWhile we do not object to the expansion of the mining areas, we insist that the affected residents must be compensated adequately. Moreover, the extent of CSR activities by the company should be proportionate to the value of the company's revenue from the site.\u201d",
      tag: "Position",
    },
    {
      title: "Koitalel Samoei University and Samoei Boys High School",
      year: "2024",
      body:
        "Following a public conversation in Nandi Hills town, she committed to helping put the legal instruments in place for Koitalel Samoei University and Samoei Boys High School to operate well together.",
      tag: "Commitment",
    },
    {
      title: "Early childhood literacy",
      year: "2026",
      body:
        "After reading compositions by two grade 7 pupils, she described investment in foundational literacy at ECDE as a non-negotiable priority. Early childhood education is part of the county's Education responsibility.",
      tag: "Position",
    },
    {
      title: "Mashujaa Day 2026",
      year: "2026",
      body:
        "Hosted leaders from Nandi, Elgeyo Marakwet and Uasin Gishu on the national celebrations to be held in Eldoret on 20 October 2026, and met the President on the same. Kipchoge Stadium in Kapsabet is among the venues due for completion by year end.",
      tag: "Convening",
    },
  ],
  source: {
    label: "Posts by the office, National Assembly work and public engagements",
    publisher: "Cynthia Muge, Facebook",
    date: "2024 to 2026",
  } as Source,
};
