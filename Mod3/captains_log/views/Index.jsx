import React from "react";

function Index(props){

    return(
        <div>
            <h1>Index View</h1>
            <br/><br/>
        {props.logs.map((item,index) => 

            <li key={index}>
                <a href={`/logs/${item._id}`}>{item.title}</a>
            </li>

        )

 }  </div> )
}

export default Index