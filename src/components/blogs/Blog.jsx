import React, { useEffect } from 'react'
import GlobalBanner from '../globalBanner/GlobalBanner'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineComment } from 'react-icons/ai';
import { BiShowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <GlobalBanner title='Bloglar' linkTo='/' linkName='Bloglar' />
            <section id='blog'>
                <Container>
                    <Row>
                        <Col xs={8}>
                            <div className="blog-left-item">
                                <div className="blog-content">
                                    <img src="https://pixner.net/boleto/demo/assets/images/blog/blog01.jpg" />
                                    <div className="blog-txt">
                                        <Link className="blog-title">
                                            Sayitimiz artiq istifadəyə hazirdir
                                        </Link>
                                        <ul>
                                            <li>
                                                <AiOutlineComment />
                                                20 komment
                                            </li>
                                            <li>
                                                <BiShowAlt /> 420 baxış
                                            </li>
                                        </ul>
                                        <p className='blog-dec'>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nulla, molestiae dolores obcaecati autem sunt, quas excepturi, reiciendis quidem perferendis officiis ex? Similique temporibus quae voluptatem labore nisi repellat doloremque.
                                        </p>
                                    </div>
                                    <div className="det-bottom">
                                        <Link>
                                            Ətraflı baxış <HiOutlineArrowNarrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={4}>

                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Blog