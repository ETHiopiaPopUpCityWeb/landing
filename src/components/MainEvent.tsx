const MainEvent = () => {
  return (
    <div className="my-14">
      <div className="flex justify-center">
        <div className="w-full h-[600px] relative rounded-3xl max-sm:w-full flex flex-col justify-start items-start gap-4">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-3xl"></div>

          <div className="bg-gradient-to-t from-lime-40 flex justify-center absolute top-0 left-0 bottom-0 right-0">
            <div className="max-w-[83rem] max-sm:w-full flex flex-col justify-center items-center gap-4">
              <div>
                <h1 className="text-5xl text-lime-400 font-bold">ETHiopia</h1>
              </div>

              <div className="p-4 max-w-3xl">
                <h1 className="text-lg text-center text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit inventore delectus et esse nihil, a dolor, aut,
                  itaque magnam soluta facere fuga. Dignissimos earum facilis
                  esse, fugiat debitis doloremque nam!
                </h1>
              </div>
              <div className="flex p-4 m-4">
                <a
                  href="https://chapa.events/to/chobe-by-krenfude-9uoj?fbclid=PAZXh0bgNhZW0CMTEAAaZjC4Xv5oUE_62l6ZgMoCOTXJVCUAHGG7C2_JjY4dH-_JUHmpvoWRkUOlI_aem_67n09-f5HQJF5Plgyd7Jsw"
                  className="mx-2"
                >
                  <button className="bg-gradient-to-r from-lime-300 via-lime-400 to-lime-400 p-3 px-8 rounded-3xl duration-150 transition-all hover:scale-95">
                    Get Tickets
                  </button>
                </a>
                <a href="https://jeba.ai/">
                  <button className="bg-black text-white p-3 px-8 rounded-3xl duration-150 transition-all hover:scale-95">
                    Get Photos
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainEvent;
