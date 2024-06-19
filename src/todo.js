import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash} from '@fortawesome/free-solid-svg-icons' 
import './todo.css'

const Todo = ({task}) =>{
    return(
        <div >
            <div className='container2'>  
            <input className='tick' type='checkbox'></input>  
            <p>{task.task} </p>
            <FontAwesomeIcon  className='trash' icon={faTrash} />
            </div>
           
        </div>
        
    )
}
export default Todo