// import { Fragment, useEffect, useState } from "react";
import { useRoutes } from 'react-router-dom'
import {routes} from './routes'
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

function App() {
  const router = useRoutes(routes)
  return (
    <div className="w-full">
      {router}
    </div>

  );
}

export default App;
