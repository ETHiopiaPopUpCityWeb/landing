import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-[83rem] px-4 sm:px-0 lg:px-0">
          <div className="xl:p-16 gap-32 p-12 rounded-3xl bg-neutral-800 flex  justify-between flex-col lg:flex-row">
            <div className="w-full lg:w-2/6 relative">
              <img
                src="https://placehold.co/600x650"
                alt="CTA tailwind section"
                className="xl:absolute xl:bottom-0 rounded-t-3xl -mb-12 mx-auto lg:-mb-12 xl:-mb-16 lg:mx-0 object-cover"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="px-2 py-1 border w-40 md:text-center rounded-full text-sm font-medium text-white">
                Lorem, ipsum.
              </p>
              <h2 className="font-manrope text-white text-3xl md:text-5xl text-megastorePrimary font-semibold mb-7 lg:text-left">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-lg text-white leading-8 mb-12 lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore aliquid ducimus id numquam aperiam aut quibusdam
                nostrum quasi, porro tempore?  id numquam aperiam aut quibusdam
                nostrum quasi, porro tempore?
              </p>
              <Link
                to="https://www.instagram.com/jeba_megastore?igsh=MWEyaWRiYTAyOWxsdg=="
                className={`flex justify-start gap-1 mt-5 items-center text-white rounded-full  font-medium px-5 py-2 border w-40 hover:bg-megastorePrimary hover:text-black`}
              >
                Learn more <GoArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
