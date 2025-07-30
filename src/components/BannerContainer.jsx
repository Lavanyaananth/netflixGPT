import { useSelector } from "react-redux";
import VidoeTitle from "./VidoeTitle";
import VideoBackground from "./VideoBackground";
const BannerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VidoeTitle title={original_title} overview={overview}></VidoeTitle>
      <VideoBackground movieId={id}></VideoBackground>
    </div>
  );
};

export default BannerContainer;
