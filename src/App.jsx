import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default App
