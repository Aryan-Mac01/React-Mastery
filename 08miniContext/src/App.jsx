
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
     <h1>Context</h1>
    </UserContextProvider>
  )
}

export default App
