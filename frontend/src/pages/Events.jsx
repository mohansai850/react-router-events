import axios from "axios";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

export const eventsLoader = () => {
  return axios
    .get("http://localhost:8080/events")
    .then((res) => {
      return res.data.events;
    })
    .catch((err) => {
      switch (err.status) {
        case 404:
          throw new Error({ message: err.message });
        case 500:
          throw new Error({ message: err.message });
        case 503:
          throw new Error({ message: err.message });
        default:
          throw new Error({ message: "Un-expected error occured!" });
      }
    });
};

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;
