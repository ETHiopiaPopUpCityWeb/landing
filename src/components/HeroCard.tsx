import React from "react";

interface HeroCardProps {
  title: string;
  number: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, number }) => {
  return (
    <div className="p-4 px- text-orange-800  rounded-2xl">
      <h1 className="text-2xl lg:text-4xl font-semibold">
        {number}
      </h1>
      <h1 className="text-base">{title}</h1>
    </div>
  );
};

export default HeroCard;
