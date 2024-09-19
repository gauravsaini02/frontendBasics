import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { memo,useCallback,useEffect,useState } from 'react'


// usecallback functionality 

function App() {
    
const [counter,setCounter] = useState(0);

    var a = useCallback(function (){
        console.log("hello a called")
    },[]  )
  
  return (
        <div>
                <button onClick={()=> {
                    setCounter(counter+1);
                }}> Counter ({counter})</button>

                <Demo a={a} />
        </div>
    
  )
   
}

const Demo = memo(function({a}){
    console.log("rerender")
    return <div>
        hi there {a}
    </div>
})




export default App
