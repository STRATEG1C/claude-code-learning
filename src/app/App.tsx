import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../features/theme/model/themeContext';
import { AuthProvider } from '../features/auth/model/authContext';
import { AppRouter } from './router/AppRouter';
import './styles/global.css';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
