import { MovieContext } from "../../Context/Context";
import { useContext, useState, useEffect } from "react";
import AllMovies from "../../components/AllMovies/AllMovies";
import MainLoader from "../../components/Loaders/MainLoader";

export default function Series() {
  const moviesContext = useContext(MovieContext);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    setTimeout(() => {setSeries(moviesContext.series)} , 2000)
    
  }, [moviesContext.series]);

  if (!series) {
    return <MainLoader />;
  } else {
    return (
      <div>
        <AllMovies type="Series" movies={series} route={"serial"} />
      </div>
    );
  }
}
