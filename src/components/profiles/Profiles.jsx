import React, { useState, useRef } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdLockReset } from 'react-icons/md';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
const Profiles = () => {

    const [active, setActive] = useState(0);

    const handleTabClick = (index) => {
        setActive(index);
    };

    const options = ['Kişi', 'Qadın'];
    const [value, setValue] = useState(options);

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Uğurlu', detail: 'Dəyişiklər yadda saxlanıldı', life: 3000 });
    }

    const toast = useRef(null);

    return (
        <main id='tabs-main'>
            <section id="profile">
                <Container>
                    <ul className="tabs">
                        <li
                            onClick={() => handleTabClick(0)}
                            className={active === 0 ? 'active' : null}
                        >
                            <AiOutlineUser />
                            <div className="dec">Profilə düzəliş et</div>
                        </li>
                        <li onClick={() => handleTabClick(1)}
                            className={active === 1 ? 'active' : null}
                        >
                            <AiOutlineShopping />
                            <div className="dec">Sifarişlərin</div>
                        </li>
                        <li onClick={() => handleTabClick(2)}
                            className={active === 2 ? 'active' : null}
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
                            <div className={active === 0 ? 'tabs-contents' : 'none'}>
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
                            <div className={active === 1 ? 'tabs-contents' : 'none'}>
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
                            <div className={active === 2 ? 'tabs-contents' : 'none'}>
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
