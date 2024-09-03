import Header from "../../components/Header/Header";
import MovieLists from "../../components/MovieLists/MovieLists";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/Context";
import MainLoader from '../../components/Loaders/MainLoader'

export default function Home() {
  const movieContext = useContext(MovieContext);
  const [movies, setMovies] = useState(null);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMovies(movieContext.movies);
      setSeries(movieContext.series);
    } , 2000)
    
  }, [movieContext.movies, movieContext.series]);

  if (!movies || !series) {
    return <MainLoader />;
  } else {
    return (
      <div className="w-full">
        <Header />
        <MovieLists
          type={"Movies"}
          movies={movies}
          route1={"movies"}
          route2={"movie"}
        />
        <MovieLists
          type={"Series"}
          movies={series}
          route1={"series"}
          route2={"serial"}
        />
      </div>
    );
  }
}
