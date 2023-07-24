import {  } from 'react'
import HomePage from './Pages/HomePage'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import ContractUs from './Pages/ContractUs'
import DestinationPage from './Pages/DestinationPage'
import BlogsPage from './Pages/BlogsPage'
import NoMatchPage from './Pages/NoMatchPage'
import SingInPage from './Pages/SingInPage'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {


  return (
    <div>
      <Header />
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/home" element={<HomePage/>} />
            <Route exact path="/destination" element={<DestinationPage/>} />
            <Route exact path="/blog" element={<BlogsPage/>} />
            <Route exact path="/contract" element={<ContractUs/>} />
            <Route exact path="/login" element={<SingInPage/>} />
            <Route exact path="*" element={<NoMatchPage/>} />

        </Routes>

    </div>
  )
}

export default App
