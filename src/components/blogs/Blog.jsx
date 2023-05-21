import React, { useEffect } from 'react'
import GlobalBanner from '../globalBanner/GlobalBanner'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai';
import SingleBlog from './SingleBlog';
import BlogAside from '../blogs/BlogAside';
import { Pagination } from 'antd';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    return (
        <main id='blog-main'>
            <GlobalBanner title='Bloglar' linkTo='/' linkName='Bloglar' />
            <section id='blog'>
                <Container className='blog-c'>
                    <Row>
                        <Col lg={8}>
                            <SingleBlog />
                            <Pagination
                                showSizeChanger={false}
                                onShowSizeChange={onShowSizeChange}
                                defaultCurrent={21}
                                total={100}
                                showLessItems
                            />
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