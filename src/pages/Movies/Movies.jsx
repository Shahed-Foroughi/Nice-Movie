import AllMovies from "../../components/AllMovies/AllMovies";
import { MovieContext } from "../../Context/Context";
import { useContext , useState } from "react";

export default function Movies() {
  const moviesContext = useContext(MovieContext);
  const [movies] = useState(moviesContext.movies);
  console.log(movies);
 
  
  return (
    <div>
      <AllMovies type={'Movies'} movies={movies} />
    </div>
  )
}
