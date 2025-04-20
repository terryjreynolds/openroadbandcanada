import { getPreviousEvents } from "../lib/getPreviousEvents";
import styles from "../page.module.css"

export async function getStaticProps() {
  const events = getPreviousEvents();

  return {
    props: {
      events,
    },
  };
}

export default function PreviousEventsPage({ events }: { events: any[] }) {
  return (
    <div className={styles.eventGrid}>
      <div className={styles.backgroundCamaro}></div>
      
      <h2 className={styles.blogYellowHeadings}>Previous Events</h2>
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