import './App.css';
import CreditCardValid from './CreditCardValid.js';
import { useEffect, useState } from 'react';


function App() {
  let [CCnumber, setCCnumber] = useState("")

  function handleChange(event){
    event.preventDefault();
    setCCnumber(event.target.value) ;
  }

  return (
    <div className="App">
        <h2>The Luhn Algorithm</h2>
        <label >Enter your CreditCard Number</label> 
        <input value={CCnumber} onChange={handleChange}/>
       
         <CreditCardValid num={CCnumber}/>
    </div>
  );
}

export default App;
