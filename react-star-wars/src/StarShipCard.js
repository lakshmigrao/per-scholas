import "./App.css";
import App from "./App.js"
function StarShipCard({starShipList}){
console.log("inside starShipcard"+{starShipList})
return(
    <>
    <div>
        {starShipList.map((item,index) => {
            return(<h2 key = {index} className="card">{item}</h2>)
        })}
        
    </div>
    </>
);
}

export default StarShipCard;