const EventDescription = () => {
  return (
    <div>
      {" "}
      <div className="my-16">
        <div className=" flex justify-center py-8">
          <div className=" w-[83rem] max-sm:px-6 min-h-[400px] max-sm:w-full flex max-sm:flex-col justify-start items-start gap-10">
            <div className="w-[40%] max-sm:w-full h-full flex flex-col justify-center items-start gap-4 rounded-3xl bg-neutral-800 text-white p-6">
              <p className="px-4 py-1 border rounded-full text-sm">
                Our Main Events
              </p>

              <h1 className="text-3xl font-medium text-lime-400">
                Lorem ipsum, dolor sit amet.
              </h1>

              {/* <div className="flex gap-4 items-center self-center">
                <div className="w-[100px] h-1 rounded-md bg-lime-300"></div>
                <div className=" text-lime-300 p-2 rounded-full">
                  <MdEmojiEvents size={25} />
                </div>
                <div className="w-[100px] h-1 rounded-md bg-lime-300"></div>
              </div> */}

              <p className="text-xs leading-5 text-neutral-100 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                cumque velit quaerat deleniti doloremque perferendis molestias
                deserunt recusandae culpa aliquid laboriosam, ex repellat
                quisquam quas? Facilis quam id impedit quidem suscipit eveniet a
                laboriosam laudantium molestiae quas. Laborum alias fugit
                voluptates asperiores vitae officia, libero vel, dicta
                cupiditate porro delectus debitis? Expedita, minima est nobis
                ullam dicta sint rerum, commodi eligendi sed sunt nihil
                temporibus atque culpa nemo? Sint illum voluptatem non eius,
                molestiae commodi omnis pariatur ratione voluptates esse
              </p>
            </div>

            <div className="w-[60%] max-sm:w-full h-full flex justify-center items-center p-3 max-sm:p-0">
              <div className="w-[400px] h-[450px] relative">
                <img
                  src="https://placehold.co/400x450"
                  alt=""
                  className="rounded-3xl"
                />

                <div className="bg-neutral-800 flex flex-col justify-center items-center h-[200px] w-[200px] max-sm:w-[150px] max-sm:h-[150px] rounded-3xl absolute max-sm:right-[-5%] max-sm:bottom-0 right-[-25%] bottom-[-15%] border-white border-[7px]">
                  <h3 className="text-5xl font-bold text-white">
                    5<span className="text-lime-400 font-normal">+</span>
                  </h3>
                  <p className="font-extralight text-sm text-lime-400">
                    Upcoming events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
