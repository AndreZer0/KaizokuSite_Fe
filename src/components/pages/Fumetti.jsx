/** @format */

import React, { useState } from 'react';
import MyNav from '../navbar/MyNav';
import Footer from '../footer/Footer';
import './fumetti.scss';

const Fumetti = () => {
  const [selectedItem, setSelectedItem] = useState('item-1');

  const handleInputChange = itemId => {
    setSelectedItem(itemId);
  };

  return (
    <>
      <MyNav />
      <div className={`comics-container ${selectedItem}`}>
        <input
          type='radio'
          name='slider'
          id='item-1'
          checked={selectedItem === 'item-1'}
          onChange={() => handleInputChange('item-1')}
        />
        <input
          type='radio'
          name='slider'
          id='item-2'
          checked={selectedItem === 'item-2'}
          onChange={() => handleInputChange('item-2')}
        />
        <input
          type='radio'
          name='slider'
          id='item-3'
          checked={selectedItem === 'item-3'}
          onChange={() => handleInputChange('item-3')}
        />
        <div className='cards'>
          <label
            className='card'
            htmlFor='item-1'
            id='book-1'
            type='button'>
            <img
              src='https://i.postimg.cc/hvMbH0RM/ANTEPRIMA-4.jpg'
              alt='book'
              className='fumetto'
            />
          </label>

          <label
            className='card'
            htmlFor='item-2'
            id='book-2'
            type='button'>
            <img
              src='https://i.postimg.cc/vBtGH353/ANTEPRIMA-IL-CAVALIERE-RIAVVOLTO.jpg'
              alt='book'
              className='fumetto'
            />
          </label>

          <label
            className='card'
            htmlFor='item-3'
            id='book-3'
            type='button'>
            <img
              src='https://i.postimg.cc/bYH4dfPp/ANTEPRIMA-LA-TRAGEDIA-DELL-OLANDESE-VOLANTE.jpg'
              alt='book'
              className='fumetto'
            />
          </label>
        </div>

        <div className='player'>
          <div className='upper-part'>
            <div
              className='info-area'
              id='test'>
              <label
                className='book-info'
                id='book-info-1'>
                <div className='title'>
                  <a href='#four'>
                    <h2 className='scheda'>Vai alla scheda!</h2>
                  </a>
                </div>
              </label>
              <label
                className='book-info'
                id='book-info-2'>
                <div className='title'>
                  <a href='#knight'>
                    <h2 className='scheda'>Vai alla scheda!</h2>
                  </a>
                </div>
              </label>
              <label
                className='book-info'
                id='book-info-3'>
                <div className='title'>
                  <a href='#olandese'>
                    <h2 className='scheda'>Vai alla scheda!</h2>
                  </a>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='blog-card'>
        <div className='meta'>
          <div
            className='photo'
            id='four'></div>
          <ul className='details'>
            Autori:
            <li className='author'>
              <a href='#'>Paolo Bertazzo</a>
            </li>
            <li className='author'>
              <a href='#'>Gregorio Biancotto</a>
            </li>
            <li className='author'>
              <a href='#'>Edoardo Audino</a>
            </li>
          </ul>
        </div>
        <div className='description'>
          <h1> 4</h1>
          <h2>
            <ul>
              <li> Testi di Paolo Bertazzo e Gregorio Biancotto.</li>
              <li> Disegni di Edoardo Audino.</li>
            </ul>
          </h2>
          <p>
            Anni di guerre sanguinose tra le potenze di Tallia hanno costretto
            Dio a intervenire, spezzando le corone dei quattro sovrani e
            preannunciando la ricomparsa dei pezzi sottratti in un futuro più
            propizio. Quel giorno dei valorosi partecipanti si sfideranno in un
            torneo santo per appropriarsi dei frammenti e riunirli per la prima
            volta in un’unica corona che consentirà al vincitore di governare su
            una Tallia finalmente unita. Secoli dopo, all’avverarsi della
            profezia che sancisce l’inizio del torneo, la nobile Beatrice di
            Santorre parte per la sacra impresa. Ma le vie del Signore sono
            davvero infinite, e così la provvidenza porta l’eroina di sangue blu
            a condividere il percorso con un giovane ladruncolo di nome
            Girolamo, proprietario di una reliquia preziosissima ma dal potere
            “scomodo”, di cui lui non riesce a liberarsi. Questa stravagante
            coppia di gioco affronta avventure eccezionali mentre attraversa le
            signorie di un incredibile mondo fanta-rinascimentale.
          </p>
          <p className='read-more'>
            <a href='#where-to-buy'>Dove posso acquistarlo?</a>
          </p>
        </div>
      </div>
      <div className='blog-card alt'>
        <div className='meta'>
          <div
            className='photo'
            id='knight'></div>
          <ul className='details'>
            Autore:
            <li className='author'>
              <a href='#'>Edoardo Follegatti</a>
            </li>
          </ul>
        </div>
        <div className='description'>
          <h1>IL CAVALIERE RIAVVOLTO</h1>
          <h2>Testi e disegni di Edoardo Follegatti.</h2>
          <p>
            La preservazione della vista è il comandamento più importante dei
            Cavalieri dell’Inerzia, gli zeloti inviati a recuperare la Verità,
            un leggendario artefatto di un tempo dimenticato che potrà porre
            fine alla Regressione, un alzheimer condiviso che, progressivamente,
            cancella lo spirito del tempo e le conoscenze dell’umanità. Il
            Cavaliere che avesse trovato la Verità avrebbe avuto l’onore di
            sfidare il Blast, la terrificante conseguenza dell’esposizione
            visiva all'artefatto e diventare il prescelto in grado di
            riavvolgere la Regressione. Ma la spedizione degli zeloti fu un
            fallimento. La Verità non venne mai trovata e il cavaliere Barnaba
            venne dato per disperso. Questa storia narra le sue vicende lungo
            due linee temporali intrecciate: quella presente, in cui egli fa
            ritorno al castello con l'artefatto nella borsa e quella passata in
            cui scopriamo cosa abbia dovuto sacrificare per trovare la Verità.
          </p>
          <p className='read-more'>
            <a href='#where-to-buy'>Dove posso acquistarlo?</a>
          </p>
        </div>
      </div>
      <div className='blog-card'>
        <div className='meta'>
          <div
            className='photo'
            id='olandese'></div>
          <ul className='details'>
            Autori:
            <li className='author'>
              <a href='#'>Jacopo Pasqualini</a>
            </li>
            <li className='author'>
              <a href='#'>Giada Belviso</a>
            </li>
          </ul>
        </div>
        <div className='description'>
          <h1>LA TRAGEDIA DELL’OLANDESE VOLANTE</h1>
          <h2>
            <ul>
              <li>Testi di Jacopo Pasqualini.</li>
              <li>Disegni di Giada Belviso</li>
            </ul>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p className='read-more'>
            <a href='#where-to-buy'>Dove posso acquistarlo?</a>
          </p>
        </div>
      </div>
      <a
        href='/'
        className='hpd hpd-basic'
        id='where-to-buy'>
        <img src='https://i.postimg.cc/KY6LtMxg/Parrot-logo-solo-bianco-trasp.png' />
        <h4 className='hpd-title'>
          Tutti i nostri volumi sono acquistabili in fiera
        </h4>

        <p className='hpd-desc'>Venite a trovarci!</p>

        <span
          href='#'
          className='hpd-btn'>
          Scopri le fiere<span className='hpd-kickstarter'> in arrivo</span>
        </span>
      </a>

      <Footer />
    </>
  );
};

export default Fumetti;
