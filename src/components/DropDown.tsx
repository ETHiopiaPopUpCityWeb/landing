import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface DataType {
  title: string;
  content: string;
}

interface DropDownProps {
  data: DataType[];
}

const DropDown = ({ data }: DropDownProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const parseContentWithLinks = (content: string) => {
    const parts = content.split(/(https?:\/\/[\w.\/-]+)/g);
    return parts.map((part, index) => {
      if (part.match(/https?:\/\/[\w.\/-]+/)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="w-full mx-auto">
      {data.map((item, index) => (
        <div key={index} className="mb-4 border rounded-lg overflow-hidden shadow-sm">
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold text-gray-800 text-start">{item.title}</span>
            {activeIndex === index ? (
              <FiChevronUp className="text-gray-500 transition-transform duration-200 transform rotate-180" size={20} />
            ) : (
              <FiChevronDown className="text-gray-500 transition-transform duration-200 transform rotate-0" size={20} />
            )}
          </button>
          <div
            className={`transition-all  overflow-hidden ${
              activeIndex === index ? "max-h-[500px] p-4 opacity-100" : "max-h-0 opacity-0 px-4 "
            }`}
          >
            <p className="text-gray-700 text-sm">{parseContentWithLinks(item.content)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
