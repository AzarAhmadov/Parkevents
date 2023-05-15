import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Detail from '../detail/Detail';
import SearchCategory from '../searchCategory/SearchCategory';

export const Pages = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detail/:id' element={<Detail />} />
                    <Route path='/SearchCaregory/:id' element={<SearchCategory />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
