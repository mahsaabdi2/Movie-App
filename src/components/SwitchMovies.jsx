const SwitchMovies = ({ category, setCategory }) => {
  return (
    <>
      <div className="flex rounded-md shadow-sm  my-2 mt-4  mx-auto ">
        <button
          className={`inline-flex items-center px-2 py-1 text-sm  bg-black border border-white border-t rounded-s-lg  ${
            category === "upcoming" ? "bg-white text-black" : "text-white"
          }`}
          onClick={() => setCategory("upcoming")}
        >
          Upcoming
        </button>

        <button
          className={`inline-flex items-center px-4 py-1 text-sm   bg-black border-t border-b border-white  ${
            category === "top_rated" ? "bg-white text-black" : "text-white"
          }`}
          onClick={() => setCategory("top_rated")}
        >
          Top rated
        </button>

        <button
          className={`inline-flex items-center px-4 py-1 text-sm   bg-black  border border-t border-white rounded-e-lg   ${
            category === "popular" ? "bg-white text-black" : "text-white"
          }`}
          onClick={() => setCategory("popular")}
        >
          Popular
        </button>
      </div>
    </>
  );
};

export default SwitchMovies;
