import { MovieContext } from '../../Context/Context';
import { useContext , useState } from 'react';
import AllMovies from '../../components/AllMovies/AllMovies';


export default function Series() {
  const moviesContext = useContext(MovieContext);
  const [series] = useState(moviesContext.series);
  console.log(series);
  return (
    <div>
        <AllMovies type = 'Series' movies={series} />
    </div>
  )
}
