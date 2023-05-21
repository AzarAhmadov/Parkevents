import React, { useEffect } from 'react'
import GlobalBanner from '../globalBanner/GlobalBanner'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai';
import SingleBlog from './SingleBlog';
import BlogAside from '../blogs/BlogAside';
import Stack from '@mui/material/Stack';
import { Pagination, PaginationItem} from '@mui/material';
import '@mui/material/styles';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <main id='blog-main'>
            <GlobalBanner title='Bloglar' linkTo='/' linkName='Bloglar' />
            <section id='blog'>
                <Container className='blog-c'>
                    <Row>
                        <Col lg={8}>
                            <SingleBlog />
                            <Stack spacing={1}>
                                <Pagination
                                    count={15}
                                    renderItem={(item) => (
                                        <PaginationItem
                                            {...item}
                                            icon={
                                                item.type === 'previous' ? <ArrowBack /> : <ArrowForward />
                                            }
                                        />
                                    )}
                                />
                            </Stack>
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