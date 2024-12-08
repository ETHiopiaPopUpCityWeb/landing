import React from "react";

interface HeroCardProps {
  title: string;
  number: number;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, number }) => {
  return (
    <div className="p-4 px-6    text-orange-800  rounded-2xl">
      <h1 className="text-4xl font-semibold">
        {number}
        <span className="">+</span>
      </h1>
      <h1 className="text-base">{title}</h1>
    </div>
  );
};

export default HeroCard;
