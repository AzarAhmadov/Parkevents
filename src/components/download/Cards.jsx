import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RiMagicLine } from 'react-icons/ri';
import { memo } from 'react';

const Cards = () => {
    return (
        <section id='cards'>
            <Container>
                <Row>
                    <div className="title">
                        <span>POWERFUL AND FLEXIBLE</span>
                        <h5>
                            ROBUST FEATURE
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque est, aliquam eu dignissim eget, eleifend at nunc. Curabitur non dapibus nulla.
                        </p>
                    </div>
                    <Col md={6} xs={12} lg={3}>
                        <div className="card-item">
                            <div className="icon">
                                <RiMagicLine />
                            </div>
                            <h6 className="title">
                                BRAND NEW
                            </h6>
                            <p>
                                Brand New User Interface with Latest Technology
                            </p>
                        </div>
                    </Col>
                    <Col md={6} xs={12} lg={3}>
                        <div className="card-item">
                            <div className="icon">
                                <RiMagicLine />
                            </div>
                            <h6 className="title">
                                BRAND NEW
                            </h6>
                            <p>
                                Brand New User Interface with Latest Technology
                            </p>
                        </div>
                    </Col>
                    <Col md={6} xs={12} lg={3}>
                        <div className="card-item">
                            <div className="icon">
                                <RiMagicLine />
                            </div>
                            <h6 className="title">
                                BRAND NEW
                            </h6>
                            <p>
                                Brand New User Interface with Latest Technology
                            </p>
                        </div>
                    </Col>
                    <Col md={6} xs={12} lg={3}>
                        <div className="card-item">
                            <div className="icon">
                                <RiMagicLine />
                            </div>
                            <h6 className="title">
                                BRAND NEW
                            </h6>
                            <p>
                                Brand New User Interface with Latest Technology
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default memo(Cards)