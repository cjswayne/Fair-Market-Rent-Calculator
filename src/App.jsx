import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Homepage} from './pages'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
