import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="my-14">
      <div className=" flex justify-center">
        <div className="p-8 py-14 bg-neutral-800 max-w-[83rem] rounded-3xl max-sm:w-full flex flex-col justify-start items-start gap-4">
          <div className="">
            <p className="px-4 py-1 border rounded-full text-sm text-white">
              Lorem, ipsum.
            </p>
          </div>

          <div className="flex w-full gap-3 max-sm:flex-col justify-between">
            <div className="">
              <h1 className="text-2xl w-[500px] max-sm:w-full font-medium text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                facere?
              </h1>
            </div>
          </div>

          <div className="mt-8 grid gap-8 max-sm:grid-cols-1 grid-cols-4 ">
            <ServiceCard
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis alias minima iusto itaque, similique minus aliquid incidunt cum saepe."
            />
            <ServiceCard
              isDark
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis alias minima iusto itaque, similique minus aliquid incidunt cum saepe."
            />
            <ServiceCard
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis alias minima iusto itaque, similique minus aliquid incidunt cum saepe."
            />
            <ServiceCard
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis alias minima iusto itaque, similique minus aliquid incidunt cum saepe. 
"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
