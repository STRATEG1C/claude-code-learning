import './Avatar.css';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  name: string;
  size?: AvatarSize;
  className?: string;
}

const PALETTE = [
  '#5b5bd6',
  '#e54666',
  '#099268',
  '#f76707',
  '#7048e8',
  '#0c8599',
];

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
}

function getColor(name: string): string {
  return PALETTE[name.charCodeAt(0) % PALETTE.length];
}

export function Avatar({ name, size = 'md', className = '' }: AvatarProps) {
  const classes = ['avatar', `avatar--${size}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes} style={{ '--avatar-bg': getColor(name) } as React.CSSProperties}>
      {getInitials(name)}
    </span>
  );
}
