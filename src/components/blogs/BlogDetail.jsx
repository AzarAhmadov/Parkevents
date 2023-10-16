import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogAside from './BlogAside';
import { MdDateRange } from 'react-icons/md';
import GlobalBanner from '../globalBanner/GlobalBanner';
import Comment from '../comment/Comment';
import { useParams } from 'react-router-dom';
import { blogData } from '../data/Data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, EffectFade } from "swiper";
import 'swiper/css/effect-fade';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

const BlogDetail = () => {
    const { id } = useParams();
    const parsedId = parseInt(id);

    const [blogDataLeft, setBlogDataLeft] = useState(null);
    const [blogDataAside, setBlogDataAside] = useState(null);

    useEffect(() => {
        const leftBlog = blogData.blogLeft.find((blog) => blog.id === parsedId);
        const asideBlog = blogData.blogAside.find((blog) => blog.id === parsedId);

        if (leftBlog) {
            setBlogDataLeft(leftBlog);
        }

        if (asideBlog) {
            setBlogDataAside(asideBlog);
        }
    }, [parsedId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <GlobalBanner linkName2='Bloqlar' linkTo2='/blog' linkTo='/' title={blogDataLeft?.blogMainTitle || blogDataAside?.blogTitle} />
            <section id='blog-detail'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            {blogDataLeft?.blogImgs && blogDataLeft.blogImgs.length > 1 ? (
                                <Swiper navigation={true} spaceBetween={30} effect="fade" modules={[Navigation, EffectFade]} className="mySwiper">
                                    {blogDataLeft.blogImgs.map((blogImg, blogImgIdx) => (
                                        <SwiperSlide key={blogImgIdx}>
                                            <img src={blogImg} alt="Blog Image" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <div className='blog-single-img'>
                                    <img className='blog-img-area' src={blogDataLeft?.blogImgs[0] || blogDataAside?.blogImgs} alt="Blog Image" />
                                </div>
                            )}
                            <div className="share">
                                <span className="date"><MdDateRange />{blogDataLeft?.date || blogDataAside?.date}</span>
                                <ul className='sosial'>
                                    <li>
                                        <span>
                                            Paylaş :
                                        </span>
                                    </li>
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
                                </ul>
                            </div>
                            <div>
                                {blogDataLeft && (
                                    <div key={blogDataLeft.id}>
                                        <div className="blog-content">
                                            {blogDataLeft.blogDetailContent}
                                        </div>
                                    </div>
                                )}

                                {blogDataAside && (
                                    <div key={blogDataAside.id}>
                                        <div className="blog-content">
                                            {blogDataAside.blogDetailContent}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="comment-area">
                                <Comment />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="scrool-detail">
                                {blogDataLeft ? (
                                    <BlogAside blogAside={blogDataLeft} />
                                ) : blogDataAside ? (
                                    <BlogAside blogAside={blogDataAside} />
                                ) : null}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main >
    );
};

export default BlogDetail;
