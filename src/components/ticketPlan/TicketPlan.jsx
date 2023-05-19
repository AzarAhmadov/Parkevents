import React, { useEffect } from 'react'
import TicketFilter from './TicketFilter'
import TicketTable from './TicketTable'
import { useSelector } from 'react-redux';

export const TicketPlan = () => {

    useEffect(() => {
        { window.scrollTo(0, 0) }
    }, [])

    const movie = useSelector((state) => state.movie);

    return (
        <main>
            <section id='plan'>
                <div className="plan-banner">
                    <img src={movie.movieImg} alt="" />
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
