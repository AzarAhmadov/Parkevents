import React, { useEffect, useState } from 'react'
import GlobalBanner from '../globalBanner/GlobalBanner'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai';
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
        <main id='blog-main'>
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
                                <div className="blog-right-item">
                                    <div className="search">
                                        <form>
                                            <label htmlFor="searcg">
                                                Axtarış
                                            </label>
                                            <input type="search" name="search" id="search" placeholder='Axtarış' />
                                            <button type='submit' className='hover t-btn'> Axtarış <AiOutlineSearch /> </button>
                                        </form>
                                    </div>
                                </div>
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