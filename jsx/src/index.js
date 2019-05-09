// import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'; 



// create a react component
const  App = ()=>{
    return <div>Hi There! </div>
}

// take the react component and show on screen

ReactDOM.render(
<App/>,
document.querySelector('#root')

);