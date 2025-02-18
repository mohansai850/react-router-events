import axios from "axios";
import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";

export default function NewEvent() {
  return <EventForm />;
}

export async function action({ request, params }) {
  const formData = await request.formData();

  const formValues = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const response = await axios.post("http://localhost:8080/events", formValues);
  console.log(response);
  if (response.status === 422) {
    console.log(response);
    return response;
  }
  if (response.ok) return redirect("/events");
}
