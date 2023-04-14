import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Index(props){

    return(
        <DefaultLayout>
            <h1>INDEX VIEW FOOD LOGS</h1>
        <div className="defaultLayout">
            
            <br/><br/><br/>
            <div className="containerA">
            <ul>
            {props.foodLog.map((item,index) =>
            <li key={index}>
               <a href={`/foodLogs/${item._id}`}> {item.title}</a>
            </li>

            )}</ul></div>

            
            <div className="containerB">
            <a href="/foodLogs/new">ADD</a>
            <br/><br/><br/>
            <a href="/"> BACK</a>
            <br /><br /><br />
            <form action="/foodLogs/seed" method="POST">
                <button>SEED</button>
            </form>
            <br /><br /><br />
            <form action="/foodLogs/clear?_method=DELETE" method="POST">
                <button>CLEAR</button>
            </form>
            
            </div>
        </div>
        </DefaultLayout>
    )
}

export default Index