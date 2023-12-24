import React from "react";
import { Link } from 'react-router-dom';
import Movie from "./Event";
import classes from "./EventList.module.css";
import { useState } from "react";
import Api from "../../util/apiUtils";

const EventList = (props) => {

  const [events, setSetEvents] = useState([]);

  const fetchMovieHandler = () => {
    console.log("BUTTON CLICKED");
    Api.getDashBoardData().then((res) => {
      const data = res.results;
      setSetEvents(data);
    });
  };

  console.log(props.events);

  return (
    <ul className={classes["movies-list"]}>
      <button onClick={fetchMovieHandler}>Fetch Events</button>
      {props.events.map((event) => (
        <Movie
          key={event.episode_id}
          title={event.title}
          releaseDate={event.release_date}
          openingText={event.opening_crawl}
        />
      ))}
    </ul>
  );
};

export default EventList;
