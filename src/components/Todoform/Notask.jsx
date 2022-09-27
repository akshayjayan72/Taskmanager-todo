import React from 'react'
import snow from '../../assets/images/snow.jpg'

function Notask() {
  return (
    <div>
        <div className='snow+hooray'>
              <div className='snow'>
                  <img src={snow} alt="games"/>
              </div>

              <div className='hooray'>
              <p>Hooray, Time to chill ! No tasks.</p>
              </div>
            </div>
    </div>
  )
}

export default Notask