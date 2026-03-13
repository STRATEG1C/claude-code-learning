import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../shared/lib/hooks/useAuth';
import { ThemeSwitcher } from '../../../features/theme/ui/ThemeSwitcher';
import { ROUTES } from '../../../shared/config/routes';
import './Header.css';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header__inner container">
        <NavLink to={ROUTES.COMPETITION} className="header__logo">
          ⚽ FC
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to={ROUTES.COMPETITION}
            className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
          >
            Competition
          </NavLink>
          <NavLink
            to={ROUTES.GROUP}
            className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
          >
            My Group
          </NavLink>
          <NavLink
            to={ROUTES.PLAYOFF}
            className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
          >
            Playoff
          </NavLink>
          <NavLink
            to={ROUTES.ABOUT}
            className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
          >
            About
          </NavLink>
        </nav>

        <div className="header__actions">
          <ThemeSwitcher />
          {user && (
            <>
              <span className="header__user">👤 {user.username}</span>
              <button className="header__logout" onClick={logout}>Sign out</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
