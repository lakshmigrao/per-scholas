import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data";

function Stock(){
    console.log(data)
    let navigate = useNavigate();
  let { symbol } = useParams();
//   let index = data.findIndex((item) => {
//     return item.symbol === stock_param;
//   });
let stock = data.filter(item => item.symbol=== symbol)
//   let stock = data[index];
 console.log(stock)
  function goBack() {
    navigate("/stocks");
  }
  return (
    <div className="stockpage">
        <h3>Name : {stock[0].name}</h3>
        <h3>Symbol : {stock[0].symbol}</h3>
        <h3>Last Price : {stock[0].lastPrice}</h3>
        <h3>Change : {stock[0].change}</h3>
        <h3>High : {stock[0].high}</h3>
        <h3>Low : {stock[0].low}</h3>
        <h3>Open : {stock[0].open}</h3>   
        <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Stock