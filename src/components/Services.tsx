import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="my-14">
      <div className=" flex justify-center">
        <div className="p-8 py-14 bg-neutral-800 max-w-[83rem] rounded-3xl max-sm:w-full flex flex-col justify-start items-start gap-4">
          <div className="">
            <p className="px-4 py-1 border rounded-full text-sm text-white">
              The Vision
            </p>
          </div>

          <div className="flex w-full gap-3 max-sm:flex-col justify-between">
            <div className="">
              <h1 className="text-2xl w-[500px] max-sm:w-full font-medium text-white">
                Ideate, Hack, and Build - Uniting Africa's Web3 Changemakers
              </h1>
            </div>
          </div>

          <div className="mt-8 grid gap-8 max-sm:grid-cols-1 grid-cols-4 ">
            <ServiceCard
              title="01"
              description="Unite 50 of Africa's top builders
and Web3 community leaders
from across the continent—yes,
the first reunion of West, North,
East, and Southern Africa—right
in the heart of Africa’s Union hub,
Addis Ababa."
            />
            <ServiceCard
              title="02"
              isDark
              description="Host Ethiopia’s first
Ethereum-focused event,
blending a world-class
hackathon with a cutting-
edge, government-tech-
focused conference."
            />
            <ServiceCard
              title="03"
              description="

Welcome Ethiopia’s local tech
community into the Ethereum
ecosystem, opening doors for
them to engage with its
values, contribute, and
innovate."
            />
            <ServiceCard
              title="04"
              description="Invite the global Web3 community
to discover Ethiopia, an alternate
universe where innovation meets
tradition. Did you know it's 2017 in
Ethiopia right now? Immerse
yourself in a one-of-a-kind
destination. 
"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
