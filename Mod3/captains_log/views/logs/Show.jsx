import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {

    return (
        <DefaultLayout>
            <h1>SHOW VIEW LOGS</h1>
        <div className="defaultLayout">
            
            <div className="containerA">
            <br /><br />
            <p>The title of the ship is <strong>{props.logs.title}</strong> and the entry is <strong>{props.logs.entry}</strong> and the <strong>{props.logs.shipIsBroken ? 'Ship is broken' : 'Ship is not broken'}</strong></p>
            <br /><br />            
            <p>Ship was created on {props.logs.createdAt.toUTCString()}</p>
            <br/><br/>
            </div>
            <div className="containerB">
            <a href="/logs">Back</a> < br /><br/>
            <a href={`/logs/${props.logs._id}/edit`}>Edit</a> < br/><br/>
            <form action={`/logs/${props.logs._id}?_method=DELETE`} method="POST"> 
            {/* Only GET and POST methods can be used inside HTML, we are overriding the default method here , run npm i method-override on terminal*/}
            <button>Delete</button> < br/>
           
            </form>  </div> 
            <div className="containerC">
                {props.logs.comments.length!==0?props.logs.comments.map((item,index)=>
                    <>
                     <br/>
                    <span> User </span>{item.username}<span> posted </span>  {item.text} <br/><span> on </span> {item.createdAt.toUTCString()}
                    <br/>
                    </>):<h2>No Comments</h2>}
                </div>
                <div className="containerD">
                <form action={`/logs/${props.logs._id}/comment`} method="POST">
                        <label htmlFor="usr">Username : </label>
                        <input type="text" id="usr" name="username" />
                        <br /><br /><br />
                        <label htmlFor="txt"> Comment : </label>
                        <input type="textarea" id="txt" name="text" />
                        <br /><br /><br />
                        <button>ADD COMMENT</button>
                    </form>
                    <br /> <br /> <br />
                </div>
            </div >
        
</DefaultLayout>
    )
}

export default Show