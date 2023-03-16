import React from "react";

function Index(props){

    return(
        <div>Index View
        {props.logs.map((item,index) => 

            <li key={index}>
                <a href={`/logs/${item._id}`}>{item.title}</a>
            </li>

        )

 }  </div> )
}

export default Index