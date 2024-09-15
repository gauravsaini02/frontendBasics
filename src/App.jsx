import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let state = {
  count:0 
}

function App() {
  const [count, setCount] = useState(0);

  function clickhandler(){
    setCount(count+1);

  }

  return (
        
      <div>
        <button onClick={clickhandler}>counter{count}</button>
    </div> 
  )
}

export default App
