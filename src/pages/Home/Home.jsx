// import { Fragment, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MovieLists from "../../components/MovieLists/MovieLists";

export default function Home() {
//   useEffect(() => {
//     // getAllMovies();
//   }, []);
//   const [movies, setMovies] = useState([]);

  //   const getAllMovies = () => {
  //     fetch("https://movie-nice-default-rtdb.firebaseio.com/movies.json")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         if (result) {
  //           setMovies(Object.entries(result));
  //         } else {
  //           setMovies([]);
  //         }
  //       });
  //     console.log(movies);
  //     fetch("https://freetestapi.com/api/v1/movies")
  //       .then((res) => res.json())
  //       .then((result) => console.log(result));
  //   };

  //   const addMovieHandler = () => {
  //     const newMovie = {
  //       id: 20,
  //       title: "The Lion King",
  //       year: 1994,
  //       genre: ["Animation", "Adventure", "Drama"],
  //       rating: 8.5,
  //       director: "Roger Allers, Rob Minkoff",
  //       actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
  //       plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
  //       poster: "https://fakeimg.pl/220x310/0000ff",
  //       trailer: "https://example.com/the_lion_king_trailer.mp4",
  //       runtime: 88,
  //       awards: "Won 2 Oscars",
  //       country: "USA",
  //       language: "English",
  //       boxOffice: "$968.5 million",
  //       production: "Walt Disney Pictures",
  //       website: "https://movies.disney.com/the-lion-king",
  //     };
  //     console.log(newMovie);
  //     fetch("https://movie-nice-default-rtdb.firebaseio.com/movies.json", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newMovie),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //         getAllMovies();
  //       });
  //   };

  //   const removeMovieHandler = (movieID) => {
  //     fetch(
  //       `https://movie-nice-default-rtdb.firebaseio.com/movies/${movieID}.json`,
  //       {
  //         method: "DELETE",
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then(() => getAllMovies());
  //     // getAllMovies()
  //   };

  return (
    <div className="">
      <Navbar />
      <Header />
      <MovieLists />
      <MovieLists />
      <MovieLists />
      <Footer /> 
    </div>
  );
}
