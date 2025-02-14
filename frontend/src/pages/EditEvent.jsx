import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEvent() {
  const { event } = useRouteLoaderData("event-detail");
  console.log("edit-event-comp", event);
  return <EventForm event={event} />;
}
