import { useContext } from 'react';
import { AuthContext } from '../../../features/auth/model/authContext';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
