import styles from './StudentProfiles.module.css';
import { useEffect, useState } from 'react';

export default function StudentProfiles(){
  const [students, setStudents] = useState([]);

  //fetches and sets student name and id to students
  useEffect (()=>{
    fetch('http://localhost:4000/students')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setStudents(result);
      })
      //error catching
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return(
    <div className={styles.body}>
        <div className={styles.forScroll}>
          {/* student profiles container */}
          <div className={styles.studentsProfileContainer}>
            {students.map((student) => {
              return (
                //student card
                <div className={styles.studentCard} key={student.student_id}>
                  {/* student profile pic */}
                  <img src={student.profile_pic} className={styles.studentImg}/>
                  {/* student name */}
                  <p className={styles.studentName}>{student.student_name.toUpperCase()}</p>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}
