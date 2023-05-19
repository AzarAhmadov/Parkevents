import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ticketSetsPlan } from '../data/Data'
import TicketBanner from './TicketBanner';
import TicketSetCount from './TicketSetCount';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const TicketSet = () => {

    return (
        <>
            <TicketBanner title='Venus' dec='10:00, Heydər əliyev mərkəzi' src='https://pixner.net/boleto/demo/assets/images/banner/banner04.jpg' />
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
                                    <div className='gap'>
                                        <span>{el.line}</span>
                                    </div>
                                    <ul className="armchair-list">
                                        {el.armchair.map((armchair, armchairIdx) => (
                                            <li key={`${idx}-${armchairIdx}`}>
                                                <button id={`armchair-${idx}-${armchairIdx}`}>
                                                    {armchair.component}
                                                    <div className="price">
                                                        Qiymət: {armchair.price} ₼
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='gap'>
                                        <span>{el.line}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="next">
                        <Row>
                            <Col>
                                <p>  Seçdiyiniz yerlər</p>
                                <span> D9, D10 </span>
                            </Col>
                            <Col>
                                <p> Ümumi məbləğ </p>
                                <span>150₼</span>
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