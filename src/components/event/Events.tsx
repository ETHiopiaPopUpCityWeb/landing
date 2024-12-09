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
    desc: "Join us for the 1st Ethereum Conference in Ethiopia, a landmark event exploring how Ethereum can scale across Africa to unlock its immense potential. Over two days, we’ll delve into the transformative power of decentralized technologies, showcasing African-led innovations and spotlighting the continent's role in shaping Ethereum’s future. Expect an inspiring mix of panel discussions, expert-led sessions, and community showcases—designed to connect developers, entrepreneurs, policymakers, and visionaries from across Africa and the global Ethereum ecosystem.",
    img: "/conf.jpg",
    link: "https://lu.ma/hvmpj8k5",
  },
  {
    title: "Builders Residency",
    desc: "January 21-February 21st This is where the collaboration magic happens, builders on the continent often fight for the same ressources and have limited opportunities to network, learn from and collaborate with each other. This is a call to action for all the changemakers ready to strategize on what does ethereum look like on the continent with a focus on human incubation, ideation and united nations style round circle ideations. Curious to learn more about our full ETHiopia Pop Up evolving Agenda?",
    img: "/lake.jpg",
    link: "https://hackmd.io/wfQg8ON-TMWsYrT3xEqoDA?view",
  },
  {
    title: "Hackathon",
    desc: "A hackathon is an intense, collaborative event where developers, designers, and innovators come together to solve problems, build projects, and create solutions using technology, in this case Ethereum and products in its ecosystem! This week-long experience combines expert-led workshops in Solidity development, interactive problem-solving sessions, and opportunities to push boundaries in real world blockchain innovation.From ideation to creation, participants will learn, code, and innovate together in a fast-paced environment that encourages creativity, skill-building, and community-building. By the end of the week, you'll leave with real-world accomplishments, new projects, and a stronger network to continue contributing to the Ethereum ecosystem.",
    img: "/hack2.jpg",
    link: "https://lu.ma/20nminfw",
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
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} `}
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
