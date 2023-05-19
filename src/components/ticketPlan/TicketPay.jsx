import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from 'react-bootstrap';
import { TabView, TabPanel } from 'primereact/tabview';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Time from './Time';

const TicketPay = () => {
    useEffect(() => {
        { window.scrollTo(0, 0) }
    }, [])
    return (
        <>
            <section id='ticket-pay'>
                <h3> Sifariş </h3>
                <Container>
                    <div className="back">
                        <Link to='/ticket-set' className='hover t-btn'>
                            <MdKeyboardDoubleArrowLeft />
                            Geri
                        </Link>
                    </div>
                    <div className="time">
                        <Time />
                    </div>
                    <Row>
                        <Col lg={8}>
                            <div className="information">
                                <h4> Əlaqə məlumatlarınızı daxil edin </h4>
                                <Form>
                                    <Row>
                                        <Col md>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ad, Soyad</Form.Label>
                                                <Form.Control type="email" placeholder="Azar Ahmadov    " />
                                            </Form.Group>
                                        </Col>
                                        <Col md>
                                            <Form.Group className="mb-3">
                                                <Form.Label>E-mail</Form.Label>
                                                <Form.Control type="email" placeholder="ahmadov@mail.ru" />
                                            </Form.Group>
                                        </Col>
                                        <Col md>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Əlaqə nömrəsi</Form.Label>
                                                <Form.Control type="text" placeholder="(994+) 00 000 00 00" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className="information">
                                <h4> Poromo kod (Var isə) </h4>
                                <Form>
                                    <Row>
                                        <Col md>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="text" placeholder="Promo kodunuzu daxil edin" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className="information payMethod">
                                <h4> Ödəniş növü </h4>
                                <TabView>
                                    <TabPanel header="Metod 1">
                                        <Form>
                                            <Row>
                                                <Col xl={12}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Kartın nömərsi</Form.Label>
                                                        <Form.Control type="email" placeholder="000 000 000 000" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md className='mt-2'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Tarix</Form.Label>
                                                        <Form.Control type="text" placeholder="MM/YY" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md className='mt-2'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Cvv</Form.Label>
                                                        <Form.Control type="text" placeholder="Cvv" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <div className="form-btn d-flex justify-content-center pb-2">
                                                <button className='hover t-btn ps-5 pe-5 pt-2 pb-2 mt-3' type='submit'> Ödəniş et </button>
                                            </div>
                                        </Form>
                                    </TabPanel>
                                    <TabPanel header="Metod 1">
                                        <Form>
                                            <Row>
                                                <Col xl={12}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Kartın nömərsi</Form.Label>
                                                        <Form.Control type="email" placeholder="000 000 000 000" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md className='mt-2'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Tarix</Form.Label>
                                                        <Form.Control type="text" placeholder="MM/YY" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md className='mt-2'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Cvv</Form.Label>
                                                        <Form.Control type="text" placeholder="Cvv" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <div className="form-btn d-flex justify-content-center pb-2">
                                                <button className='hover t-btn ps-5 pe-5 pt-2 pb-2 mt-3' type='submit'> Ödəniş et </button>
                                            </div>
                                        </Form>
                                    </TabPanel>
                                    <TabPanel header="Metod 1">
                                        <Form>
                                            <Row>
                                                <Col xl={12}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Kartın nömərsi</Form.Label>
                                                        <Form.Control type="email" placeholder="000 000 000 000" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md className='mt-2'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Tarix</Form.Label>
                                                        <Form.Control type="text" placeholder="MM/YY" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md className='mt-2'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Cvv</Form.Label>
                                                        <Form.Control type="text" placeholder="Cvv" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <div className="form-btn d-flex justify-content-center pb-2">
                                                <button className='hover t-btn ps-5 pe-5 pt-2 pb-2 mt-3' type='submit'> Ödəniş et </button>
                                            </div>
                                        </Form>
                                    </TabPanel>
                                </TabView>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="pay-dec">
                                <h4> Sifariş detalları </h4>
                                <ul>
                                    <li>
                                        <div>
                                            <span> Venus  <br />
                                                <span className='dif'> Azərbaycan dili</span>
                                            </span>
                                            <span className='count text-center'> 3 <br />
                                                <span className='dif'> Bilet </span>
                                            </span>
                                        </div>
                                        <div>
                                            <span> Tarix </span>
                                            <span className="dif"> 13 may,11:00 </span>
                                        </div>

                                        <div className="price">
                                            <p> Ümumi məbləğ </p>
                                            <p> 200 Azn </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <footer id='pay'>
                Park <span>Events</span>
            </footer>
        </>
    )
}

export default TicketPay