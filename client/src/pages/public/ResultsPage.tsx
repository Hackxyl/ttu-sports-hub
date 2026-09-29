import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  MapPin,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

import { resultSportOptions, results } from "../../data/matches";
import "./MatchCenter.css";

function ResultsPage() {
  const [sport, setSport] = useState("All Sports");
  const [resultFilter, setResultFilter] = useState("ALL");

  const filteredResults = useMemo(() => {
    return results.filter((result) => {
      const matchesSport =
        sport === "All Sports" || result.sport === sport;

      const matchesResult =
        resultFilter === "ALL" ||
        result.resultLabel === resultFilter;

      return matchesSport && matchesResult;
    });
  }, [sport, resultFilter]);

  return (
    <main className="match-center-page">
      <section className="results-hero">
        <div className="match-center-grid" />

        <div className="page-container match-center-hero-content">
          <div className="match-center-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Results</span>
          </div>

          <span className="section-kicker match-center-kicker">
            TTU SPORTS MATCH CENTRE
          </span>

          <h1>
            Match
            <span> results.</span>
          </h1>

          <p>
            Review completed matches, scores, competitions and results from
            across TTU sports.
          </p>
        </div>
      </section>

      <section className="match-center-section">
        <div className="page-container">
          <div className="match-center-toolbar">
            <div>
              <span className="section-kicker">RESULTS ARCHIVE</span>
              <h2>What happened.</h2>
            </div>

            <div className="match-filters">
              <label>
                <span>Sport</span>

                <div className="match-select">
                  <select
                    value={sport}
                    onChange={(event) => setSport(event.target.value)}
                  >
                    {resultSportOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown size={15} />
                </div>
              </label>

              <label>
                <span>Outcome</span>

                <div className="match-select">
                  <select
                    value={resultFilter}
                    onChange={(event) =>
                      setResultFilter(event.target.value)
                    }
                  >
                    <option value="ALL">All Results</option>
                    <option value="WIN">Wins</option>
                    <option value="LOSS">Losses</option>
                    <option value="DRAW">Draws</option>
                  </select>

                  <ChevronDown size={15} />
                </div>
              </label>
            </div>
          </div>

          <div className="results-summary">
            <div>
              <span>COMPLETED MATCHES</span>
              <strong>{filteredResults.length}</strong>
            </div>

            <div>
              <span>SPORTS</span>
              <strong>
                {new Set(filteredResults.map((item) => item.sport)).size}
              </strong>
            </div>
          </div>

          {filteredResults.length > 0 ? (
            <div className="results-grid">
              {filteredResults.map((result) => (
                <article className="result-card" key={result.id}>
                  <div className="result-card-header">
                    <div>
                      <span>{result.sport}</span>
                      <small>{result.competition}</small>
                    </div>

                    <span
                      className={`result-badge result-${result.resultLabel.toLowerCase()}`}
                    >
                      {result.resultLabel}
                    </span>
                  </div>

                  <div className="result-date">
                    <CalendarDays size={14} />
                    <span>{result.date}</span>
                  </div>

                  <div className="result-scoreboard">
                    <div className="result-team">
                      <strong>{result.homeTeam}</strong>
                      <span>HOME</span>
                    </div>

                    <div className="result-score">
                      <strong>{result.homeScore}</strong>
                      <span>:</span>
                      <strong>{result.awayScore}</strong>
                    </div>

                    <div className="result-team result-team-away">
                      <strong>{result.awayTeam}</strong>
                      <span>AWAY</span>
                    </div>
                  </div>

                  <div className="result-card-footer">
                    <span>
                      <MapPin size={14} />
                      {result.venue}
                    </span>

                    <Link
                      to={`/sports/${result.sportSlug}`}
                      className="match-arrow"
                      aria-label={`View ${result.sport} page`}
                    >
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="match-empty">
              <div>
                <Trophy size={25} />
              </div>

              <h3>No results found</h3>

              <p>
                There are no results matching the current filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ResultsPage;