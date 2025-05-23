interface Event {
  date: string;
  event: string;
  location: string;
}

export function paginatePreviousEvents(events: Event[], page: number, itemsPerPage: number) {
    const startIndex = (page - 1) * itemsPerPage; // Calculate the starting index
    const endIndex = startIndex + itemsPerPage; // Calculate the ending index
    return events.slice(startIndex, endIndex); // Return only the items for the requested page
  }