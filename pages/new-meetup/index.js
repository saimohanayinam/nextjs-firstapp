import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetup = () => {
  const onAddMeetup = (data) => {
    console.log(data);
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </div>
  );
};

export default newMeetup;
