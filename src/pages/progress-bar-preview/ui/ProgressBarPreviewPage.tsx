import { ProgressBar } from '../../../shared/ui/ProgressBar/ProgressBar';
import './ProgressBarPreviewPage.css';

export function ProgressBarPreviewPage() {
  return (
    <main className="pb-preview container">
      <h1 className="pb-preview__title">ProgressBar</h1>
      <p className="pb-preview__desc">
        Visual indicator for progress and stat values.
      </p>

      <section className="pb-preview__section">
        <h2 className="pb-preview__section-title">Variants</h2>

        <div className="pb-preview__stack">
          <ProgressBar value={72} variant="primary" label="Primary" showValue />
          <ProgressBar value={55} variant="success" label="Success" showValue />
          <ProgressBar value={38} variant="accent" label="Accent" showValue />
          <ProgressBar value={83} variant="warning" label="Warning" showValue />
        </div>
      </section>

      <section className="pb-preview__section">
        <h2 className="pb-preview__section-title">Sizes</h2>

        <div className="pb-preview__stack">
          <ProgressBar value={60} size="sm" label="Small" showValue />
          <ProgressBar value={60} size="md" label="Medium" showValue />
          <ProgressBar value={60} size="lg" label="Large" showValue />
        </div>
      </section>

      <section className="pb-preview__section">
        <h2 className="pb-preview__section-title">Animated Shimmer</h2>

        <div className="pb-preview__stack">
          <ProgressBar value={45} variant="primary" label="Loading…" animated />
          <ProgressBar value={68} variant="success" label="Syncing…" animated />
        </div>
      </section>

      <section className="pb-preview__section">
        <h2 className="pb-preview__section-title">Match Stats</h2>

        <div className="pb-preview__card">
          <div className="pb-preview__match-header">
            <span className="pb-preview__team">Brazil</span>
            <span className="pb-preview__vs">vs</span>
            <span className="pb-preview__team">Argentina</span>
          </div>

          <div className="pb-preview__stats">
            <div className="pb-preview__stat-row">
              <span className="pb-preview__stat-val pb-preview__stat-val--left">58%</span>
              <div className="pb-preview__stat-bar-group">
                <span className="pb-preview__stat-name">Ball Possession</span>
                <div className="pb-preview__dual-bar">
                  <ProgressBar value={58} variant="primary" size="sm" />
                  <ProgressBar value={42} variant="accent" size="sm" />
                </div>
              </div>
              <span className="pb-preview__stat-val pb-preview__stat-val--right">42%</span>
            </div>

            <div className="pb-preview__stat-row">
              <span className="pb-preview__stat-val pb-preview__stat-val--left">7</span>
              <div className="pb-preview__stat-bar-group">
                <span className="pb-preview__stat-name">Shots on Target</span>
                <div className="pb-preview__dual-bar">
                  <ProgressBar value={70} variant="primary" size="sm" />
                  <ProgressBar value={40} variant="accent" size="sm" />
                </div>
              </div>
              <span className="pb-preview__stat-val pb-preview__stat-val--right">4</span>
            </div>

            <div className="pb-preview__stat-row">
              <span className="pb-preview__stat-val pb-preview__stat-val--left">89%</span>
              <div className="pb-preview__stat-bar-group">
                <span className="pb-preview__stat-name">Pass Accuracy</span>
                <div className="pb-preview__dual-bar">
                  <ProgressBar value={89} variant="success" size="sm" />
                  <ProgressBar value={81} variant="warning" size="sm" />
                </div>
              </div>
              <span className="pb-preview__stat-val pb-preview__stat-val--right">81%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-preview__section">
        <h2 className="pb-preview__section-title">Edge Values</h2>

        <div className="pb-preview__stack">
          <ProgressBar value={0} label="0%" showValue />
          <ProgressBar value={1} label="1%" showValue />
          <ProgressBar value={50} label="50%" showValue />
          <ProgressBar value={99} label="99%" showValue />
          <ProgressBar value={100} label="100%" showValue variant="success" />
        </div>
      </section>
    </main>
  );
}
