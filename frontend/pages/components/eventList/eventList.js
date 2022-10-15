import React from "react";
import classes from "../../../styles/eventList.module.css";
function EventList({ eventData, index }) {
  return (
    <div className={classes.eventList}>
      <p>{index + 1}</p>
      <p>{eventData.name}</p>
      <p>{eventData.description}</p>
      <p>{eventData.time}</p>
      <a href={eventData.meetlink}>Link</a>
    </div>
  );
}

export default EventList;
