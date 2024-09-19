import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { memo,useCallback,useEffect,useState } from 'react'
import { Dashboard } from '../components/Dashboard'
import { Landing } from '../components/Landing'
import {BrowserRouter, Routes,Route, useNavigate} from 'react-router-dom'

// usenavigate for react router dom

function App() {
    return (
      <>
        <BrowserRouter>
          <Appbar/>
          <Routes>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/' element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

function Appbar(){
    const navigate = useNavigate();

    return <div>
        <div>
            <button onClick={()=>{
                navigate("/")
            }}>Landing page</button>

            <button onClick={()=> {
                navigate("/Dashboard")
            }}>Dashboard Page</button>

    </div>

    </div>
}






export default App
