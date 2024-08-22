import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "./Header.css";
// import Navbar from "../Navbar/Navbar";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0,
    },
  },
};

const container2 = {
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
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const item2 = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Header() {
  return (
    <div className="">
      <div className="h-[100vh]">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="header-img">
            <img
              className="[filter:brightness(40%)]"
              src="./image/shawshank4.webp"
              alt=""
            />
            <div className="container fixed top-20 sm:top-24 sm:left-24 w-[90%] h-[70%] sm:w-[80%] flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 justify-evenly">
              <motion.ul
                className="w-full sm:w-[45%] h-full flex items-start justify-evenly flex-col gap-4 sm:gap-8 *:leading-none"
                variants={container2}
                initial="hidden"
                whileInView="visible"
              >
                <motion.li
                  className="item *:block text-white *:[text-shadow:_3px_3px_3px_rgb(0_0_0)] *:text-start w-full "
                  variants={item2}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="font-bold tracking-widest text-3xl sm:text-7xl leading-none w-full">
                    THE SHAWSHANK REDEMPTION
                  </h1>
                </motion.li>
                <motion.li
                  variants={item2}
                  className="item *:block text-white *:[text-shadow:_3px_3px_3px_rgb(0_0_0)] *:text-start w-full"
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm block font-bold leading-tight w-full">
                    Two imprisoned men bond over several years, finding solace
                    and eventual redemption through acts of common decency.
                  </span>
                </motion.li>
                <motion.li
                  variants={item2}
                  className="item w-full flex items-center gap-3 sm:gap-8 *:rounded-3xl sm:*:tracking-wider *:px-4 *:py-1 *:font-bold *:transition-all *:duration-300"
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/movie/${""}`}
                    className="bg-orange-600 sm:px-7 sm:py-2 text-white text-sm hover:shadow-[0_0_10px_#ea580c]"
                  >
                    Watch now
                  </Link>
                  <Link className=" hover:bg-white text-white hover:text-orange-600 text-sm sm:px-7 sm:py-2 border border-white">
                    Watch trailer
                  </Link>
                </motion.li>
              </motion.ul>
              <motion.div
                className="h-[280px] w-[200px] sm:h-[500px] sm:w-auto"
                variants={container}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 2 }}
              >
                <motion.div
                  className="item h-full rounded-lg overflow-hidden"
                  variants={item}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="h-full w-full"
                    src="./image/shawshank3.jpg"
                    alt=""
                  />
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="header-img">
            <img
              className="[filter:brightness(40%)]"
              src="./image/shawshank4.webp"
              alt=""
            />
            <div className="container fixed top-20 sm:top-24 sm:left-24 w-[90%] h-[70%] sm:w-[80%] flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 justify-evenly">
              <motion.ul
                className="w-full sm:w-[45%] h-full flex items-start justify-evenly flex-col gap-4 sm:gap-8 *:leading-none"
                variants={container2}
                initial="hidden"
                whileInView="visible"
              >
                <motion.li
                  className="item *:block text-white *:[text-shadow:_3px_3px_3px_rgb(0_0_0)] *:text-start w-full "
                  variants={item2}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="font-bold tracking-widest text-3xl sm:text-7xl leading-none w-full">
                    THE SHAWSHANK REDEMPTION
                  </h1>
                </motion.li>
                <motion.li
                  variants={item2}
                  className="item *:block text-white *:[text-shadow:_3px_3px_3px_rgb(0_0_0)] *:text-start w-full"
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm block font-bold leading-tight w-full">
                    Two imprisoned men bond over several years, finding solace
                    and eventual redemption through acts of common decency.
                  </span>
                </motion.li>
                <motion.li
                  variants={item2}
                  className="item w-full flex items-center gap-3 sm:gap-8 *:rounded-3xl sm:*:tracking-wider *:px-4 *:py-1 *:font-bold *:transition-all *:duration-300"
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/movie/${""}`}
                    className="bg-orange-600 sm:px-7 sm:py-2 text-white text-sm hover:shadow-[0_0_10px_#ea580c]"
                  >
                    Watch now
                  </Link>
                  <Link className=" hover:bg-white text-white hover:text-orange-600 text-sm sm:px-7 sm:py-2 border border-white">
                    Watch trailer
                  </Link>
                </motion.li>
              </motion.ul>
              <motion.div
                className="h-[280px] w-[200px] sm:h-[500px] sm:w-auto"
                variants={container}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 2 }}
              >
                <motion.div
                  className="item h-full rounded-lg overflow-hidden"
                  variants={item}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="h-full w-full"
                    src="./image/shawshank3.jpg"
                    alt=""
                  />
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="header-img">
            <img
              className="[filter:brightness(40%)]"
              src="./image/shawshank4.webp"
              alt=""
            />
            <div className="container fixed top-20 sm:top-24 sm:left-24 w-[90%] h-[70%] sm:w-[80%] flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 justify-evenly">
              <motion.ul
                className="w-full sm:w-[45%] h-full flex items-start justify-evenly flex-col gap-4 sm:gap-8 *:leading-none"
                variants={container2}
                initial="hidden"
                whileInView="visible"
              >
                <motion.li
                  className="item *:block text-white *:[text-shadow:_3px_3px_3px_rgb(0_0_0)] *:text-start w-full "
                  variants={item2}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="font-bold tracking-widest text-3xl sm:text-7xl leading-none w-full">
                    THE SHAWSHANK REDEMPTION
                  </h1>
                </motion.li>
                <motion.li
                  variants={item2}
                  className="item *:block text-white *:[text-shadow:_3px_3px_3px_rgb(0_0_0)] *:text-start w-full"
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm block font-bold leading-tight w-full">
                    Two imprisoned men bond over several years, finding solace
                    and eventual redemption through acts of common decency.
                  </span>
                </motion.li>
                <motion.li
                  variants={item2}
                  className="item w-full flex items-center gap-3 sm:gap-8 *:rounded-3xl sm:*:tracking-wider *:px-4 *:py-1 *:font-bold *:transition-all *:duration-300"
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/movie/${""}`}
                    className="bg-orange-600 sm:px-7 sm:py-2 text-white text-sm hover:shadow-[0_0_10px_#ea580c]"
                  >
                    Watch now
                  </Link>
                  <Link className=" hover:bg-white text-white hover:text-orange-600 text-sm sm:px-7 sm:py-2 border border-white">
                    Watch trailer
                  </Link>
                </motion.li>
              </motion.ul>
              <motion.div
                className="h-[280px] w-[200px] sm:h-[500px] sm:w-auto"
                variants={container}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 2 }}
              >
                <motion.div
                  className="item h-full rounded-lg overflow-hidden"
                  variants={item}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="h-full w-full"
                    src="./image/shawshank3.jpg"
                    alt=""
                  />
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
