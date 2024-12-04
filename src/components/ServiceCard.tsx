import { Link } from "react-router-dom";

type ServicesCardProps = {
  isDark?: boolean;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServicesCardProps> = ({
  isDark,
  title,
  description,
}) => {
  return (
    <Link to="#">
      <div
        className={`flex min-w-[250px] transition-transform duration-200 hover:scale-105 p-6 h-72 ${
          isDark ? "bg-lime-400 text-black" : "bg-neutral-700 text-white"
        } rounded-xl flex-col gap-4 items-start shadow-md hover:shadow-lg`}
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full text-lg font-semibold">
          <div
            className={`w-full h-full flex items-center justify-center rounded-full text-2xl ${
              isDark ? "text-black bg-lime-300" : "text-lime-400 bg-neutral-600"
            }`}
          >
            <h2>{title}</h2>
          </div>
        </div>

        <h1 className="text-sm font-light tracking-wider leading-snug">
          {description}
        </h1>
      </div>
    </Link>
  );
};

export default ServiceCard;
