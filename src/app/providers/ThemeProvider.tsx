import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../../shared/lib/hooks/useTheme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
}
