/**
 * Events — Event list/calendar cards.
 */
import { events } from '../../data/content';
import { MapPin, Calendar, Tag } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import styles from './Events.module.css';

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: d.toLocaleDateString('en-GB', { month: 'short' }),
    year: d.getFullYear(),
    full: d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  };
};

const Events = () => (
  <main id="main-content" className={styles.page}>
    <div className="container">
      <div className={styles.pageHeader}>
        <h1 className="section-title">Upcoming Events</h1>
        <p className="section-subtitle">Discover lectures, open days, networking evenings, and more.</p>
      </div>

      <ul className={styles.list}>
        {events.map(event => {
          const date = formatDate(event.date);
          return (
            <li key={event.id} className={styles.item}>
              {/* Date badge */}
              <div className={styles.dateBadge} aria-label={date.full}>
                <span className={styles.dateDay}>{date.day}</span>
                <span className={styles.dateMonth}>{date.month}</span>
                <span className={styles.dateYear}>{date.year}</span>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.top}>
                  <h2 className={styles.title}>{event.title}</h2>
                  <span className={styles.categoryTag}>
                    <Tag size={11} aria-hidden="true" /> {event.category}
                  </span>
                </div>
                <p className={styles.desc}>{event.description}</p>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <MapPin size={13} aria-hidden="true" /> {event.location}
                  </span>
                  <span className={styles.metaItem}>
                    <Calendar size={13} aria-hidden="true" /> {date.full}
                  </span>
                </div>
              </div>

              <Button variant="outline" size="sm" className={styles.registerBtn}>
                Register
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  </main>
);

export default Events;
