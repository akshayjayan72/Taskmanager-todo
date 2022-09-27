import React from 'react';
import './style.css';
import HeaderLogo from './HeaderLogo';



function Headerbar() {

  return (
    <div className='headerbar'>
      <div className='box'>
        <div className='task'>
          Task <span className='manager'> Manager </span>
        </div>
        <div className='headlogo'>  
         <HeaderLogo/> 
        </div>
      </div>
    </div>  
  ) 
};

export default Headerbar