import React,{useState} from 'react';

export function AddInput(props){

    const [description, setDescription] = useState()
    const [date,setDate] = useState()
    

     
    function onSubmit(e){
        e.preventDefault()
        if(description === ""){
            return 
        }
        props.setState(prev=>{
            return[...prev,
                {description:description,
                onEdit:false,
                oncheck:false,
                deadline: date}]
        })
        setDescription('');
    }

    return(
        <div>
            <label>ToDo Description</label>
            <input type ='text'
            value={description}
            onChange = {(e)=>setDescription(e.target.value)}
            />
            <br></br>
            <label>Deadline</label>
            <input type="date"
            value = {date}
            onChange={(e)=>setDate(e.target.value)}/>
            <button onClick= {onSubmit}>AddTodo</button>
        </div>

    )
}