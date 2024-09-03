import AllMovies from "../../components/AllMovies/AllMovies";
import MainLoader from "../../components/Loaders/MainLoader";
import { MovieContext } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";

export default function Movies() {
  const moviesContext = useContext(MovieContext);
  const [movies, setMovies] = useState(null);
  // const [searchParam, setSearchParam] = useState("");
  // const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesContext.movies);
  }, [moviesContext.movies]);

  // search feature ...
  // useEffect(() => {
  //   if (searchParam) {
  //     console.log(searchParam.toLowerCase());
  //     console.log(searchMovies);
  //   }
  // }, [searchMovies, searchParam]);

  // const searchHandler = (value) => {
  //   const updateMovies = [...movies];
  //   if (value) {
  //     setSearchParam(value);
  //   }
  //   let newSearchMovies = updateMovies.filter((movie) => {
  //     return movie[1].title.toLowerCase().includes(searchParam);
  //   });

  //   setSearchMovies(newSearchMovies);
  // };

  if (!movies) {
    return <MainLoader />;
  } else {
    return (
      <div>
        <AllMovies
          type={"Movies"}
          movies={movies}
          route={"movie"}
          // searchHandler={searchHandler}
        />
      </div>
    );
  }
}
