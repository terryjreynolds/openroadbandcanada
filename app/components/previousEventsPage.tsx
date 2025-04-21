import Link from "next/link";
import styles from "../page.module.css";

export default function PreviousEventsPage({
  events,
  currentPage,
  totalPages,
}: {
  events: any[];
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className={styles.eventGrid}>
      <div className={styles.backgroundCamaro}></div>
      <h2 className={styles.blogYellowHeadings}>Previous Events</h2>

      {events.map((event, index) => (
        <div key={index} className={styles.eventRow}>
          <p className={styles.eventItem}>Date: {event.date}</p>
          <p className={styles.eventItem}>Event: {event.event}</p>
          <p className={styles.eventItem}>Location: {event.location}</p>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link href={`/previousEvents?page=${currentPage - 1}`} className={styles.paginationButton}>
            Previous
          </Link>
        )}

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index}
            href={`/previousEvents?page=${index + 1}`}
            className={`${styles.paginationButton} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
          >
            {index + 1}
          </Link>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <Link href={`/previousEvents?page=${currentPage + 1}`} className={styles.paginationButton}>
            Next
          </Link>
        )}
      </div>
    </div>
  );
}