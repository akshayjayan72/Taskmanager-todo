import React from 'react'

function Todoitem(props) {
  const { obj,deleteTask } = props;
  return (
        <div className='singletask'>
            <ul className='texttask'  onClick={() => deleteTask(obj)}>{obj.name}</ul>
        </div>
  )
}

export default Todoitem