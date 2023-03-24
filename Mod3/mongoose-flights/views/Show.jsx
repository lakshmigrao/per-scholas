import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { useRef } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Show(props) {

    props.flight.destinations.sort((first, second) => first.arrival - second.arrival)

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
                        {/* <th> </th> */}
                    </tr>
                    
                    
                

                {/* <p>Airline :<spanb>{props.flight.airline} Airlines</spanb>  </p>
                <p>Flight Number : <spanb>{props.flight.flightNo}</spanb> </p>
                <p>Originating Airport : <spanb>{props.flight.airport}</spanb> </p>
                <p>Departs on : <spanb>{props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</spanb> </p> */}
                
                    {props.flight.destinations.length ?
                        <>

                            {props.flight.destinations.map((item, index) =>
                            //    <form key={index} action={`/flights/${props.flight._id}/edit/${item._id}`} method="GET">
                                    <tr>
                                    <td>{props.flight.airline} Airlines</td>
                                    <td>{props.flight.flightNo}</td>
                                    <td>{props.flight.airport}</td>
                                    <td>{props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</td>
                                    <td>{item.airport}</td>
                                    <td>{item.arrival?.toISOString().slice(0, 16).replace('T', ' ')}</td>
                                    {/* <td><button>Edit Destination Details</button> </td> */}
                                    </tr>
                               
                                // </form> 
                                
                            )}
                            <form action={`/flights/${props.flight._id}/new`}>
                        <br></br><br></br>
                        {props.flight.airportsList.length? <button>Add New Destination</button>: ''}
                    </form>
                            
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
                                <label htmlFor="arrTime"><p><strong>Arrival Time :</strong></p> </label>
                                <br></br>
                                <input type="datetime-local" id="arrTime" name="arrival" />
                                <br></br><br></br><br></br>
                                <input type="submit" value="ADD DESTINATION" />
                            </form>

                        </>
                    }
                    <br></br>
              
        
                </table>
                

</div>
            {/* <div className="newFlights">
            <p>Airline : {props.flight.airline} Airlines </p>
            <p>Flight Number : {props.flight.flightNo}</p>
            <p>Originating Airport : {props.flight.airport} </p>
            <p>Departs on : <spanb>{props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</spanb> </p>

            {props.flight.destinations.length ?
                <>

                    {props.flight.destinations.map((item, index) =>
                        <>
                           
                                <div><p>Destination Airport : <spanb>{item.airport}</spanb></p></div>
                                <div><p>Arrival Time : <spanb>{item.arrival?.toISOString().slice(0, 16).replace('T', ' ')}</spanb></p></div>
                    
                        </>
                    )}
                    <form action={`/flights/${props.flight._id}/new`}>
                        <br></br><br></br>
                        {props.flight.airportsList.length? <button>Add New Destination</button>: ''}
                    </form>
                </>
                :
                <>
                    <form action={`/flights/${props.flight._id}/destinations`} method="POST">
                        <label htmlFor="air" className="form-label"><p>Destination Aiports to choose from  :</p></label>
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
            </div> */}
        </DefaultLayout>
     
    )

}

export default Show