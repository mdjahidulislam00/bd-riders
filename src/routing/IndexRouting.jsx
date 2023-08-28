import 'react'
import Header from '../Components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import DestinationPage from '../Pages/DestinationPage'
import BlogsPage from '../Pages/BlogsPage'
import ContractUs from '../Pages/ContractUs'
import SingInPage from '../Pages/SingInPage'
import Footer from '../Components/Footer'
import PrivateRoute from './PrivateRoute'

function IndexRouting() {
  return (
    <div>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/home" element={<HomePage/>} />
            <Route  path='/destination' element={ <PrivateRoute /> }>
              <Route path='/destination/:vehicles' element={ <DestinationPage /> }/>
            </Route>
            <Route  path="/blog" element={<BlogsPage/>} />
            <Route  path="/contract" element={<ContractUs/>} />
            <Route  path="/login" element={<SingInPage/>} />
        </Routes>
        <Footer />
    </div>
  )
}

export default IndexRouting