import React from 'react'
import { Link } from 'react-router-dom'

const MoviesTop = ({ link, title }) => {
    return (
        <div className="movies-top mt-5">
            <h4>
                {title}
            </h4>
            <Link to={link}>
                Hamısına bax
            </Link>
        </div>
    )
}

export default MoviesTop