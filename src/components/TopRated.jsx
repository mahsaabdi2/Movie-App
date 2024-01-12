import { useQuery } from "@tanstack/react-query";
import { getTopRated } from "../services/getMovies";
import Movie from "./Movie";

const TopRated = () => {
  const { data } = useQuery({ queryKey: ["TopRated"], queryFn: getTopRated });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-40 ">
        {data?.map((item) => (
          <div key={item.id}>
            <Movie {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopRated;
