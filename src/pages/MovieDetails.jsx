import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCredits, getDetails, getImages } from "../services/getMovies";
import classNames from "classnames";
import { useState } from "react";

const MovieDetails = () => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();
  const [showAll, setShowAll] = useState(false);

  const { data } = useQuery({
    queryKey: ["detail", id],
    queryFn: () => getDetails(id),
  });

  const { data: credits } = useQuery({
    queryKey: ["movie", "credits", id],
    queryFn: () => getCredits(id),
  });

  const {data : images} =useQuery({
    queryKey :["movie" , id , "images"],
    queryFn:()=>getImages(id)
  })

  return (
    <div className="container mx-auto ">
      <div className="flex-col grid grid-cols-1 md:grid-cols-3 ">
        <div className="lg:ml-24 lg:mt-8">
          

          <img src={IMG_URL + data?.poster_path} alt="poster" className=" h-[500px] " />
        </div>
        <div
            className={classNames(
              " bg-lime-600 absolute text-white rounded px-2 py-1 lg:ml-24 mt-8",
              data?.vote_average < 6 && "bg-gray-500")}>{data?.vote_average}</div>
        <div className=" p-4 text-white  md:col-span-2 mt-2">
          <div className="mb-6">
            <span className="text-md "> Title:</span>
            <br />
            <span className="text-2xl">
              {data?.original_title}
              <br />
            </span>
          </div>

          <div>
            <div className="text-md ">Overview:</div>
            <span>{data?.overview}</span>
          </div>

          <div className="mt-6">
            <span className="text-sm">Release date:</span>
            <br />
            <span className="text-md">{data?.release_date}</span>
          </div>

          <div className="mt-6">
            <span className="text-sm">Duration:</span>
            <br />
            <span>{data?.runtime} minutes</span>
          </div>

          <div className="mt-8">
            <span>Genres:</span>
            <div className="flex gap-1 mt-2">
              {data?.genres.map((item) => (
                <button className="bg-lime-800 p-1 text-sm rounded-lg ">{item.name}</button>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-gray-600 rounded px-2 py-1 my-4 text-md" onClick={() => setShowAll((pre) => !pre)}>
              {showAll ? "Hide" : "Show All"}
            </button>
            <div className="grid grid-cols-6 gap-4 ">
              {credits?.slice(0, showAll ? credits?.length : 6).map((item) => (
                <div>
                  <img alt="actors"
                    src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                  />
                  <p className="font-bold">{item.original_name}</p>
                  <p>{item.character}</p>
                </div>
              ))}
            </div>
          </div>
                <div className="mt-8">
                  <p className="text-xl semibold my-4">Images</p>
                <div className="grid grid-cols-4 gap-4">
                {images?.backdrops.map((item)=>(
                  <img src={IMG_URL +item.file_path} alt="images"/>
                 ))}
                </div>
                </div>
        
        </div>
      </div>
 
    </div>
  );
};

export default MovieDetails;
