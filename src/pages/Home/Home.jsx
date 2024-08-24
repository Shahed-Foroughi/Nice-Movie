import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MovieLists from "../../components/MovieLists/MovieLists";
import { useContext, useEffect , useState } from "react";
import {MovieContext} from "../../Context/Context";



export default function Home() { 
  const movieContext = useContext(MovieContext)
  const [movies, setMovies] = useState([]);
  const [series , setSeries] = useState([])

  useEffect(() => {
    setMovies(movieContext.movies)
    setSeries(movieContext.series)
  } , [movieContext.movies, movieContext.series])


  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <MovieLists movies={movies} />
      <MovieLists movies={series} />
      <Footer /> 
    </div>
  );
}
