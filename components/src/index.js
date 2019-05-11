import React from 'react';
import ReactDOM from 'react-dom';
//import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = ()=>{
    return (

       <div className="ui container comments" style={{top:"50px", position:"relative"}}>
            <CommentDetail author="aman" date="10/5/2019" text="Nice One!"/>
            <CommentDetail author="kaushik" date="20/01/1999" text="Awesome man!"/>
            <CommentDetail author="Sumeet" date="01/01/2000" text="Its the begining"/>
       </div>
    );
}


ReactDOM.render(<App/>,document.querySelector('#root'));