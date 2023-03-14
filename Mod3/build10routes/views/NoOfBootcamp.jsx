import React from "react";

function NoOfBootcamp(props) {

    // let one = props.studentsDetails.filter((student) => { return (student.noOfBootcamps === '1') })
    // let two = props.studentsDetails.filter((student) => { return (student.noOfBootcamps === '2') })
    // let three = props.studentsDetails.filter((student) => { return (student.noOfBootcamps === '3') })
    // let four = props.studentsDetails.filter((student) => { return (student.noOfBootcamps === '4') })

    // console.log(one)
    // console.log(two)
    // console.log(three)
    // console.log(four)
    return (
        <div >
            <a href="/students/home/noofbootcamps">Back</a>
            <h1>Students by no of bootcamps they attended. </h1>
            <div style={{ display: "flex", flexDirection: "row" }}>


                <ul style={{ border: "1px solid black", width: "200px", height: "300px", margin: "10px" }}>
                    <h2>Students who attended {props.studentByNOB[0].noOfBootcamps} Bootcamp/s </h2>
                    {props.studentByNOB.map((student) =>
                        <li>
                            <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                        </li>

                    )}</ul>

{/* 
                <ul style={{ border: "1px solid black", width: "200px", height: "300px", margin: "10px" }}>
                    <h2>Students who attended 2 Bootcamps</h2>
                    {two.map((student) =>
                        <li>
                            <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                        </li>

                    )}</ul>


                <ul style={{ border: "1px solid black", width: "200px", height: "300px", margin: "10px" }}>
                    <h2>Students who attended 3 Bootcamps </h2>
                    {three.map((student) =>
                        <li>
                            <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                        </li>

                    )}</ul>

                <ul style={{ border: "1px solid black", width: "200px", height: "300px", margin: "10px" }}>
                    <h2>Students who attended 4 Bootcamps </h2>
                    {four.map((student) =>
                        <li>
                            <a href={`/students/${student.id}`}><strong>{student.name}</strong></a>
                        </li>

                    )}</ul> */}
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
export default NoOfBootcamp