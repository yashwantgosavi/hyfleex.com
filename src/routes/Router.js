import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from '../layout/Main/Main'
import Footer from '../layout/Footer/Footer'

import Home from '../Home/Home'
import PageNotFound from '../page-not-found/PageNotFound'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router