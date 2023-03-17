import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function New() {

    return (
        <DefaultLayout>
               <h1>NEW VIEW LOGS</h1>
        <div className="containerA">
         
            <form action="/logs" method="POST">
                <label htmlFor="ttl">Title : </label>
                <input type="text" id="ttl" name="title" />
                <br /><br /><br />
                <label htmlFor="ent">Entry : </label>
                <input type="textarea" id="ent" name="entry" />
                <br /><br /><br />
                <label htmlFor="ship">Ship is broken : </label>
                <input type="checkbox" id="ship" name="shipIsBroken" />

                <br /><br /><br />
                <input type="submit" />

            </form>
            <br/><br/><br/>
            <a href="/foodlogs">BACK</a>

        </div></DefaultLayout>
    )
}

export default New