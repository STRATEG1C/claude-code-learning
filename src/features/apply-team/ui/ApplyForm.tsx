import { useState } from 'react';
import { Input } from '../../../shared/ui/Input/Input';
import { Button } from '../../../shared/ui/Button/Button';
import type { TeamApplication, TeamApplicationErrors } from '../model/types';
import './ApplyForm.css';

const EMPTY_FIELDS: TeamApplication = { teamName: '', captainName: '', playerCount: '' };
const EMPTY_ERRORS: TeamApplicationErrors = { teamName: '', captainName: '', playerCount: '' };

export function ApplyForm({ onClose }: { onClose: () => void }) {
  const [fields, setFields] = useState<TeamApplication>(EMPTY_FIELDS);
  const [errors, setErrors] = useState<TeamApplicationErrors>(EMPTY_ERRORS);
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof TeamApplication) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = (): boolean => {
    const next = { ...EMPTY_ERRORS };
    if (!fields.teamName.trim()) next.teamName = 'Team name is required';
    if (!fields.captainName.trim()) next.captainName = 'Captain name is required';

    const count = Number(fields.playerCount);
    if (!fields.playerCount.trim()) {
      next.playerCount = 'Player count is required';
    } else if (isNaN(count) || count < 5 || count > 11) {
      next.playerCount = 'Must be between 5 and 11 players';
    }

    setErrors(next);
    return !next.teamName && !next.captainName && !next.playerCount;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="apply-form__success">
        <div className="apply-form__success-icon">✓</div>
        <h3 className="apply-form__success-title">Application Submitted!</h3>
        <p className="apply-form__success-text">
          <strong>{fields.teamName}</strong> has been registered for the championship.
          We'll be in touch with <strong>{fields.captainName}</strong> soon.
        </p>
        <Button variant="secondary" size="md" onClick={onClose}>Close</Button>
      </div>
    );
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit} noValidate>
      <div className="apply-form__fields">
        <Input
          label="Team Name"
          type="text"
          value={fields.teamName}
          onChange={setField('teamName')}
          error={errors.teamName}
          placeholder="e.g. FC Destroyers"
        />
        <Input
          label="Captain Name"
          type="text"
          value={fields.captainName}
          onChange={setField('captainName')}
          error={errors.captainName}
          placeholder="e.g. John Doe"
        />
        <Input
          label="Number of Players (5–11)"
          type="number"
          value={fields.playerCount}
          onChange={setField('playerCount')}
          error={errors.playerCount}
          placeholder="e.g. 11"
          min={5}
          max={11}
        />
      </div>
      <div className="apply-form__actions">
        <Button type="button" variant="ghost" size="md" onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="primary" size="md">Apply Now</Button>
      </div>
    </form>
  );
}
