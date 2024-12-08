import { Link } from "react-router-dom";

type EventCardProps = {
  isDark?: boolean;
  title: string;
  desc: string;
  img: string;
  link: string;
};

const eventData = [
  {
    title: "Conference",
    desc: "Explore Web3's future from global leaders and African pioneers.",
    img: "/conf.jpg",
    link: "/",
  },
  {
    title: "Builders Residency",
    desc: "Web3 leaders meet to collab, Ideate, prep for Hackathon by Lake Hawassa",
    img: "/lake.jpg",
    link: "/",
  },
  {
    title: "Hackathon",
    desc: "Create blockchain innovation, solve challenges, win prizes and network",
    img: "/hack2.jpg",
    link: "/",
  },
];

const EventCard = ({ isDark, title, desc, img, link }: EventCardProps) => {
  return (
    <Link to={link}>
      <div
        className={`transition-all duration-200 ${
          isDark
            ? "bg-neutral-800 hover:bg-neutral-900"
            : "bg-gray-100 hover:bg-neutral-100"
        } p-5 rounded-xl min-w-[250px] bg-neutral-100 flex flex-col gap-5`}
      >
        <img
          src={img}
          alt="hjhh"
          className="rounded-xl h-[250px] object-cover"
        />

        <div
          className={`text-2xl font-semibold ${isDark ? "text-white" : ""} `}
        >
          <h1>{title}</h1>
        </div>

        <div
          className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"} `}
        >
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

const Events = () => {
  return (
    <div className="my-14">
      <div className=" flex justify-center">
        <div className=" max-w-[83rem] rounded-3xl max-sm:w-full flex flex-col justify-start items-start gap-4">
          <div className="flex w-full gap-3 flex-col items-center">
            <div className=""></div>
            <div className="">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight ">
                EVENTS
              </h1>
            </div>
          </div>

          <div className="mt-8 grid gap-8 px-5 max-sm:grid-cols-1 grid-cols-3 ">
            {eventData.map((item) => (
              <EventCard
                desc={item.desc}
                img={item.img}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
