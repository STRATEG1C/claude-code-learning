import { useState } from 'react';
import { Header } from '../../../widgets/header/ui/Header';
import { GroupStandings } from '../../../widgets/group-standings/ui/GroupStandings';
import { mockGroups } from '../../../entities/group/model/mockData';
import './GroupPage.css';

export function GroupPage() {
  const [activeGroupId, setActiveGroupId] = useState(mockGroups[0].id);
  const activeGroup = mockGroups.find(g => g.id === activeGroupId)!;

  return (
    <div className="group-page">
      <Header />
      <div className="group-page__content">
        <div className="container">
          <h1 className="group-page__title">Group Stage</h1>
          <div className="group-page__tabs">
            {mockGroups.map(group => (
              <button
                key={group.id}
                className={`group-page__tab ${activeGroupId === group.id ? 'group-page__tab--active' : ''}`}
                onClick={() => setActiveGroupId(group.id)}
              >
                Group {group.id}
              </button>
            ))}
          </div>
          <GroupStandings group={activeGroup} />
        </div>
      </div>
    </div>
  );
}
