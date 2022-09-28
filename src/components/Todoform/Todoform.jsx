

import React, { useEffect, useState } from 'react'
import './style.css'
import Todolist from '../Todolist/Todolist';
import NoTask from './Notask';
import Toast from './Toast';
//import Headerbar from '../Headerbar/Headerbar';

function Todoform() {

  const [todo,setTodo] = useState("");
  const [list,setList] = useState([]);
  const [toast,setToast] = useState(false);

//obtaining the value from the input field
const handleInput = (e) => setTodo(e.target.value);
  

//toast function on delete
const  handlesetToast = ()=>
{
  setToast(true);

  setTimeout(()=>{
    setToast(false)
  },4000) 
}


//deleting on clicking task 
    function deleteTask(clkobj) {
    const updatedarray = list.filter((obj)=>obj.id !== clkobj.id);
    setList(updatedarray);
    handlesetToast();
 }



// displaying as a list 
  const receiveInput = () => {
   const newTask = {id: Date.now(),name:todo}

    if(todo !== ''){
      setList([newTask,...list])
      setTodo("");
    }
    
  };

  //listening for enter-key press and calling the handlesubmit function
  useEffect(() => {
    const listener = (event) => {
        if (event.code === "Enter") {
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

        {list.length > 0 ? (
            <Todolist 
            list={list}
            deleteTask={deleteTask}
            />) : null}

            

        {list.length === 0 ? <NoTask/> : null} 

        {toast === true ? <Toast/>:null} 
          
            
        {/* </div>   */}
        
      
      </form>  

    
  )
}

export default Todoform