import type { MatchEvent, MatchTimings } from '../../../entities/match/model/types';
import './MatchTimeline.css';

const EVENT_ICONS: Record<string, string> = {
  'goal': '⚽',
  'yellow-card': '🟨',
  'red-card': '🟥',
  'substitution': '🔄',
};

function formatMinute(minute: number, extraTime?: number): string {
  if (extraTime) {
    return `${minute}+${extraTime}'`;
  }

  return `${minute}'`;
}

function EventRow({ event }: { event: MatchEvent }) {
  const icon = EVENT_ICONS[event.type];
  const minute = formatMinute(event.minute, event.extraTime);
  const isHome = event.team === 'home';

  const detail = event.type === 'substitution' && event.playerOffName
    ? `↑ ${event.playerName} / ↓ ${event.playerOffName}`
    : event.assistName
      ? `${event.playerName} (${event.assistName})`
      : event.playerName;

  return (
    <div className={`timeline__event timeline__event--${event.team}`}>
      <div className="timeline__event-side timeline__event-side--home">
        {isHome && (
          <span className="timeline__event-content">
            <span className="timeline__event-icon">{icon}</span>
            <span className="timeline__event-detail">{detail}</span>
          </span>
        )}
      </div>

      <div className="timeline__event-minute">
        <span className="timeline__minute-bubble">{minute}</span>
      </div>

      <div className="timeline__event-side timeline__event-side--away">
        {!isHome && (
          <span className="timeline__event-content">
            <span className="timeline__event-detail">{detail}</span>
            <span className="timeline__event-icon">{icon}</span>
          </span>
        )}
      </div>
    </div>
  );
}

interface MatchTimelineProps {
  events: MatchEvent[];
  timings: MatchTimings;
}

export function MatchTimeline({ events, timings }: MatchTimelineProps) {
  const firstHalfEvents = events.filter(e => e.minute <= 45);
  const secondHalfEvents = events.filter(e => e.minute > 45);

  const halfTimeLabel = `Half Time  ${timings.firstHalfExtra > 0 ? `45+${timings.firstHalfExtra}'` : '45\''}`;
  const fullTimeLabel = `Full Time  ${timings.secondHalfExtra > 0 ? `90+${timings.secondHalfExtra}'` : '90\''}`;

  return (
    <div className="timeline">
      <div className="timeline__spine" />

      <div className="timeline__milestone timeline__milestone--kickoff">
        <span className="timeline__milestone-label">Kick Off</span>
        <span className="timeline__milestone-time">{timings.kickOff}</span>
      </div>

      {firstHalfEvents.map(event => (
        <EventRow key={event.id} event={event} />
      ))}

      <div className="timeline__milestone timeline__milestone--halftime">
        <span className="timeline__milestone-label">{halfTimeLabel}</span>
        <span className="timeline__milestone-break">
          {timings.halfTimeStart} – {timings.halfTimeEnd}
        </span>
      </div>

      {secondHalfEvents.map(event => (
        <EventRow key={event.id} event={event} />
      ))}

      <div className="timeline__milestone timeline__milestone--fulltime">
        <span className="timeline__milestone-label">{fullTimeLabel}</span>
        <span className="timeline__milestone-time">{timings.fullTimeEnd}</span>
      </div>
    </div>
  );
}
