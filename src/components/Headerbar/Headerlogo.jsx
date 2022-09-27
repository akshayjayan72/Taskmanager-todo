import React,{useState,useEffect} from 'react'
import Computer from './Computer'
import Phone from './Phone';

 function HeaderLogo() {
    const [screenSize, getDimension] = useState({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, []);

    const setDimension = () => {
      getDimension({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      })
    }
    


    return (
      
          <p>{screenSize.dynamicWidth > 768 ? <Computer/> : <Phone/>}</p>
    )
  }
   


export default HeaderLogo;