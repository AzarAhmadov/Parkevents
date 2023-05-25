import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TabView, TabPanel } from 'primereact/tabview';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { MdDateRange } from 'react-icons/md';
import { TbClockHour7 } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { movieList } from '../data/Data';
import Advert from '../home/Advert';
import MovieListSingle from '../home/MovieListSingle';
import MoviesTop from '../home/MoviesTop';
import { useDispatch } from 'react-redux';
import { setMovieInfo } from '../../app/features/movieDetail/MovieDetail';
import Comment from '../comment/Comment';
import { memo } from 'react';

const getMovieById = (id) => {
    const categories = Object.values(movieList);
    const movies = categories.reduce((arr, category) => arr.concat(category), []);
    return movies.find((movie) => movie.id === id) || null;
};

const Detail = () => {
    const { id } = useParams();
    const movie = getMovieById(parseInt(id));
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleLikeClick = () => {
        if (!clicked) {
            setCount(count + 1);
            setClicked(true);
            likeRef.current.classList.add('active')
        } else {
            setCount(0);
            setClicked(false);
            likeRef.current.classList.remove('active')
        }
    };

    const likeRef = useRef()

    const [modalOpen, setModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideClick = (index) => {
        setCurrentSlide(index);
        setModalOpen(true);
    };

    const scrollRef = useRef(null);

    const mediaRender = () => {
        if (movie && movie.bannerVideo) {
            return (
                <video muted className='banner-video' controls={false} autoPlay>
                    <source src={movie.bannerVideo} type="video/mp4" />
                </video>
            );
        } else if (movie && movie.banner) {
            return <img src={movie.banner} alt="" />;
        } else {
            return null;
        }
    }

    const dispatch = useDispatch();

    const handleTicketButtonClick = () => {
        if (movie) {
            dispatch(setMovieInfo({ movieName: movie.movieName, movieImg: movie.banner, movieVideo: movie.bannerVideo }));
        }
    };

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    return (
        <main>
            <section id='detail'>
                <div ref={scrollRef} className="detail-banner">
                    {mediaRender()}
                </div>
                <div className="detail-bottom">
                    <Container>
                        <Row>
                            <Col lg={3}>
                                <div className="detail-img">
                                    <img src={movie.movieImg} alt="" />
                                </div>
                            </Col>
                            <Col lg={9}>
                                <div className="detail-txt">
                                    <p className='movie-title'>{movie.movieName}</p>
                                    <span className="category">
                                        Film
                                    </span>
                                    <div className="date">
                                        <ul>
                                            <li>
                                                <MdDateRange /> 06 Dec, 2020
                                            </li>
                                            <li>
                                                <TbClockHour7 /> 06 Dec, 2020
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ticket">
                                        <div className='d-flex'>

                                            <Link to='/ticket-plan' className='buy hover' onClick={handleTicketButtonClick}>
                                                Bilet əldə edin
                                            </Link>

                                            <div className="like">
                                                <button ref={likeRef}>
                                                    <AiOutlineHeart onClick={handleLikeClick} />
                                                </button>
                                                <span className="number">{count}</span>
                                            </div>
                                        </div>

                                        <ul className='sosial'>
                                            <li>
                                                <a href='#'>
                                                    <FaFacebookF />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    <AiFillInstagram />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    <BsTwitter />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className='dec-container'>
                    <Row>
                        <Col lg={3}>
                            <Advert advert='https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner01.jpg' />
                            <Advert advert='https://img.freepik.com/premium-vector/basketball-tournament-flyer-design-template_9245-575.jpg?w=2000' />
                        </Col>
                        <Col lg={9}>
                            <h4 className='dec-title'> Tədbir haqqında  </h4>
                            <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                slidesPerView={3}
                                spaceBetween={30}
                                className="mySwiper"
                                breakpoints={{
                                    340: {
                                        slidesPerView: 1,
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
                                {movie.eventsContent.map((event, index) => (
                                    <SwiperSlide key={index}>
                                        {event.img && (
                                            <img
                                                className='dec-img'
                                                src={event.img}
                                                alt=""
                                                onClick={() => handleSlideClick(index)}
                                            />
                                        )}
                                        {event.video && (
                                            <div className='video-container' onClick={() => handleSlideClick(index)}>
                                                <video className='dec-img'>
                                                    <source src={event.video} type="video/mp4" />
                                                </video>
                                                <div className="play-icon">
                                                    <AiOutlinePlayCircle />
                                                </div>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                            {modalOpen && (
                                <div className={`swiper-modal ${modalOpen ? 'active' : ''}`}>
                                    <Swiper
                                        navigation={true}
                                        modules={[Navigation]}
                                        className="mySwiper"
                                        initialSlide={currentSlide}
                                        spaceBetween={10}
                                    >
                                        {movie.eventsContent.map((event, index) => (
                                            <SwiperSlide key={index}>
                                                {event.img && (
                                                    <img
                                                        className='dec-img'
                                                        src={event.img}
                                                        alt=""
                                                        onClick={() => handleSlideClick(index)}
                                                    />
                                                )}
                                                {event.video && (
                                                    <video className='dec-img' controls>
                                                        <source src={event.video} type="video/mp4" />
                                                    </video>
                                                )}
                                            </SwiperSlide>
                                        ))}
                                        <div className="close" onClick={() => setModalOpen(false)}>
                                            <AiOutlineCloseCircle />
                                        </div>
                                    </Swiper>
                                </div>
                            )}
                            <div className="tabs-area">
                                <TabView>
                                    <TabPanel header="Məkan yeri">
                                        <h5 className='loc-name'> Bakı Musiqi Akademiyası nəzdində Opera Studiyasının Konsert salonu </h5>
                                        <div className="det">
                                            <p className='loc-simple'>
                                                Şəmsi Bədəlbəyli 98, Bakı, Azərbaycan
                                            </p>
                                            <p className='number'>
                                                <span>
                                                    Telefon :
                                                </span>
                                                (+994 12)493 37 81
                                            </p>
                                        </div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5890868134775!2d49.949516815319996!3d40.395798914836334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030630e150b9241%3A0xde46dce80b8fd0f4!2sKhalglar%20Dostlughu!5e0!3m2!1sen!2saz!4v1677100869444!5m2!1sen!2saz" width="100%"></iframe>
                                    </TabPanel>
                                    <TabPanel header="Tədbir haqqında">
                                        <p>
                                            Mənim sehrli aləminə xoş gəlmisiniz.Mən sizə möcüzələrlə dolu sehrli aləm bəxş edəcəyəm. Möcüzələr nəinki səhnədə hətta birbaşa tamaşaçıların iştirakı ilə  yaranacaq. Dünyanın məşhur sehrbazlarının nümayiş etdiyi ülluziya nömrələri mənim nümayişim altında sizləri heyran edəcək. Özünüzə və yaxınlarınıza möcüzələrlə dolu bir gün bəxş edin. Həmcinin sizlər üçün xüsusi dəvət olunmuş orijinal janr artistləri sizləri heyran edecek. Sizi yaddaşlardan silinməyən bütün ailə üçün nəzərdə tutulan şouda gözləyirəm.
                                            Rusiya ülluziyacılar birliyinin üzvü. (РАЙ)
                                            Dünya sehrbazlar birliyinin üzvü. (The İnternational brotherhood of magician)
                                            Orijinal janr Artisti Anar Əliyev
                                        </p>
                                    </TabPanel>
                                </TabView>
                            </div>
                            <Col xs={12}>
                                <Comment />
                            </Col>
                        </Col>
                    </Row>
                    <div className='mt-5'>
                        <MoviesTop title='Bənzər tədbirlər' link='' />
                        <MovieListSingle movies={movieList.Movies} slidesPerView='4' />
                    </div>
                </Container>
            </section>
        </main>
    )
}

export default memo(Detail)