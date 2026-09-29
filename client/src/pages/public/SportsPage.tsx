import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Dumbbell,
  Medal,
  Search,
  Trophy,
  Users,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import { sports, sportCategories } from "../../data/sports";
import "./SportsPage.css";

const sportIcons = {
  "Team Sport": Trophy,
  "Individual Sport": Medal,
  "Aquatic Sport": Waves,
  "Racquet Sport": Activity,
  "Mind Sport": Dumbbell,
} as const;

function SportsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredSports = useMemo(() => {
    const query = search.trim().toLowerCase();

    return sports.filter((sport) => {
      const matchesCategory =
        category === "All" || sport.category === category;

      const matchesSearch =
        !query ||
        sport.name.toLowerCase().includes(query) ||
        sport.description.toLowerCase().includes(query) ||
        sport.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="sports-page">
      <section className="sports-page-hero">
        <div className="sports-page-hero-grid" />

        <div className="page-container sports-page-hero-content">
          <div className="sports-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Sports</span>
          </div>

          <span className="section-kicker sports-kicker">
            TTU SPORTS & ATHLETICS
          </span>

          <h1>
            Find your
            <span> game.</span>
          </h1>

          <p>
            Explore sports, teams and opportunities across the Taita Taveta
            University sporting community.
          </p>

          <div className="sports-hero-stat">
            <strong>20+</strong>
            <span>disciplines at TTU</span>
          </div>
        </div>
      </section>

      <section className="sports-directory-section">
        <div className="page-container">
          <div className="sports-toolbar">
            <div>
              <span className="section-kicker">SPORTS DIRECTORY</span>
              <h2>Explore the sports community.</h2>
            </div>

            <div className="sports-search">
              <Search size={18} />
              <input
                type="search"
                value={search}
                placeholder="Search sports..."
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search sports"
              />
            </div>
          </div>

          <div className="sports-filters">
            {sportCategories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? "is-active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="sports-results-meta">
            <span>
              Showing <strong>{filteredSports.length}</strong> sports
            </span>

            {(search || category !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredSports.length > 0 ? (
            <div className="directory-grid">
              {filteredSports.map((sport, index) => {
                const Icon = sportIcons[sport.category];

                return (
                  <article className="directory-card" key={sport.id}>
                    <div className="directory-card-top">
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="directory-card-icon">
                        <Icon size={21} />
                      </div>
                    </div>

                    <div className="directory-card-body">
                      <span className="directory-card-category">
                        {sport.category}
                      </span>

                      <h3>{sport.name}</h3>

                      <p>{sport.description}</p>
                    </div>

                    <div className="directory-card-meta">
                      <div>
                        <Users size={14} />
                        <span>{sport.participation}</span>
                      </div>

                      <span className="directory-status">
                        {sport.status}
                      </span>
                    </div>

                    <div className="directory-card-actions">
                      <Link
                        to={`/sports/${sport.slug}`}
                        className="sport-view-link"
                      >
                        View Sport
                        <ArrowRight size={16} />
                      </Link>

                      <Link
                        to={`/login?redirect=/sports/${sport.slug}`}
                        className="sport-join-link"
                      >
                        Join
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="sports-empty-state">
              <div>
                <Search size={26} />
              </div>
              <h3>No sports found</h3>
              <p>
                Try another search term or remove the current filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default SportsPage;