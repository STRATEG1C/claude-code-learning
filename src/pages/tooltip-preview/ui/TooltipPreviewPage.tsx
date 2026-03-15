import { Tooltip } from '../../../shared/ui/Tooltip/Tooltip';
import './TooltipPreviewPage.css';

export function TooltipPreviewPage() {
  return (
    <main className="tooltip-preview container">
      <h1 className="tooltip-preview__title">Tooltip</h1>
      <p className="tooltip-preview__desc">
        Hover over any element below to see the tooltip appear.
      </p>

      <section className="tooltip-preview__section">
        <h2 className="tooltip-preview__section-title">Placement</h2>

        <div className="tooltip-preview__grid">
          <Tooltip content="Appears above" placement="top">
            <button className="tooltip-preview__trigger">Top</button>
          </Tooltip>

          <Tooltip content="Appears below" placement="bottom">
            <button className="tooltip-preview__trigger">Bottom</button>
          </Tooltip>

          <Tooltip content="Appears to the left" placement="left">
            <button className="tooltip-preview__trigger">Left</button>
          </Tooltip>

          <Tooltip content="Appears to the right" placement="right">
            <button className="tooltip-preview__trigger">Right</button>
          </Tooltip>
        </div>
      </section>

      <section className="tooltip-preview__section">
        <h2 className="tooltip-preview__section-title">Rich Content</h2>

        <div className="tooltip-preview__grid">
          <Tooltip
            content={
              <span>
                Player rating: <strong style={{ color: 'var(--color-primary)' }}>9.2</strong>
              </span>
            }
            placement="top"
          >
            <button className="tooltip-preview__trigger">With emphasis</button>
          </Tooltip>

          <Tooltip
            content="This tooltip has a longer description that wraps across lines"
            placement="bottom"
          >
            <button className="tooltip-preview__trigger tooltip-preview__trigger--wide">
              Long content
            </button>
          </Tooltip>
        </div>
      </section>

      <section className="tooltip-preview__section">
        <h2 className="tooltip-preview__section-title">Delay</h2>

        <div className="tooltip-preview__grid">
          <Tooltip content="No delay" delay={0} placement="top">
            <button className="tooltip-preview__trigger">Instant (0ms)</button>
          </Tooltip>

          <Tooltip content="Default delay" delay={200} placement="top">
            <button className="tooltip-preview__trigger">Default (200ms)</button>
          </Tooltip>

          <Tooltip content="Slow delay" delay={600} placement="top">
            <button className="tooltip-preview__trigger">Slow (600ms)</button>
          </Tooltip>
        </div>
      </section>

      <section className="tooltip-preview__section">
        <h2 className="tooltip-preview__section-title">On Inline Text</h2>

        <p className="tooltip-preview__prose">
          The match ended in a{' '}
          <Tooltip content="Both teams scored equal goals" placement="top">
            <span className="tooltip-preview__inline-trigger">draw</span>
          </Tooltip>
          , with{' '}
          <Tooltip content="Lionel Messi — 2 goals, 1 assist" placement="top">
            <span className="tooltip-preview__inline-trigger">the star player</span>
          </Tooltip>{' '}
          putting on an impressive performance.
        </p>
      </section>
    </main>
  );
}
