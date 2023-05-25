import React from 'react';
import { blogData } from '../data/Data';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineComment } from 'react-icons/ai';
import { BiShowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import 'swiper/css/effect-fade';
import Follow from './Follow';
import BlogSearch from './BlogSearch';
import { memo } from 'react';

const SingleBlog = () => {
    return (
        <main>
            <BlogSearch />
            <section id='blog-aside'>
                <div className="blog-content">
                    <h5> Sonuncu bloglar </h5>
                    <Swiper navigation={true} spaceBetween={20}  modules={[Navigation]} className="mySwiper">
                        {blogData.blogAside.map((el, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="blog-left-item">
                                    <div className="blog-content">
                                        <Link to={`/blog-detail/${el.id}`}>
                                            <img src={el.blogImgs} alt="Blog Image" />
                                        </Link>
                                        <div className="blog-txt">
                                            <Link to={`/blog-detail/${el.id}`} className="blog-title">
                                                {el.blogTitle}
                                            </Link>
                                            <ul>
                                                <li>
                                                    <AiOutlineComment />
                                                    {el.comment} komment
                                                </li>
                                                <li>
                                                    <BiShowAlt />
                                                    {el.seen} baxış
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <Follow />
        </main>
    );
};

export default memo(SingleBlog);
