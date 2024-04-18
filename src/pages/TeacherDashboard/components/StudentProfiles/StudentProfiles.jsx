import styles from './StudentProfiles.module.css';
import { useEffect, useState } from 'react';

export default function StudentProfiles(){
  const [students, setStudents] = useState([]);

  useEffect (()=>{
    fetch('http://localhost:4000/students')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setStudents(result);
      });
  }, []);

  return(
    <div className={styles.body}>
        <div className={styles.forScroll}>
          {/* student profiles container */}
          <div className={styles.studentsProfileContainer}>
            {students.map((student, index) => {
              return (
                <div className={styles.studentCard} key={index}>
                  <img src={student.profile_pic} className={styles.studentImg}/>
                  <p className={styles.studentName}>{student.name.toUpperCase()}</p>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}
