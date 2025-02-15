import axios from "axios";
import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetail() {
  const { event } = useRouteLoaderData("event-detail");
  return <EventItem event={event} />;
}

export const loader = async ({ params }) => {
  const response = await axios.get(`http://localhost:8080/events/${params.id}`);
  return response.data;
};

export const action = async ({ params }) => {
  console.log("in action");
  const response = await axios.delete(
    `http://localhost:8080/events/${params.id}`
  );

  return redirect("/events");
};
