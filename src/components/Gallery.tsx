const Gallery = () => {
  return (
    <div className="my-14">
      <div className="flex justify-center">
        <div className="max-w-[83rem] rounded-3xl max-sm:w-full flex flex-col justify-start items-start gap-2">
          <div className="flex w-full gap-3 flex-col items-center">
            <div>
              <p className="px-4 py-1 border rounded-full text-sm">GALLERY</p>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 leading-tight">
                Capturing Moments, Celebrating Memories
              </h1>
            </div>
            <h4 className="text-gray-600 text-center font-light leading-relaxed text-base max-w-5xl lg:text-lg">
              Explore our collection of unforgettable moments from special events...
            </h4>
          </div>

          <div className="max-w-[85rem] px-4 py-10 sm:px-0 lg:px-0 lg:py-14 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"> {/* Adjusted gap here */}
              <div className="col-span-2">
                <img className="w-full h-full object-cover" src="./1.jpg" alt="Jeba" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src="/2.jpg" alt="Chobe" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src="/11.jpg" alt="Chobe" />
              </div>
              <div className="col-span-2">
                <img className="w-full h-full object-cover" src="/3.jpg" alt="Zoya" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src="/4.jpg" alt="Jeba Photo" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src="/5.jpg" alt="Jeba Image" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src="/6.jpg" alt="Jeba Gallery" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src="/7.jpg" alt="Jeba" />
              </div>
              <div className="col-span-2">
                <img className="w-full h-full object-cover" src="/8.jpg" alt="Jeba" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src="/9.png" alt="Jeba" />
              </div>
              <div>
                <img className="w-full h-full object-cover" src="/10.png" alt="Gallery Jeba Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;