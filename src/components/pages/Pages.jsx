import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Detail from '../detail/Detail';
import SearchCategory from '../searchCategory/SearchCategory';
import Login from '../login&register/Login';
import Register from '../login&register/Register';

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
                            <SearchCategory />s
                            <Footer />
                        </>
                    } />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
