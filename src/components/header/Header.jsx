import React, { useEffect, useState, useRef } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { BiLogInCircle } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';

import Container from 'react-bootstrap/esm/Container';

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const navigate = useNavigate();

    const handleLinkName = (categoryName) => {
        navigate(`/SearchCaregory/${categoryName}`);
    };

    const openBar = () => {
        mobilRef.current.classList.add('active');
        document.body.classList.add('active')
    }

    const close = () => {
        mobilRef.current.classList.remove('active');
        document.body.classList.remove('active')
    }

    document.body.classList.remove('active')

    const mobilRef = useRef()

    return (
        <>
            <header className={active ? 'header-scrool' : ''} id='header'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col xs={2}>
                            <Link className='logo' to='/' onClick={scrollToTop}>
                                Park<span>events</span>
                            </Link>
                        </Col>
                        <Col xs={10}>
                            <nav>
                                <ul>
                                    <li onClick={() => handleLinkName('Bütün-tədbirlər')} className='menu-item'>
                                        <NavLink to='/SearchCaregory/Bütün-tədbirlər'>
                                            Bütün tədbirlər
                                        </NavLink>
                                    </li>
                                    <li onClick={() => handleLinkName('Konsert')} className='menu-item'>
                                        <NavLink to='/SearchCaregory/Konsert'>
                                            Konsert
                                        </NavLink>
                                    </li>
                                    <li onClick={() => handleLinkName('Futbol')} className='menu-item'>
                                        <NavLink to='/SearchCaregory/Futbol'>
                                            Futbol
                                        </NavLink>
                                    </li>
                                    <li onClick={() => handleLinkName('Teatr')} className='menu-item'>
                                        <NavLink to='/SearchCaregory/Teatr'>
                                            Teatr
                                        </NavLink>
                                    </li>
                                    <li onClick={() => handleLinkName('Muzeylər')} className='menu-item'>
                                        <NavLink to='/SearchCaregory/Muzeylər'>
                                            Muzeylər
                                        </NavLink>
                                    </li>
                                    <li onClick={() => handleLinkName('Tədbirlər')} className='menu-item'>
                                        <NavLink to='/SearchCaregory/Tədbirlər'>
                                            Tədbirlər
                                        </NavLink>
                                    </li>
                                    <li className='other'>
                                        <Link>
                                            Digər
                                        </Link>
                                        <ul>
                                            <li onClick={() => handleLinkName('Əlave link')}>
                                                <Link>
                                                    Əlave link
                                                </Link>
                                            </li>
                                            <li onClick={() => handleLinkName('Əlave link')}>
                                                <Link>
                                                    Əlave link
                                                </Link>
                                            </li>
                                            <li onClick={() => handleLinkName('Əlave link')}>
                                                <Link>
                                                    Əlave link
                                                </Link>
                                            </li>
                                            <li onClick={() => handleLinkName('Əlave link')}>
                                                <Link>
                                                    Əlave link
                                                </Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </li>
                                    <li className='user hover'>
                                        <Link to=''>
                                            <FaRegUserCircle />
                                        </Link>
                                        <ul className='login-drop'>
                                            <li>
                                                <Link>
                                                    Profil
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    Cüzdan
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    Tənzimləmələr
                                                </Link>
                                            </li>
                                            <li className='out'>
                                                <Link>
                                                    Çıxış
                                                </Link>
                                                <BiLogInCircle />
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </li>
                                </ul>
                                <div onClick={openBar} className="open-bar">
                                    <RiMenu4Fill />
                                </div>
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </header>

            <section ref={mobilRef} className='mobil-menu'>
                <ul className='navigation'>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Bütün-tədbirlər' >Bütün tədbirlər</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Konsert' >Konsert</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Futbol'>Futbol</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Teatr'>Teatr</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Muzeylər' >Muzeylər</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Tədbirlər' >Tədbirlər</NavLink>
                    </li>

                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Teatr'>Teatr</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Muzeylər' >Muzeylər</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Tədbirlər' >Tədbirlər</NavLink>
                    </li>

                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Teatr'>Teatr</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Muzeylər' >Muzeylər</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Tədbirlər' >Tədbirlər</NavLink>
                    </li>

                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Teatr'>Teatr</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Muzeylər' >Muzeylər</NavLink>
                    </li>
                    <li onClick={close} className='nav-item'>
                        <NavLink to='/SearchCaregory/Tədbirlər' >Tədbirlər</NavLink>
                    </li>
                </ul>
                <div onClick={close} className="close">
                    <IoMdClose />
                </div>
                <div className="ticket">
                    <p>Park <span>events</span></p>
                    <HiOutlineTicket />
                </div>
            </section>
        </>
    )
}

export default Header