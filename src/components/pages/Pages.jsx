import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Detail from '../detail/Detail';
import SearchCategory from '../searchCategory/SearchCategory';
import Login from '../login&register/Login';
import Register from '../login&register/Register';
import Reset from '../login&register/Reset';
import { TicketPlan } from '../ticketPlan/TicketPlan';

export const Pages = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Header />
                            <Home />
                            <Footer />
                        </>
                    } />
                    <Route path='/detail/:id' element={
                        <>
                            <Header />
                            <Detail />
                            <Footer />
                        </>
                    } />
                    <Route path='/SearchCaregory/:id' element={
                        <>
                            <Header />
                            <SearchCategory />
                            <Footer />
                        </>
                    } />
                    <Route path='/ticket-plan' element={
                        <>
                            <Header />
                            <TicketPlan />
                            <Footer />
                        </>
                    } />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Reset' element={<Reset />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
