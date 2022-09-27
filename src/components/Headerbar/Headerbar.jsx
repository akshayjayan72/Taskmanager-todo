import React from 'react';
import './style.css';
//import Headerlogo from './Headerlogo';
// import Computer from './Computer';
// import Phone from './Phone';


function Headerbar() {

  // const {width,height} = Headerlogo();
  // console.log(width,height);

  return (
    <div className='headerbar'>
      <div className='box'>
        <div className='task'>
          Task <span className='manager'> Manager </span>
        </div>
        <div className='headlogo'>
        {/* {width > 768?<Computer/>:<Phone/> } 
        <Headerlogo/> */}
        </div>
      </div>
    </div>  
  ) 
};

export default Headerbar