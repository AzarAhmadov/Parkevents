import React from 'react'
import Hero from './Hero'
import Search from './Search'
import MovieList from './MovieList'
import Story from './Story'
import { memo } from 'react';

const Home = () => {
    return (
        <main>
            <Story />
            <Hero />
            <Search />
            <MovieList />
        </main>
    )
}

export default memo(Home)