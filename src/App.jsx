import React, { useState, useEffect } from 'react';
import { SlArrowUp } from 'react-icons/sl';
import { Pages } from './components/pages/Pages'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Pages />
      <button className={`${showScrollButton ? 'scroll-button active' : 'scroll-button'}`} onClick={scrollToTop}>
        <SlArrowUp />
      </button>
    </>
  )
}

export default App