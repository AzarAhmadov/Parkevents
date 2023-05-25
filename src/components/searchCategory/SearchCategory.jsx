import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchFilter from '../home/SearchFilter'
import { movieList } from '../data/Data'
import { useNavigate, useParams } from 'react-router-dom'
import { memo } from 'react';

const SearchCategory = () => {
    const navigate = useNavigate();
    const handleMovieClick = (movie) => {
        navigate(`/detail/${movie.id}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const formattedId = id.replace(/-/g, ' ');

    const [itemsToShow, setItemsToShow] = useState(8);

    const handleShowMore = () => {
        setItemsToShow(itemsToShow + 8);
    };

    return (
        <main>
            <section id='category'>
                <div className="category-content">
                    <Container>
                        <SearchFilter searchClass="search-category" />
                    </Container>
                </div>

                <Container>
                    <div className="title">{formattedId}</div>
                    <div className="category-grid">
                        {
                            [...movieList.Movies, ...movieList.Events, ...movieList.Sports, ...movieList.MoviesHero]
                                .slice(0, itemsToShow)
                                .map((el, idx) => (
                                    <div key={idx} className="content" onClick={() => handleMovieClick(el)}>
                                        <img src={el.movieImg} alt={el.movieName} />
                                        <div className="movies-name">
                                            <span>{el.movieName}</span>
                                            <div className="price">{el.price}</div>
                                        </div>
                                        <div className="date">{el.date}</div>
                                    </div>
                                ))
                        }
                    </div>
                    {itemsToShow < movieList.Movies.length + movieList.Events.length + movieList.Sports.length + movieList.MoviesHero.length && (
                        <button className="show-more-button" onClick={handleShowMore}>
                            Daha çok göstər
                        </button>
                    )}
                </Container>
            </section>
        </main>
    );
}

export default memo(SearchCategory)
