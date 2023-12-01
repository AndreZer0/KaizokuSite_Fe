/** @format */

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
          <div className='contenitore primo'>
            <h2>Bertazzo - Biancotto - Audino </h2>
            <p>
              Una nobile guerriera e un furfante patentato formano un
              improbabile team che compete nel Gioco della Corona, torneo sacro
              che decreterà il sovrano di un mondo fanta-rinascimentale.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className='second-item item'>
          <div className='overlay'></div>
          <div className='contenitore secondo'>
            <h2>Bertazzo - Biancotto - Audino </h2>
            <p>
              Una nobile guerriera e un furfante patentato formano un
              improbabile team che compete nel Gioco della Corona, torneo sacro
              che decreterà il sovrano di un mondo fanta-rinascimentale.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className='third-item item'>
          <div className='overlay'></div>
          <div className='contenitore terzo item'>
            <h2>Bertazzo - Biancotto - Audino </h2>
            <p>
              Una nobile guerriera e un furfante patentato formano un
              improbabile team che compete nel Gioco della Corona, torneo sacro
              che decreterà il sovrano di un mondo fanta-rinascimentale.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosello;
