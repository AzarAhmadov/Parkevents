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

                        <Advert advert='https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner02.jpg' />

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
