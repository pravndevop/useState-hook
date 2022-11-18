
import './App.css';
import BasicForm from './components/forms/BasicForm';
import ShortCirEval from './components/ShortCirEval';
// import { useState } from 'react';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject.jsx'

function App() {
// const[name,setname]=useState('praveen');

//   const changename=()=>{
//     let value=name;
//     (value==='praveen')?setname('sandya'):setname('praveen')
    
//   }
  return (
    <div className="App">
      {/* <h1>{name}</h1>
      <button onClick={changename}>click me</button> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}
      {/* <ShortCirEval/> */}
      <BasicForm/>
    </div>
  );
}

export default App;
