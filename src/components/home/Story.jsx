import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { story } from '../data/Data'
import { Autoplay, Navigation } from 'swiper';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';


const Story = () => {

    const [selectedStory, setSelectedStory] = useState(null);
    const [showStory, setShowStory] = useState(false);

    const handleClick = (clickedStory) => {
        setSelectedStory(clickedStory);
        setShowStory(true);
    };

    const handleClose = () => {
        setShowStory(false);
    };

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <div className='story-back'>
                <div className="story-area">
                    <Swiper
                        slidesPerView={9}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        className="storySwiper"
                        breakpoints={{
                            240: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 6,
                                spaceBetween: 0,
                            },
                            1000: {
                                slidesPerView: 9,
                                spaceBetween: 40,
                            },
                            1500: {
                                slidesPerView: 12,
                            },
                        }}
                    >
                        {story.map((el, idx) => (
                            <SwiperSlide key={idx}>
                                <div onClick={() => handleClick(el)} className="story">
                                    <p>{el.title}</p>
                                    <div className="bottom">{el.title}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {showStory && (
                <Swiper
                    className="storyTime"
                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                >
                    <SwiperSlide>
                        <div className="story">
                            <SwiperSlide>
                                <div className="story">
                                    <img className='story-img' src={selectedStory.img} alt="story" />
                                    <div className="left">
                                        <p>{selectedStory.title}</p>
                                        <span className="bottom">{selectedStory.title}</span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <div onClick={handleClose} className="close">
                                <AiOutlineCloseCircle />
                            </div>
                        </div>
                    </SwiperSlide>
                    {story
                        .filter((el) => el !== selectedStory)
                        .map((el, idx) => {
                            return (
                                <SwiperSlide key={`${el.title}-${idx}`}>
                                    <div className='story'>
                                        <div className='p-relative'>
                                            <img className='story-img' src={el.img} alt='story' />
                                            <Link className='story-link'>
                                                {el.linkName} <MdKeyboardDoubleArrowUp />
                                            </Link>
                                        </div>
                                        <div className='left'>
                                            <p>{el.title}</p>
                                            <span className='bottom'>{el.title}</span>
                                        </div>
                                        <div onClick={handleClose} className='close'>
                                            <AiOutlineCloseCircle />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            )}
        </>
    )
}

export default Story