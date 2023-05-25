import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { memo } from 'react';

const BlogSearch = () => {
    return (
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
    )
}

export default memo(BlogSearch)