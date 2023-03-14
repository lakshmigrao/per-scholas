import React from "react";

function Home(props){

    return(
        <div>
            <h1>Students Home page</h1>
            <div style={{display:"flex",flexFlow:"row wrap"}}>
            {props.studentsDetails.map((student,index) => 
                <div key = {index} style={{border:"1px solid black",width:"150px",margin:"10px", padding:"20px"}}>
                    <a href={`/students/${index}`}><strong>Name : {student.name}</strong></a>
                    <p>Id : {student.id}</p>
                    <a href={`/students/home/courses/${student.course}`}><p>Course : {student.course}</p></a>
                    <a href={`/students/home/${student.gender}`}><p>Gender : {student.gender}</p></a>
                    <a href={`/students/home/locations/${student.location}`}><p>Location : {student.location}</p></a>
                    <a href={`/students/home/noofbootcamps}`}><p>No of Bootcamps : {student.noOfBootcamps}</p></a>
                    
                    {student.name} is {student.hasAJob?`working.`:`not working.`}
                </div> 
                 
            )}</div>

            <a href="/students">Index<br></br></a>
            <a href="/students/home">Home<br></br></a>
            <a href="/students/home/locations">Locations<br></br></a>
            <a href="/students/home/courses">Courses<br></br></a>
            <a href="/students/home/genders">StudentsList By Gender<br></br></a>
            <a href="/students/home/noofbootcamps">StudentsList By Bootcamps<br></br></a>
            <a href="/students//home/hasajob">Student who are working<br></br></a>
    </div>)
}
export default Home