import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { popularSearch } from '../data/Data'
import { movieList } from '../data/Data'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const MovieList = () => {

    const navigate = useNavigate();
    const handleMovieClick = (movie) => {
        navigate(`/detail/${movie.id}`);
    };

    return (
        <section id='movie-list'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="advert">
                            <img src="https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner01.jpg" alt="" />
                        </div>

                        <div className="trend">
                            <h4> Trend axtarışlar </h4>
                            <div className="trend-content">
                                <ul>
                                    {
                                        popularSearch.map((el, idx) => (
                                            <li key={idx}>
                                                {el.title}
                                                <span> {el.category} </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="advert">
                            <img src="https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner02.jpg" alt="" />
                        </div>

                    </Col>
                    <Col lg={9}>
                        <div className="movies-list-content">
                            <div className="movies-top">
                                <h4>
                                    Konsert
                                </h4>
                                <Link to='/SearchCaregory/Bütün-tədbirlər'>
                                    Hamısına bax
                                </Link>
                            </div>
                            <div className="movies-slider">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"

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
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}
                                >
                                    {
                                        movieList.Movies.map((el, idx) => (
                                            <SwiperSlide key={idx}>
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
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>

                            <div className="movies-top mt-5">
                                <h4>
                                    Teatr
                                </h4>
                                <Link to='/SearchCaregory/Bütün-tədbirlər'>
                                    Hamısına bax
                                </Link>
                            </div>
                            <div className="movies-slider">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
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
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}
                                >
                                    {
                                        movieList.Events.map((el, idx) => (
                                            <SwiperSlide key={idx}>
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
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>

                            <div className="movies-top mt-5">
                                <h4>
                                    İdman oyunları
                                </h4>
                                <Link to='/SearchCaregory/Bütün-tədbirlər'>
                                    Hamısına bax
                                </Link>
                            </div>
                            <div className="movies-slider">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
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
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}
                                >
                                    {
                                        movieList.Sports.map((el, idx) => (
                                            <SwiperSlide key={idx}>
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
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MovieList
