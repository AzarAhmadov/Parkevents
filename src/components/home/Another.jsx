import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { movieList } from '../data/Data'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import MoviesTop from './MoviesTop';

const Another = () => {
    const navigate = useNavigate();
    const handleMovieClick = (movie) => {
        navigate(`/detail/${movie.id}`);
    };


    const startTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <MoviesTop title='Digər tədbirlər' link='/SearchCaregory/Bütün-tədbirlər' />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="swiperAnother"
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
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {
                    movieList.Events.map((el, idx) => (
                        <SwiperSlide key={idx}>
                            <div onClick={startTop}>
                                <div className="content" onClick={() => handleMovieClick(el)}>
                                    <img src={el.movieImg} />
                                    <div className="movies-name">
                                        <span>
                                            {el.movieName}
                                        </span>
                                        <div className="price">
                                            {el.price}
                                        </div>
                                    </div>
                                    <div className="date">
                                        {el.date}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default Another