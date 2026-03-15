import './ProgressBar.css';

type ProgressBarVariant = 'primary' | 'success' | 'accent' | 'warning';
type ProgressBarSize = 'sm' | 'md' | 'lg';

interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: ProgressBarVariant;
  size?: ProgressBarSize;
  label?: string;
  showValue?: boolean;
  animated?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  label,
  showValue = false,
  animated = false,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const percent = (clamped / max) * 100;

  return (
    <div className={`progress-bar-wrapper ${className}`}>
      {(label || showValue) && (
        <div className="progress-bar__header">
          {label && <span className="progress-bar__label">{label}</span>}
          {showValue && (
            <span className="progress-bar__value">{Math.round(percent)}%</span>
          )}
        </div>
      )}

      <div
        className={`progress-bar progress-bar--${size}`}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={`progress-bar__fill progress-bar__fill--${variant} ${animated ? 'progress-bar__fill--animated' : ''}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
