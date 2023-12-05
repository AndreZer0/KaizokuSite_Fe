/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from '../src/components/pages/Home';
import Fumetti from './components/pages/Fumetti';
import Studio from './components/pages/Studio';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('useEffect chiamato');

    // Questo effetto si attiva dopo il caricamento della pagina
    window.scrollTo(0, 0);
  }, []); // L'array vuoto []
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/comics'
          element={<Fumetti />}
        />
        <Route
          path='/studio'
          element={<Studio />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
