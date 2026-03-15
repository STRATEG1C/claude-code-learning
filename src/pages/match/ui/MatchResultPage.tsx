import { useParams, Link } from 'react-router-dom';
import { Header } from '../../../widgets/header/ui/Header';
import { MatchTimeline } from '../../../widgets/match-timeline/ui/MatchTimeline';
import { Avatar } from '../../../shared/ui/Avatar/Avatar';
import { Badge } from '../../../shared/ui/Badge/Badge';
import { mockMatchDetails } from '../../../entities/match/model/matchDetailMockData';
import { ROUTES } from '../../../shared/config/routes';
import './MatchResultPage.css';

const ROUND_LABELS: Record<string, string> = {
  'round-of-32': 'Round of 32',
  'round-of-16': 'Round of 16',
  'quarter-final': 'Quarter-Final',
  'semi-final': 'Semi-Final',
  'final': 'Final',
};

function formatAttendance(n: number): string {
  return n.toLocaleString('en-GB');
}

export function MatchResultPage() {
  const { id } = useParams<{ id: string }>();
  const match = mockMatchDetails.find(m => m.id === id);

  if (!match) {
    return (
      <>
        <Header />
        <div className="page__content">
          <div className="container">
            <div className="match-result__not-found">
              <p className="match-result__not-found-text">Match not found.</p>
              <Link to={ROUTES.PLAYOFF} className="match-result__back-link">
                ← Back to Playoff
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const homeTeam = match.homeTeam ?? 'TBD';
  const awayTeam = match.awayTeam ?? 'TBD';
  const roundLabel = ROUND_LABELS[match.round] ?? match.round;

  return (
    <>
      <Header />
      <div className="page__content">
        <div className="container">

          <div className="match-result__nav">
            <Link to={ROUTES.PLAYOFF} className="match-result__back-link">
              ← Back to Playoff
            </Link>
            <span className="match-result__round-label">{roundLabel}</span>
          </div>

          {/* Score hero */}
          <div className="match-result__hero">
            <div className="match-result__team match-result__team--home">
              <Avatar name={homeTeam} size="lg" />
              <span className="match-result__team-name">{homeTeam}</span>
            </div>

            <div className="match-result__score-block">
              {match.completed ? (
                <div className="match-result__score">
                  <span className="match-result__score-num">{match.homeScore}</span>
                  <span className="match-result__score-sep">–</span>
                  <span className="match-result__score-num">{match.awayScore}</span>
                </div>
              ) : (
                <div className="match-result__score match-result__score--upcoming">
                  <span className="match-result__score-vs">VS</span>
                </div>
              )}
              <Badge variant={match.completed ? 'success' : 'neutral'}>
                {match.completed ? 'Full Time' : 'Upcoming'}
              </Badge>
            </div>

            <div className="match-result__team match-result__team--away">
              <Avatar name={awayTeam} size="lg" />
              <span className="match-result__team-name">{awayTeam}</span>
            </div>
          </div>

          {/* Info strip */}
          <div className="match-result__info-strip">
            <span className="match-result__info-item">📅 {match.timings.date}</span>
            <span className="match-result__info-sep" />
            <span className="match-result__info-item">⏰ {match.timings.kickOff}</span>
            <span className="match-result__info-sep" />
            <span className="match-result__info-item">📍 {match.venue}</span>
            <span className="match-result__info-sep" />
            <span className="match-result__info-item">👤 {match.referee}</span>
            <span className="match-result__info-sep" />
            <span className="match-result__info-item">🏟 {formatAttendance(match.attendance)}</span>
          </div>

          {/* Timeline or upcoming state */}
          {match.completed ? (
            <section className="match-result__timeline-section">
              <h2 className="match-result__section-title">Match Events</h2>
              <div className="match-result__teams-header">
                <span className="match-result__teams-header-name">{homeTeam}</span>
                <span />
                <span className="match-result__teams-header-name match-result__teams-header-name--away">{awayTeam}</span>
              </div>
              <MatchTimeline events={match.events} timings={match.timings} />
            </section>
          ) : (
            <div className="match-result__upcoming">
              <p className="match-result__upcoming-text">This match has not been played yet.</p>
              {match.timings.date && (
                <p className="match-result__upcoming-date">
                  Scheduled: {match.timings.date} at {match.timings.kickOff}
                </p>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
