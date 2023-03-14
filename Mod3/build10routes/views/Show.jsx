import React from "react";

function Show(props){

    return(
<>
        <h1>Students Show page</h1>
        <h1>Name : {props.student.name}</h1>
        <h1>Id : {props.student.id}</h1>
        <h1>Location : {props.student.location}</h1>
        <h1>Course : {props.student.course}</h1>
        <h1>Gender : {props.student.gender}</h1>
        <a href="/students">Back</a>
        </>
    )
}
export default Show