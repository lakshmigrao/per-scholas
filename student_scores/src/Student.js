import { studentScores } from "./data";
import Scores from "./Scores"
function Student({students}){

    return(
        <div className="StudentList">
            { 
            students.map((student)=>(
            <li key={student.name} className="Student">
                <h3>Name : {student.name}</h3> 
                <h4>Bio : {student.bio}</h4>
                <Scores scores={student.scores} />
            </li>
            ))}
        </div>
    )
}



export default Student;