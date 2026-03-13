import { Header } from '../../../widgets/header/ui/Header';
import { PlayoffBracket } from '../../../widgets/playoff-bracket/ui/PlayoffBracket';
import { mockPlayoffMatches } from '../../../entities/match/model/mockData';
import './PlayoffPage.css';

const completedCount = mockPlayoffMatches.filter(m => m.completed).length;
const totalCount = mockPlayoffMatches.length;

export function PlayoffPage() {
  return (
    <div className="playoff-page">
      <Header />
      <div className="playoff-page__content">
        <div className="container">
          <div className="playoff-page__header">
            <h1 className="playoff-page__title">Playoff Bracket</h1>
            <div className="playoff-page__stats">
              <div className="playoff-page__stat">
                <span className="playoff-page__stat-value">16</span>
                <span className="playoff-page__stat-label">Teams Remaining</span>
              </div>
              <div className="playoff-page__stat">
                <span className="playoff-page__stat-value">{completedCount}/{totalCount}</span>
                <span className="playoff-page__stat-label">Matches Played</span>
              </div>
              <div className="playoff-page__stat">
                <span className="playoff-page__stat-value">Round of 16</span>
                <span className="playoff-page__stat-label">Current Round</span>
              </div>
            </div>
          </div>
          <PlayoffBracket />
        </div>
      </div>
    </div>
  );
}
