import React from 'react'
import { popularSearch } from '../data/Data'
import { movieList } from '../data/Data'
import { Col, Container, Row } from 'react-bootstrap'
import "swiper/css";
import "swiper/css/pagination";
import MoviesTop from './MoviesTop';
import Advert from './Advert';
import MovieListSingle from './MovieListSingle';

const MovieList = () => {

    return (
        <section id='movie-list'>
            <Container>
                <Row>
                    <Col lg={3}>

                        <Advert advert='https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner01.jpg' />

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

                        <Advert advert='https://img.freepik.com/premium-psd/kids-school-admission-social-media-post-web-banner-flyer-facebook-cover-photo-design-template_617385-51.jpg?w=2000' />
                        <br />
                        <Advert advert='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-banner-advertising-design-template-feed57129a83da45662ea9649d127fa0_screen.jpg?ts=1597366582' />

                    </Col>
                    <Col lg={9}>
                        <div className="movies-list-content">

                            <MoviesTop title="Fimlər" linkName="Hamısına bax" link="SearchCategory/Bütün-tədbirlər" />

                            <MovieListSingle movies={movieList.Movies} slidesPerView={3} />

                            <MoviesTop title="Teatr" linkName="Hamısına bax" link="SearchCategory/Bütün-tədbirlər" />

                            <MovieListSingle movies={movieList.Events} slidesPerView={3} />

                            <MoviesTop title='İdman oyunları' linkName='Hamısına bax' link="SearchCategory/Bütün-tədbirlər" />

                            <MovieListSingle movies={movieList.Sports} slidesPerView={3} />

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MovieList
