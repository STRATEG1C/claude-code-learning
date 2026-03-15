import { IconButton } from '../../../shared/ui/IconButton/IconButton';
import './IconButtonPreviewPage.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const BellIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);

export function IconButtonPreviewPage() {
  return (
    <main className="ibp container">
      <h1 className="ibp__title">IconButton</h1>
      <p className="ibp__desc">
        A compact square button designed to hold a single icon. Supports three variants and three sizes.
      </p>

      <section className="ibp__section">
        <h2 className="ibp__section-title">Variants</h2>

        <div className="ibp__row">
          <div className="ibp__item">
            <IconButton variant="primary" icon={<StarIcon />} aria-label="Favourite" />
            <span className="ibp__label">primary</span>
          </div>

          <div className="ibp__item">
            <IconButton variant="secondary" icon={<HeartIcon />} aria-label="Like" />
            <span className="ibp__label">secondary</span>
          </div>

          <div className="ibp__item">
            <IconButton variant="ghost" icon={<BellIcon />} aria-label="Notifications" />
            <span className="ibp__label">ghost</span>
          </div>
        </div>
      </section>

      <section className="ibp__section">
        <h2 className="ibp__section-title">Sizes</h2>

        <div className="ibp__row ibp__row--align-end">
          <div className="ibp__item">
            <IconButton size="sm" icon={<EditIcon />} aria-label="Edit" />
            <span className="ibp__label">sm</span>
          </div>

          <div className="ibp__item">
            <IconButton size="md" icon={<EditIcon />} aria-label="Edit" />
            <span className="ibp__label">md</span>
          </div>

          <div className="ibp__item">
            <IconButton size="lg" icon={<EditIcon />} aria-label="Edit" />
            <span className="ibp__label">lg</span>
          </div>
        </div>
      </section>

      <section className="ibp__section">
        <h2 className="ibp__section-title">All Variants × All Sizes</h2>

        <div className="ibp__grid">
          {(['primary', 'secondary', 'ghost'] as const).map((variant) =>
            (['sm', 'md', 'lg'] as const).map((size) => (
              <div className="ibp__item" key={`${variant}-${size}`}>
                <IconButton variant={variant} size={size} icon={<ShareIcon />} aria-label="Share" />
                <span className="ibp__label">{variant} / {size}</span>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="ibp__section">
        <h2 className="ibp__section-title">Disabled</h2>

        <div className="ibp__row">
          <div className="ibp__item">
            <IconButton variant="primary" icon={<StarIcon />} aria-label="Favourite" disabled />
            <span className="ibp__label">primary</span>
          </div>

          <div className="ibp__item">
            <IconButton variant="secondary" icon={<HeartIcon />} aria-label="Like" disabled />
            <span className="ibp__label">secondary</span>
          </div>

          <div className="ibp__item">
            <IconButton variant="ghost" icon={<TrashIcon />} aria-label="Delete" disabled />
            <span className="ibp__label">ghost</span>
          </div>
        </div>
      </section>
    </main>
  );
}
