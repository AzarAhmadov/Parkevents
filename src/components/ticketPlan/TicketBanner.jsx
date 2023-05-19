import React from 'react'

const TicketBanner = ({ src, title, dec }) => {
    return (
            <section id='ticket-set'>
                <div className="ticket-banner">
                    <img src={src} alt="" />
                    <div className="banner-title">
                        <p>{title}</p>
                        <span>
                            {dec}
                        </span>
                    </div>
                </div>
            </section>
    )
}

export default TicketBanner