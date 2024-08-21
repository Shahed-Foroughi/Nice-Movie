// import React from 'react'

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer flex flex-col items-center p-2 sm:p-0 pb-11 sm:pb-0 ">
        <div className="flex items-center gap-2 mt-2 sm:mt-12 mb-4 mx-2">
            <img className="w-8 sm:w-11 sm:h-11 h-8" src="./image/tmovie.png" alt="" />
            <span className="sm:font-bold sm:text-lg">Nice Movie</span>
        </div>
        <div className="w-[90%] sm:w-1/2 pb-2 sm:my-10">
            <ul className="flex flex-wrap *:w-[120px] sm:*:w-[200px] gap-4 *:text-sm sm:*:text-lg">
                <li><Link>Home</Link></li>
                <li><Link>Live</Link></li>
                <li><Link>Contact us</Link></li>
                <li><Link>FAQ</Link></li>
                <li><Link>Term of Services</Link></li>
                <li><Link>Premium</Link></li>
                <li><Link>About us</Link></li>
                <li><Link>Privacy policy</Link></li>
                <li><Link>You must watch</Link></li>
                <li><Link>Recent release</Link></li>
                <li><Link>Top IMDB</Link></li>
            </ul>
        </div>
    </div>
  )
}
