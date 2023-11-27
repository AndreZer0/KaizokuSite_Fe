/** @format */

import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
const Carosello = () => {
  return (
    <div className='contenitore-carosello'>
      <Carousel
        data-bs-theme='dark'
        className='carosello d-block w-100'>
        <Carousel.Item>
          <main>
            <div className='card'>
              <img
                src='https://i.postimg.cc/Wb9MGQBb/ANTEPRIMA-4.jpg'
                alt=''
              />
              <div class='card-content'>
                <h2>Audino - Bertazzo - Biancotto</h2>
                <p>
                  Una nobile guerriera e un furfante patentato formano un
                  improbabile team che compete nel Gioco della Corona, torneo
                  sacro che decreterà il sovrano di un mondo
                  fanta-rinascimentale.
                </p>
              </div>
            </div>
            {/* <div class='card'>
              <img
                src='https://i.postimg.cc/Wb9MGQBb/ANTEPRIMA-4.jpg'
                alt=''
              />
              <div class='card-content'>
                <h2>Audino - Bertazzo - Biancotto</h2>
                <p>
                  Una nobile guerriera e un furfante patentato formano un
                  improbabile team che compete nel Gioco della Corona, torneo
                  sacro che decreterà il sovrano di un mondo
                  fanta-rinascimentale.
                </p>
              </div>
            </div>
            <div class='card'>
              <img
                src='https://i.postimg.cc/Wb9MGQBb/ANTEPRIMA-4.jpg'
                alt=''
              />
              <div class='card-content'>
                <h2>Audino - Bertazzo - Biancotto</h2>
                <p>
                  Una nobile guerriera e un furfante patentato formano un
                  improbabile team che compete nel Gioco della Corona, torneo
                  sacro che decreterà il sovrano di un mondo
                  fanta-rinascimentale.
                </p>
              </div>
            </div> */}
          </main>
        </Carousel.Item>
        {/* <Carousel.Item>
          <main>
            <div class='card'>
              <img
                src='https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80'
                alt=''
              />
              <div class='card-content'>
                <h2>Fumetto</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt exercitationem iste, voluptatum, quia explicabo
                  laboriosam rem adipisci voluptates cumque, veritatis atque
                  nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                </p>
              </div>
            </div>
            <div class='card'>
              <img
                src='https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80'
                alt=''
              />
              <div class='card-content'>
                <h2>Fumetto</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt exercitationem iste, voluptatum, quia explicabo
                  laboriosam rem adipisci voluptates cumque, veritatis atque
                  nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                </p>
              </div>
            </div>
            <div class='card'>
              <img
                src='https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80'
                alt=''
              />
              <div class='card-content'>
                <h2>Fumetto</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt exercitationem iste, voluptatum, quia explicabo
                  laboriosam rem adipisci voluptates cumque, veritatis atque
                  nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                </p>
              </div>
            </div>
          </main>
        </Carousel.Item>
        <Carousel.Item>
          <main>
            <div class='card'>
              <img
                src='https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80'
                alt=''
              />
              <div class='card-content'>
                <h2>Fumetto</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt exercitationem iste, voluptatum, quia explicabo
                  laboriosam rem adipisci voluptates cumque, veritatis atque
                  nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                </p>
              </div>
            </div>
            <div class='card'>
              <img
                src='https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80'
                alt=''
              />
              <div class='card-content'>
                <h2>Fumetto</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt exercitationem iste, voluptatum, quia explicabo
                  laboriosam rem adipisci voluptates cumque, veritatis atque
                  nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                </p>
              </div>
            </div>
            <div class='card'>
              <img
                src='https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80'
                alt=''
              />
              <div class='card-content'>
                <h2>Fumetto</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt exercitationem iste, voluptatum, quia explicabo
                  laboriosam rem adipisci voluptates cumque, veritatis atque
                  nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                </p>
              </div>
            </div>
          </main>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Carosello;
