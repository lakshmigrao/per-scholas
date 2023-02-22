import { useState } from 'react';
import './App.css';
import {studentScores} from './data.js';
import Student from './Student';

function App() {
  let [students,setStudents] = useState(studentScores);
 
  return (
    <div className="App">
      <Student students={students} />
    </div>
  );
}

export default App;
