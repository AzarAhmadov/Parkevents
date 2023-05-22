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

const SingleBlog = () => {
    return (
            <section id='single-post'>
                {
                    blogData.map((el, idx) => (
                        <Swiper navigation={true} spaceBetween='20' effect="fade" modules={[Navigation, EffectFade]} className="mySwiper" key={idx}>
                            {el.blogImgs.map((blogImg, blogImgIdx) => (
                                <SwiperSlide key={blogImgIdx}>
                                    <div className="blog-left-item">
                                        <div className="blog-content">
                                            <Link to='/blog-detail/1'>
                                                <img src={blogImg} alt="Blog Image" />
                                            </Link>
                                            <div className="blog-txt">
                                                <Link className="blog-title">
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
                                                <p className="blog-dec">
                                                    {el.blogDec}
                                                </p>
                                            </div>
                                            <div className="det-bottom">
                                                <Link>
                                                    Ətraflı baxış <HiOutlineArrowNarrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ))
                }
            </section>
    )
}

export default SingleBlog