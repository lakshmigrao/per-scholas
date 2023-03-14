import React from "react";

function Genders(props){

    let females = props.studentsDetails.filter((student) => { return (student.gender === 'female')})
    let males = props.studentsDetails.filter((student) => {return (student.gender === 'male')} )
    let unknown = props.studentsDetails.filter((student) => {return (student.gender === 'unknown')})
    console.log(females)
    console.log(males)

    console.log(unknown)

    return(
        <div >
            <h1>Students by Genders </h1>
            <div style={{display:"flex",flexDirection:"row"}}>
            
            
            <ul style={{border:"1px solid black", width:"200px",height:"300px", margin:"10px"}}>
            <h2>Female Students</h2>
            {females.map((student) => 
                <li>
                     <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                </li> 
                 
            )}</ul>

            
            <ul style={{border:"1px solid black", width:"200px",height:"300px", margin:"10px"}}>
            <h2>Male Students</h2>
            {males.map((student) => 
                <li>
                     <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                </li> 
                 
            )}</ul>

           
           <ul style={{border:"1px solid black", width:"200px",height:"300px", margin:"10px"}}>
           <h2>Unknown </h2>
            {unknown.map((student) => 
                <li>
                     <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                </li> 
                 
            )}</ul>
            </div>
            <a href="/students">Index<br></br></a>
            <a href="/students/home">Home<br></br></a>
            <a href="/students/home/locations">Locations<br></br></a>
            <a href="/students/home/courses">Courses<br></br></a>
            <a href="/students/home/genders">StudentsList By Gender<br></br></a>
            <a href="/students/home/noofbootcamps">StudentsList By no of bootcamps attended<br></br></a>
            <a href="/students//home/hasajob">Student who are working<br></br></a>
    </div>)
}
export default Genders