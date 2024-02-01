// Events.jsx
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
import { getEvents } from "../../@core/api/events";
import BackButton from "../../@core/utils/back-button";
import EventItem from "../../components/events/eventItem";
import useEventsStore from "../../store/event-store";

function Events() {
  const { data: inievents, isLoading, isError } = useQuery("events", getEvents);
  const { setInitialEvents, events } = useEventsStore();
  console.log(inievents);
  useEffect(() => {
    // Set initial events when data is available
    if (inievents && inievents.length > 0) {
      setInitialEvents(inievents); // Use inievents instead of events
    }
  }, [inievents, setInitialEvents]);

  if (isLoading) {
    // Display loading skeleton while data is being fetched
    return (
      <div className="container p-4">
        <BackButton title={<Skeleton width={200} />} />
        <ul className="space-y-4">
          {[1, 2, 3].map((index) => (
            <li key={index} className="flex items-center justify-between">
              <EventItemSkeleton />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (isError) {
    return <div className="container">Error fetching events</div>;
  }

  return (
    <div className="container p-4">
      <BackButton title="مدیریت رویدادها" />
      {events && events?.length > 0 ? (
        <ul className="space-y-4">
          {events?.map((event, index) => (
            <li
              key={event.id ? event.id : index}
              className="flex items-center justify-between"
            >
              <EventItem item={event} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
}

// Add a simple loading skeleton for the event item
const EventItemSkeleton = () => (
  <div className="flex items-center justify-between">
    <Skeleton className="w-full" height={20} />
    <Skeleton className="w-full" height={20} />
  </div>
);

export default Events;
