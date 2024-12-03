import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Lenis from "lenis"
import { Loader } from './components/Loader.jsx'
import MainPage from './pages/Main/Page.jsx'

function App() {

  const [ loaded, setLoaded ] = useState(false)
  // const lenis = new Lenis()

  useEffect(() => {

    function raf(time) {
      // lenis.raf(time)
      // requestAnimationFrame(raf)
    }

    // requestAnimationFrame(raf)

    let timer = setTimeout(() => {
      setLoaded(true)
    }, 4000)
    
    return () => { clearTimeout(timer) }

  }, [])

  return (
    
      <div className="app">
        
        <Loader loaded={loaded}/>

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='*' element={<h1>Loading</h1>} />
        </Routes>
      </div>
  )
}

export default App
