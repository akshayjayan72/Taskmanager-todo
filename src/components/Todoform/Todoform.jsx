

import React, { useEffect, useState } from 'react'
import './style.css'
import Todolist from '../Todolist/Todolist';
import NoTask from './Notask'

function Todoform() {

  const [todo,setTodo] = useState("");
  const [list,setList] = useState([]);

//obtaining the value from the input field
const handleInput = (e) => setTodo(e.target.value);
  

  //deleting on clicking task 
    function deleteTask(clkobj) {
    const updatedarray = list.filter((obj)=>obj.id !== clkobj.id);
    setList(updatedarray);
 }



// displaying as a list 
  const receiveInput = () => {
   const newTask = {id: Date.now(),name:todo}

    if(todo !== ''){
      setList([newTask,...list])
      setTodo("");
    }
    
  };

  // logging the array for reference
  useEffect(() => {
    if (list.length) {
        console.log("changing");
        console.log(list);
    }
}, [list]);

  //listening for enter-key press and calling the handlesubmit function
  useEffect(() => {
    const listener = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            event.preventDefault();
            receiveInput ();
        }
                                };
        document.addEventListener("keydown", listener);
        return () => {
        document.removeEventListener("keydown", listener);
    };

});


  return(
  
      <form className='form' onSubmit={receiveInput}>
        {/* <div className='b+s+h'>
          <div className='box'> */}
        <input 
              type = "text" 
              placeholder='   Add new task' 
              className="todobox" 
              value={todo}
              onChange={handleInput}/> 
          {/* </div> */}

          {list.length > 0 && (
            <Todolist 
            list={list}
            deleteTask={deleteTask}
            />)}

          {list.length === 0 && <NoTask/>}    


            
        {/* </div>   */}
        
      
      </form>  

    
  )
}

export default Todoform