import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { useState } from "react";
function New(props) {

    //let [airports,setAirports] = useState()
    let selDest = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
   // setAirports(selDest)
    return (
        <DefaultLayout>
            <div className="newFlights newpage">
                <h1>Add A New Flight</h1>
                {/* style={{ fontSize: "1.5em" }} */}
                <form  action="/flights" method="POST">
                    <label htmlFor="air">Airline:  <br /> </label>
                    <br />

                    <select className="form-select" id="air" name="airline" >
                        <option>American</option>
                        <option>Southwest</option>
                        <option>United</option>
                    </select>
                    {/* <input type="text" id="air" name="airline" size="30" height="20" /> */}
                    <br /><br />
                    <label htmlFor="fno">Flight No:  <br /></label>
                    <br />
                    <input type="text" id="fno" name="flightNo" size="30" height="30" />
                    <br /><br />
                    <label htmlFor="airp" className="form-label">Departure Airport:  <br /></label>
                    <br />
                    {/* <input type="text" id="airp" name="airport"   /> */}
                    <select className="form-select" id="airp" name="airport" defaultValue={props.airport} >
                        {props.airportsList.map((item,index) => (

                                <option key={index}>{item}</option>

                       ))}
{/*                         
                        <option>AUS</option>
                        <option>DAL</option>
                        <option>LAX</option>
                        <option>SEA</option> */}
                    </select>
                    <br /><br />
                    <label htmlFor="dept">Departs at :  <br /></label>
                    <br />
                    <input type="datetime-local" id="dept" name="departs" defaultValue={props.departsDate} />
                    <br /><br />
                    <button>Submit</button>
                </form>
            </div>
        </DefaultLayout>

    )

}

export default New