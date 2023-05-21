import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';

const GlobalBanner = () => {
    return (
        <section id='global-banner'>
            <div className="content">
                <h4> Mobil tədbiq endir </h4>
                <ul>
                    <li>
                        <Link> Ana səhifə </Link>
                    </li>
                    <IoIosArrowForward />
                    <li>
                        <Link> Mobil tədbiq </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default GlobalBanner