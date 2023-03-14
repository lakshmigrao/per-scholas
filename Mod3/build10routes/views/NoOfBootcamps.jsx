import React from "react";

function NoOfBootcamps(props){

    return(
        <div>
            <h1>Students list by no of bootcamps attended</h1>
            <a href={`/students/home/noofbootcamps/1`}><h2>Students who attended 1 Bootcamp</h2></a>
            <a href={`/students/home/noofbootcamps/2`}><h2>Students who attended 2 Bootcamps</h2></a>
            <a href={`/students/home/noofbootcamps/3`}><h2>Students who attended 3 Bootcamps</h2></a>
            <a href={`/students/home/noofbootcamps/4`}><h2>Students who attended 4 Bootcamps</h2></a>
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
export default NoOfBootcamps