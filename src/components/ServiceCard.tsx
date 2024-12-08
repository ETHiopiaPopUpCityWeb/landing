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
        className={`flex min-w-[250px] transition-transform duration-300 hover:scale-105 p-6 h-72 ${
          isDark ? "bg-orange-100 text-black" : "bg-orange-100 text-black"
        } rounded-2xl flex-col gap-4 items-start shadow-lg hover:shadow-xl`}
      >
        {/* Title Circle */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full text-lg font-semibold">
          <div
            className={`w-full h-full flex items-center justify-center rounded-full text-2xl ${
              isDark
                ? "text-orange-600 bg-orange-200"
                : "text-orange-600 bg-orange-200"
            }`}
          >
            <h2>{title}</h2>
          </div>
        </div>

        {/* Description */}
        <h1 className="text-sm font-medium tracking-wide leading-relaxed">
          {description}
        </h1>
      </div>
    </Link>
  );
};

export default ServiceCard;
