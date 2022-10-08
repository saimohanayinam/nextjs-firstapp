import MeetupList from "../components/meetups/MeetupList";

const dummymeet = [
  {
    id: 1,
    title: "first meetup",
    image:
      "https://images.unsplash.com/photo-1619878796466-b7982b1d9263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    address: "some address ",
    description: "firs meet",
  },
  {
    id: 2,
    title: "first meetup",
    image:
      "https://images.unsplash.com/photo-1555057918-9aadd809fb71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "some address ",
    description: "firs meet",
  },

  {
    id: 2,
    title: "first meetup",
    image:
      "https://images.unsplash.com/photo-1618082976772-d6e3f7baf51f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "some address ",
    description: "firs meet",
  },
];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   //fetch api
//   return {
//     props: {
//       meetups: dummymeet,
//     },
//   };
// };

export const getStaticProps = async () => {
  return {
    props: {
      meetups: dummymeet,
    },
    revalidate: 10,
  };
};
export default HomePage;
