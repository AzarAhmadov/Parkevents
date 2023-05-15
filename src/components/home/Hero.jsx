import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-flip";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, EffectFlip } from "swiper";
import { movieList } from '../data/Data'
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();
  const handleMovieClick = (movie) => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <section id='hero'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFlip]}
        effect={"flip"}
        className="mySwiper"
      >
        {
          movieList.MoviesHero.map((el, idx) => (
            <SwiperSlide key={idx}>
              <div className="hero-img" onClick={() => handleMovieClick(el)}>
                <img src={el.movieImg} alt="" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Hero