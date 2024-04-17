import styles from './ProgressTracker.module.css';
import { useEffect, useState } from 'react';

export default function ProgressTracker() {
  const [students, setStudents] = useState([]);

  useEffect (()=>{
    fetch('http://localhost:4000/teacher-dashboard/progress-tracker')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setStudents(result);
      });
  }, []);

  return (
    <div className={styles.body}>
        {/* top bar */}
        <div className={styles.title}>
          <h2>BEGINNER COURSE</h2>
          <h5>EXPORT AS SPREADSHEET</h5>
        </div>

        {/* studentBarContainer */}
        <div className={styles.forScroll}>
          <div className={styles.studentBarContainer}>
            {students.map((student, studentId) => {
              return (
                <div className={styles.studentProgressBar}>
                  <div className={styles.studentInfo}>
                    <p className={styles.studentName}>{student.name.toUpperCase()}</p>
                    <p className={styles.studentProjectsCompleted}>4/15 Projects Completed</p>
                  </div>
                  <div className={styles.progressIconContainer}>
                    {students.map((student, studentId) => {
                      return (
                        <div className={styles.progressIcons} key={studentId}>
                          <p className={styles.studentId}>{student.student_id}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}
