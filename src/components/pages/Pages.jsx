import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../header/Header';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Detail from '../detail/Detail';
import SearchCategory from '../searchCategory/SearchCategory';
import Login from '../login&register/Login';
import Register from '../login&register/Register';
import Reset from '../login&register/Reset';
import { TicketPlan } from '../ticketPlan/TicketPlan';
import TicketSet from '../ticketPlan/TicketSet';
import TicketPay from '../ticketPlan/TicketPay';
import Download from '../download/Download';
import Blog from '../blogs/Blog';
import BlogDetail from '../blogs/BlogDetail';
import Question from '../Question/Question';

const transition = {
    duration: 1,
    ease: 'easeInOut',
};

const animationVariants = {
    initial: {
        opacity: 0,
        x: -5,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: 0,
    },
};

const AnimatedRoute = ({ element }) => {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVariants}
            transition={transition}
        >
            {element}
        </motion.div>
    );
};

const Pages = () => {
    return (
        <Router>
            <AnimatePresence mode='wait'>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <AnimatedRoute element={
                                    <>
                                        <Header />
                                        <Home />
                                    </>
                                } />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/detail/:id"
                        element={
                            <>
                                <AnimatedRoute element={
                                    <>
                                        <Header />
                                        <Detail />
                                    </>
                                } />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/SearchCategory/:id"
                        element={
                            <>
                                <Header />
                                <AnimatedRoute element={<SearchCategory />} />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/ticket-plan"
                        element={
                            <>
                                <AnimatedRoute element={<>
                                    <Header />
                                    <TicketPlan />
                                    <Footer />
                                </>} />
                            </>
                        }
                    />
                    <Route
                        path="/ticket-set"
                        element={
                            <>
                                <AnimatedRoute element={<>
                                    <Header />
                                    <TicketSet />
                                    <Footer />
                                </>} />
                            </>
                        }
                    />
                    <Route
                        path="/ticket-pay"
                        element={
                            <>
                                <AnimatedRoute element={<TicketPay />} />
                            </>
                        }
                    />
                    <Route
                        path="/download"
                        element={
                            <>
                                <Header />
                                <AnimatedRoute element={<Download />} />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/download"
                        element={
                            <>
                                <Header />
                                <AnimatedRoute element={<Download />} />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/blog"
                        element={
                            <>
                                <Header />
                                <AnimatedRoute element={<Blog />} />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/blog-detail/:id"
                        element={
                            <>
                                <Header />
                                <AnimatedRoute element={<BlogDetail />} />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/Question"
                        element={
                            <>
                                <Header />
                                <AnimatedRoute element={<Question />} />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/Login" element={
                        <AnimatedRoute element={
                            <>
                                <Login />
                            </>
                        } />

                    } />
                    <Route path="/Register" element={
                        <AnimatedRoute element={
                            <>
                                <Register />
                            </>
                        } />
                    } />
                    <Route path="/Reset" element={
                        <AnimatedRoute element={
                            <>
                                <Reset />
                            </>
                        } />
                    } />
                </Routes>
            </AnimatePresence>
        </Router >
    );
};

export default Pages;
