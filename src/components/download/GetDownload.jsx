import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SiApple } from 'react-icons/si';
import { FaGooglePlay } from 'react-icons/fa';
import appsImg from '../../../public/appsImg.png'
import { memo } from 'react';

const GetDownload = () => {
    return (
        <section id='get-download'>
            <Container>
                <Row>
                    <div className="title">
                        <h5>
                            GET BOLETO APP
                        </h5>
                        <span>
                            APP DOWNLOAD
                        </span>
                    </div>
                    <Col xs={5}>
                        <img className='img-fluid' src={appsImg} alt="appImg" />
                    </Col>
                    <Col xs={7}>
                        <div className="app-title">
                            <span>MAKE LIFE EASIER</span>
                            <p>
                                As the largest mobile platform in the country, we have the right services, the know-how and the expertise to make your buying transition to mobile simple, easy and painless.
                            </p>
                        </div>
                        <ul>
                            <li className='apps'>
                                <a href="#"> <SiApple /> App stor ile <br /> endir </a>
                                <a href="#"> <FaGooglePlay /> Google play ile <br /> endir </a>
                            </li>
                            <li className='chart'>
                                <p>1M+ <br /> <span> Apps downloads</span></p>
                                <p>500M+ <br /> <span> TICKETS A MONTH </span></p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default memo(GetDownload)