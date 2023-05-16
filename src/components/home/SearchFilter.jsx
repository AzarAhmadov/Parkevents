import React, { useState, useRef, useEffect } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearchAlt } from 'react-icons/bi';
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/primereact.min.css";
import { useNavigate } from 'react-router-dom';

const SearchBottom = ({ searchClass }) => {

    const [category, setCategory] = useState(null);

    const category_data = [
        { name: 'Kategoriya 1' },
        { name: 'Kategoriya 2' },
        { name: 'Kategoriya 3' },
        { name: 'Kategoriya 4' },
    ];

    const [date, setDate] = useState(null)

    const date_data = [
        { name: '25/10/2023' },
        { name: '14/10/2021' },
        { name: '23/10/2023' },
        { name: '22/10/2025' },
    ]

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/SearchCaregory/Bütün-tədbirlər');
    };

    const sliderRef = useRef(null);
    const valuesRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const values = valuesRef.current;

        noUiSlider.create(slider, {
            start: [1, 450],
            behaviour: 'smooth-steps',
            step: 15,
            connect: true,
            range: {
                'min': 1,
                'max': 450
            },
            format: {
                to(value) {
                    return `₼ ${parseInt(value)}`;
                },
                from(value) {
                    return value.replace('₼', '');
                }
            }
        });

        slider.noUiSlider.on('update', function (values) {
            valuesRef.current.textContent = `${values[0]} - ${values[1]}`;
        });

        return () => {
            slider.noUiSlider.destroy();
        };
    }, []);


    return (
        <div className={`search-bottom ${searchClass}`}>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className='search-col search' xl={3}>
                        <Form.Control type='text' placeholder='Axtar' />
                        <BiSearchAlt className='search-icon' size={30} color='#fff' />
                    </Col>
                    <Col className='search-col' xl={3}>
                        <Dropdown
                            value={category}
                            onChange={(e) => setCategory(e.value)}
                            options={category_data}
                            optionLabel="name"
                            className='drop'
                            placeholder="Kategoriya" />
                    </Col>
                    <Col className='search-col' xl={3}>
                        <Dropdown
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            options={date_data}
                            optionLabel="name"
                            className='drop'
                            placeholder="Tarix" />
                    </Col>
                    <Col xl={3}>
                        <div className="price">
                            <span> Qiymət aralığı </span>
                            <p ref={valuesRef}></p>
                            <div ref={sliderRef}></div>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SearchBottom;
