import React, { useEffect } from 'react'
import TicketFilter from './TicketFilter'
import TicketTable from './TicketTable'

export const TicketPlan = () => {
    
    useEffect(() => {
        { window.scrollTo(0, 0) }
    }, [])

    return (
        <main>
            <section id='plan'>
                <div className="plan-banner">
                    <img src="https://pixner.net/boleto/demo/assets/images/banner/banner03.jpg" alt="" />
                    <div className="ticket-name">
                        <p> Venus </p>
                    </div>
                </div>
            </section>
            <TicketFilter />
            <TicketTable />
        </main>
    )
}
