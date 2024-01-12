import { useState } from "react";
import Movie from "../components/Movie";
import SwitchMovies from "../components/SwitchMovies";
import { getMovies } from "../services/getMovies";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Pagination from "../components/Pagination";

const Home = () => {
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["movie", category, page],
    queryFn: () => getMovies(category, page),
    placeholderData: keepPreviousData,
  });

  return (
    <div className="container flex flex-col">
      <div className="self-end">
        <SwitchMovies category={category} setCategory={setCategory} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-10">
        {data?.results.map((item) => (
          <div key={item.id}>
            <Movie {...item} />
          </div>
        ))}
      </div>
      <Pagination
        totalPage={data?.total_pages}
        onPageChange={(e) => setPage(e.selected + 1)}
      />
    </div>
  );
};

export default Home;
