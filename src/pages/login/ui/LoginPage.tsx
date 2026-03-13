import { LoginForm } from '../../../features/auth/ui/LoginForm';
import './LoginPage.css';

export function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-page__bg">
        <div className="login-page__orb login-page__orb--1" />
        <div className="login-page__orb login-page__orb--2" />
        <div className="login-page__orb login-page__orb--3" />
      </div>

      <div className="login-page__hero">
        <div className="login-page__hero-logo">⚽</div>
        <h1 className="login-page__hero-title">FC Championship</h1>
        <p className="login-page__hero-tagline">Where Champions Are Made</p>
        <div className="login-page__hero-stats">
          <div className="login-page__hero-stat">
            <span className="login-page__hero-stat-value">32</span>
            <span className="login-page__hero-stat-label">Teams</span>
          </div>
          <div className="login-page__hero-stat-sep" />
          <div className="login-page__hero-stat">
            <span className="login-page__hero-stat-value">8</span>
            <span className="login-page__hero-stat-label">Groups</span>
          </div>
          <div className="login-page__hero-stat-sep" />
          <div className="login-page__hero-stat">
            <span className="login-page__hero-stat-value">5</span>
            <span className="login-page__hero-stat-label">Rounds</span>
          </div>
        </div>
      </div>

      <div className="login-page__form-wrap">
        <div className="login-page__form-card">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
