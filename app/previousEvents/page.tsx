import PreviousEventsWrapper from "./previousEventsWrapper";

export default function Page({ searchParams }: { searchParams: { page?: string } }) {
  return <PreviousEventsWrapper searchParams={searchParams} />;
}