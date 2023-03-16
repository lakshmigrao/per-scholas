import React from "react";

function Show(props) {

    return (
        <div>Show View
            <br /><br />
            {props.logs.title}
            <br /><br />
            {props.logs.entry}
            <br /><br />
            {props.logs.shipIsBroken ? 'Ship is broken' : 'Ship is not broken'}
            <p>Ship was created at {props.logs.createdAt.toString()}</p>
            <br/><br/>
            <a href="/logs">Back</a> < br /><br/>
            <form action={`/logs/${props.logs._id}?_method=DELETE`} method="POST"> 
            {/* Only GET and POST methods can be used inside HTML, we are overriding the default method here , run npm i method-override on terminal*/}
            <button>Delete</button> < br/>
            </form>
        </div >

    )
}

export default Show