/** @format */

import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

const Carosello = () => {
  return (
    <div className='contenitore-carosello'>
      <Carousel
        data-bs-theme='dark'
        className='carosello d-block w-100'>
        <Carousel.Item className='first-item item'>
          <div className='overlay'></div>
          <Link
            to='/comics'
            className='ancore-carosello'>
            <div className='contenitore primo'>
              <h2>Paolo Bertazzo, Gregorio Biancotto, Edoardo Audino</h2>
              <p>
                Una nobile guerriera e un furfante patentato formano un
                improbabile team che compete nel Gioco della Corona, torneo
                sacro che decreterà il sovrano di un mondo fanta-rinascimentale.
              </p>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item className='second-item item'>
          <div className='overlay'></div>
          <Link
            to='/comics'
            className='ancore-carosello'>
            <div className='contenitore secondo'>
              <h2>Edoardo Follegatti</h2>
              <p>
                In un neo-medioevo, il cavaliere Barnaba viene inviato alla
                ricerca della Verità, il leggendario artefatto capace di
                invertire la Regressione, il male che sta progressivamente
                cancellando la memoria del genere umano.
              </p>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item className='third-item item'>
          <div className='overlay'></div>
          <Link
            to='/comics'
            className='ancore-carosello'>
            <div className='contenitore terzo item'>
              <h2>Jacopo Pasqualini, Giada Belviso</h2>
              <p>In attesa di longline</p>
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosello;
