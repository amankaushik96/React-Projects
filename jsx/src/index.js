// import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'; 



// create a react component
const  App = ()=>{
  
    const buttonText = {text:"Submit"};
    return <div> 
        <label className="label" htmlFor="name" >Enter name:</label>
        <input id="name" type="text" style={{width:'300px'}}/><br/><br/>
        <button  style={{backgroundColor:'grey',color:'white',borderLeft:'1px solid red',left:'300px',position:'relative',borderRadius:'5px'}}>{buttonText.text} </button>
         </div>
}

// take the react component and show on screen

ReactDOM.render(
<App/>,
document.querySelector('#root')

);