// import React from 'react'

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="background-filter flex flex-col items-center p-2 sm:p-0 pb-11 sm:pb-0 ">
        <div className="flex items-center gap-2 mt-2 sm:mt-12 mb-4 mx-2">
            <img className="w-8 sm:w-11 sm:h-11 h-8" src="../image/tmovie.png" alt="" />
            <span className="sm:font-bold sm:text-lg">Nice Movie</span>
        </div>
        <div className="w-[90%] sm:w-1/2 pb-2 sm:my-10">
            <ul className="flex flex-wrap *:w-[120px] sm:*:w-[200px] gap-4 *:text-sm sm:*:text-lg">
                <li><Link to={'/'} className="hover:text-orange-700 transition-all duration-300">Home</Link></li>
                <li><Link to={'/movies'} className="hover:text-orange-700 transition-all duration-300">Movies</Link></li>
                <li><Link to={'/series'} className="hover:text-orange-700 transition-all duration-300">Series</Link></li>
                <li><Link className="hover:text-orange-700 transition-all duration-300">Contact us</Link></li>
                <li><Link className="hover:text-orange-700 transition-all duration-300">Term of Services</Link></li>
                <li><Link className="hover:text-orange-700 transition-all duration-300">Premium</Link></li>
                <li><Link className="hover:text-orange-700 transition-all duration-300">About us</Link></li>
                <li><Link className="hover:text-orange-700 transition-all duration-300">Privacy policy</Link></li>
                <li><Link className="hover:text-orange-700 transition-all duration-300">You must watch</Link></li>
                <li><Link className="hover:text-orange-700 transition-all duration-300">Recent release</Link></li>
                <li><Link className="hover:text-orange-700 transition-all duration-300">Top IMDB</Link></li>
            </ul>
        </div>
    </div>
  )
}
