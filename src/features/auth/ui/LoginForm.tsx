import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../shared/lib/hooks/useAuth';
import { Input } from '../../../shared/ui/Input/Input';
import { Button } from '../../../shared/ui/Button/Button';
import { ROUTES } from '../../../shared/config/routes';
import './LoginForm.css';

interface FormFields {
  username: string;
  password: string;
}

interface FormErrors {
  username: string;
  password: string;
  credentials: string;
}

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [fields, setFields] = useState<FormFields>({ username: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({ username: '', password: '', credentials: '' });
  const [loading, setLoading] = useState(false);

  const setField = (field: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields(prev => ({ ...prev, [field]: e.target.value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = { username: '', password: '', credentials: '' };

    if (!fields.username.trim()) {
      next.username = 'Username is required';
    }

    if (!fields.password.trim()) {
      next.password = 'Password is required';
    }

    setErrors(next);
    return !next.username && !next.password;
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setErrors(prev => ({ ...prev, credentials: '' }));
    setLoading(true);

    await new Promise(r => setTimeout(r, 600));

    const ok = login(fields.username, fields.password);

    if (ok) {
      navigate(ROUTES.COMPETITION);
    } else {
      setErrors(prev => ({ ...prev, credentials: 'Invalid credentials. Try admin / admin.' }));
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div className="login-form__header">
        <div className="login-form__logo">⚽ FC</div>
        <h1 className="login-form__title">Welcome Back</h1>
        <p className="login-form__subtitle">Sign in to access the championship platform</p>
      </div>

      <div className="login-form__fields">
        <Input
          label="Username"
          type="text"
          value={fields.username}
          onChange={setField('username')}
          error={errors.username}
          placeholder="Enter your username"
          autoComplete="username"
        />
        <Input
          label="Password"
          type="password"
          value={fields.password}
          onChange={setField('password')}
          error={errors.password}
          placeholder="Enter your password"
          autoComplete="current-password"
        />
      </div>

      {errors.credentials && <p className="login-form__error">{errors.credentials}</p>}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={loading}
        style={{ width: '100%' }}
      >
        {loading ? <span className="login-form__spinner" /> : 'Sign In'}
      </Button>

      <p className="login-form__hint">
        Demo credentials: <strong>admin</strong> / <strong>admin</strong>
      </p>
    </form>
  );
}
