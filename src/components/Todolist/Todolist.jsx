import React from 'react'
import Todoitem from './Todoitem'
import '../Todolist/style.css'

function Todolist({list,deleteTask}) {

  return (
        <div className='tasklist'>
            {/* Task count */}
            <div className='mytask'>
                <p>My Tasks ({list.length})</p>
            </div>

            {/* Listing out Tasks */}
            <div className='taskbox'>
                {list.length > 0 &&
                    list.map((obj, index) => {
                        return (
                            <Todoitem
                                key={index}
                                deleteTask={deleteTask}
                                // item={obj.text}
                                // id={obj.id}
                                obj={obj}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default Todolist