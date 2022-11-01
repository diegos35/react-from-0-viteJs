import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>
        welcome to the talent week
      </h1>
      <h2>
      <Home/> 
      </h2>
    </div>
  )
}

export default App
