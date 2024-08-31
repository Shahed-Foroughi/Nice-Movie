import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import "./Movie.css";

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Movie() {
  const movieID = useParams();
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);
  const movieContext = useContext(MovieContext);
  const [similarMovies, setSimilarMovies] = useState();
  const [isDesk, setIsDesk] = useState(null);

  useEffect(() => {
    if (screen.width > 640) {
      setIsDesk(true);
    } else {
      setIsDesk(false);
    }
    setMovies(movieContext.movies);
    const mainMovieFiltered = movies.filter((movie) => {
      return movie[1].id === +movieID.movieID;
    });
    setMainMovie(mainMovieFiltered[0]);
    const similarMoviesFiltered = movies.filter((movie) => {
      const mainMovieGenres = new Set(mainMovieFiltered[0][1].genre);
      const movieGenres = new Set(movie[1].genre);

      //   // بررسی اینکه آیا حداقل یک ژانر مشترک وجود دارد
      return [...movieGenres].some((genre) => mainMovieGenres.has(genre));
    });
    setSimilarMovies(similarMoviesFiltered);

    setSimilarMovies(similarMoviesFiltered);
  }, [movieContext.movies, movieID.movieID, movies]);

  window.addEventListener("resize", () => {
    if (screen.width > 640) {
      setIsDesk(true);
    } else {
      setIsDesk(false);
    }
  });

  if (!mainMovie) {
    return (
      <div>
        <h1 className="text-4xl text-red-600">is Loading ...</h1>
      </div>
    );
  } else {
    console.log(mainMovie[1]);
    console.log(similarMovies);
  }

  return (
    <div>
      <div className="relative h-[60vh] w-full">
        <div className={`background-filter-movie h-full`}>
          <img
            className="w-full h-full [filter:brightness(70%)]"
            src={"." + mainMovie[1].poster[0]}
            alt=""
          />
        </div>
        <motion.ul
          className="absolute top-24 m-3 flex flex-col items-start gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          <motion.li
            className=""
            variants={item}
            transition={{ duration: 0.3 }}
          >
            <h1 className="font-bold text-4xl sm:text-7xl leading-tight w-full">
              {mainMovie[1].title}
            </h1>
          </motion.li>
          <motion.li
            variants={item}
            className="flex items-center flex-wrap gap-2"
            transition={{ duration: 0.3 }}
          >
            {mainMovie[1].genre.map((item, index) => (
              <span
                className="border-2 border-white rounded-xl px-4"
                key={index}
              >
                {item}
              </span>
            ))}
          </motion.li>
          <motion.li
            variants={item}
            className=""
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm leading-tight text-ellipsis overflow-hidden">
              {mainMovie[1].plot}
            </p>
          </motion.li>
        </motion.ul>
      </div>
      <div className="m-3">
        <h3 className="text-xl font-bold mb-2">Casts</h3>
        <Swiper
          slidesPerView={isDesk ? 6.5 : 2.5}
          spaceBetween={isDesk ? 15 : 30}
          modules={[Pagination]}
          className=""
        >
          {mainMovie[1].actors.map((actor) => (
            <SwiperSlide key={actor[0]} className="">
              <div className="flex flex-col items-start justify-between">
                <div className="">
                  <img
                    className=" bg-gray-400 h-[150px]"
                    src="../image/actor.png"
                    alt=""
                  />
                </div>
                <span className="text-center">{actor}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="m-3">
        <h3 className="text-xl font-bold mb-2">International Trailer</h3>
        <div className="w-full">
          <iframe
            className="w-full"
            src="https://www.youtube.com/embed/98YEaUD8MuU?si=dADQOqQolxJ5jBfN"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
      <div className="m-3">
        <h3 className="text-xl font-bold mb-2">Similar</h3>
        <div>
          <Swiper
            slidesPerView={isDesk ? 6.5 : 2.5}
            spaceBetween={isDesk ? 15 : 30}
            modules={[Pagination]}
            className=""
          >
            {similarMovies.map((movie) => (
              <SwiperSlide key={movie[0]} className="movie-card">
                <Link
                  to={`/movie/${movie[1].id}`}
                  className="flex flex-col items-start justify-between hover:text-orange-600 gap-2"
                >
                  <div className="movie-card-img relative ">
                    <img
                      className="rounded-md min-h-[170px] max-h-[170px] sm:min-h-[285px] sm:max-h-[285px] overflow-hidden"
                      src={"." + movie[1].poster[1]}
                      alt="poster"
                    />
                  </div>
                  <p className="text-sm movie-card-title">{movie[1].title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
