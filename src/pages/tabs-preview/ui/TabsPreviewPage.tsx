import { Tabs } from '../../../shared/ui/Tabs/Tabs';
import './TabsPreviewPage.css';

const overviewContent = (
  <div>
    <h3 className="tabs-preview__content-title">Overview</h3>
    <p className="tabs-preview__content-text">
      The Tabs component lets you organise related content into switchable panels.
      Only one panel is visible at a time, keeping the interface uncluttered.
    </p>
  </div>
);

const statsContent = (
  <div>
    <h3 className="tabs-preview__content-title">Statistics</h3>
    <ul className="tabs-preview__stat-list">
      <li><span>Goals scored</span><strong>42</strong></li>
      <li><span>Assists</span><strong>18</strong></li>
      <li><span>Clean sheets</span><strong>9</strong></li>
      <li><span>Yellow cards</span><strong>5</strong></li>
    </ul>
  </div>
);

const rosterContent = (
  <div>
    <h3 className="tabs-preview__content-title">Roster</h3>
    <p className="tabs-preview__content-text">
      GK — Alisson, RB — Alexander-Arnold, CB — Van Dijk, CB — Konaté,
      LB — Robertson, MF — Thiago, MF — Henderson, MF — Salah,
      FW — Díaz, FW — Núñez, FW — Jota
    </p>
  </div>
);

const settingsContent = (
  <div>
    <h3 className="tabs-preview__content-title">Settings</h3>
    <p className="tabs-preview__content-text">
      Configure your preferences here. This tab demonstrates that any arbitrary
      content — forms, lists, cards — can live inside a panel.
    </p>
  </div>
);

const basicTabs = [
  { key: 'overview', label: 'Overview', content: overviewContent },
  { key: 'stats', label: 'Statistics', content: statsContent },
  { key: 'roster', label: 'Roster', content: rosterContent },
];

const manyTabs = [
  { key: 'overview', label: 'Overview', content: overviewContent },
  { key: 'stats', label: 'Statistics', content: statsContent },
  { key: 'roster', label: 'Roster', content: rosterContent },
  { key: 'settings', label: 'Settings', content: settingsContent },
];

export function TabsPreviewPage() {
  return (
    <main className="tabs-preview container">
      <h1 className="tabs-preview__title">Tabs</h1>
      <p className="tabs-preview__desc">
        A clean tab list that switches the visible content panel.
      </p>

      <section className="tabs-preview__section">
        <h2 className="tabs-preview__section-title">Basic</h2>
        <Tabs tabs={basicTabs} />
      </section>

      <section className="tabs-preview__section">
        <h2 className="tabs-preview__section-title">With default active tab</h2>
        <Tabs tabs={basicTabs} defaultKey="roster" />
      </section>

      <section className="tabs-preview__section">
        <h2 className="tabs-preview__section-title">Many tabs</h2>
        <Tabs tabs={manyTabs} />
      </section>
    </main>
  );
}
