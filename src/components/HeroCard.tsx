import React from 'react';

interface HeroCardProps {
    title: string;
    number: number;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, number }) => {
    return (
        <div className="p-2 px-3 bg-gray-100 rounded-xl">
            <h1 className="text-2xl font-medium">
                {number} <span className="">+</span>
            </h1>
            <h1 className="text-xs">{title}</h1>
        </div>
    );
}

export default HeroCard;