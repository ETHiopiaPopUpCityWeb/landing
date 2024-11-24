import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

type EventCardProps = {
  isDark?: boolean;
};

const EventCard = ({ isDark }: EventCardProps) => {
  return (
    <Link to={`#`}>
      <div
        className={`transition-all duration-200 ${
          isDark
            ? "bg-neutral-800 hover:bg-neutral-900"
            : "bg-neutral-50 hover:bg-neutral-100"
        } p-5 rounded-xl min-w-[250px] flex flex-col gap-5`}
      >
        <img
          src="https://images.unsplash.com/photo-1576158113928-4c240eaaf360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="hjhh"
          className="rounded-xl h-[250px] object-cover"
        />

        <div className={`text-lg font-medium ${isDark ? "text-white" : ""} `}>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </div>

        <div
          className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"} `}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            quaerat suscipit, ad inventore dolores officia non blanditiis eos
            optio
          </p>
        </div>
        <div
          className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"} `}
        >
          <button
            className={`flex justify-start gap-1 items-center rounded-full  font-medium px-5 py-2 border hover:bg-lime-500 hover:text-black border-gray-500 w-40 `}
          >
            Learn more <GoArrowUpRight />
          </button>
        </div>
      </div>
    </Link>
  );
};

const Event = () => {
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
                Lorem ipsum dolor sit
              </h1>
            </div>

            <h4 className="text-gray-600 text-center font-light leading-relaxed text-base max-w-5xl lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis explicabo minima recusandae esse suscipit repellat
              pariatur quidem veritatis quae tenetur quam magnam expedita est,
            </h4>
          </div>

          <div className="mt-8 grid gap-8 max-sm:grid-cols-1 grid-cols-3 ">
            <EventCard />
            <EventCard isDark />
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
