import { useState } from 'react';
import { Header } from '../../../widgets/header/ui/Header';
import { Modal } from '../../../shared/ui/Modal/Modal';
import { ApplyForm } from '../../../features/apply-team/ui/ApplyForm';
import { Button } from '../../../shared/ui/Button/Button';
import { mockGroups } from '../../../entities/group/model/mockData';
import './CompetitionPage.css';

export function CompetitionPage() {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <div className="competition-page">
      <Header />

      <section className="competition-hero">
        <div className="competition-hero__bg">
          <div className="competition-hero__orb competition-hero__orb--1" />
          <div className="competition-hero__orb competition-hero__orb--2" />
        </div>
        <div className="container competition-hero__content">
          <p className="competition-hero__eyebrow">FIFA PS5 — Season 2024</p>
          <h1 className="competition-hero__title">FC Championship</h1>
          <p className="competition-hero__desc">
            Compete against the best. Battle through group stages, survive the knockout rounds,
            and claim the ultimate title. 32 teams. One champion.
          </p>
          <div className="competition-hero__stats">
            <div className="competition-hero__stat">
              <span className="competition-hero__stat-value">32</span>
              <span className="competition-hero__stat-label">Teams</span>
            </div>
            <div className="competition-hero__stat">
              <span className="competition-hero__stat-value">8</span>
              <span className="competition-hero__stat-label">Groups</span>
            </div>
            <div className="competition-hero__stat">
              <span className="competition-hero__stat-value">5</span>
              <span className="competition-hero__stat-label">Rounds</span>
            </div>
            <div className="competition-hero__stat">
              <span className="competition-hero__stat-value">1</span>
              <span className="competition-hero__stat-label">Champion</span>
            </div>
          </div>
          <Button variant="primary" size="lg" onClick={() => setApplyOpen(true)}>
            Apply Now
          </Button>
        </div>
      </section>

      <section className="competition-groups">
        <div className="container">
          <h2 className="competition-groups__title">Group Stage Overview</h2>
          <div className="competition-groups__grid">
            {mockGroups.map(group => (
              <div key={group.id} className="competition-group-card">
                <div className="competition-group-card__header">Group {group.id}</div>
                <ul className="competition-group-card__teams">
                  {group.standings.map((team, idx) => (
                    <li
                      key={team.teamId}
                      className={`competition-group-card__team ${idx < 2 ? 'competition-group-card__team--advance' : ''}`}
                    >
                      <span className="competition-group-card__pos">{idx + 1}</span>
                      <span className="competition-group-card__name">{team.teamName}</span>
                      <span className="competition-group-card__pts">{team.points}pt</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={applyOpen} onClose={() => setApplyOpen(false)} title="Register Your Team">
        <ApplyForm onClose={() => setApplyOpen(false)} />
      </Modal>
    </div>
  );
}
