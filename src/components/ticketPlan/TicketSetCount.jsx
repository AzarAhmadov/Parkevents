import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Time from './Time';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCount } from '../../app/features/CountSeat/CountSeat';

const TicketSetCount = () => {

    const selectedCount = useSelector((state) => state.count.selectedCount);
    const countSet = useSelector((state) => state.count.countSet);
    const dispatch = useDispatch();

    const handleCountChange = (e) => {
        dispatch(setSelectedCount(e.target.value));
    };

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
                        onChange={handleCountChange}
                        options={countSet}
                        optionLabel="name"
                        placeholder="Oturacaq sayı seçin"
                        className="drop"
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