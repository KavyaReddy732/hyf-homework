//import logo from './logo.svg';
import './App.css';
import { Fibonacci } from './Fibonacci';
import {TodoList } from './TodoList';

const todos = [
  {
    description:"Get out of bed",
    deadline :"Wed Sep 13 2017"
  },
  {
    description:"Brush teeth",
    deadline: "Thu Sep 14 2017"
  },
  {
      description:"Eat breakfast",
      deadline: "Fri Sep 15 2017"
  }
];

function App() {
  return (
    <div>
      <Fibonacci></Fibonacci>
      <TodoList  todos={todos}></TodoList >
    </div>
  );
}

export default App;
