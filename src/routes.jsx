import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movies/Movie/Movie";
import Movies from "./pages/Movies/Movies";
import Offs from "./pages/Offs/Offs";
import Register from "./pages/Register/Register";
import Series from "./pages/Series/Series";


const routes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/movies", element: <Movies /> },
  { id: 2, path: "/series", element: <Series /> },
  { id: 3, path: "/register", element: <Register /> },
  { id: 4, path: "/movie/:movieID", element: <Movie /> },
  { id: 6, path: "/offs", element: <Offs /> },
  { id: 6, path: "/category/:categoryID", element: <Category /> },
];

export {routes};
