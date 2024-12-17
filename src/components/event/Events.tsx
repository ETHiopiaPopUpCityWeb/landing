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
    desc: "Join us for the 1st Ethereum Conference in Ethiopia, a groundbreaking event on scaling Ethereum across Africa. Over two days, explore decentralized technologies, African-led innovations, and the continent’s pivotal role in Ethereum’s future through panels, expert sessions, and community showcases.",
    img: "/science.jpg",
    link: "https://lu.ma/hvmpj8k5",
  },

  {
    title: "Hackathon",
    desc: "A hackathon is an intense, collaborative challenge where developers and innovators solve problems, build projects, and create real applications using blockchain technology, in this case Ethereum & its ecosystem. During this week-long experience, participants will attend expert-led workshops, and will leave with tangible accomplishments, new projects, and a network to keep innovating. ",
    img: "/hacks.webp",
    link: "https://lu.ma/20nminfw",
  },
  {
    title: "Builders Residency",
    desc: "This is where Africa’s builders come together to share resources, network, and collaborate on shaping Ethereum’s future on the continent. Through focused ideation sessions, human incubation, and United Nations-style roundtable discussions, this builder residency is tailored to Africa’s unique community needs.",
    img: "/res.jpg",
    link: "https://tally.so/r/3qjPD7",
  },
];

const EventCard = ({ isDark, title, desc, img, link }: EventCardProps) => {
  return (
    <div>
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
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} `}
        >
          <p>{desc}</p>
        </div>
        <div>
          <Link
            className="bg-orange-800 hover:bg-orange-700 px-6 py-2 text-white  rounded-full inline-flex"
            to={link}
            type="button"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
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
