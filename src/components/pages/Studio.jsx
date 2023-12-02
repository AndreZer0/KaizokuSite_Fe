/** @format */

import React, { useEffect, useState } from 'react';
import MyNav from '../navbar/MyNav';
import Footer from '../footer/Footer';
import './studio.css';

const Studio = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Aggiungi un ritardo per far sì che l'animazione sia visibile al caricamento della pagina
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
        id='bandiera'></div>
      <div className={`testo ${showText ? 'show-text' : ''}`}>
        <h1>MANIFESTO</h1>
        <h3>Oltre ogni limite.</h3>
      </div>
      <Footer />
    </>
  );
};

export default Studio;
