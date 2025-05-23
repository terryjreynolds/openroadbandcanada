import { getEvents } from "../lib/getEvents";
import styles from "../page.module.css"
import Link from "next/link";

export async function getStaticProps() {
  const events =  getEvents();

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
     
      
      <h2 className={styles.blogYellowHeadings}>Upcoming Events</h2>
      {events.map((event, index) => (
        <div key={index}  className={styles.eventRow}
        >
          <p className={styles.eventItem}>Date: {event.date}</p>
          <p className={styles.eventItem}>Event: {event.event}</p>
          <p className={styles.eventItem}>Location: {event.location}</p>
        </div>
      ))}
      <Link className={styles.blogYellowHeadings} href="/previousEvents" >Previous Events</Link>
    </div>
  );
}