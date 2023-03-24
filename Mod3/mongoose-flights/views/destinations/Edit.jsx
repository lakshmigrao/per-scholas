import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props){
console.log("inside"+props.destinations)
// let ex = document.getElementsByTagName('select');
// let str = ex.options[ex.selectedIndex].value;
// console.log(str)
let selDest = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    return(
                           
        <DefaultLayout>
        <form action={`/flights/${props.flightId}/edit/${props.destinations._id}?_method=PUT`} method="POST">
        {/* //<form action={`/flights/${props.flight._id}/destinations`} method="POST"> */}
                <label htmlFor="airp" className="form-label"><h3><spanb>Destination Aiports to choose from  :</spanb></h3></label>
                <select className="form-select" id="airp" name="airport" defaultValue={props.flight.airport} >
                        {props.flight.airportsList.map((item,index) => (

                                <option key={index}>{item}</option>

                       ))}
                            </select>
                            <label htmlFor="arrTime"><h3><spanb>Arrival Time : </spanb></h3> </label>
                            <input type="datetime-local" id="arrTime" name="arrival" defaultValue={props.destinations.arrival?.toISOString().slice(0, 16)} />
                    <input type="submit" value="Save Changes"/>
                </form>
                <br></br><br></br>
                <a href={`/flights/${props.flightId}`}><h2>Back</h2></a>
                </DefaultLayout>
    )

}

export default Edit