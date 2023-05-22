import React, { useEffect, useState } from 'react'
import GlobalBanner from '../globalBanner/GlobalBanner'
import { Col, Container, Row } from 'react-bootstrap'
import SingleBlog from './SingleBlog';
import BlogAside from '../blogs/BlogAside';
import { Paginator } from 'primereact/paginator';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <main>
            <GlobalBanner title='Bloglar' linkTo='/' linkName='Bloglar' />
            <section id='blog'>
                <Container className='blog-c'>
                    <Row>
                        <Col lg={8}>
                            <SingleBlog />
                            <Paginator first={first} rows={rows} totalRecords={120} onPageChange={onPageChange} />
                        </Col>
                        <Col lg={4}>
                            <div className="blog-right">
                                <BlogAside />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Blog