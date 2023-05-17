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

                    <label className='mt-2' htmlFor="passwordLogin">
                        Parol<span>*</span>
                    </label>

                    <input type="password" id='passwordLogin' autoComplete="on" placeholder='Parol daxil edin' />

                    <div className="check">
                        <div>
                            <input id='check' type="checkbox" />
                            <label htmlFor='check'>Yadda saxla</label>
                        </div>
                        <div>
                            <Link to='/Reset'>
                                Parolu unutdum
                            </Link>
                        </div>
                    </div>
                    <div className="login-btn">
                        <Link className='hover' to='/'> Giriş </Link>
                    </div>

                    <div className="form-register">
                        <p> Hesabınız yoxdur ? <Link to='/Register'>Qeydiyyatdan keçin</Link> </p>
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