import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';

const MovieListSingle = ({ movies, slidesPerView }) => {
    const navigate = useNavigate();
    const handleMovieClick = (movie) => {
        navigate(`/detail/${movie.id}`);
    };

    const scrool = ()=>{
        window.scrollTo(0,0)
    }

    return (
        <section className='movies-slider'>
            <Swiper
                className='movieSwiper'
                slidesPerView={slidesPerView}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: slidesPerView,
                        spaceBetween: 20,
                    },
                }}
            >
                {movies.map((el, idx) => (
                    <SwiperSlide key={idx}>
                        <div onClick={scrool}>
                            <div className="content" onClick={() => handleMovieClick(el)}>
                                <img src={el.movieImg} alt={el.movieName} />
                                <div className="movies-name">
                                    <span>{el.movieName}</span>
                                    <div className="price">{el.price}</div>
                                </div>
                                <div className="date">{el.date}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MovieListSingle;
