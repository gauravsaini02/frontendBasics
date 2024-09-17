import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// minimise rerendering by pushing the state down

function App() {
  



   
  return (
        <div>
            <HeaderWithButton></HeaderWithButton>
            <Header title="gaurav1"></Header>
            <Header title="gaurav2"></Header>
        </div>
    
  )
   
}

function HeaderWithButton(){
    const [title, setTitle] = useState("My name is Gaurav");
    function updateTitle(){

        setTitle("my name is" + Math.random())
    }

    return <div>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}></Header>

    </div>
}

function Header({title}){
    return <div>{title}</div>
}


export default App
