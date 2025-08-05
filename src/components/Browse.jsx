import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BannerContainer from "./BannerContainer";
import ListsContainer from "./ListsContainer";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useTopRated();
  useUpcoming();
  return (
    <>
      <Header></Header>
      {showGptSearch ? (
        <GptSearchPage></GptSearchPage>
      ) : (
        <>
          {" "}
          <BannerContainer></BannerContainer>
          <ListsContainer></ListsContainer>
        </>
      )}
    </>
  );
};

export default Browse;
