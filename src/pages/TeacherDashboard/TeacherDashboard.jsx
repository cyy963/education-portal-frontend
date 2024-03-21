import React from 'react';
import Dashboard from '../../common/Dashboard/Dashboard.jsx';
import ProgressTracker from './ProgressTracker/ProgressTracker.jsx';
import styles from './TeacherDashboard.module.css';

export default function TeacherDashboard() {
  // Assuming you have the teacher's name stored somewhere, 
  // replace 'teacherNameValue' with the actual name value
  const teacherName = 'teacherNameValue';

  return (
    <div>
      <header>TOP NAV</header>
      <main className={styles.TeacherDashboard}>
        <Dashboard user="teacher" teacherName={teacherName} />
        <ProgressTracker />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}
