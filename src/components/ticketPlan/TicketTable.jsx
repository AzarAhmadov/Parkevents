import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Advert from '../home/Advert';
import { ticketPlaneTableCrud } from '../data/Data';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const TicketTable = () => {

    const [active, setActive] = useState(false);

    return (
        <section id='ticket-table'>
            <Container>
                <Row>
                    <Col lg={9}>
                        <>
                            {ticketPlaneTableCrud.map((el, idx) => (
                                <div className='ticket-place' key={idx}>
                                    <div>
                                        <p className='ticket-place-name'>{el.title}</p>
                                    </div>
                                    <div className='full'>
                                        <span className='title'>{el.seans}</span>
                                        <p className='bottom-title'>{el.date}</p>
                                    </div>
                                    <div className='full'>
                                        <p className='title'>{el.priceTitle}</p>
                                        <span className='bottom-title'>{el.price}</span>
                                    </div>
                                    <div className='full'>
                                        <button className='hover' onClick={() => setActive(!active)}> Bilet əldə edin </button>
                                    </div>
                                </div>
                            ))}
                        </>
                    </Col>
                    <Col lg={3}>
                        <Advert advert='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlhasvP6lmp-kecvklmarlhWpOsVQOIY95g&usqp=CAU' />
                    </Col>
                </Row>
            </Container>

            <div className={`getPlans ${active ? 'active' : ''}`}>
                <div className='plans-content'>
                    <p> Oturacaq seçin </p>
                    <img src='https://pixner.net/boleto/demo/assets/images/movie/seat-plan.png' alt='' />
                    <Link className='hover'>
                        Oturacaq planı <MdOutlineKeyboardArrowRight size={30} />
                    </Link>
                    <div onClick={() => setActive(!active)} className='close'>
                        <AiOutlineCloseCircle />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TicketTable;
