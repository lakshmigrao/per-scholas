import React from "react";

function New() {

    return (
        <div>New View
            <form action="/logs" method="POST">
                <br /><br /><br />
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

        </div>
    )
}

export default New