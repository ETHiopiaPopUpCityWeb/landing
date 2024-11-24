import { GoArrowUpRight } from "react-icons/go";
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
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, eos. Velit perspiciatis mollitia illo laboriosam obcaecati est, earum tempore reiciendis.",
    img: "https://placehold.co/600x400",
    link: "/",
  },
  {
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, eos. Velit perspiciatis mollitia illo laboriosam obcaecati est, earum tempore reiciendis.",
    img: "https://placehold.co/600x400",
    link: "/",
  },
  {
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, eos. Velit perspiciatis mollitia illo laboriosam obcaecati est, earum tempore reiciendis.",
    img: "https://placehold.co/600x400",
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
            : "bg-neutral-50 hover:bg-neutral-100"
        } p-5 rounded-xl min-w-[250px] flex flex-col gap-5`}
      >
        <img
          src={img}
          alt="hjhh"
          className="rounded-xl h-[250px] object-cover"
        />

        <div className={`text-lg font-medium ${isDark ? "text-white" : ""} `}>
          <h1>{title}</h1>
        </div>

        <div
          className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"} `}
        >
          <p>{desc}</p>
        </div>
        <div
          className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"} `}
        >
          <Link
            to={link}
            className={`flex justify-start gap-1 items-center rounded-full  font-medium px-5 py-2 border hover:bg-lime-500 hover:text-black border-gray-500 w-40 `}
          >
            Get Your Photos <GoArrowUpRight />
          </Link>
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
            <div className="">
              <p className="px-4 py-1 border rounded-full text-sm ">EVENTS</p>
            </div>
            <div className="">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight ">
                Lorem, ipsum dolor.
              </h1>
            </div>

            {/* <h4 className="text-gray-600 text-center font-light leading-relaxed text-base max-w-5xl lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis explicabo minima recusandae esse suscipit repellat
              pariatur quidem veritatis quae tenetur quam magnam expedita est,
            </h4> */}
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
