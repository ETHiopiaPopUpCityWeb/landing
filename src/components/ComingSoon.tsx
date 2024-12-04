const ComingSoon = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 ">
            Coming Soon!
          </h1>
          <p className="text-lg text-gray-600 -300 text-center mb-12">
            Our website is under construction. We'll be back soon!
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              className="w-full md:w-80  py-2 px-4 border text-gray-800  border-gray-200 -600 bg-white -700"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="bg-lime-400 hover:bg-lime-600 text-black font-bold   py-2 px-4 border -800">
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
