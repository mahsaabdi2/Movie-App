
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom/dist";
import { useDebounce } from "../hook/useDebounce";

const NavBar = () => {
  const [search, setSearch] = useState();
  const debounceSearch = useDebounce(search);

  const navigate = useNavigate();

  useEffect(() => {
    if (search && search.length > 0) {
      navigate(`/search/${search}`);
    } else {
      navigate("/", { replace: true });
    }
  }, [debounceSearch]);

  return (
    <header className="bg-stone-900">
      <nav className=" text-white py-4 container mx-auto ">
        <div className=" flex flex-col md:flex-row gap-4 justify-between  ">
          <Link to="/" className="text-4xl font-semibold overflow-y-hidden">
            THE MOVIES
          </Link>
          <form>
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="  bg-white w-[400px] rounded py-2 text-left p-2 text-black focus:ring focus:ring-white"
              placeholder="Search For Movie"
            />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
