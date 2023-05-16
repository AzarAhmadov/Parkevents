import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const Login = () => {
    return (
        <section id='login'>
            <div className="login-content">
                <h4>Park<span>events</span> </h4>
                <form action="">
                    <label htmlFor="email">
                        EMAIL<span>*</span>
                    </label>
                    <input type="text" id='email' placeholder='Email daxil edin' />

                    <label className='mt-2' htmlFor="password">
                        Parol<span>*</span>
                    </label>
                    <input type="password" id='password' placeholder='Parol daxil edin' />

                    <label className='mt-2' htmlFor="password">
                        Parol doğrulayın<span>*</span>
                    </label>
                    <input type="password" id='password' placeholder='Parol daxil edin' />
                    <div className="login-btn">
                        <Link> Qeydiyyat </Link>
                    </div>

                    <div className="form-register">
                        <p> Zaten hesabınız var ? <Link to='/Login'>Daxil olun</Link> </p>
                    </div>

                    <div className="form-bottom">
                        <span> Və ya </span>

                        <ul className='sosial'>
                            <li><a href="#"> <FaFacebookF /> </a></li>
                            <li><a href="#"> <AiOutlineGoogle /> </a></li>
                            <li><a href="#"> <AiOutlineTwitter /> </a></li>
                        </ul>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login