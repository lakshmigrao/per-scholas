import React from "react";

function Location(props){

    return(
        <div>
            <h1>Students Location page</h1>
            <a href="/students/home/locations">Back</a>
            <h2>Students From {props.studentByLocation[0].location}</h2>
            <ul>
            {props.studentByLocation.map((student) => 
                <li>
                     <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                </li> 
                 
            )}</ul>
            

            <a href="/students">Index<br></br></a>
            <a href="/students/home">Home<br></br></a>
            <a href="/students/home/locations">Locations<br></br></a>
            <a href="/students/home/courses">Courses<br></br></a>
            <a href="/students/home/genders">StudentsList By Gender<br></br></a>
            <a href="/students/home/noofbootcamps">StudentsList By no of bootcamps attended<br></br></a>
            <a href="/students//home/hasajob">Student who are working<br></br></a>
    </div>)
}
export default Location