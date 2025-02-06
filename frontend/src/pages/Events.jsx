import axios from "axios";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

export const eventsLoader = () => {
  return axios
    .get("http://localhost:8080/events")
    .then((res) => {
      console.log(res.data.events);
      return res.data.events;
    })
    .catch((err) => {
      console.log(err);
    });
};

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;
