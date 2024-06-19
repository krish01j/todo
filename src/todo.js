import react ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash} from '@fortawesome/free-solid-svg-icons' 
import './todo.css'



const Todo = ({task}) =>{
    const[check,changeVal]=useState(true)

   const changeClass = () =>{changeVal(!check)
        console.log(check)
    }
    
    return(
        <div >
            <div className={check ? "container2":"container3" }>  
            <input className='tick' type='checkbox' onClick={changeClass} ></input>  
            <p>{task.task} </p>
            <FontAwesomeIcon  className='trash' icon={faTrash} />
            </div>
           
        </div>
        
    )
}
export default Todo