
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DotLoader from "react-spinners/DotLoader";
import Home from './Home';
import Contact from './Contact'
const App = () => {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)

  }, [])

  return (
    < >
    <div className=' bg-white min-h-screen text-blue-700 overflow-hidden' >
      {
        isLoading ?
      <p  className='  container pt-[400px] px-[600px] flex items-center  ' >   <DotLoader /> </p> :
          <BrowserRouter >
            <Routes>  
              <Route path='/' element={<Home />} />
              </Routes>
              <Routes>  
              <Route path='/Contact' element={<Contact />} />
              </Routes>
          </BrowserRouter>
          
      }
  </div>

    </>
  )
}


export default App
