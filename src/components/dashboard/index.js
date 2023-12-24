import React, { useState } from "react";
import "./style.css";
import EventList from "../events/EventList";

import Api from "../../util/apiUtils";

export default function Dashboard() {
  const [events, setSetEvents] = useState([]);

  const fetchMovieHandler = () => {
    console.log("BUTTON CLICKED");
    Api.getDashBoardData().then((res) => {
        const data = res.results;
        setSetEvents(data);
    });
  };

  return (
    <>
      <div>Dashboard</div>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Events</button>
      </section>
      <EventList events={events}></EventList>
    </>
  );
}
