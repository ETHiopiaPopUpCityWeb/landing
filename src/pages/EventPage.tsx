import Events from "../components/event/Events";
// import EventDescription from "../components/event/EventDescription";

import MainEvent from "../components/MainEvent";

const EventPage = () => {
  return (
    <div>
      <MainEvent />
      {/* <EventDescription /> */}
      <Events />
    </div>
  );
};

export default EventPage;
