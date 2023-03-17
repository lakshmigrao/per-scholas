import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Index(props) {

    return (
        <DefaultLayout>
        <div className="defaultLayout">
            <h1>INDEX VIEW LOGS</h1>
            <br /><br /><br />
             <div className="containerA">
             <ul>
            {props.logs.map((item, index) =>

                <li key={index}>
                    <a href={`/logs/${item._id}`}>{item.title}</a>
                </li>

            )
            }</ul></div>
            <div className="containerB">
            < a href="/logs/new">ADD</a>
            <br /><br /><br />
            <a href="/"> BACK </a>
            <br /><br /><br />
            <form action="/logs/seed"  method="POST">
                <button>SEED</button>
            </form>
            <br /><br /><br />
            <form action="/logs/clear?_method=DELETE" method="POST">
                <button>CLEAR</button>
            </form>
            </div>
            </div>
        </DefaultLayout>)

}

export default Index 