import axios from "axios";

export const getMovies = async (category, page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${category}?page=${page}&api_key=7c5e75cd35bee3305c7d312b24e83e78`
  );

  return data;
};

export const searchMovie = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=1&api_key=7c5e75cd35bee3305c7d312b24e83e78`
  );
  return data.results;
};

export const getDetails = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7c5e75cd35bee3305c7d312b24e83e78`
  );

  return data;
};

export const getCredits = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c5e75cd35bee3305c7d312b24e83e78`
  );
  return data.cast;
};


export const getImages= async(id) =>{
  const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=7c5e75cd35bee3305c7d312b24e83e78`);
  console.log(data);
  return data
}