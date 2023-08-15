import { createContext, useState } from 'react'
import IndexRouting from './routing/IndexRouting'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
export const currentUser = createContext();
function App() {
  const [logInUser, setLogInUser] = useState({})
  return (
    <div>
      <currentUser.Provider value={[logInUser, setLogInUser]}>
        <IndexRouting />
      </currentUser.Provider>
    </div>
  )
}

export default App
