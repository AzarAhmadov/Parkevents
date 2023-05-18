import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ticketSetsPlan } from '../data/Data'

const TicketSet = () => {

    const [selectedCount, setSelectedCount] = useState(null);
    const CountSet = [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
    ];

    return (
        <>
            <section id='ticket-set'>
                <div className="ticket-banner">
                    <img src="https://pixner.net/boleto/demo/assets/images/banner/banner04.jpg" alt="" />
                    <div className="banner-title">
                        <p>Venus</p>
                        <span>
                            23 may, 13:00, Heydər Əliyev mərkəzi
                        </span>
                    </div>
                </div>
            </section>

            <div className="ticket-dec">
                <Container>
                    <div className="ticket-item">
                        <ul>
                            <li>
                                <Link className='hover t-btn' to='/ticket-plan'>
                                    <MdKeyboardDoubleArrowLeft /> Geri
                                </Link>
                            </li>
                            <li>
                                <Dropdown
                                    value={selectedCount}
                                    onChange={(e) => setSelectedCount(e.value)}
                                    options={CountSet}
                                    optionLabel="name"
                                    placeholder="Oturacaq sayı seçin"
                                    className='drop'
                                />
                            </li>
                            <li>
                                <p className="date">
                                    05:00 <br />
                                    <span> dəqiqə qaldı</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>

            <div className="ticket-sets">
                <Container>
                    <div className="set-title">
                        <p>Səhnə</p>
                    </div>
                    <div className="s-img">
                        <img src="https://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png" alt="" />
                    </div>
                    <div className="set-title">
                        <p>Oturacaqlar</p>
                    </div>

                    <div className="sets-list">
                        <ul className="ticket-sets">
                            {ticketSetsPlan.map((el, idx) => (
                                <li key={idx}>
                                    <div className='gap'>
                                        <span>{el.line}</span>
                                    </div>
                                    <ul className="armchair-list">
                                        {el.armchair.map((armchair, armchairIdx) => (
                                            <li key={`${idx}-${armchairIdx}`}>
                                                <button id={`armchair-${idx}-${armchairIdx}`}>
                                                    {armchair.component}
                                                    <div className="price">
                                                        Qiymət: {armchair.price} ₼
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='gap'>
                                        <span>{el.line}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="next">
                        <Row>
                            <Col>
                                <p>  Seçdiyiniz yerlər</p>
                                <span> D9, D10 </span>
                            </Col>
                            <Col>
                                <p> Ümumi məbləğ </p>
                                <span>150₼</span>
                            </Col>
                            <Col>
                                <Link className='hover t-btn' to='/ticket-plan'>
                                    Növbəti   <MdKeyboardDoubleArrowRight />
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TicketSet