import { useEffect, useState } from "react";
import "./App.css";
import StarShipCard from "./StarShipCard";
import StarShipCard1 from "./StarShipCard1";
function App() {
  let [starShips, setStarShips] = useState({});
  let [starShipNames, setStarShipsNames] = useState([])
  let starShipsArr=[];
  let newArr;

  useEffect(() =>{
    getAllStarShips()
  },[])
  async function getAllStarShips() {
    //console.log(title);
    //e.preventDefault();
    //const key = "b238a806";
    //for(let id=1;id<36;id++){
      let url = `https://swapi.dev/api/starships/`;
      

      try{
        const response = await fetch(url)
        const data = await response.json()
        setStarShips(data)
        console.log(data)
        for(let i=0;i<data.results.length;i++){
          //console.log(data.results[i].name)
          starShipsArr[i]=data.results[i].name;
        }
      }catch(error){
        console.error(error)
      }
      console.log("starShipArr inside function"+starShipsArr);
      newArr = starShipsArr.slice()
      setStarShipsNames(starShipsArr)
    //}
  }

    console.log("starShipArr outside function"+starShipsArr)
    console.log("newArr outside functoin"+newArr)
    console.log("starShipNames outside function"+starShipNames)
  // {starShipsArr.map((starship) =>{
  //   return (
  //   <StarShipCard starShipName = {starship}/>);
  //   }
  //   )}
  // {starShipsArr.map((singleShip,index)=>{
  //   <StarShipCard 
  //     key={index}
  //     starShipList={singleShip}
  //    />
  // })} 
  // <p>{starShipsArr.map((starship) =>{
  //   starship
  // })}</p>
  return (
    <>
    {/* <button onClick={getAllStarShips}>Get All starships</button> */}
    {/* <div className="App">
      <StarShipCard starShipList={starShipNames}/>
    </div> */}
    <div className="App">
      {starShipNames.map((item,index) => 
            <StarShipCard1 key = {index} starShip={item} model={starShips.results[index].model} manufacturer={starShips.results[index].manufacturer}/>
        )}
        

    </div>
    </>
  );
}


export default App;
