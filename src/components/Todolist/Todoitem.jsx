import React from 'react'

function Todoitem(props) {
  const { obj,deleteTask } = props;
  return (
        <div>
            <p onClick={() => deleteTask(obj)}>{obj.name}</p>
        </div>
  )
}

export default Todoitem