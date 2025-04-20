import { Suspense } from "react";
import EventPage from "../components/previousEventsPage";
import { getPreviousEvents } from "../lib/getPreviousEvents";

export default async function PreviousEventWrapper() {
  try {
    // Fetch the events data
    const previousEvents = await getPreviousEvents();

    return (
      <Suspense fallback={<div>Loading events...</div>}>
        <EventPage events={previousEvents} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return <div>Failed to load events. Please try again later.</div>;
  }
}