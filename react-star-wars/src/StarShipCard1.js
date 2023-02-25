import "./App.css";
import App from "./App.js"
function StarShipCard1({starShip, model, manufacturer}){
//console.log("inside starShipcard"+{starShipList})
return(
    <>
    <div className="card">
        <h2>Name : {starShip}</h2>  
        <h3>Model : {model}</h3>   
        <h3>Manufacturer : {manufacturer}</h3>
    </div>
    </>
);
}

export default StarShipCard1;