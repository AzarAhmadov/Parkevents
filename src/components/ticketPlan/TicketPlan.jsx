import React, { useEffect } from 'react'
import TicketFilter from './TicketFilter'
import TicketTable from './TicketTable'
import { useSelector } from 'react-redux';
import { memo } from 'react';

const TicketPlan = () => {

    useEffect(() => {
        { window.scrollTo(0, 0) }
    }, [])

    const movie = useSelector((state) => state.movie);

    return (
        <main>
            <section id='plan'>
                <div className="plan-banner">
                    {movie.movieVideo ? (
                        <video muted className='banner-video' controls={false} autoPlay>
                            <source src={movie.movieVideo} type="video/mp4" />
                        </video>

                    ) : (
                        <img src={movie.movieImg} alt="" />
                    )}

                    <div className="ticket-name">
                        <p> {movie.movieName} </p>
                    </div>
                </div>
            </section>
            <TicketFilter />
            <TicketTable />
        </main>
    )
}
export default memo(TicketPlan)