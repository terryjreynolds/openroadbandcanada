import { getEvents } from "../lib/getEvents";
import styles from "../page.module.css"

export async function getStaticProps() {
  const events = getEvents();

  return {
    props: {
      events,
    },
  };
}

export default function EventsPage({ events }: { events: any[] }) {
  return (
    <div className={styles.eventGrid}>
      <div className={styles.backgroundCamaro}></div>
      
      <h1>Upcoming Events</h1>
      {events.map((event, index) => (
        <div key={index}  className={styles.eventRow}
        >
          <p className={styles.eventItem}>Date: {event.date}</p>
          <p className={styles.eventItem}>Event: {event.event}</p>
          <p className={styles.eventItem}>Location: {event.location}</p>
        </div>
      ))}
    </div>
  );
}