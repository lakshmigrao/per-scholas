import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {

    return (
        <DefaultLayout>
        <div>
            <h1>LOGS EDIT VIEW</h1>
            <div className="containerA">
            <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
                <br /><br /><br />
                <label htmlFor="ttl">Title : </label>
                <input type="text" id="ttl" name="title" defaultValue={props.log.title}/>
                <br /><br /><br />
                <label htmlFor="ent">Entry : </label>
                <input type="textarea" id="ent" name="entry" defaultValue={props.log.entry} />
                <br /><br /><br />
                <label htmlFor="ship">Ship is broken : </label>
                <input type="checkbox" id="ship" name="shipIsBroken" defaultChecked={props.log.shipIsBroken} />

                <br /><br /><br />
                <input type="submit" />




            </form>

        </div></div>
        </DefaultLayout>
    )
}

export default Edit