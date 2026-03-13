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
