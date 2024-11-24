import { GoArrowUpRight } from "react-icons/go";

type MediaCardProps = {
  textColor?: string;
  title: string;
  desc: string;
  index: number
};

const MediaCard = ({ textColor, title, desc, index }: MediaCardProps ) => {
  return (
    <div className="p-10 rounded-3xl txt-white bg-neutral-800 text-white flex flex-col gap-5">
      <h2
        className={`text-4xl font-semibold ${
          textColor === "primary" ? " text-lime-500" : ""
        }`}
      >
       0 {" "} { index + 1}
      </h2>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-sm">
        {desc}
      </p>
      <button
        className={`flex justify-start gap-1 mt-5 items-center rounded-full  font-medium px-5 py-2 border w-40 hover:bg-lime-500 hover:text-black  ${
          textColor === "primary" ? " bg-lime-500 border-none text-neutral-800" : ""
        }`}
      >
        Learn more <GoArrowUpRight />
      </button>
    </div>
  );
};

export default MediaCard;
