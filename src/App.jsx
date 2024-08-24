// import { Fragment, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "swiper/css";
import "swiper/css/navigation";
import MovieProvider from "./Context/Context";



function App() { 
  const router = useRoutes(routes);
  return (
    <MovieProvider>
      <div className="">{router}</div>
   </MovieProvider>
  );
}

export default App;
