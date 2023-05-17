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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { movieList } from '../data/Data';
import VideSlide1 from '../../assets/video/video-slide.mp4'
import Advert from '../home/Advert';
import MovieListSingle from '../home/MovieListSingle';
import MoviesTop from '../home/MoviesTop';

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

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);


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
                            <Col ld={9}>
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
                                            <Link to='/ticket-plan' className='buy'>
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
                                <SwiperSlide>
                                    <img className='dec-img' src="https://pixner.net/boleto/demo/assets/images/movie/movie-details01.jpg" alt="" onClick={() => handleSlideClick(0)} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <video className='dec-img' controls onClick={() => handleSlideClick(1)} >
                                        <source src={VideSlide1} type="video/ogg" />
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='dec-img' src="https://pixner.net/boleto/demo/assets/images/movie/movie-details02.jpg" alt="" onClick={() => handleSlideClick(2)} />
                                </SwiperSlide>
                            </Swiper>
                            {modalOpen && (
                                <div className={`swiper-modal ${modalOpen ? 'active' : ''}`}>
                                    <Swiper
                                        navigation={true}
                                        modules={[Navigation]}
                                        className="mySwiper"
                                        initialSlide={currentSlide}
                                    >
                                        <SwiperSlide>
                                            <img className='dec-img' src="https://pixner.net/boleto/demo/assets/images/movie/movie-details01.jpg" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <video controls className='dec-img'>
                                                <source src={VideSlide1} type="video/ogg" />
                                            </video>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className='dec-img' src="https://pixner.net/boleto/demo/assets/images/movie/movie-details02.jpg" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="close" onClick={() => setModalOpen(false)}>
                                        <AiOutlineCloseCircle />
                                    </div>
                                </div>
                            )}
                            <div className="tabs-area">
                                <TabView>
                                    <TabPanel header="Açıqlama 1">
                                        <h5> Title 1 </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </TabPanel>
                                    <TabPanel header="Açıqlama 2">
                                        <h5> Title 2 </h5>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                        </p>
                                    </TabPanel>
                                    <TabPanel header="Açıqlama 3">
                                        <h5> Title 3 </h5>
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                        </p>
                                    </TabPanel>
                                </TabView>
                            </div>
                        </Col>
                    </Row>
                    <div className='mt-5'>
                        <MoviesTop title='Digər tədbirlər' link='/SearchCaregory/Bütün-tədbirlər' />
                        <MovieListSingle movies={movieList.Movies} slidesPerView='3' />
                    </div>
                </Container>
            </section>
        </main>
    )
}

export default Detail