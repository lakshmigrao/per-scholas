import React from "react";
import { insertMany } from "../../models/captainModel";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {

    return (
        <DefaultLayout>
            <h1>SHOW VIEW FOOD LOGS</h1>
            <div className="defaultLayout">
                
                <div className="containerA">
                    <strong>{props.foodlog.title}</strong> was the food and                 ingredients were the <strong>{props.foodlog.ingredients}</strong> and it was <strong>
                    {props.foodlog.isHealthy ? ' healthy.' : ' NOT healthy.'}</strong>
                    <br /> <br /> <br />
                    {props.foodlog.createdAt.toString()}
                    <br /> <br /> 
                 
                    {/* .toDateString(), .toLocaleTimeString() */}
                </div>
                <div className="containerB">
                    <br /> <br /> <br />
                    <a href="/foodlogs">Back</a>
                    <br /> <br /> <br />

                    <a href={`/foodlogs/${props.foodlog._id}/edit`}>Edit</a>
                    <br /> <br /> <br />

                    <form action={`/foodlogs/${props.foodlog._id}?_method=DELETE`} method="POST">

                        <button>DELETE</button>
                    </form>
                </div>
                <div className="containerC">
                {props.foodlog.comments.length!==0?props.foodlog.comments.map((item,index)=>
                    <>
                     <br/>
                    <span> User </span>{item.username}<span> posted </span>  {item.text} <br/><span> on </span> {item.createdAt.toLocaleDateString()}
                    <br/>
                    </>):<h2>No Comments</h2>}
                </div>
                <div className="containerD">
                <form action={`/foodlogs/${props.foodlog._id}/comment`} method="POST">
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
            </div>
        </DefaultLayout>
    )
}

export default Show