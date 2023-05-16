import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io';

const Reset = () => {
    return (
        <section id='login'>
            <div className="login-content">
                <h4>Park<span>events</span> </h4>
                <form action="">
                    <label htmlFor="email">
                        EMAIL<span>*</span>
                    </label>
                    <input type="text" id='email' placeholder='Email daxil edin' />
                    <div className="login-btn">
                        <Link> Parlu sıfırla </Link>
                    </div>
                    <div className="form-register">
                        <p>
                            <IoIosArrowBack size={22} color='#fff' />
                            <Link to='/Login'>Geri</Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Reset