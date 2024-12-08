type MediaCardProps = {
  textColor?: string;
  title?: string;
  desc: string;
  index: number;
};

const MediaCard = ({ title, desc, index }: MediaCardProps) => {
  return (
    <div className="p-10 rounded-3xl txt-white bg-orange-100 text-gray-900 flex flex-col gap-5">
      <h2 className={`text-4xl font-semibold text-orange-700`}>0{index + 1}</h2>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-lg">{desc}</p>
    </div>
  );
};

export default MediaCard;
