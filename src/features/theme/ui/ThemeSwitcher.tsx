import { useTheme } from '../../../shared/lib/hooks/useTheme';
import './ThemeSwitcher.css';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-switcher ${theme === 'light' ? 'theme-switcher--light' : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="theme-switcher__track">
        <span className="theme-switcher__thumb">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  );
}
