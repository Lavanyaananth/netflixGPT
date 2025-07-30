import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BannerContainer from "./BannerContainer";
import MovieListsContainer from "./MovieListsContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header></Header>
      <BannerContainer></BannerContainer>
      <MovieListsContainer></MovieListsContainer>
    </>
  );
};

export default Browse;
