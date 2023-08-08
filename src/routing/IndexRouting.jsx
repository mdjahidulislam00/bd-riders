import React, { useState } from 'react'
import Header from '../Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import DestinationPage from '../Pages/DestinationPage'
import BlogsPage from '../Pages/BlogsPage'
import ContractUs from '../Pages/ContractUs'
import SingInPage from '../Pages/SingInPage'
import NoMatchPage from '../Pages/NoMatchPage'
import PrivateRoute from './PrivateRoute'
import Footer from '../Components/Footer'

function IndexRouting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/home" element={<HomePage/>} />
            <Route exact path="/destination/:vehicles" element={<DestinationPage/>} />
            <Route exact path="/blog" element={<BlogsPage/>} />
            <Route exact path="/contract" element={<ContractUs/>} />
            <Route exact path="/login" element={<SingInPage/>} />
            <Route exact path="*" element={<NoMatchPage/>} />
        </Routes>
        <Footer />
    </div>
  )
}

export default IndexRouting