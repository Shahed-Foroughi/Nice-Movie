import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "swiper/css";
import "swiper/css/navigation";
import MovieProvider from "./Context/Context";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";



function App() { 
  const router = useRoutes(routes);
  return (
    <MovieProvider>
      <Navbar />
      <div className="">{router}</div>
      <Footer />
   </MovieProvider>
  );
}

export default App;
