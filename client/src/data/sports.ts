export type SportCategory =
  | "Team Sport"
  | "Individual Sport"
  | "Aquatic Sport"
  | "Racquet Sport"
  | "Mind Sport";

export type Sport = {
  id: string;
  name: string;
  slug: string;
  category: SportCategory;
  description: string;
  participation: string;
  teams: string[];
  status: "ACTIVE" | "COMING_SOON";
};
export const sports: Sport[] = [
  {
    id: "football",
    name: "Football",
    slug: "football",
    category: "Team Sport",
    description:
      "Competitive university football with structured teams, training and match activities.",
    participation: "Men & Women",
    teams: ["Men's Football", "Women's Football"],
    status: "ACTIVE",
  },
  {
    id: "basketball",
    name: "Basketball",
    slug: "basketball",
    category: "Team Sport",
    description:
      "Fast-paced basketball focused on team development, competition and performance.",
    participation: "Men & Women",
    teams: ["Men's Basketball", "Women's Basketball"],
    status: "ACTIVE",
  },
  {
    id: "athletics",
    name: "Athletics",
    slug: "athletics",
    category: "Individual Sport",
    description:
      "Track and field participation for students competing across athletics disciplines.",
    participation: "Open Participation",
    teams: ["Athletics Team"],
    status: "ACTIVE",
  },
  {
    id: "volleyball",
    name: "Volleyball",
    slug: "volleyball",
    category: "Team Sport",
    description:
      "Indoor and competitive volleyball built around teamwork, discipline and performance.",
    participation: "Men & Women",
    teams: ["Men's Volleyball", "Ladies' Volleyball"],
    status: "ACTIVE",
  },
  {
    id: "swimming",
    name: "Swimming",
    slug: "swimming",
    category: "Aquatic Sport",
    description:
      "Swimming development and competition across university sporting activities.",
    participation: "Open Participation",
    teams: ["Swimming Team"],
    status: "ACTIVE",
  },
  {
    id: "tennis",
    name: "Tennis",
    slug: "tennis",
    category: "Racquet Sport",
    description:
      "Competitive tennis with opportunities for individual development and tournaments.",
    participation: "Open Participation",
    teams: ["Tennis Team"],
    status: "ACTIVE",
  },

  // Initial UI catalogue.
  // The complete official TTU sports register will eventually come
  // from the backend database rather than being hard-coded here.
  {
    id: "rugby",
    name: "Rugby",
    slug: "rugby",
    category: "Team Sport",
    description:
      "Team-based rugby focused on fitness, discipline, tactical development and competition.",
    participation: "Open Participation",
    teams: ["Rugby Team"],
    status: "ACTIVE",
  },
  {
    id: "handball",
    name: "Handball",
    slug: "handball",
    category: "Team Sport",
    description:
      "Competitive handball with structured training and university-level match play.",
    participation: "Men & Women",
    teams: ["Men's Handball", "Women's Handball"],
    status: "ACTIVE",
  },
  {
    id: "netball",
    name: "Netball",
    slug: "netball",
    category: "Team Sport",
    description:
      "Team competition built around movement, passing, strategy and coordinated play.",
    participation: "Women",
    teams: ["Netball Team"],
    status: "ACTIVE",
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    slug: "table-tennis",
    category: "Racquet Sport",
    description:
      "Precision, speed and strategy through individual and doubles competition.",
    participation: "Open Participation",
    teams: ["Table Tennis Team"],
    status: "ACTIVE",
  },
  {
    id: "badminton",
    name: "Badminton",
    slug: "badminton",
    category: "Racquet Sport",
    description:
      "Individual and doubles competition with structured training and match play.",
    participation: "Open Participation",
    teams: ["Badminton Team"],
    status: "ACTIVE",
  },
  {
    id: "chess",
    name: "Chess",
    slug: "chess",
    category: "Mind Sport",
    description:
      "Strategic competition, tournaments and player development through chess.",
    participation: "Open Participation",
    teams: ["Chess Team"],
    status: "ACTIVE",
  },
];

export const sportCategories = [
  "All",
  ...Array.from(new Set(sports.map((sport) => sport.category))),
];