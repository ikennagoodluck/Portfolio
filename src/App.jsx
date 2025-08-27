import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './component/main/navbar/Navbar'
import Main from './component/main/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
    </>
  )
}

export default App
