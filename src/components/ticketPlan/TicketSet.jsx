import { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ticketSetsPlan } from '../data/Data'
import TicketBanner from './TicketBanner';
import TicketSetCount from './TicketSetCount';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux'
import { Toast } from 'primereact/toast';

const TicketSet = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const selectedCount = useSelector((state) => state.count.selectedCount);
    const [selectedIds, setSelectedIds] = useState([]);

    const handleButtonClick = (armchairId) => {
        if (selectedIds.includes(armchairId)) {
            setSelectedIds(selectedIds.filter((id) => id !== armchairId));
        } else {
            if (selectedIds.length < selectedCount?.name) {
                setSelectedIds([...selectedIds, armchairId]);
            }
        }
    };

    useEffect(() => {
        setSelectedIds([]);
    }, [selectedCount]);

    const totalAmount = selectedIds.reduce((total, id) => {
        const armchair = ticketSetsPlan
            .flatMap((el) => el.armchair)
            .find((armchair) => armchair.id === id);
        return total + (armchair?.price || 0);
    }, 0);

    const toast = useRef(null);

    const showInfo = () => {
        toast.current.show({ severity: 'info', summary: 'Diqqət', detail: 'Öncə oturacaq sayı seçin', life: 1500 });
    }

    const movie = useSelector((state) => state.movie);

    return (
        <>
            <Toast ref={toast} />
            <TicketBanner title={movie.movieName} dec='10:00, Heydər əliyev mərkəzi' src='https://pixner.net/boleto/demo/assets/images/banner/banner04.jpg' />
            <div className="ticket-dec">
                <Container>
                    <TicketSetCount />
                </Container>
            </div>
            <div className="ticket-sets">
                <Container>
                    <div className="set-title">
                        <p>Səhnə</p>
                    </div>
                    <div className="s-img">
                        <img src="https://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png" alt="" />
                    </div>
                    <div className="set-title">
                        <p>Oturacaqlar</p>
                    </div>

                    <div className="sets-list">
                        <ul className="ticket-sets">
                            {ticketSetsPlan.map((el, idx) => (
                                <li key={idx}>
                                    <div className="gap">
                                        <span>{el.line}</span>
                                    </div>
                                    <ul className="armchair-list">
                                        {el.armchair.map((armchair, armchairIdx) => {
                                            const isSelected = selectedIds.includes(armchair.id);
                                            return (
                                                <li onClick={!selectedCount ? showInfo : undefined} key={`${idx}-${armchairIdx}`}>
                                                    <button
                                                        id={`armchair-${idx}-${armchairIdx}`}
                                                        className={`armchair-button ${isSelected ? 'active' : ''}`}
                                                        disabled={!selectedCount}
                                                        onClick={() => {
                                                            if (!armchair.disabled) {
                                                                handleButtonClick(armchair.id);
                                                            }
                                                        }}
                                                    >
                                                        {armchair.component}
                                                        <div className="price">Qiymət: {armchair.price} ₼</div>
                                                    </button>
                                                </li>

                                            );
                                        })}
                                    </ul>
                                    <div className="gap">
                                        <span>{el.line}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="next">
                        <Row>
                            <Col>
                                <p>Seçdiyiniz yerlər</p>
                                {selectedIds.length > 0 ? (
                                    <div className='grid'>
                                        {selectedIds.map((selectedId) => {
                                            let foundArmchair = null;
                                            let foundLine = null;
                                            for (const ticketSet of ticketSetsPlan) {
                                                const selectedArmchair = ticketSet.armchair.find(
                                                    (armchair) => armchair.id === selectedId
                                                );
                                                if (selectedArmchair) {
                                                    foundArmchair = selectedArmchair;
                                                    foundLine = ticketSet.line;
                                                    break;
                                                }
                                            }

                                            if (foundArmchair) {
                                                return (
                                                    <span key={selectedId}>
                                                      {foundLine}, Yer {foundArmchair.order}
                                                    </span>
                                                );
                                            }

                                            return null;
                                        })}
                                    </div>
                                ) : (
                                    <span className='none'>Yer seçilməyib</span>
                                )}
                            </Col>

                            <Col>
                                <p> Ümumi məbləğ </p>
                                <span className='total'>{totalAmount}₼</span>
                            </Col>
                            <Col>
                                <Link className='hover t-btn' to='/ticket-pay'>
                                    Ödəniş et  <MdKeyboardDoubleArrowRight />
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default TicketSet