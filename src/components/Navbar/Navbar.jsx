// import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";

const headerNav = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/movies",
    display: "Movies",
  },
  {
    path: "/series",
    display: "series",
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
        <ul className="fixed left-0 right-0 sm:static bg-black sm:bg-transparent bottom-0 py-2 sm:py-0 w-full px-3 sm:w-fit flex items-center justify-between sm:justify-normal sm:gap-7 text-lg font-semibold">
          {headerNav.map((e, i) => (
            <li className="" key={i}>
              <NavLink className="" to={e.path}>
                {e.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
