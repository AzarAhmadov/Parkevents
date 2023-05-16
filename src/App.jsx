import React, { useState, useEffect } from 'react';
import { SlArrowUp } from 'react-icons/sl';
import { Pages } from './components/pages/Pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import BounceLoader from "react-spinners/BounceLoader";

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

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>

      {
        loading ?
          
          <div className="animate">
            <BounceLoader
            loading={loading}
            size={50}
            color={'#31d7a9'}
          />
          </div>
          :
          <Pages />
      }
      <button className={`${showScrollButton ? 'scroll-button active' : 'scroll-button'}`} onClick={scrollToTop}>
        <SlArrowUp />
      </button>
    </>
  )
}

export default App