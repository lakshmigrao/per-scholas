import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function New() {

    return (
        <DefaultLayout>
              <h1>NEW VIEW FOODLOGS</h1>
        <div className="containerA">
      
            <form action="/foodLogs" method="POST">

                <label htmlFor="ttl">Title : </label>
                <input type="text" id="ttl" name="title" />
                <br/><br/><br/>
                <label htmlFor="ing"> Ingredients : </label>
                <input type="textarea" id="ing" name="ingredients"/>
                <br/><br/><br/>
                <label htmlFor="healthy">Food was healthy?</label>
                <input type="checkbox" id="healthy" name="isHealthy"/>
                <br/><br/><br/>
                <input type="submit"/>
            </form>
            <br/><br/><br/>
            <a href="/foodLogs">BACK</a>
        </div>
        </DefaultLayout>
    )
}

export default New