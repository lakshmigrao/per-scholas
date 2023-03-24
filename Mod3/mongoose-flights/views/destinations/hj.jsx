import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
function New(props){
    let selDest = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    console.log(props.airportsList)
    return(
        <DefaultLayout>
<div className="newFlights">
            {/* <h1 style={{ color: "brown" }}>Show view</h1> */}
            <p>Airline :<spanb>{props.flight.airline} Airlines</spanb>  </p>
            <p>Flight Number : <spanb>{props.flight.flightNo}</spanb> </p>
            <p>Originating Airport : <spanb>{props.flight.airport}</spanb> </p>
            <p>Departs on : <spanb>{props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</spanb> </p>
            <div className="A">
            {props.flight.destinations.length ?
                <>

                    {props.flight.destinations.map((item, index) =>
                        <>
                            {/* <form key={index} action={`/flights/${props.flight._id}/edit/${item._id}`} method="GET"> */}
                                <div><p>Destination Airport : <spanb>{item.airport}</spanb></p></div>
                                <div><p>Arrival Time : <spanb>{item.arrival?.toISOString().slice(0, 16).replace('T', ' ')}</spanb></p></div>
                                {/* <button>Edit Destination Details</button> */}
                            {/* </form> */}
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
            </div>
            <div className="B"></div>
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