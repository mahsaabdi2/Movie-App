import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom/dist";
import { searchMovie } from "../services/getMovies";
import Movie from "../components/Movie";

const Search = () => {
  const { query } = useParams();

  const { data } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovie(query),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-40 ">
      {data?.map((item) => (
        <div key={item.id}>
          <Movie {...item} />
        </div>
      ))}
    </div>
  );
};

export default Search;
