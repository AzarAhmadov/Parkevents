import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id='footer'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col className='g-0' xs={6}>
                        <Link className='logo' to='/'>
                            Park<span>events</span>
                        </Link>
                    </Col>
                    <Col className='d-flex justify-content-end g-0' xs={6}>
                        <ul className='sosial'>
                            <li>
                                <a href='#'>
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <AiFillInstagram />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <BsTwitter />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <FaTiktok />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='row-2 d-flex align-items-center'>
                    <Col className='g-0' xs={6}>
                        <p className='copyright'>Copyright © 2023.Bütün hüquqlar mühafizə olunur</p>
                    </Col>
                    <Col className='d-flex justify-content-end g-0' xs={6}>
                        <ul className='d-flex'>
                            <li>
                                <Link to='/blog'>
                                    Bloglar
                                </Link>
                            </li>
                            <li>
                                <Link to='/Question'>
                                    Suallar
                                </Link>
                            </li>
                            <li>
                                <Link to='/download'>
                                    Endir
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer