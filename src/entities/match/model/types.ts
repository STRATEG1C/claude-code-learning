export type PlayoffRound = 'round-of-32' | 'round-of-16' | 'quarter-final' | 'semi-final' | 'final';

export interface PlayoffMatch {
  id: string;
  round: PlayoffRound;
  matchNumber: number;
  homeTeam: string | null;
  awayTeam: string | null;
  homeScore: number | null;
  awayScore: number | null;
  completed: boolean;
}

export type MatchEventType = 'goal' | 'yellow-card' | 'red-card' | 'substitution';

export interface MatchEvent {
  id: string;
  type: MatchEventType;
  minute: number;
  extraTime?: number;
  team: 'home' | 'away';
  playerName: string;
  assistName?: string;
  playerOffName?: string;
}

export interface MatchTimings {
  date: string;
  kickOff: string;
  halfTimeStart: string;
  halfTimeEnd: string;
  fullTimeEnd: string;
  firstHalfExtra: number;
  secondHalfExtra: number;
}

export interface MatchDetail extends PlayoffMatch {
  venue: string;
  referee: string;
  attendance: number;
  timings: MatchTimings;
  events: MatchEvent[];
}
