import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  MapPin,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

import { fixtures, sportOptions } from "../../data/matches";
import "./MatchCenter.css";

function FixturesPage() {
  const [sport, setSport] = useState("All Sports");
  const [status, setStatus] = useState("ALL");

  const filteredFixtures = useMemo(() => {
    return fixtures.filter((fixture) => {
      const matchesSport =
        sport === "All Sports" || fixture.sport === sport;

      const matchesStatus =
        status === "ALL" || fixture.status === status;

      return matchesSport && matchesStatus;
    });
  }, [sport, status]);

  return (
    <main className="match-center-page">
      <section className="match-center-hero">
        <div className="match-center-grid" />

        <div className="page-container match-center-hero-content">
          <div className="match-center-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Fixtures</span>
          </div>

          <span className="section-kicker match-center-kicker">
            TTU SPORTS MATCH CENTRE
          </span>

          <h1>
            Upcoming
            <span> fixtures.</span>
          </h1>

          <p>
            Follow scheduled matches, venues, competitions and sporting
            events across the TTU sports community.
          </p>
        </div>
      </section>

      <section className="match-center-section">
        <div className="page-container">
          <div className="match-center-toolbar">
            <div>
              <span className="section-kicker">FIXTURE LIST</span>
              <h2>What’s coming up.</h2>
            </div>

            <div className="match-filters">
              <label>
                <span>Sport</span>

                <div className="match-select">
                  <select
                    value={sport}
                    onChange={(event) => setSport(event.target.value)}
                  >
                    {sportOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown size={15} />
                </div>
              </label>

              <label>
                <span>Status</span>

                <div className="match-select">
                  <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="SCHEDULED">Scheduled</option>
                    <option value="POSTPONED">Postponed</option>
                    <option value="CANCELLED">Cancelled</option>
                  </select>

                  <ChevronDown size={15} />
                </div>
              </label>
            </div>
          </div>

          <div className="match-results-count">
            <span>
              <strong>{filteredFixtures.length}</strong> fixtures found
            </span>
          </div>

          {filteredFixtures.length > 0 ? (
            <div className="full-fixture-list">
              {filteredFixtures.map((fixture) => (
                <article
                  className="full-fixture-card"
                  key={fixture.id}
                >
                  <div className="full-fixture-date">
                    <CalendarDays size={17} />
                    <strong>{fixture.date}</strong>
                  </div>

                  <div className="full-fixture-sport">
                    <span>{fixture.sport}</span>
                    <small>{fixture.competition}</small>
                  </div>

                  <div className="full-fixture-match">
                    <strong>{fixture.homeTeam}</strong>
                    <span>VS</span>
                    <strong>{fixture.awayTeam}</strong>
                  </div>

                  <div className="full-fixture-info">
                    <span>
                      <Clock3 size={14} />
                      {fixture.time}
                    </span>

                    <span>
                      <MapPin size={14} />
                      {fixture.venue}
                    </span>
                  </div>

                  <span
                    className={`fixture-status fixture-status-${fixture.status.toLowerCase()}`}
                  >
                    {fixture.status}
                  </span>

                  <Link
                    to={`/sports/${fixture.sportSlug}`}
                    className="match-arrow"
                    aria-label={`View ${fixture.sport} page`}
                  >
                    <ArrowRight size={17} />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="match-empty">
              <div>
                <Trophy size={25} />
              </div>

              <h3>No fixtures found</h3>

              <p>
                There are no fixtures matching the current filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default FixturesPage;