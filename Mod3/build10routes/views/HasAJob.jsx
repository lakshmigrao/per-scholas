import React from "react";

function HasAJob(props){

    return(
        <div>
            <h1>Students who are working </h1>
            <ul>
            {props.studentHasJob.map((student,index) => 
                <li>
                    <a href={`/students/${index}`}><strong>{student.name}</strong></a>
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
export default HasAJob