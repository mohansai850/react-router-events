import axios from "axios";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetail() {
  const { event } = useRouteLoaderData("event-detail");
  // console.log(event);
  return <EventItem event={event} />;
}

export const loader = async ({ request, params }) => {
  const response = await axios.get(`http://localhost:8080/events/${params.id}`);
  return response.data;
};
