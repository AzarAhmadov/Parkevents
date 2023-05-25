import React from 'react'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { memo } from 'react';

const Follow = () => {
    return (
        <section id='follow'>
            <h5> Bizi izləyin </h5>
            <ul>
                <li><a href="#"> <GrFacebookOption /> </a></li>
                <li><a href="#"><AiOutlineTwitter /></a></li>
                <li><a href="#"> <AiOutlineInstagram /> </a></li>
                <li><a href="#"> <FaTiktok /> </a></li>
            </ul>
        </section>
    )
}

export default memo(Follow)