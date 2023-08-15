import 'react'
import { useContext } from 'react'
import { currentUser } from '../App'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
  const [logInUser, setLogInUser] = useContext(currentUser)
  return (
    logInUser.email? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoute