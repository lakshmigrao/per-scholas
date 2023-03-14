import React from "react";

function Index(props){

    return(
        <div>
            <h1>Students Index page</h1>
            <ul>
            {props.studentsDetails.map((student,index) => 
                <li key={index}>
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
export default Index