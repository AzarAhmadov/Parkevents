import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchFilter from '../home/SearchFilter'

const Search = () => {
    return (
        <section id="search">
            <Container>
                <div className="search-content">
                    <div className="search-top">
                        <p> Parkevents'ə xoş gəlmisiz </p>
                        <span> Nə axtarırsız ? </span>
                    </div>
                    <SearchFilter />
                </div>
            </Container>
        </section>
    );
};

export default Search;
