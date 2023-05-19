import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Time from './Time';

const TicketSetCount = () => {

    const [selectedCount, setSelectedCount] = useState(null);
    const CountSet = [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
    ];

    return (
        <div className="ticket-item">
            <ul>
                <li>
                    <Link className='hover t-btn' to='/ticket-plan'>
                        <MdKeyboardDoubleArrowLeft /> Geri
                    </Link>
                </li>
                <li>
                    <Dropdown
                        value={selectedCount}
                        onChange={(e) => setSelectedCount(e.value)}
                        options={CountSet}
                        optionLabel="name"
                        placeholder="Oturacaq sayı seçin"
                        className='drop'
                    />
                </li>
                <li>
                    <Time />
                </li>
            </ul>
        </div>
    )
}

export default TicketSetCount