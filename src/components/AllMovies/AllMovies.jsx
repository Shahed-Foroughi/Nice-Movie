import { Link } from "react-router-dom";

import "./AllMovies.css";

export default function AllMovies({ movies, type }) {
  return (
    <div className="">
      <div className="background-filter background-filter-allmovies relative h-[120px] sm:h-[230px] flex items-center justify-center">
        <h1 className="font-bold tracking-wide mt-10 sm:text-4xl">
          All {type}
        </h1>
      </div>
      <div className="bg-gray-900 rounded-3xl w-fit py-1 px-3 my-2 mx-auto">
        <input
          className="bg-transparent outline-none"
          placeholder="type to search"
          type="search"
        />
        <button className="bg-orange-600 sm:px-7 sm:py-2 text-white text-sm hover:shadow-[0_0_10px_#ea580c] rounded-3xl sm:tracking-wider px-4 py-1 font-bold transition-all duration-300">
          Search
        </button>
      </div>
      <div className="flex flex-wrap items-center sm:justify-start px-2 sm:px-0 gap-x-1 gap-y-10 sm:gap-x-[91px] sm:mx-24 my-10">
        {movies.map((movie) => (
          <Link
            to={`/${type.toLowerCase()}/${movie[1].id}`}
            key={movie[0]}
            className="movie-card h-[280px] sm:h-[320px] *:w-[170px] sm:*:w-[192px] hover:text-orange-600"
          >
            <div className="movie-card-img relative">
              <img
                className="rounded-xl h-[230px] sm:h-[280px] mb-2 overflow-hidden"
                src={movie[1].poster[1]}
                alt="poster"
              />
            </div>

            <p className="text-sm text-center">{movie[1].title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
