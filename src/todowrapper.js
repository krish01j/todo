import React,{useState} from "react";
import TodoForm from './todoform'
import Todo from './todo'
import './todowrapper.css'
import {v4 as uuidv4} from 'uuid'
uuidv4()

function TodoWrapper(){
    const[todos,setTodos]=useState([])

    const addTodo = todo =>{
        setTodos([...todos,{id:uuidv4(),task: todo,completed: false,isEditing: false}])
        console.log(todos)

    }

    return(
        <div className="container">
            <div>
                <h1 className="title">
                Todos
                </h1>
            </div>
            <TodoForm addTodo={addTodo}/>
            {
                todos.map((todo,index)=>(
                    <Todo task={todo} key={index}/>
                ))
            }
        </div>
        
    )



} 

export default TodoWrapper