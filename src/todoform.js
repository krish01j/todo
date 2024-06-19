import React,{useState} from "react";
import './todoform.css'

  const TodoForm = ({addTodo})=> {

    const[value,setValue]=useState("") 

    const handlesubmit = e =>{
        e.preventDefault()

        addTodo(value)

        setValue("")


    }
    

    return(
        <form onSubmit={handlesubmit}>
            <input className="inputfiled" type="text" placeholder="What needs to be Done!" 
            value={value}
            onChange={(e)=> setValue(e.target.value)}/>
            <button className="button" type="submit">Add Task</button>
        </form>
    )

}

export default TodoForm