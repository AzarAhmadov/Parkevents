import React, { useEffect } from 'react'
import GlobalBanner from '../globalBanner/GlobalBanner'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Container, Row } from 'react-bootstrap';

const Question = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <GlobalBanner title='Ən çox verilən suallar' linkTo='/' linkName='Suallar' />
            <section id='question'>
                <Container>
                    <Row>
                        <Accordion>
                            <AccordionTab header="Tədbirə giriş üçün Elektron Bileti çap etmək kifayətdirmi?">
                                <p>
                                    Bəli, elektron poçtunuza gələn e-bileti çap etməyiniz və yaxud mobil telefonunuzda göstərmək kifayətdir. Elektron biletlər çatdırılmır və ya fiziki biletlərlə əvəz olunmur.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Biletləri nağd ödənişlə haradan əldə etmək olar?">
                                <p>
                                    Biletləri şəhərin bütün kassalarından, “28 Mall”, “Ganjlik Mall” ticarət mərkəzlərindən, həmçinin Heydər Əliyev Sarayının kassasından, ASAN Xidmət mərkəzlərindən və teatr kassalarından əldə edə bilərsiniz. Satış məntəqələri haqqında ətraflı məlumatla «Biletlərin satış məntəqələri» bölümündə tanış ola bilərsiniz.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Neçə yaşından etibarən uşaqlara “Uşaq tədbirlərinə” bilet alınmalıdır?">
                                <p className="m-0">
                                    Uşaq tədbirləri üçün biletlər 3 yaşdan etibarən əldə olunmalıdır.
                                    Yaş məhdudiyyəti haqqında məlumatı tədbirin səhifəsində tapa bilərsiniz.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Neçə yaşından etibarən uşaqlara “Uşaq tədbirlərinə” bilet alınmalıdır?">
                                <p className="m-0">
                                    Uşaq tədbirləri üçün biletlər 3 yaşdan etibarən əldə olunmalıdır.
                                    Yaş məhdudiyyəti haqqında məlumatı tədbirin səhifəsində tapa bilərsiniz.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Neçə yaşından etibarən uşaqlara “Uşaq tədbirlərinə” bilet alınmalıdır?">
                                <p className="m-0">
                                    Uşaq tədbirləri üçün biletlər 3 yaşdan etibarən əldə olunmalıdır.
                                    Yaş məhdudiyyəti haqqında məlumatı tədbirin səhifəsində tapa bilərsiniz.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Question