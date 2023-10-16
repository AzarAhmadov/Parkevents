import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const MoviesTop = ({ link, title, linkName }) => {

    return (
        <div className="movies-top">
            <h4>{title}</h4>
            <Link to={link}>{linkName}</Link>
        </div>
    );
};

export default memo(MoviesTop);
