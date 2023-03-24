import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
function New(props) {
    let selDest = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    console.log(props.airportsList)
    return (
        <DefaultLayout>
            <div className="newFlights">
                {/* <h1 style={{ color: "brown" }}>Show view</h1> */}
                <table style={{ border: "1px solid blue" }}>
                    <tr>
                        <th>Airlines</th>
                        <th>Flight No</th>
                        <th>Departure</th>
                        <th>Departs At</th>
                        <th>Arrival </th>
                        <th>Arrives At</th>
                    </tr>
                    {props.flight.destinations.length ?
                        <>

                            {props.flight.destinations.map((item, index) =>

                                <tr>
                                    <td>{props.flight.airline} Airlines</td>
                                    <td>{props.flight.flightNo}</td>
                                    <td>{props.flight.airport}</td>
                                    <td>{props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</td>
                                    <td>{item.airport}</td>
                                    <td>{item.arrival?.toISOString().slice(0, 16).replace('T', ' ')}</td>
                                </tr>

                            )}
                        </>
                        :
                        <>
                            <form className="Dest" action={`/flights/${props.flight._id}/destinations`} method="POST">
                                <p><strong>Departure Aiport : </strong>{props.flight.airport}</p>
                                <p><strong>Departs at : </strong>{props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</p>
                                <label htmlFor="air" className="form-label"><p><strong>Destination Aiports to choose from  :</strong></p></label>
                                <select className="form-select" id="airp" name="airport" defaultValue={props.airport} >
                                    {props.flight.airportsList.map((item, index) => (

                                        <option key={index}>{item}</option>

                                    ))}
                                </select>
                                <label htmlFor="arrTime"><p>Arrival Time :</p> </label>
                                <input type="datetime-local" id="arrTime" name="arrival" />
                                <br></br>
                                <input type="submit" value="ADD DESTINATION" />
                            </form>

                        </>
                    }
                    <br></br>


                </table>
                <form action={`/flights/${props.flightId}/destinations`} method="POST">
                    <p><strong>Departure Aiport : </strong>{props.flight.airport}</p>
                    <p><strong>Departs at : </strong>{props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</p>
                    <label htmlFor="air" className="form-label"><p><strong>Destination Aiports to choose from  :</strong></p></label>
                    <select className="form-select" id="airp" name="airport" defaultValue={props.airport} >
                        {props.airportsList.map((item, index) => (

                            <option key={index}>{item}</option>

                        ))}
                    </select>
                    <label htmlFor="arrTime"><p>Arrival Time :</p> </label>
                    <input type="datetime-local" id="arrTime" name="arrival" />
                    <button>ADD DESTINATION</button>
                </form>


            </div>



            {/* 
<form action={`/flights/${props.flightId}/destinations`} method="POST">
                <label htmlFor="air" className ="form-label"><p>Destination Aiports to choose from  :</p></label>
                <select className="form-select" id="airp" name="airport" defaultValue={props.airport} >
                        {props.airportsList.map((item,index) => (

                                <option key={index}>{item}</option>

                       ))}
                            </select>
                            <label htmlFor="arrTime"><p>Arrival Time :</p> </label>
                            <input type="datetime-local" id="arrTime" name="arrival" />
                    <button>ADD DESTINATION</button>
                </form>
     */}
        </DefaultLayout>
    )
}

export default New