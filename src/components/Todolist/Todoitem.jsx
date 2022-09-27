import React from 'react'

function Todoitem(props) {
  const { obj } = props;
  return (
        <div>
            <p >{obj.name}</p>
        </div>
  )
}

export default Todoitem