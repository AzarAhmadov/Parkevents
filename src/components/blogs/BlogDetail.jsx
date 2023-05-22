import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogAside from './BlogAside'
import { MdDateRange } from 'react-icons/md';
import GlobalBanner from '../globalBanner/GlobalBanner';
import Comment from '../comment/Comment'

const BlogDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <GlobalBanner linkName='Bloglar' title='Yeniliklere aciq olmaq lazimdir' />
            <section id='blog-detail'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <img src="https://pixner.net/boleto/demo/assets/images/blog/blog02.jpg" alt="blog-detail" />
                            <span className="date"><MdDateRange /> Dekabr 25, 2023 </span>
                            <div className="blog-content">
                                <p className="title"> Cheap Movie Tickets - Bring Your Loved Ones to See New Releases </p>
                                <p className="simple-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                </p>
                                <p className="title"> Cheap Movie Tickets - Bring Your Loved Ones to See New Releases </p>
                                <p className="simple-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                </p>
                                <p className="simple-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                            <br />
                            <Comment />
                        </Col>
                        <Col lg={4}>
                            <div className="scrool-detail">
                                <BlogAside />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default BlogDetail