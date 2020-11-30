//import { TodoList } from "./TodoList";
import React, {useState} from 'react';
import './App.css';
const todoDatabase =[{
  id: 1,
  description: "Get out of bed",
  isDone: false
},
{
  id: 2,
  description: "Brush teeth",
  isDone: false
},
{
  id: 3,
  description: "Eat breakfast",
  isDone: false
},
{
  id: 4,
  description: "workout",
  isDone: false
},
{
  id: 4,
  description: "workout",
  isDone: false
},
{
  id: 4,
  description: "workout",
  isDone: false
},
{
  id: 5,
  description: "start doing assignments",
  isDone: false
}]

export function Todo(){
  // const [count, setCount] = useState(0);
  const [todos,setTodos] = useState([])
  

  const addTodos =()=>{
    if(todos.length === todoDatabase.length){
      return
    }
    const randomNumber = Math.floor(Math.random()*todoDatabase.length);
    
    const randomTodo = todoDatabase[randomNumber];
    setTodos([...todos,{
      id: randomTodo.id,
      description: randomTodo.description,
      isDone: false,
    }])
    
  }

  const removeTodo =(index)=>{
    const list = [...todos]
    list.splice(index, 1)
    setTodos(list)
  }

  const updateTodo = (index)=>{
    const list = [...todos];
    list[index].isDone = true;
    console.log(list)
    setTodos(list)
  }
  
  return(
      <div>
        <button onClick={addTodos}>
          Add Todo
        </button>
        <ul>
          {todos.map((item,index) =>(<li key= {index}> <span className = {item.isDone ? "strikethrough" : "none"}>{item.description}</span>
          {<input key={index} type="checkbox" onChange={()=>updateTodo(index)}/>}
          {<button onClick={()=>removeTodo(index)}>Delete</button> }
          </li>))}
        </ul>
        </div>
  )
}
