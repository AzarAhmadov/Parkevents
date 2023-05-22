import React from 'react'
import { blogData } from '../data/Data';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineComment } from 'react-icons/ai';
import { BiShowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, EffectFade } from "swiper";
import 'swiper/css/effect-fade';
import { MdDateRange } from 'react-icons/md';

const SingleBlog = () => {

    return (
        <section id='single-post'>
            {blogData.blogLeft.map((el) => (
                <div className="blog-left-item" key={el.id}>
                    <div className="blog-content">
                        {el.blogImgs.length > 1 ? (
                            <Swiper navigation={true} spaceBetween={30} effect="fade" modules={[Navigation, EffectFade]} className="mySwiper">
                                {el.blogImgs.map((blogImg, blogImgIdx) => (
                                    <SwiperSlide key={blogImgIdx}>
                                        <Link to={`/blog-detail/${el.id}`}>
                                            <img src={blogImg} alt="Blog Image" />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <Link to={`/blog-detail/${el.id}`}>
                                <img src={el.blogImgs[0]} alt="Blog Image" />
                            </Link>
                        )}
                        <div className="blog-txt">
                            <p className="date"><MdDateRange /> {el.date} </p>
                            <Link className='blog-title' to={`/blog-detail/${el.id}`}>
                                {el.blogMainTitle}
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
                            <p className="blog-dec">
                                {el.blogMainDec}
                            </p>
                        </div>
                        <div className="det-bottom">
                            <Link to={`/blog-detail/${el.id}`}>
                                Ətraflı baxış <HiOutlineArrowNarrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default SingleBlog