import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../shared/lib/hooks/useAuth';
import { LoginPage } from '../../pages/login/ui/LoginPage';
import { CompetitionPage } from '../../pages/competition/ui/CompetitionPage';
import { GroupPage } from '../../pages/group/ui/GroupPage';
import { PlayoffPage } from '../../pages/playoff/ui/PlayoffPage';
import { AboutPage } from '../../pages/about/ui/AboutPage';
import { ROUTES } from '../../shared/config/routes';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to={ROUTES.LOGIN} replace />;
}

export function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.COMPETITION} element={<ProtectedRoute><CompetitionPage /></ProtectedRoute>} />
      <Route path={ROUTES.GROUP} element={<ProtectedRoute><GroupPage /></ProtectedRoute>} />
      <Route path={ROUTES.PLAYOFF} element={<ProtectedRoute><PlayoffPage /></ProtectedRoute>} />
      <Route path={ROUTES.ABOUT} element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to={ROUTES.COMPETITION} replace />} />
    </Routes>
  );
}
