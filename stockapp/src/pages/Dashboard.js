import stocks from "../data";
import { Link } from "react-router-dom";

function Dashboard(){
    console.log(stocks)
    return(
    
        <>
           <table className="App">
                <thead>
                <tr>
                    <th>COMPANY NAME</th>
                    <th>SYMBOL</th>
                    <th>PRICE</th>
                    <th>CHANGE</th>
                </tr>
                </thead>
                
                <tbody>
                {stocks.map((stock, index)=> {
                    let colorChange;
                    if(stock.change<=0){ colorChange="red"}
                    else {colorChange="green"}
                   if(index<stocks.length-1) 
                    
                   return(<>
                   
                    <tr key={index}>
                        <td>
                            <Link key={index} to={`/stocks/${stock.symbol}`}>
                            {stock.name}
                            </Link>
                        </td>
                        <td>{stock.symbol}</td>
                        <td>{stock.lastPrice}</td>
                        <td style={{color:colorChange}}>{stock.change}</td>
                    </tr>
                    
                    </>);
                    else
                    return(<>
                   
                        <tr key={index}>
                            <td style={{borderBottom: "0px solid black"}}>
                                <Link key={index} to={`/stocks/${stock.symbol}`}>
                                {stock.name}
                                </Link>
                            </td>
                            <td style={{borderBottom: "0px solid black"}}>{stock.symbol}</td>
                            <td style={{borderBottom: "0px solid black"}}>{stock.lastPrice}</td>
                            <td style={{borderBottom: "0px solid black" , color:colorChange}}>{stock.change}</td>
                        </tr>
                        
                        </>);
                    
                })}
            </tbody>
            </table>
        </>
    );
}

export default Dashboard