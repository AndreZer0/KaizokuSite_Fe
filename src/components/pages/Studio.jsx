/** @format */

import React, { useEffect, useState } from 'react';
import MyNav from '../navbar/MyNav';
import Footer from '../footer/Footer';
import './studio.scss';

const Studio = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Aggiungo un ritardo per far sì che l'animazione sia visibile al caricamento della pagina
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <MyNav />
      <div
        className='bandiera'
        id='bandiera'>
        <div className='sfondo'></div>
        <div className={`testo ${showText ? 'show-text' : ''}`}>
          <h1>LO STUDIO</h1>
          <h3>Chi siamo?</h3>
        </div>
      </div>
      <div className='article-container'>
        <p className='intro'>
          Sono tempi di bonaccia. La barca editoriale italiana galleggia
          placidamente in acque sicure. Tutte le vele sono ammainate. Ma non è
          certo per stare fermi a pescare che la nostra generazione ha scelto di
          prendere il largo… Ciò che desideriamo è navigare. Esplorare
          liberamente i confini del Fumetto per scoprire le terre vergini che ci
          attendono al di fuori delle rotte commerciali. Per farlo ci proponiamo
          di seguire 4 punti fondamentali:
        </p>
        <div className='caption uno'>
          <div className='caption-image'>
            <img
              src='https://img.freepik.com/premium-photo/pirate-ship-sailing-into-sunset-dreamstime-photography-sea-sunrise-image-ai-generated-art_843679-326.jpg'
              alt=''
            />
          </div>
          <div className='caption-description'>
            <h2>I- L’Arte è il tesoro</h2>
            <p>
              La ricerca della qualità nelle nostre proposte ha l’assoluta
              priorità. Creatività e sfrontatezza sono i valori in cui ci
              riconosciamo, per questo preferiamo sempre un’opera di maggior
              merito artistico a una di commerciabilità superiore.
            </p>
          </div>
        </div>
        <div className='caption due'>
          <div className='caption-description'>
            <h2>II - Autori al Timone</h2>
            <p>
              Kaizoku si ispira al modello delle creator-owned companies, nelle
              quali gli autori conservano i diritti sull’opera e sul suo
              utilizzo. Riteniamo giusto e doveroso che lo sforzo creativo venga
              ricompensato adeguatamente, incentivando rapporti di lavoro
              genuini e meritocratici.
            </p>
          </div>
          <div className='caption-image'>
            <img
              src='https://c.tenor.com/Mh629uPlr6oAAAAC/tenor.gif'
              alt=''
            />
          </div>
        </div>
        <div className='caption tre'>
          <div className='caption-image'>
            <img
              src='https://static.wixstatic.com/media/a743e4_9501bd8de3b1405a9edda5cbf08bbccf~mv2.jpg/v1/crop/x_746,y_0,w_1254,h_1326/fill/w_489,h_517,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/luke.jpg'
              alt=''
            />
          </div>
          <div className='caption-description'>
            <h2>III - Navigazione Digitale</h2>
            <p>
              Kaizoku vuole pubblicare diverse opere online, ognuna veicolata in
              modo unico, e offrire periodicamente contenuti di intrattenimento
              e informazione sulla Nona Arte. Puntiamo a raggiungere tutti,
              indifferentemente da distanze e disponibilità.
            </p>
          </div>
        </div>
        <div className='caption quattro'>
          <div className='caption-description'>
            <h2>IV - Il Volume è lo Scrigno</h2>
            <p>
              Il volume cartaceo del gumetto è un oggetto di arredamento e
              design, per questo Kaizoku dedica particolare attenzione a
              grafiche di copertina, dorsi, tipologie di carta e tecniche di
              stampa. Lo strumento di comunicazione, in fondo, è importante
              quanto il contenuto stesso.
            </p>
          </div>
          <div className='caption-image'>
            <img
              src='https://static.wixstatic.com/media/a743e4_f5b084cb87b1454f9b44ece5a2dd4328~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_1846/fill/w_486,h_449,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/scarpe.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='timbro cinque'>
        <p className='text-center'>
          Con queste premesse e una passione incrollabile per il Fumetto,
          battezziamo oggi il nostro vascello, su cui issiamo, alto e fiero, il
          vessillo nero del Parrottino.
        </p>
        <h5> I Fondatori.</h5>
        <img
          src='https://static.wixstatic.com/media/a743e4_1a695e4287fb4960bf5d84c19b8e27f7~mv2.png/v1/fill/w_207,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ceralacca.png'
          alt='timbro'
        />
      </div>
      <Footer />
    </>
  );
};

export default Studio;
