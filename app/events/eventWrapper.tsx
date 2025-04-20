import { Suspense } from "react";
import EventPage from "../components/eventPage";
import { getEvents } from "../lib/getEvents";

export default async function EventWrapper() {
  try {
    // Fetch the events data
    const events = await getEvents();

    return (
      <Suspense fallback={<div>Loading events...</div>}>
        <EventPage events={events} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return <div>Failed to load events. Please try again later.</div>;
  }
}