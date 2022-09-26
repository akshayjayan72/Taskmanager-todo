import React from 'react';
import './style.css';


function Headerbar() {
  return (
    <div className='headerbar'>
      <div className='box'>
        <div className='task'>
          Task <span className='manager'> Manager </span>
        </div>
        <div className='image1'>
          <img src={require("../../assets/images/image1.jpg")} alt= "image1" ></img>
        </div>
      </div>
    </div>  
  ) 
};

export default Headerbar