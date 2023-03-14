import React from "react";

function Courses(props){

    return(
        <div>
            <h1>Students Courses page</h1>
            <a href={`/students/home/courses/webd`}><h2>Web Development</h2></a>
            <a href={`/students/home/courses/java`}><h2>Java</h2></a>
            <a href={`/students/home/courses/aws`}><h2>AWS </h2></a>
            {/* <ul>
            {props.studentByLocation.map((student) => 
                <li>
                     <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                </li> 
                 
            )}</ul> */}
            <a href="/students">Index<br></br></a>
            <a href="/students/home">Home<br></br></a>
            <a href="/students/home/locations">Locations<br></br></a>
            <a href="/students/home/courses">Courses<br></br></a>
            <a href="/students/home/genders">StudentsList By Gender<br></br></a>
            <a href="/students/home/noofbootcamps">StudentsList By no of bootcamps attended<br></br></a>
            <a href="/students//home/hasajob">Student who are working<br></br></a>
    </div>)
}
export default Courses