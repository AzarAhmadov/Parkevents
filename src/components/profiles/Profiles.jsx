import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdLockReset } from 'react-icons/md';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveProfile } from '../../app/features/ProfileLinks/ProfileLinks';

const Profiles = () => {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const options = ['Kişi', 'Qadın'];
    const [value, setValue] = useState(options);

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Uğurlu', detail: 'Dəyişikliklər yadda saxlanıldı', life: 3000 });
    }

    const toast = useRef(null);

    const activeLink = useSelector((state) => state.profileLink);
    const dispatch = useDispatch();

    const handleSetActive = (value) => {
        dispatch(setActiveProfile(value));
    };

    return (
        <main id='tabs-main'>
            <section id="profile">
                <Container>
                    <ul className="tabs">
                        <li
                            onClick={() => handleSetActive(0)}
                            className={activeLink === 0 ? 'active' : null}
                        >
                            <AiOutlineUser />
                            <div className="dec">Profilə düzəliş et</div>
                        </li>
                        <li onClick={() => handleSetActive(1)}
                            className={activeLink === 1 ? 'active' : null}
                        >
                            <AiOutlineShopping />
                            <div className="dec">Sifarişlərin</div>
                        </li>
                        <li onClick={() => handleSetActive(2)}
                            className={activeLink === 2 ? 'active' : null}
                        >
                            <MdLockReset />
                            <div className="dec">Parolu sıfırla</div>
                        </li>
                    </ul>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="tabs-content">
                        {
                            <div className={activeLink === 0 ? 'tabs-contents' : 'none'}>
                                <h5> Şəxsi məlumatlar </h5>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>E-poçt</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Ad</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Soyad</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Telefon nömrəsi</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group >
                                                <Form.Label>Doğum günü</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Label> Cins </Form.Label>
                                            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
                                        </Col>
                                    </Row>
                                    <div className='btn-div'>
                                        <Button type='button' label="Dəyişiklikləri yadda saxla" onClick={showSuccess} />
                                    </div>
                                </Form>
                            </div>
                        }
                        {
                            <div className={activeLink === 1 ? 'tabs-contents' : 'none'}>
                                <h5> Sifarişlər </h5>
                                <div className="order">
                                    <ul>
                                        <li>
                                            <p>
                                                255255 <br />
                                                <span>FİN: 7876</span>
                                            </p>
                                        </li>
                                        <li>
                                            Vaxtı bitib
                                        </li>
                                        <li>
                                            19 may 2023
                                        </li>
                                        <li>
                                            <p className="price">
                                                10₼
                                            </p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <p>
                                                255255 <br />
                                                <span>FİN: 7876</span>
                                            </p>
                                        </li>
                                        <li>
                                            Vaxt bitib
                                        </li>
                                        <li>
                                            19 may 2023
                                        </li>
                                        <li>
                                            <p className="price">
                                                10₼
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                        {
                            <div className={activeLink === 2 ? 'tabs-contents' : 'none'}>
                                <h5> Şifrəni yenilə </h5>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Cari şifrə</Form.Label>
                                                <Form.Control type="password" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Yeni şifrə</Form.Label>
                                                <Form.Control type="password" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>
                                                    Yeni şifrənin təsdiqi
                                                </Form.Label>
                                                <Form.Control type="password" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className='btn-div'>
                                        <Button type='button' label="Dəyişiklikləri yadda saxla" onClick={showSuccess} />
                                    </div>
                                </Form>
                            </div>
                        }
                    </div>
                </Container>
            </section>
            <Toast ref={toast} />
        </main>
    );
};

export default Profiles;
