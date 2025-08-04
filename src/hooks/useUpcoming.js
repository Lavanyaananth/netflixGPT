import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcoming } from "../utils/movieSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies.upcoming);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    !upcoming && getUpcomingMovies();
  }, []);
};

export default useUpcoming;
