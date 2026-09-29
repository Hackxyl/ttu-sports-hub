export type MatchStatus =
  | "SCHEDULED"
  | "POSTPONED"
  | "CANCELLED"
  | "COMPLETED";

export type Fixture = {
  id: string;
  sport: string;
  sportSlug: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  status: MatchStatus;
};

export type MatchResult = {
  id: string;
  fixtureId: string;
  sport: string;
  sportSlug: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | string;
  awayScore: number | string;
  date: string;
  venue: string;
  resultLabel: "WIN" | "LOSS" | "DRAW" | "COMPLETED";
};

export const fixtures: Fixture[] = [
  {
    id: "vb-001",
    sport: "Volleyball",
    sportSlug: "volleyball",
    competition: "University League",
    homeTeam: "TTU",
    awayTeam: "VVC",
    date: "27 Sep 2026",
    time: "2:00 PM",
    venue: "TTU Sports Grounds",
    status: "SCHEDULED",
  },
  {
    id: "vb-002",
    sport: "Volleyball",
    sportSlug: "volleyball",
    competition: "University League",
    homeTeam: "TTU",
    awayTeam: "TTNP",
    date: "11 Oct 2026",
    time: "2:00 PM",
    venue: "TTU Sports Grounds",
    status: "SCHEDULED",
  },
  {
    id: "vb-003",
    sport: "Volleyball",
    sportSlug: "volleyball",
    competition: "University League",
    homeTeam: "TTU",
    awayTeam: "Apex",
    date: "25 Oct 2026",
    time: "2:00 PM",
    venue: "TTU Sports Grounds",
    status: "SCHEDULED",
  },
  {
    id: "fb-001",
    sport: "Football",
    sportSlug: "football",
    competition: "University League",
    homeTeam: "TTU",
    awayTeam: "University United",
    date: "04 Oct 2026",
    time: "3:30 PM",
    venue: "TTU Main Stadium",
    status: "SCHEDULED",
  },
  {
    id: "bb-001",
    sport: "Basketball",
    sportSlug: "basketball",
    competition: "University Championship",
    homeTeam: "TTU",
    awayTeam: "Coastal Lions",
    date: "10 Oct 2026",
    time: "4:00 PM",
    venue: "TTU Indoor Arena",
    status: "SCHEDULED",
  },
  {
    id: "at-001",
    sport: "Athletics",
    sportSlug: "athletics",
    competition: "Inter-University Meet",
    homeTeam: "TTU Athletics",
    awayTeam: "Open Meet",
    date: "17 Oct 2026",
    time: "8:00 AM",
    venue: "TTU Athletics Track",
    status: "SCHEDULED",
  },
];

export const results: MatchResult[] = [
  {
    id: "res-001",
    fixtureId: "old-vb-001",
    sport: "Volleyball",
    sportSlug: "volleyball",
    competition: "University League",
    homeTeam: "TTU",
    awayTeam: "VVC",
    homeScore: 3,
    awayScore: 1,
    date: "13 Sep 2026",
    venue: "TTU Sports Grounds",
    resultLabel: "WIN",
  },
  {
    id: "res-002",
    fixtureId: "old-vb-002",
    sport: "Volleyball",
    sportSlug: "volleyball",
    competition: "University League",
    homeTeam: "TTU",
    awayTeam: "Apex",
    homeScore: 2,
    awayScore: 3,
    date: "30 Aug 2026",
    venue: "Apex Arena",
    resultLabel: "LOSS",
  },
  {
    id: "res-003",
    fixtureId: "old-fb-001",
    sport: "Football",
    sportSlug: "football",
    competition: "University League",
    homeTeam: "TTU",
    awayTeam: "University United",
    homeScore: 2,
    awayScore: 2,
    date: "20 Sep 2026",
    venue: "TTU Main Stadium",
    resultLabel: "DRAW",
  },
  {
    id: "res-004",
    fixtureId: "old-bb-001",
    sport: "Basketball",
    sportSlug: "basketball",
    competition: "University Championship",
    homeTeam: "TTU",
    awayTeam: "Coastal Lions",
    homeScore: 68,
    awayScore: 61,
    date: "12 Sep 2026",
    venue: "TTU Indoor Arena",
    resultLabel: "WIN",
  },
];

export const sportOptions = [
  "All Sports",
  ...Array.from(new Set(fixtures.map((fixture) => fixture.sport))),
];

export const resultSportOptions = [
  "All Sports",
  ...Array.from(new Set(results.map((result) => result.sport))),
];