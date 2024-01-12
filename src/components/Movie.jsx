import { Link } from "react-router-dom";
import classNames from "classnames";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Movie = ({ original_title, poster_path, name, id, vote_average }) => {
  return (
    
    <Link to={`/movie/${id}`}>
      <div className="flex flex-col justify-center itens-center my-2 mx-4">
        <div className="relative">
          <img src={IMG_URL + poster_path} className="items-center" alt="poster" />

          <div className={classNames(
              "bg-lime-600 text-white absolute top-0 px-1 text-sm",
              vote_average < 6 && "bg-gray-500")}>{vote_average}</div>
        </div>

        <p className="text-center text-white p-3">{original_title}</p>
        <p className="text-white text-left mt-1">{name}</p>
      </div>
    </Link>
  );
};

export default Movie;
