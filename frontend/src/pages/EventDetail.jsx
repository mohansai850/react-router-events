import { useParams } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{id}</p>
    </>
  );
}
