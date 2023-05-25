import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Advert from '../home/Advert';
import { ticketPlaneTableCrud } from '../data/Data';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { memo } from 'react';

const TicketTable = () => {

    const [active, setActive] = useState(false);

    return (
        <main>
            <section id='ticket-table'>
                <Container>
                    <Row>
                        <Col lg={9}>
                            <>
                                {ticketPlaneTableCrud.map((el, idx) => (
                                    <div className='ticket-place' key={idx}>
                                        <div>
                                            <span className='title'>{el.placeName}</span>
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
                            <ul className='advert-list'>
                                <li>
                                    <Advert advert='https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif' />
                                </li>
                                <li>
                                    <Advert advert='https://assets.materialup.com/uploads/e864bbcb-3ce1-4642-875f-b6ca8d33a293/preview.gif' />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

                <div className={`getPlans ${active ? 'active' : ''}`}>
                    <div className='plans-content'>
                        <p> Oturacaq seçin </p>
                        <img src='https://pixner.net/boleto/demo/assets/images/movie/seat-plan.png' alt='' />
                        <Link to='/ticket-set' className='hover'>
                            Oturacaq planı <MdOutlineKeyboardArrowRight size={30} />
                        </Link>
                        <div onClick={() => setActive(!active)} className='close'>
                            <AiOutlineCloseCircle />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default memo(TicketTable)
