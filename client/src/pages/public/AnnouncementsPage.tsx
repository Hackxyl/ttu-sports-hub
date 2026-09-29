import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Megaphone,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  announcementSportOptions,
  announcements,
} from "../../data/announcements";

import "./AnnouncementsPage.css";

type AnnouncementFilter = "ALL" | "GENERAL" | "SPORT";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function AnnouncementsPage() {
  const [scopeFilter, setScopeFilter] =
    useState<AnnouncementFilter>("ALL");

  const [sportFilter, setSportFilter] = useState("All Sports");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredAnnouncements = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return announcements.filter((announcement) => {
      const matchesScope =
        scopeFilter === "ALL" ||
        (scopeFilter === "GENERAL" &&
          announcement.scope === "GENERAL") ||
        (scopeFilter === "SPORT" &&
          announcement.scope === "SPORT");

      const matchesSport =
        sportFilter === "All Sports" ||
        announcement.sport === sportFilter;

      const matchesSearch =
        !query ||
        announcement.title.toLowerCase().includes(query) ||
        announcement.excerpt.toLowerCase().includes(query) ||
        announcement.category.toLowerCase().includes(query) ||
        announcement.sport?.toLowerCase().includes(query);

      return matchesScope && matchesSport && matchesSearch;
    });
  }, [scopeFilter, sportFilter, searchQuery]);

  const featuredAnnouncement =
    filteredAnnouncements.find((announcement) => announcement.featured) ??
    filteredAnnouncements[0];

  const remainingAnnouncements = featuredAnnouncement
    ? filteredAnnouncements.filter(
        (announcement) => announcement.id !== featuredAnnouncement.id,
      )
    : [];

  return (
    <main className="announcements-page">
      <section className="announcements-hero">
        <div className="announcements-hero-grid" />

        <div className="container announcements-hero-content">
          <div className="announcements-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Announcements</span>
          </div>

          <div className="announcements-kicker">
            <Megaphone size={15} />
            TTU SPORTS COMMUNICATIONS
          </div>

          <h1>
            Sports
            <br />
            <span>Announcements.</span>
          </h1>

          <p>
            Stay informed about registrations, fixtures, training,
            competitions and important updates across Taita Taveta
            University sports.
          </p>

          <div className="announcements-hero-meta">
            <div>
              <strong>{announcements.length}</strong>
              <span>Published Updates</span>
            </div>

            <div>
              <strong>{announcementSportOptions.length - 1}</strong>
              <span>Sports With Updates</span>
            </div>
          </div>
        </div>
      </section>

      <section className="announcements-directory-section">
        <div className="container">
          <div className="announcements-toolbar">
            <div>
              <span className="section-kicker">NEWS & UPDATES</span>
              <h2>Latest announcements</h2>
              <p>
                Public information is available to everyone. Sport-specific
                updates can be filtered below.
              </p>
            </div>

            <div className="announcements-search">
              <Search size={17} />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search announcements..."
                aria-label="Search announcements"
              />
            </div>
          </div>

          <div className="announcements-filter-panel">
            <div className="announcement-scope-filters">
              <button
                type="button"
                className={scopeFilter === "ALL" ? "is-active" : ""}
                onClick={() => setScopeFilter("ALL")}
              >
                All Updates
              </button>

              <button
                type="button"
                className={scopeFilter === "GENERAL" ? "is-active" : ""}
                onClick={() => setScopeFilter("GENERAL")}
              >
                General
              </button>

              <button
                type="button"
                className={scopeFilter === "SPORT" ? "is-active" : ""}
                onClick={() => setScopeFilter("SPORT")}
              >
                Sport Updates
              </button>
            </div>

            <div className="announcement-sport-filters">
              {announcementSportOptions.map((sport) => (
                <button
                  key={sport}
                  type="button"
                  className={sportFilter === sport ? "is-active" : ""}
                  onClick={() => setSportFilter(sport)}
                >
                  {sport}
                </button>
              ))}
            </div>
          </div>

          <div className="announcements-results-meta">
            <span>
              Showing{" "}
              <strong>{filteredAnnouncements.length}</strong> announcement
              {filteredAnnouncements.length === 1 ? "" : "s"}
            </span>

            <span>
              {sportFilter !== "All Sports"
                ? `Filtered by ${sportFilter}`
                : "All sports"}
            </span>
          </div>

          {featuredAnnouncement ? (
            <article className="featured-announcement">
              <div className="featured-announcement-content">
                <div className="announcement-topline">
                  <span className="announcement-label">
                    {featuredAnnouncement.scope === "GENERAL"
                      ? "GENERAL UPDATE"
                      : featuredAnnouncement.sport?.toUpperCase()}
                  </span>

                  <span className="announcement-category">
                    {featuredAnnouncement.category}
                  </span>
                </div>

                <h3>{featuredAnnouncement.title}</h3>

                <p>{featuredAnnouncement.excerpt}</p>

                <div className="announcement-meta-row">
                  <span>
                    <CalendarDays size={15} />
                    {formatDate(featuredAnnouncement.date)}
                  </span>

                  {featuredAnnouncement.time && (
                    <span>
                      <Clock3 size={15} />
                      {featuredAnnouncement.time}
                    </span>
                  )}
                </div>

                <div className="featured-announcement-footer">
                  <span>
                    Published by{" "}
                    <strong>{featuredAnnouncement.author}</strong>
                  </span>

                  <button type="button" className="announcement-read-link">
                    Read announcement
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="featured-announcement-mark">
                <Megaphone size={48} strokeWidth={1.5} />
                <span>01</span>
              </div>
            </article>
          ) : null}

          {remainingAnnouncements.length > 0 ? (
            <div className="announcements-grid">
              {remainingAnnouncements.map((announcement, index) => (
                <article
                  key={announcement.id}
                  className="announcement-card"
                >
                  <div className="announcement-card-head">
                    <span className="announcement-number">
                      {String(index + 2).padStart(2, "0")}
                    </span>

                    <span className="announcement-card-icon">
                      <Megaphone size={17} />
                    </span>
                  </div>

                  <div className="announcement-card-body">
                    <div className="announcement-card-tags">
                      <span>{announcement.category}</span>

                      {announcement.scope === "SPORT" &&
                        announcement.sport && (
                          <span>{announcement.sport}</span>
                        )}
                    </div>

                    <h3>{announcement.title}</h3>

                    <p>{announcement.excerpt}</p>
                  </div>

                  <div className="announcement-card-footer">
                    <div className="announcement-card-date">
                      <CalendarDays size={14} />
                      {formatDate(announcement.date)}
                    </div>

                    <button
                      type="button"
                      className="announcement-card-link"
                    >
                      View
                      <ArrowUpRightIcon />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : !featuredAnnouncement ? (
            <div className="announcements-empty">
              <div className="announcements-empty-icon">
                <Search size={25} />
              </div>

              <h3>No announcements found</h3>

              <p>
                Try a different search term or remove one of the active
                filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setScopeFilter("ALL");
                  setSportFilter("All Sports");
                  setSearchQuery("");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : null}

          <div className="announcements-bottom-cta">
            <div>
              <span className="section-kicker">EXPLORE MORE</span>
              <h3>Looking for a specific sport?</h3>
              <p>
                Explore every available sports discipline and view its teams,
                fixtures and latest updates.
              </p>
            </div>

            <Link to="/sports" className="announcements-cta-link">
              Explore Sports
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={15} />;
}

export default AnnouncementsPage;