import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Col, Container, Row } from 'react-bootstrap';
import { MdDateRange } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';
import { MdOutlineLanguage } from 'react-icons/md';
import { memo } from 'react';

const TicketFilter = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    const dates = [
        { name: '10/20/2022' },
        { name: '11/15/2022' },
        { name: '12/05/2022' },
        { name: '01/02/2023' },
        { name: '02/18/2023' },
        { name: '02/18/2023' },
        { name: '02/18/2023' },
        { name: '02/18/2023' },
        { name: '02/18/2023' },
        { name: '02/18/2023' },
    ];

    const [selectedPlace, setSelectedPlace] = useState(null);

    const places = [
        { name: 'Heydər Əliyev Sarayı' },
        { name: 'Akademik Milli Dram Teatrı' },
        { name: 'Hayal Kahvesi' },
        { name: 'Şəkixanovlar evi' },
    ];

    const [selectedLang, setSelectedLang] = useState(null);

    const Lang = [
        { name: 'Bütün dillər' },
        { name: 'Azərbaycan dili' },
        { name: 'Rus dili' },
        { name: 'İngilis dili' },
    ];

    return (
        <main>
            <section id='ticket-filter'>
                <Container>
                    <Row>
                        <Col>
                            <div className="filter-flex">
                                <MdDateRange className='f-icon' />
                                <Dropdown
                                    value={selectedDate}
                                    options={dates}
                                    optionLabel="name"
                                    onChange={(e) => setSelectedDate(e.value)}
                                    placeholder="Tarix seçin"
                                    className='drop'
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="filter-flex">
                                <MdPlace className='f-icon' />
                                <Dropdown
                                    value={selectedPlace}
                                    options={places}
                                    optionLabel="name"
                                    onChange={(e) => setSelectedPlace(e.value)}
                                    placeholder="Məkanlar"
                                    className='drop'
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="filter-flex">
                                <MdOutlineLanguage className='f-icon' />
                                <Dropdown
                                    value={selectedLang}
                                    options={Lang}
                                    optionLabel="name"
                                    onChange={(e) => setSelectedLang(e.value)}
                                    placeholder="Dillər"
                                    className='drop'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default memo(TicketFilter)