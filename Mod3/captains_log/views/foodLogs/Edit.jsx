import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {

    return (
        <DefaultLayout>
            <div>
                <h1>FOOD LOGS EDIT VIEW</h1>
                <div className="containerA">
                    <form action={`/foodlogs/${props.foodlog._id}?_method=PUT`} method="POST">

                        <label htmlFor="ttl">Title :  </label>
                        <input type="text" id="ttl" name="title" defaultValue={props.foodlog.title} />
                        <br /><br /><br />
                        <label htmlFor="ing"> Ingredients : </label>
                        <input type="textarea" id="ing" name="ingredients" defaultValue={props.foodlog.ingredients} />
                        <br /><br /><br />
                        <label htmlFor="healthy">Food was healthy?</label>
                        <input type="checkbox" id="healthy" name="isHealthy" defaultChecked={props.foodlog.isHealthy} />
                        <br /><br /><br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default Edit