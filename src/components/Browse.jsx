import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BannerContainer from "./BannerContainer";
import ListsContainer from "./ListsContainer";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
const Browse = () => {
  useNowPlayingMovies();
  useTopRated();
  useUpcoming();
  return (
    <>
      <Header></Header>
      <BannerContainer></BannerContainer>
      <ListsContainer></ListsContainer>
    </>
  );
};

export default Browse;
