export type AnnouncementScope = "GENERAL" | "SPORT";

export type Announcement = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  scope: AnnouncementScope;
  sport?: string;
  sportSlug?: string;
  category: "Registration" | "Fixture" | "Training" | "Competition" | "General";
  date: string;
  time?: string;
  featured?: boolean;
  author: string;
};

export const announcements: Announcement[] = [
  {
    id: "ann-001",
    title: "Sports Membership Registration Is Now Open",
    excerpt:
      "Students can now register their interest and apply to become members of their preferred university sports discipline.",
    content:
      "TTU students can submit their sports membership interest through the Sports Management System. Select your preferred discipline, complete the application and monitor its approval status from your member account.",
    scope: "GENERAL",
    category: "Registration",
    date: "2026-09-26",
    time: "09:00 AM",
    featured: true,
    author: "TTU Sports Department",
  },
  {
    id: "ann-002",
    title: "Upcoming Volleyball Fixtures",
    excerpt:
      "The next volleyball match cycle is scheduled as part of the university's inter-team competition programme.",
    content:
      "Volleyball teams should review the upcoming fixture schedule and report to the designated venue before the scheduled match time. Team captains should ensure registered players are available.",
    scope: "SPORT",
    sport: "Volleyball",
    sportSlug: "volleyball",
    category: "Fixture",
    date: "2026-09-26",
    time: "10:00 AM",
    featured: true,
    author: "Volleyball Sports Administration",
  },
  {
    id: "ann-003",
    title: "Volleyball Matchday — 27 September",
    excerpt:
      "Matchday preparations are underway for the volleyball fixtures hosted at Taita Taveta University.",
    content:
      "The volleyball programme continues on Sunday, 27 September 2026. All participating teams should confirm their squad availability and observe the official matchday reporting requirements.",
    scope: "SPORT",
    sport: "Volleyball",
    sportSlug: "volleyball",
    category: "Competition",
    date: "2026-09-25",
    time: "04:00 PM",
    author: "Volleyball Sports Administration",
  },
  {
    id: "ann-004",
    title: "Football Training Programme Update",
    excerpt:
      "Football members should check the latest training arrangements through the sports portal.",
    content:
      "The football programme has published an updated training schedule. Players should monitor the training section of the platform for session times, venues and attendance requirements.",
    scope: "SPORT",
    sport: "Football",
    sportSlug: "football",
    category: "Training",
    date: "2026-09-24",
    time: "02:30 PM",
    author: "Football Sports Administration",
  },
  {
    id: "ann-005",
    title: "Basketball Team Activities",
    excerpt:
      "Basketball members are encouraged to keep their profiles and membership information up to date.",
    content:
      "Basketball players should ensure that their membership information remains accurate and review all upcoming activities published by the basketball administration.",
    scope: "SPORT",
    sport: "Basketball",
    sportSlug: "basketball",
    category: "General",
    date: "2026-09-23",
    time: "11:15 AM",
    author: "Basketball Sports Administration",
  },
  {
    id: "ann-006",
    title: "Athletics Programme Registration",
    excerpt:
      "Athletics members can follow programme updates and future competition notices through the platform.",
    content:
      "Athletes are encouraged to maintain their profiles and monitor athletics announcements for registration windows, training information and competition notices.",
    scope: "SPORT",
    sport: "Athletics",
    sportSlug: "athletics",
    category: "Registration",
    date: "2026-09-22",
    time: "01:00 PM",
    author: "Athletics Sports Administration",
  },
  {
    id: "ann-007",
    title: "Sports Management Portal",
    excerpt:
      "The university sports platform brings membership, teams, fixtures, results and announcements into one system.",
    content:
      "The TTU Sports Management System is being developed as a central digital platform for managing university sports activities and communicating important information to students, teams and sports administrators.",
    scope: "GENERAL",
    category: "General",
    date: "2026-09-20",
    time: "08:30 AM",
    author: "TTU Sports Department",
  },
];

export const announcementSportOptions = [
  "All Sports",
  ...Array.from(
    new Set(
      announcements
        .filter((announcement) => announcement.scope === "SPORT")
        .map((announcement) => announcement.sport)
        .filter((sport): sport is string => Boolean(sport)),
    ),
  ),
];