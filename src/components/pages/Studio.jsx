/** @format */

import React, { useEffect, useState } from 'react';
import MyNav from '../navbar/MyNav';
import Footer from '../footer/Footer';
import './studio.css';

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

      <Footer />
    </>
  );
};

export default Studio;
