import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// react.Memo

function App() {
    const [title,setTitle] = useState("my name is gaurav")

    function updateTitle(){
        setTitle("my name is " + Math.random());
    }
  
  return (
        <div>
            <button onClick={updateTitle}>Update the title</button>
            <Header title={title}></Header>
            <Header title="gaurav1"></Header>
            <Header title="gaurav2"></Header>       
        </div>
    
  )
   
}
 

const Header = React.memo(function Header({title}){
    return <div>{title}</div>
})


export default App
