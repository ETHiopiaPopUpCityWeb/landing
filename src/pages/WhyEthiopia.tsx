const WhyEthiopia = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-24  text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-start text-sky-900 mb-8">
          Why ETHiopia?
        </h1>

        {/* Introductory Text */}
        <p className="text-lg leading-relaxed mb-8">
          Ethiopia is a land of immense historical significance, breathtaking landscapes, and a unique culture that has stood the test of time. From the ancient city of Axum to the mystical rock-hewn churches of Lalibela, the country offers an unparalleled glimpse into the past while also charting an ambitious future. Its diverse population, vibrant traditions, and resilient spirit make Ethiopia not just a place to visit, but a nation to admire.
        </p>

        {/* Image 1 */}
        <div className="my-8">
          <img
            src="/city.jpg"
            alt="Ethiopian Landscape"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-center mt-2 text-gray-500">
            The breathtaking Simien Mountains in Ethiopia.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">
            A History That Inspires
          </h2>
          <p className="text-lg leading-relaxed">
            Ethiopia's history dates back thousands of years, with its claim as one of the cradles of humanity. The discovery of *Lucy*, a 3.2 million-year-old hominid fossil, put Ethiopia on the global map as a significant contributor to human history. Its ancient civilizations, including the Kingdom of Axum, were pivotal in shaping trade and religion in the region.
          </p>
        </div>

        {/* Image 2 */}
        <div className="my-8">
          <img
            src="/city2.jpg"
            alt="Historical Monument"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-center mt-2 text-gray-500">
            Axum Obelisk, a testament to Ethiopia's rich history.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">
            A Vibrant Culture
          </h2>
          <p className="text-lg leading-relaxed">
            Ethiopia boasts a diverse culture with over 80 ethnic groups, each with its own language, traditions, and cuisine. The country's unique calendar, timekeeping system, and coffee ceremony are just a few of the many traditions that captivate visitors and locals alike.
          </p>
        </div>

        {/* Image 3 */}
        <div className="my-8">
          <img
            src="/garden.jpg"
            alt="Cultural Event"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-center mt-2 text-gray-500">
            Traditional Ethiopian coffee ceremony in action.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">
            The Future of Ethiopia
          </h2>
          <p className="text-lg leading-relaxed">
            As one of Africa's fastest-growing economies, Ethiopia is investing heavily in infrastructure, technology, and education. Initiatives like the Grand Ethiopian Renaissance Dam (GERD) symbolize the nation's drive toward sustainability and energy independence. With its rich resources and determined population, Ethiopia is poised to be a beacon of growth and innovation in the region.
          </p>
        </div>

        {/* Image 4 */}
        <div className="my-8">
          <img
            src="/city3.jpg"
            alt="Grand Ethiopian Renaissance Dam"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-center mt-2 text-gray-500">
            The Grand Ethiopian Renaissance Dam, a symbol of progress.
          </p>
        </div>

        {/* Closing Remarks */}
        <p className="text-lg leading-relaxed mb-8">
          Ethiopia is not just a destination; it's an experience that leaves an indelible mark on everyone who visits. From its ancient history to its promising future, Ethiopia is a story of resilience, beauty, and innovation. Discover why Ethiopia continues to captivate the world.
        </p>
      </div>
    </div>
  );
};

export default WhyEthiopia;
