import type { Group } from '../../../entities/group/model/types';
import './GroupStandings.css';

export function GroupStandings({ group }: { group: Group }) {
  return (
    <div className="standings">
      <div className="standings__header">
        <h2 className="standings__title">Group {group.id}</h2>
      </div>
      <div className="standings__table-wrap">
        <table className="standings__table">
          <thead>
            <tr>
              <th className="standings__col--rank">#</th>
              <th className="standings__col--team">Team</th>
              <th title="Played">P</th>
              <th title="Won">W</th>
              <th title="Drawn">D</th>
              <th title="Lost">L</th>
              <th title="Goals For">GF</th>
              <th title="Goals Against">GA</th>
              <th title="Goal Difference">GD</th>
              <th title="Points" className="standings__col--pts">Pts</th>
            </tr>
          </thead>
          <tbody>
            {group.standings.map((row, idx) => (
              <tr
                key={row.teamId}
                className={`standings__row ${idx < 2 ? 'standings__row--advance' : ''}`}
              >
                <td className="standings__col--rank">{idx + 1}</td>
                <td className="standings__col--team">{row.teamName}</td>
                <td>{row.played}</td>
                <td>{row.won}</td>
                <td>{row.drawn}</td>
                <td>{row.lost}</td>
                <td>{row.goalsFor}</td>
                <td>{row.goalsAgainst}</td>
                <td className={row.goalDifference > 0 ? 'standings__gd--pos' : row.goalDifference < 0 ? 'standings__gd--neg' : ''}>
                  {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                </td>
                <td className="standings__col--pts">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="standings__legend">
        <span className="standings__legend-dot" /> Top 2 advance to playoff
      </p>
    </div>
  );
}
