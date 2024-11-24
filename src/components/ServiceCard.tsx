import { MdEmojiEvents } from "react-icons/md";
import { Link } from "react-router-dom";

type ServicesCardProps = {
    isDark?: boolean;
    title: string,
    description: string
  };

const ServiceCard: React.FC<ServicesCardProps> = ({ isDark, title, description }) => {
    return (
        <Link to={`#`}>
          <div
            className={`flex min-w-[250px] transition-all duration-200 hover:scale-95 p-5 ${
              isDark ? "bg-lime-400 text-black" : "bg-neutral-700 text-white"
            }  rounded-xl flex-col gap-3 items-start  `}
          >
            <div className="">
              <div
                className={`rounded-full ${
                  isDark
                    ? "text-neutral-900 bg-lime-500"
                    : "text-lime-300 bg-neutral-500"
                } p-2`}
              >
                <MdEmojiEvents size={32} />
              </div>
            </div>
    
            <h1 className={`py-2`}>{title}</h1>
    
            <h1 className="text-sm font-light pb-5">
             {description}
            </h1>
          </div>
        </Link>
      );
}

export default ServiceCard