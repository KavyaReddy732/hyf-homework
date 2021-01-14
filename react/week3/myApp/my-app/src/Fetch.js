import React, {useEffect,useState} from 'react';
import {AddInput} from './AddInput';

export function Fetch(){
    const [state, setState] = useState([]);
   
    console.log(state)
 
    useEffect (() => {
      (async () => {
        const result = await fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
        .then(res =>res.json());
        setState(result);
      })();
    }, []);

    const updateToDO =(index)=>{
      const list = [...state];
      console.log(list)
      console.log(index)
      list[index].onEdit = !list[index].onEdit;
      setState(list)
    }

    const updateInput = (index,value)=>{
      const list = [...state];
      list[index].description = value;
      setState(list)
    }
    const removeTodo =(index)=>{
      const list = [...state]
      list.splice(index, 1)
      setState(list)
    }

    const checkTodo = (index)=>{
      const list = [...state];
      list[index].onCheck = !list[index].onCheck;
      setState(list)
    }


    return (
        <div className="App">
            <AddInput setState={setState}/>
            <div>
            {state.map((item,index)=><div className = "todos">
            {!item.onEdit ?( <>
            <span key ={index} onChange={()=>updateInput(index)} /> 
            <span className = {item.onCheck ? "strikethrough" : "none"}>{item.description} | {item.deadline}</span>
            <input key={index} type="checkbox" onChange={()=>checkTodo(index)}/>
            <button onClick={()=>updateToDO(index)} >Edit</button>
            </>
             ): (<span className="none">
             <input key ={index} onChange={(e)=>updateInput(index,e.target.value)} value={item.description} />
            | {item.deadline}
            <button key={index} onClick={()=>updateOnClick(index)}>update</button>
            </span>)}
            <button onClick={()=>removeTodo(index)}>delete</button>
            </div>
           )}
            
        </div>
        </div>
    );
}