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

const App = () => {
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
