import { Route, Routes } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import Home from "../pages/Home";
import Search from "../pages/Search";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  );
};

export default MainRouter;
