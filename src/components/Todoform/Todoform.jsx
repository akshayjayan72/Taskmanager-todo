

import React from 'react'
import './style.css'

function Todoform() {
  return(
  
      <form className='form'>
        <div className='b+s+h'>
          <div className='box'>
              <input type = "text" placeholder='   Add new task' className="todobox"/>
          </div>

            <div className='snow+hooray'>
              <div className='snow'>
                  <img src={require('../../assets/images/snow.jpg')} alt="games"/>
              </div>

              <div className='hooray'>
              <p>Hooray, Time to chill ! No tasks.</p>
              </div>
            </div>
        </div>  
      </form>  

    
  )
}
export default Todoform