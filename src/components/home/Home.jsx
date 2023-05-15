import React from 'react'
import Hero from './Hero'
import Search from './Search'
import MovieList from './movieList'

const Home = () => {
    return (
        <main>
            <Hero />
            <Search />
            <MovieList />
        </main>
    )
}

export default Home