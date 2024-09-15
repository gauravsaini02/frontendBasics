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
        <CustomButton count={count} setCount={setCount}></CustomButton>
        <CustomButton count={count-1} setCount={setCount}></CustomButton>
    </div> 
  )

  // component

  function CustomButton(props){

    function onclickhandler(){
      props.setCount(props.count+1);
    } 

    return(
      <button onClick={onclickhandler} > Counter{props.count}</button>
    )
}
}
export default App
