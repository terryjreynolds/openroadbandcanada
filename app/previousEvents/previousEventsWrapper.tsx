import { getPreviousEvents } from "../lib/getPreviousEvents";
import { paginatePreviousEvents } from "../lib/paginatePreviousEvents";
import PreviousEventsPage from "../components/previousEventsPage";

export default function PreviousEventsWrapper({ searchParams }: { searchParams: { page?: string } }) {
  const events = getPreviousEvents();

  // Get the current page from the query parameter (default to 1)
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const itemsPerPage = 8; // Number of events per page

  // Paginate the events
  const paginatedEvents = paginatePreviousEvents(events, currentPage, itemsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(events.length / itemsPerPage);

  return (
    <PreviousEventsPage
      events={paginatedEvents}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}