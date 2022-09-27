// import React from 'react'
// import Computer from './Computer';
// import Phone from './Phone';

// import {useState,useEffect} from 'react ';
// function Headerlogo(){

// function Headerlogic() {
// // resize logic - setting a window size
//   const [windowSize,setWindowsize] = useState ({
//     width:undefined,
//     height:undefined,
//   })

// // [] - dependency using only once , adding event listener , resize - event  
//   useEffect(()=>   { 
//     window.addEventListener("resize",handleResize) 
  
//   // handling the resize 
//   function handleResize() {   
//     setWindowsize({
//       width:window.innerWidth,
//       height:window.innerHeight,
//     });}

//   handleResize();

//   // application unmounts - remove the listener 
// return () => window.removeEventListener("resize",handleResize)

//   },[])

//   return windowSize;

// //  let width = Headerlogo() 
// //  return <div>
// //   {width > 768?<Computer/>:<Phone/> }
// //  </div>


// }




// }
// export default Headerlogo;