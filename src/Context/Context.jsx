import {createContext , useEffect, useState } from "react";

export const MovieContext = createContext();
// export const SeriesContext = createContext()

// eslint-disable-next-line react/prop-types
export default function MovieProvider({children}) {
    const [movies , setMovies] = useState([]);
    const [series , setSeries] = useState([]);
    const [movieID , setMovieID] = useState(null)
    const [mainMovie , setMainMovie] = useState({})
    useEffect(() => {
        getAllMovies()
        getAllSeries()
    } , [])

    const getAllMovies = () => {
        fetch("https://movie-nice-default-rtdb.firebaseio.com/movies.json")
          .then((res) => res.json())
          .then((result) => {    
            if (result) {
              setMovies(Object.entries(result));
            }
          });
        
      };

    const getAllSeries = () => {
        fetch("https://movie-nice-default-rtdb.firebaseio.com/series.json")
          .then((res) => res.json())
          .then((result) => {    
            if (result) {
              setSeries(Object.entries(result));
            }
          });
        
      };

          
    return (
      <MovieContext.Provider value={{movies , series , setMovieID , movieID , setMainMovie , mainMovie}}>
        {children}
      </MovieContext.Provider>
    );
  }