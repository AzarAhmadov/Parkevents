import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
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

    return (
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
                                        tədbirlər
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

                                        <div className="arrow"></div>
                                    </ul>
                                </li>
                                <li className='user'>
                                    <Link>
                                        <FaRegUserCircle />
                                    </Link>
                                </li>
                            </ul>
                            <div className="open-bar">
                                <RiMenu4Fill />
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header