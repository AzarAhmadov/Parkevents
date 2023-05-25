import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';
import { memo } from 'react';

const GlobalBanner = ({ title, linkTo, linkName, linkName2, linkTo2 }) => {
    return (
        <section id='global-banner'>
            <div className="content">
                <h4> {title} </h4>
                <ul>
                    <li>
                        <Link to={linkTo}> Ana səhifə </Link>
                    </li>
                    <IoIosArrowForward />
                    <li>
                        {linkName}
                    </li>
                    <li>
                        <Link to={linkTo2}> {linkName2} </Link>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default memo(GlobalBanner)