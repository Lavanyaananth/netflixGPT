import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const ListsContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-[180px] pl-12 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          ></MovieList>

          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRated}
          ></MovieList>
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcoming}
          ></MovieList>
        </div>
      </div>
    )
  );
};
//https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
export default ListsContainer;
