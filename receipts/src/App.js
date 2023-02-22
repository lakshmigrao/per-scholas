import './App.css';
import Person from './Person.js';
import Order from './Order.js';
import { useState } from 'react';
const receiptsData = [ 
  { person: 'Karolin', order: { main: 'Burrito', protein: 'Organic Tofu', rice: 'Purple Rice', sauce: 'Green Crack', toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], drink: 'Korchata', cost: 22 }, paid: false, id : crypto.randomUUID() }, 
  { person: 'Mark', order: { main: 'Rice Bowl', protein: 'Ginger Soy Chix', rice: 'Sticky Rice', sauce: 'Korilla', toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], drink: 'Korchata', cost: 19 }, paid: false, id : crypto.randomUUID() }, 
  { person: 'Matt', order: { main: 'Salad Bowl', protein: 'Organic Tofu', rice: 'none', sauce: "K'lla", toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], drink: 'Sparkling Blood Orange Soda', cost: 20 }, paid: false, id : crypto.randomUUID() } ] 

function App() {
  
  let [receipts, setReceipts] = useState(receiptsData)
 let orders = receipts.map((item) => {
  return(item.paid===false)?
    (
    <>
    <div className='Person' key={item.id}>
    <h2>{item.person} </h2>
    <p><span>Main :</span>  {item.order.main}</p>  
    <p><span>Protein :</span> {item.order.protein}</p>  
    <p><span>Rice :</span>  {item.order.rice}</p>  
    <p><span>Sauce :</span>  {item.order.sauce}</p>  
    <p><span>Toppings :</span>  {item.order.toppings}</p>  
    <p><span>Drink : </span>{item.order.drink}</p>
    <p><span> Cost :</span> {item.order.cost}</p>   
    <button onClick={()=>removeReceipt(item)}>Paid</button> 
    </div>
    </>)
     :(<div></div>)
    })
  return (
    <div className="App">
      {orders}
      {/* <Person />
      <Order /> */}
    </div>
  );
  function removeReceipt(item){
    //item.paid=true;
    setReceipts(receipts.filter(item2 => item.id!==item2.id))
  }
}

export default App;
