import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {

    return (
        <DefaultLayout>
        <div className="defaultLayout">
            <h1>SHOW VIEW LOGS</h1>
            <div className="containerA">
            <br /><br />
            <p>The title of the ship is <strong>{props.logs.title}</strong> and the entry is <strong>{props.logs.entry}</strong> and the <strong>{props.logs.shipIsBroken ? 'Ship is broken' : 'Ship is not broken'}</strong></p>
            <br /><br />            
            <p>Ship was created at {props.logs.createdAt.toString()}</p>
            <br/><br/>
            </div>
            <div className="containerB">
            <a href="/logs">Back</a> < br /><br/>
            <a href={`/logs/${props.logs._id}/edit`}>Edit</a> < br/><br/>
            <form action={`/logs/${props.logs._id}?_method=DELETE`} method="POST"> 
            {/* Only GET and POST methods can be used inside HTML, we are overriding the default method here , run npm i method-override on terminal*/}
            <button>Delete</button> < br/>
           
            </form>  </div> 
            </div >
        
</DefaultLayout>
    )
}

export default Show