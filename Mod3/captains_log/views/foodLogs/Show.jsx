import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {

    return (
        <DefaultLayout>
        <div className="defaultLayout">
            <h1>SHOW VIEW FOOD LOGS</h1>
            <div className="containerA">
            {props.foodlog.title} ate
            <br /> <br /> <br />
            {props.foodlog.ingredients} and it was
            <br /> <br /> <br />
            {props.foodlog.isHealthy ? 'healthy' : 'NOT healthy'}
            <br /> <br /> <br />
            {props.foodlog.createdAt.toString()}
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
            <br /> <br /> <br />
            
            </div>
        </div>
        </DefaultLayout>
    )
}

export default Show