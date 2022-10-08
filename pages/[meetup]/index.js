import React from "react";
import { useRouter } from "next/router";
import MeetupDetails from "../../components/meetups/meetupDetails";

const index = (props) => {
  const router = useRouter();
  console.log(router.query.meetup);

  return (
    <MeetupDetails
      img={props.img}
      title={props.title}
      address={props.address}
    />
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetup: "1",
        },
      },
      {
        params: {
          meetup: "2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetup = context.params.meetup;
  console.log(meetup);
  return {
    props: {
      img: "https://images.unsplash.com/photo-1619878796466-b7982b1d9263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "jkfhjsdkfhsda",
      address: "jd dikdfuyofd fsdfiuy ifuh",
      id: meetup,
    },
  };
};

export default index;
