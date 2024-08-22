import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineMovieCreation } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

const headerNav = [
  {
    path: "/",
    display: "Home",
    icon : <HiOutlineHome />
  },
  {
    path: "/movies",
    display: "Movies",
    icon : <MdOutlineMovieCreation />
  },
  {
    path: "/series",
    display: "series",
    icon : <RiMovie2Line />
  },
];

export default function Navbar() {
  const nav = useRef();
  document.addEventListener("scroll", () => {
    if (scrollY > 200) {
      nav.current.style = "background-color : rgba(0 ,0 ,0)";
    } else if (scrollY < 200) {
      nav.current.style = "background-color : unset";
    }
  });

  return (
    <div ref={nav} className="header fixed w-full sm:w-auto sm:right-0 sm:left-0 top-0 z-50 text-white [text-shadow:_3px_3px_3px_rgb(0_0_0)] sm:py-2 duration-500">
      <div
        className="h-14 flex items-center justify-between sm:mx-24"
      >
        <Link
          to={"/"}
          className=" sm:w-fit gap-2 h-12 flex items-center mx-auto sm:mx-0"
        >
          <img className="w-10 h-10" src={"image/tmovie.png"} alt="" />
          <span className="sm:text-3xl font-semibold" to="/">
            Nice Movies
          </span>
        </Link>
        <ul className="fixed left-0 right-0 bottom-0 sm:static bg-black sm:bg-transparent w-full h-20 px-3 sm:w-fit flex items-center justify-between sm:justify-normal sm:gap-7 font-semibold">
          {headerNav.map((e, i) => (
            <li className="" key={i}>
              <NavLink className="flex flex-col items-center pt-2" to={e.path}>
                <span className=" *:text-4xl">{e.icon}</span>
                <span className="text-lg">{e.display}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
