import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let state = {
  count:0 
}

function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "go to gym at 6pm",
    completed: false
  },{ title: "go to work",
      description: "go to work at 9 am.",
      completed: true
  }]);

   
  return (
        
    <div>
        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}/>
        })}

    </div> 
  )
   
}
function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
