import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Menu,
  MapPin,
  Medal,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import { sports } from "../../data/sports";
import { fixtures, results } from "../../data/matches";

import "./HomePage.css";

type HomeAnnouncement = {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
};

const announcements: HomeAnnouncement[] = [
  {
    id: "announcement-001",
    category: "GENERAL",
    date: "26 Sep 2026",
    title: "2026/2027 Sports Registration is Open",
    excerpt:
      "Students can now discover TTU sports and register their interest in becoming part of the university sporting community.",
  },
  {
    id: "announcement-002",
    category: "VOLLEYBALL",
    date: "26 Sep 2026",
    title: "Volleyball Matchday Information",
    excerpt:
      "Get the latest information on upcoming volleyball fixtures, preparation and matchday activities.",
  },
  {
    id: "announcement-003",
    category: "FOOTBALL",
    date: "24 Sep 2026",
    title: "Football Training Schedule",
    excerpt:
      "The latest training and team preparation information is now available through TTU Sports.",
  },
];

const sportIconMap = {
  "Team Sport": Trophy,
  "Individual Sport": Medal,
  "Aquatic Sport": Activity,
  "Racquet Sport": Activity,
  "Mind Sport": Trophy,
} as const;

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nextFixture = fixtures[0];
  const latestResult = results[0];

  const featuredSports = sports.slice(0, 8);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="home-page">
      {/* =========================
          NAVBAR
      ========================= */}
      <header className="home-header">
        <div className="home-container home-navbar">
          <Link
            to="/"
            className="home-brand"
            aria-label="TTU Sports home"
            onClick={closeMenu}
          >
            <div className="home-brand-mark">
              <img
                src="/images/logo/ttu-logo.png"
                alt="Taita Taveta University"
              />
              <span>TTU</span>
            </div>

            <div className="home-brand-text">
              <strong>TTU SPORTS</strong>
              <span>Sports & Athletics</span>
            </div>
          </Link>

          <nav className={`home-nav ${menuOpen ? "is-open" : ""}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/sports" onClick={closeMenu}>
              Sports
            </Link>

            <Link to="/fixtures" onClick={closeMenu}>
              Fixtures
            </Link>

            <Link to="/results" onClick={closeMenu}>
              Results
            </Link>

            <a href="#announcements" onClick={closeMenu}>
              News
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </nav>

          <div className="home-header-actions">
            <a href="#join" className="home-signin">
              Sign in
            </a>

            <a href="#join" className="home-header-button">
              Join a Sport
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              className="home-menu-button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* =========================
            HERO
        ========================= */}
        <section className="home-hero">
          <div className="home-hero-noise" />
          <div className="home-hero-glow home-hero-glow-left" />
          <div className="home-hero-glow home-hero-glow-right" />

          <div className="home-container home-hero-layout">
            <div className="home-hero-copy">
              <div className="home-overline">
                <span className="home-overline-line" />
                TAITA TAVETA UNIVERSITY
                <span className="home-overline-dot">SPORTS & ATHLETICS</span>
              </div>

              <h1>
                The home of
                <br />
                <em>TTU sport.</em>
              </h1>

              <p>
                Discover teams, follow matchdays, stay informed and become
                part of the sporting community representing Taita Taveta
                University.
              </p>

              <div className="home-hero-actions">
                <Link to="/sports" className="home-primary-button">
                  Explore Sports
                  <ArrowRight size={18} />
                </Link>

                <Link to="/fixtures" className="home-outline-button">
                  Match Centre
                  <ChevronRight size={18} />
                </Link>
              </div>

              <div className="home-hero-metrics">
                <div className="home-metric">
                  <strong>01</strong>
                  <span>Connected sports platform</span>
                </div>

                <div className="home-metric-divider" />

                <div className="home-metric">
                  <strong>24/7</strong>
                  <span>Access to sports information</span>
                </div>

                <div className="home-metric-divider" />

                <div className="home-metric">
                  <strong>2026/27</strong>
                  <span>Current sports season</span>
                </div>
              </div>
            </div>

            <div className="home-hero-feature">
              <div className="home-feature-backdrop" />

              <div className="home-feature-card">
                <div className="home-feature-topline">
                  <span className="home-live-label">
                    <i />
                    NEXT UP
                  </span>

                  <span className="home-season-label">2026 / 2027</span>
                </div>

                <div className="home-feature-date">
                  <CalendarDays size={17} />
                  <span>{nextFixture.date}</span>
                </div>

                <div className="home-feature-match">
                  <div className="home-feature-team">
                    <span>HOME</span>
                    <strong>{nextFixture.homeTeam}</strong>
                  </div>

                  <div className="home-feature-versus">
                    <span>VS</span>
                  </div>

                  <div className="home-feature-team home-feature-away">
                    <span>AWAY</span>
                    <strong>{nextFixture.awayTeam}</strong>
                  </div>
                </div>

                <div className="home-feature-meta">
                  <div>
                    <Clock3 size={15} />
                    <span>{nextFixture.time}</span>
                  </div>

                  <div>
                    <MapPin size={15} />
                    <span>{nextFixture.venue}</span>
                  </div>
                </div>

                <div className="home-feature-footer">
                  <div>
                    <span>{nextFixture.sport}</span>
                    <strong>{nextFixture.competition}</strong>
                  </div>

                  <Link to="/fixtures" aria-label="View fixtures">
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="home-floating-stat home-floating-top">
                <span>UPCOMING</span>
                <strong>{fixtures.length} fixtures</strong>
              </div>

              <div className="home-floating-stat home-floating-bottom">
                <span>LAST RESULT</span>
                <strong>
                  {latestResult.homeTeam} {latestResult.homeScore}–{" "}
                  {latestResult.awayScore} {latestResult.awayTeam}
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            INTRO
        ========================= */}
        <section className="home-intro">
          <div className="home-container home-intro-grid">
            <div>
              <span className="home-section-label">SPORTS & COMMUNITY</span>

              <h2>
                More than
                <br />
                <span>a game.</span>
              </h2>
            </div>

            <div className="home-intro-copy">
              <p>
                TTU Sports brings students, teams, coaches and university
                sports administration together through one connected digital
                experience.
              </p>

              <Link to="/about" className="home-text-link">
                Discover the platform
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================
            SPORTS
        ========================= */}
        <section className="home-sports-section">
          <div className="home-container">
            <div className="home-section-heading">
              <div>
                <span className="home-section-label">EXPLORE</span>

                <h2>
                  Find your
                  <br />
                  <span>sport.</span>
                </h2>
              </div>

              <div className="home-section-heading-side">
                <p>
                  Explore the sports community and discover where you can
                  train, compete and represent TTU.
                </p>

                <Link to="/sports" className="home-text-link">
                  View all sports
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="home-sports-grid">
              {featuredSports.map((sport, index) => {
                const Icon = sportIconMap[sport.category];

                return (
                  <Link
                    to={`/sports/${sport.slug}`}
                    className={`home-sport-tile ${
                      index === 0 ? "is-large" : ""
                    }`}
                    key={sport.id}
                  >
                    <div className="home-sport-tile-top">
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="home-sport-icon">
                        <Icon size={19} />
                      </div>
                    </div>

                    <div className="home-sport-tile-content">
                      <span>{sport.category}</span>
                      <h3>{sport.name}</h3>
                    </div>

                    <div className="home-sport-tile-footer">
                      <span>{sport.participation}</span>

                      <div>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================
            MATCH CENTRE
        ========================= */}
        <section className="home-match-section">
          <div className="home-container">
            <div className="home-section-heading home-section-heading-dark">
              <div>
                <span className="home-section-label">MATCH CENTRE</span>

                <h2>
                  The next
                  <br />
                  <span>matchday.</span>
                </h2>
              </div>

              <div className="home-section-heading-side">
                <p>
                  Stay up to date with upcoming fixtures, completed matches
                  and sporting events across TTU.
                </p>

                <Link to="/fixtures" className="home-text-link home-link-light">
                  Open match centre
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="home-match-layout">
              <article className="home-featured-result">
                <div className="home-result-header">
                  <div>
                    <span>RECENT RESULT</span>
                    <strong>{latestResult.sport}</strong>
                  </div>

                  <div className="home-result-badge">
                    {latestResult.resultLabel}
                  </div>
                </div>

                <div className="home-result-date">
                  <CalendarDays size={15} />
                  {latestResult.date}
                </div>

                <div className="home-result-score">
                  <div>
                    <span>HOME</span>
                    <strong>{latestResult.homeTeam}</strong>
                  </div>

                  <div className="home-score">
                    <strong>{latestResult.homeScore}</strong>
                    <span>:</span>
                    <strong>{latestResult.awayScore}</strong>
                  </div>

                  <div className="home-result-away">
                    <span>AWAY</span>
                    <strong>{latestResult.awayTeam}</strong>
                  </div>
                </div>

                <div className="home-result-bottom">
                  <span>
                    <MapPin size={14} />
                    {latestResult.venue}
                  </span>

                  <Link to="/results">
                    All results
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>

              <div className="home-upcoming-column">
                {fixtures.slice(0, 3).map((fixture, index) => (
                  <Link
                    to={`/sports/${fixture.sportSlug}`}
                    className="home-upcoming-row"
                    key={fixture.id}
                  >
                    <div className="home-upcoming-index">
                      0{index + 1}
                    </div>

                    <div className="home-upcoming-date">
                      <CalendarDays size={15} />
                      <span>{fixture.date}</span>
                    </div>

                    <div className="home-upcoming-match">
                      <strong>{fixture.homeTeam}</strong>
                      <span>VS</span>
                      <strong>{fixture.awayTeam}</strong>
                    </div>

                    <div className="home-upcoming-time">
                      <Clock3 size={14} />
                      {fixture.time}
                    </div>

                    <div className="home-upcoming-arrow">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            ANNOUNCEMENTS
        ========================= */}
        <section
          id="announcements"
          className="home-news-section"
        >
          <div className="home-container">
            <div className="home-section-heading">
              <div>
                <span className="home-section-label">LATEST NEWS</span>

                <h2>
                  Stay in the
                  <br />
                  <span>know.</span>
                </h2>
              </div>

              <div className="home-section-heading-side">
                <p>
                  General sports announcements and important updates from
                  across the TTU sporting community.
                </p>

                <Link to="/announcements" className="home-text-link">
                  View all news
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="home-news-grid">
              {announcements.map((announcement, index) => (
                <article
                  className={`home-news-card ${
                    index === 0 ? "is-featured" : ""
                  }`}
                  key={announcement.id}
                >
                  <div className="home-news-top">
                    <span>{announcement.category}</span>
                    <small>{announcement.date}</small>
                  </div>

                  <div className="home-news-symbol">
                    {index === 0 ? "01" : `0${index + 1}`}
                  </div>

                  <h3>{announcement.title}</h3>

                  <p>{announcement.excerpt}</p>

                  <Link to="/announcements">
                    Read announcement
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            ABOUT / PLATFORM
        ========================= */}
        <section
          id="about"
          className="home-platform-section"
        >
          <div className="home-container">
            <div className="home-platform-card">
              <div className="home-platform-heading">
                <span className="home-section-label">THE PLATFORM</span>

                <h2>
                  One digital home
                  <br />
                  for TTU <span>sport.</span>
                </h2>

                <p>
                  Built to connect participation, competition, communication
                  and administration in one structured sports ecosystem.
                </p>
              </div>

              <div className="home-platform-grid">
                <div className="home-platform-item">
                  <div className="home-platform-number">01</div>

                  <Users size={21} />

                  <strong>Student participation</strong>

                  <p>
                    Discover sports, register your interest and follow your
                    sporting journey.
                  </p>
                </div>

                <div className="home-platform-item">
                  <div className="home-platform-number">02</div>

                  <Trophy size={21} />

                  <strong>Team management</strong>

                  <p>
                    Keep teams, players, coaches and sporting activities
                    organized.
                  </p>
                </div>

                <div className="home-platform-item">
                  <div className="home-platform-number">03</div>

                  <CalendarDays size={21} />

                  <strong>Fixtures & results</strong>

                  <p>
                    Make upcoming matches and completed results easy to
                    discover.
                  </p>
                </div>

                <div className="home-platform-item">
                  <div className="home-platform-number">04</div>

                  <Medal size={21} />

                  <strong>Performance & development</strong>

                  <p>
                    Build structured records around training, attendance and
                    sporting performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CTA
        ========================= */}
        <section id="join" className="home-cta-section">
          <div className="home-container home-cta-content">
            <div>
              <span className="home-cta-label">GET INVOLVED</span>

              <h2>
                Your place in
                <br />
                TTU sport starts here.
              </h2>

              <p>
                Explore a sport, follow your team and become part of the
                university sporting community.
              </p>
            </div>

            <div className="home-cta-actions">
              <Link to="/sports" className="home-cta-primary">
                Explore Sports
                <ArrowRight size={18} />
              </Link>

              <Link to="/fixtures" className="home-cta-secondary">
                View Fixtures
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="home-footer">
        <div className="home-container home-footer-grid">
          <div className="home-footer-brand">
            <Link to="/" className="home-brand">
              <div className="home-brand-mark">
                <img
                  src="/images/logo/ttu-logo.png"
                  alt="Taita Taveta University"
                />
                <span>TTU</span>
              </div>

              <div className="home-brand-text">
                <strong>TTU SPORTS</strong>
                <span>Taita Taveta University</span>
              </div>
            </Link>

            <p>
              The digital home for sports and athletics at Taita Taveta
              University.
            </p>
          </div>

          <div className="home-footer-column">
            <span>Explore</span>
            <Link to="/sports">Sports</Link>
            <Link to="/fixtures">Fixtures</Link>
            <Link to="/results">Results</Link>
            <Link to="/announcements">Announcements</Link>
          </div>

          <div className="home-footer-column">
            <span>Platform</span>
            <a href="#join">Join a Sport</a>
            <a href="#about">About</a>
            <a href="#join">Student Portal</a>
            <a href="#join">Administration</a>
          </div>

          <div className="home-footer-column">
            <span>University</span>
            <a
              href="https://www.ttu.ac.ke/"
              target="_blank"
              rel="noreferrer"
            >
              Main TTU Website
            </a>
            <a href="mailto:info@ttu.ac.ke">Contact TTU</a>
            <span>Voi, Kenya</span>
          </div>
        </div>

        <div className="home-container home-footer-bottom">
          <span>
            © 2026 Taita Taveta University Sports & Athletics
          </span>

          <span>Sports · Community · Excellence</span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
