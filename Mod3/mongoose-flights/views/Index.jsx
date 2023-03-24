import React from "react";
import { Card } from "react-bootstrap";
import DefaultLayout from "./layouts/DefaultLayout";


function Index(props) {
    let flights = props.flights;
    flights.sort((first, second) => first.departs - second.departs)
    return (<>
        <DefaultLayout>
            {/* <h1 style={{ color: "brown" }}>Flights Index View </h1> */} </DefaultLayout>
            <div>
                <br />
                {/* style={{ fontSize: "1.5em" }} */}
                <ul >
                    {flights.map((item, index) => (
                       (item.departs < Date.now()) ?
                            <li className="newFlight" key={index}><span>
                                <a href={`/flights/${item._id}`}>{item.airline} Airlines <br/>
                                Flight No : {item.flightNo}</a> <br />
                                Departed at : {item.departs.toISOString().slice(0, 16).replace('T', ' ')}<br/>
                            </span><br /><br /></li>
                    :   
                            <li className="newFlight" key={index}>
                                <a href={`/flights/${item._id}`}>{item.airline} Airlines <br />
                                 Flight No : {item.flightNo} </a><br />
                                 Departs at : {item.departs.toISOString().slice(0, 16).replace('T', ' ')}<br/>
                                 <br /><br /></li>
                          )
                          )}
                </ul>
                
            </div></>
            
       
    )

}

export default Index