import { Link } from 'react-router-dom';
import { mockPlayoffMatches } from '../../../entities/match/model/mockData';
import type { PlayoffMatch, PlayoffRound } from '../../../entities/match/model/types';
import { Avatar } from '../../../shared/ui/Avatar/Avatar';
import './PlayoffBracket.css';

const ROUND_ORDER: PlayoffRound[] = ['round-of-32', 'round-of-16', 'quarter-final', 'semi-final', 'final'];
const ROUND_LABELS: Record<PlayoffRound, string> = {
  'round-of-32': 'Round of 32',
  'round-of-16': 'Round of 16',
  'quarter-final': 'Quarter-Finals',
  'semi-final': 'Semi-Finals',
  'final': 'Final',
};

function MatchCard({ match }: { match: PlayoffMatch }) {
  const homeWon = match.completed && match.homeScore! > match.awayScore!;
  const awayWon = match.completed && match.awayScore! > match.homeScore!;

  return (
    <div className={`bracket-match ${match.completed ? 'bracket-match--done' : ''}`}>
      <div className={`bracket-match__team ${homeWon ? 'bracket-match__team--winner' : ''}`}>
        <Avatar name={match.homeTeam ?? 'TBD'} size="sm" />
        <span className="bracket-match__name">{match.homeTeam ?? 'TBD'}</span>
        <span className="bracket-match__score">
          {match.homeScore !== null ? match.homeScore : '–'}
        </span>
      </div>
      <div className="bracket-match__divider" />
      <div className={`bracket-match__team ${awayWon ? 'bracket-match__team--winner' : ''}`}>
        <Avatar name={match.awayTeam ?? 'TBD'} size="sm" />
        <span className="bracket-match__name">{match.awayTeam ?? 'TBD'}</span>
        <span className="bracket-match__score">
          {match.awayScore !== null ? match.awayScore : '–'}
        </span>
      </div>
    </div>
  );
}

export function PlayoffBracket() {
  const byRound = ROUND_ORDER.reduce<Record<PlayoffRound, PlayoffMatch[]>>(
    (acc, round) => {
      acc[round] = mockPlayoffMatches
        .filter(m => m.round === round)
        .sort((a, b) => a.matchNumber - b.matchNumber);
      return acc;
    },
    {} as Record<PlayoffRound, PlayoffMatch[]>,
  );

  return (
    <div className="bracket">
      <div className="bracket__scroll">
        {ROUND_ORDER.map(round => (
          <div key={round} className="bracket__round">
            <div className="bracket__round-label">{ROUND_LABELS[round]}</div>
            <div className="bracket__matches">
              {byRound[round].map(match => (
                <div key={match.id} className="bracket__match-slot">
                  {match.completed ? (
                    <Link to={`/match/${match.id}`} className="bracket__match-link">
                      <MatchCard match={match} />
                    </Link>
                  ) : (
                    <MatchCard match={match} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
