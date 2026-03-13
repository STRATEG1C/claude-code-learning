import type { PlayoffMatch } from './types';

export const mockPlayoffMatches: PlayoffMatch[] = [
  // Round of 32 (1/16) — all completed
  { id: 'r32-1',  round: 'round-of-32', matchNumber: 1,  homeTeam: 'Brazil',      awayTeam: 'Ghana',        homeScore: 3, awayScore: 0, completed: true },
  { id: 'r32-2',  round: 'round-of-32', matchNumber: 2,  homeTeam: 'Switzerland', awayTeam: 'Qatar',        homeScore: 2, awayScore: 0, completed: true },
  { id: 'r32-3',  round: 'round-of-32', matchNumber: 3,  homeTeam: 'England',     awayTeam: 'Iran',         homeScore: 4, awayScore: 2, completed: true },
  { id: 'r32-4',  round: 'round-of-32', matchNumber: 4,  homeTeam: 'USA',         awayTeam: 'Wales',        homeScore: 2, awayScore: 1, completed: true },
  { id: 'r32-5',  round: 'round-of-32', matchNumber: 5,  homeTeam: 'Argentina',   awayTeam: 'Saudi Arabia', homeScore: 2, awayScore: 1, completed: true },
  { id: 'r32-6',  round: 'round-of-32', matchNumber: 6,  homeTeam: 'Poland',      awayTeam: 'Mexico',       homeScore: 1, awayScore: 0, completed: true },
  { id: 'r32-7',  round: 'round-of-32', matchNumber: 7,  homeTeam: 'France',      awayTeam: 'Australia',    homeScore: 3, awayScore: 0, completed: true },
  { id: 'r32-8',  round: 'round-of-32', matchNumber: 8,  homeTeam: 'Denmark',     awayTeam: 'Tunisia',      homeScore: 2, awayScore: 1, completed: true },
  { id: 'r32-9',  round: 'round-of-32', matchNumber: 9,  homeTeam: 'Japan',       awayTeam: 'Costa Rica',   homeScore: 2, awayScore: 0, completed: true },
  { id: 'r32-10', round: 'round-of-32', matchNumber: 10, homeTeam: 'Spain',       awayTeam: 'Germany',      homeScore: 2, awayScore: 1, completed: true },
  { id: 'r32-11', round: 'round-of-32', matchNumber: 11, homeTeam: 'Morocco',     awayTeam: 'Canada',       homeScore: 2, awayScore: 0, completed: true },
  { id: 'r32-12', round: 'round-of-32', matchNumber: 12, homeTeam: 'Croatia',     awayTeam: 'Belgium',      homeScore: 2, awayScore: 1, completed: true },
  { id: 'r32-13', round: 'round-of-32', matchNumber: 13, homeTeam: 'Netherlands', awayTeam: 'Ecuador',      homeScore: 2, awayScore: 1, completed: true },
  { id: 'r32-14', round: 'round-of-32', matchNumber: 14, homeTeam: 'Senegal',     awayTeam: 'Serbia',       homeScore: 2, awayScore: 0, completed: true },
  { id: 'r32-15', round: 'round-of-32', matchNumber: 15, homeTeam: 'Portugal',    awayTeam: 'Uruguay',      homeScore: 2, awayScore: 0, completed: true },
  { id: 'r32-16', round: 'round-of-32', matchNumber: 16, homeTeam: 'South Korea', awayTeam: 'Cameroon',     homeScore: 1, awayScore: 0, completed: true },

  // Round of 16 (1/8) — first 4 completed, last 4 pending
  { id: 'r16-1', round: 'round-of-16', matchNumber: 1, homeTeam: 'Brazil',      awayTeam: 'Switzerland', homeScore: 2, awayScore: 1, completed: true },
  { id: 'r16-2', round: 'round-of-16', matchNumber: 2, homeTeam: 'England',     awayTeam: 'USA',         homeScore: 3, awayScore: 2, completed: true },
  { id: 'r16-3', round: 'round-of-16', matchNumber: 3, homeTeam: 'Argentina',   awayTeam: 'Poland',      homeScore: 2, awayScore: 0, completed: true },
  { id: 'r16-4', round: 'round-of-16', matchNumber: 4, homeTeam: 'France',      awayTeam: 'Denmark',     homeScore: 2, awayScore: 1, completed: true },
  { id: 'r16-5', round: 'round-of-16', matchNumber: 5, homeTeam: 'Japan',       awayTeam: 'Spain',       homeScore: null, awayScore: null, completed: false },
  { id: 'r16-6', round: 'round-of-16', matchNumber: 6, homeTeam: 'Morocco',     awayTeam: 'Croatia',     homeScore: null, awayScore: null, completed: false },
  { id: 'r16-7', round: 'round-of-16', matchNumber: 7, homeTeam: 'Netherlands', awayTeam: 'Senegal',     homeScore: null, awayScore: null, completed: false },
  { id: 'r16-8', round: 'round-of-16', matchNumber: 8, homeTeam: 'Portugal',    awayTeam: 'South Korea', homeScore: null, awayScore: null, completed: false },

  // Quarter-finals — all pending
  { id: 'qf-1', round: 'quarter-final', matchNumber: 1, homeTeam: 'Brazil',    awayTeam: 'England',   homeScore: null, awayScore: null, completed: false },
  { id: 'qf-2', round: 'quarter-final', matchNumber: 2, homeTeam: 'Argentina', awayTeam: 'France',    homeScore: null, awayScore: null, completed: false },
  { id: 'qf-3', round: 'quarter-final', matchNumber: 3, homeTeam: 'TBD',       awayTeam: 'TBD',       homeScore: null, awayScore: null, completed: false },
  { id: 'qf-4', round: 'quarter-final', matchNumber: 4, homeTeam: 'TBD',       awayTeam: 'TBD',       homeScore: null, awayScore: null, completed: false },

  // Semi-finals — all pending
  { id: 'sf-1', round: 'semi-final', matchNumber: 1, homeTeam: 'TBD', awayTeam: 'TBD', homeScore: null, awayScore: null, completed: false },
  { id: 'sf-2', round: 'semi-final', matchNumber: 2, homeTeam: 'TBD', awayTeam: 'TBD', homeScore: null, awayScore: null, completed: false },

  // Final
  { id: 'final-1', round: 'final', matchNumber: 1, homeTeam: 'TBD', awayTeam: 'TBD', homeScore: null, awayScore: null, completed: false },
];
