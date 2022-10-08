import React from "react";
import classes from "./meetupDetail.module.css";

const MeetupDetails = (props) => {
  return (
    <section className={classes.details}>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.address}</p>
    </section>
  );
};

export default MeetupDetails;
