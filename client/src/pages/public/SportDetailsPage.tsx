import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { sports } from "../../data/sports";
import "./SportDetailsPage.css";

const sportFixtures = [
  {
    date: "27",
    month: "SEP",
    time: "2:00 PM",
    opponent: "VVC",
    venue: "TTU Sports Grounds",
    competition: "University League",
  },
  {
    date: "11",
    month: "OCT",
    time: "3:00 PM",
    opponent: "Apex",
    venue: "TTU Sports Grounds",
    competition: "University League",
  },
];

const sportAnnouncements = [
  {
    category: "GENERAL",
    title: "Sports registration is now open",
    date: "26 Sep 2026",
  },
  {
    category: "SPORT",
    title: "Latest team preparation information",
    date: "26 Sep 2026",
  },
];

function SportDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  const sport = sports.find((item) => item.slug === slug);

  if (!sport) {
    return (
      <main className="sport-not-found">
        <div className="page-container">
          <span className="section-kicker">SPORT NOT FOUND</span>
          <h1>We couldn't find that sport.</h1>
          <p>
            The sport may not be active yet or the page address may be
            incorrect.
          </p>
          <Link to="/sports" className="primary-button">
            <ArrowLeft size={17} />
            Back to Sports
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="sport-details-page">
      <section className="sport-details-hero">
        <div className="page-container">
          <div className="sport-details-breadcrumb">
            <Link to="/sports">
              <ArrowLeft size={15} />
              Sports
            </Link>
          </div>

          <div className="sport-details-hero-grid">
            <div>
              <span className="sport-details-category">
                {sport.category}
              </span>

              <h1>{sport.name}</h1>

              <p>{sport.description}</p>

              <div className="sport-details-actions">
                <Link
                  to={`/login?redirect=/sports/${sport.slug}`}
                  className="primary-button"
                >
                  Join {sport.name}
                  <ArrowRight size={17} />
                </Link>

                <a href="#fixtures" className="secondary-button">
                  View Fixtures
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            <div className="sport-details-emblem">
              <Trophy size={62} strokeWidth={1.4} />

              <span>TTU SPORTS</span>

              <strong>{sport.name}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="sport-overview-section">
        <div className="page-container">
          <div className="sport-overview-grid">
            <div className="sport-overview-intro">
              <span className="section-kicker">SPORT OVERVIEW</span>
              <h2>
                Everything happening
                <br />
                in {sport.name}.
              </h2>
              <p>
                Follow the sport, discover its teams, keep up with fixtures,
                training and announcements, and register your interest through
                the TTU Sports platform.
              </p>
            </div>

            <div className="sport-overview-stats">
              <div>
                <Users size={19} />
                <strong>{sport.participation}</strong>
                <span>Participation</span>
              </div>

              <div>
                <Trophy size={19} />
                <strong>{sport.teams.length}</strong>
                <span>Teams</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <strong>{sport.status}</strong>
                <span>Status</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sport-teams-section">
        <div className="page-container">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">TEAMS</span>
              <h2>Teams & squads.</h2>
              <p>
                The teams currently associated with {sport.name}.
              </p>
            </div>
          </div>

          <div className="sport-team-grid">
            {sport.teams.map((team, index) => (
              <article className="sport-team-card" key={team}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <Trophy size={24} />
                </div>

                <h3>{team}</h3>

                <p>
                  View players, captain, coach, fixtures, results and team
                  activities.
                </p>

                <Link to="#" className="sport-team-link">
                  View team
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fixtures" className="sport-fixtures-section">
        <div className="page-container">
          <div className="section-heading-row section-heading-row-dark">
            <div>
              <span className="section-kicker">MATCH CENTRE</span>
              <h2>Upcoming fixtures.</h2>
              <p>
                Follow the latest scheduled matches for {sport.name}.
              </p>
            </div>
          </div>

          <div className="sport-fixture-list">
            {sportFixtures.map((fixture) => (
              <article
                className="sport-fixture-card"
                key={`${fixture.date}-${fixture.opponent}`}
              >
                <div className="sport-fixture-date">
                  <strong>{fixture.date}</strong>
                  <span>{fixture.month}</span>
                </div>

                <div className="sport-fixture-teams">
                  <span>{sport.name}</span>
                  <strong>TTU</strong>
                </div>

                <div className="sport-fixture-vs">VS</div>

                <div className="sport-fixture-teams opponent">
                  <span>{fixture.competition}</span>
                  <strong>{fixture.opponent}</strong>
                </div>

                <div className="sport-fixture-info">
                  <span>
                    <Clock3 size={14} />
                    {fixture.time}
                  </span>
                  <span>
                    <MapPin size={14} />
                    {fixture.venue}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sport-content-section">
        <div className="page-container sport-content-grid">
          <div>
            <span className="section-kicker">TRAINING</span>
            <h2>Train with purpose.</h2>

            <div className="training-card">
              <div className="training-icon">
                <CalendarDays size={22} />
              </div>

              <div>
                <span>UPCOMING SESSION</span>
                <strong>Training Schedule</strong>
                <p>
                  Members can view upcoming training sessions, venues and
                  attendance information from their portal.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="section-kicker">ANNOUNCEMENTS</span>
            <h2>Stay updated.</h2>

            <div className="sport-announcement-list">
              {sportAnnouncements.map((announcement) => (
                <article
                  className="sport-announcement"
                  key={announcement.title}
                >
                  <div>
                    <span>{announcement.category}</span>
                    <small>{announcement.date}</small>
                  </div>

                  <h3>{announcement.title}</h3>

                  <Link to="/announcements">
                    Read announcement
                    <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sport-join-banner">
        <div className="page-container sport-join-banner-content">
          <div>
            <span className="section-kicker section-kicker-dark">
              GET INVOLVED
            </span>

            <h2>Ready to be part of {sport.name}?</h2>

            <p>
              Register your interest and become part of the TTU sporting
              community.
            </p>
          </div>

          <Link
            to={`/login?redirect=/sports/${sport.slug}`}
            className="primary-button"
          >
            Join {sport.name}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default SportDetailsPage;