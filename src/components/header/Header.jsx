import React, { useEffect, useState, useRef } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
import { BiUserPlus } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
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
                                        <Link>
                                            Bütün tədbirlər
                                        </Link>
                                    </li>
                                    <li onClick={() => handleLinkName('Konsert')} className='menu-item'>
                                        <Link to='/SearchCaregory'>
                                            Konsert
                                        </Link>
                                    </li>
                                    <li onClick={() => handleLinkName('Futbol')} className='menu-item'>
                                        <Link to='/SearchCaregory'>
                                            Futbol
                                        </Link>
                                    </li>
                                    <li onClick={() => handleLinkName('Teatr')} className='menu-item'>
                                        <Link to='/SearchCaregory'>
                                            Teatr
                                        </Link>
                                    </li>
                                    <li onClick={() => handleLinkName('Muzeylər')} className='menu-item'>
                                        <Link to='/SearchCaregory'>
                                            Muzeylər
                                        </Link>
                                    </li>
                                    <li onClick={() => handleLinkName('Muzeylər')} className='menu-item'>
                                        <Link to='/SearchCaregory'>
                                            Tədbirlər
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Digər
                                        </Link>

                                        <ul>
                                            <li onClick={() => handleLinkName('Əlave link')}>
                                                <Link to='/SearchCaregory'>
                                                    Əlave link
                                                </Link>
                                            </li>
                                            <li onClick={() => handleLinkName('Əlave link')}>
                                                <Link to='/SearchCaregory'>
                                                    Əlave link
                                                </Link>
                                            </li>
                                            <li onClick={() => handleLinkName('Əlave link')}>
                                                <Link to='/SearchCaregory'>
                                                    Əlave link
                                                </Link>
                                            </li>
                                            <li onClick={() => handleLinkName('Əlave link')}>
                                                <Link to='/SearchCaregory'>
                                                    Əlave link
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='user'>
                                        <Link to='/Login'>
                                            <FaRegUserCircle />
                                        </Link>
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
                    <li className='nav-item'>
                        <Link onClick={close} to='/SearchCaregory/Bütün-tədbirlər'> Bütün tədbirlər </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={close} to='/SearchCaregory/Konsert'> Konsert </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={close} to='/SearchCaregory/Futbol'> Futbol </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={close} to='/SearchCaregory/Teatr'> Teatr </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={close} to='/SearchCaregory/Muzeylər'> Muzeylər </Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={close} to='/SearchCaregory/Tədbirlər'> Tədbirlər </Link>
                    </li>
                </ul>

                <div className="login">
                    <ul>
                        <li>
                            <Link to='/Login'> <FaRegUserCircle /> Giriş </Link>
                        </li>
                        <li>
                            <Link to='/Register'> <BiUserPlus /> Qeydiyyat </Link>
                        </li>
                    </ul>
                </div>

                <div onClick={close} className="close">
                    <IoMdClose />
                </div>
            </section>

        </>
    )
}

export default Header