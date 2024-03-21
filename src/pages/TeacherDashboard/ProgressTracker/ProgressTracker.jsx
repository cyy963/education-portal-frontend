import Dashboard from "../../../common/Dashboard/Dashboard";
import styles from '../TeacherDashboard.module.css';

export default function ProgressTracker() {
  return (
    <div>
      <header>TOP NAV</header>
      <main className={styles.TeacherDashboard}>
        <Dashboard user="teacher" teacherName={'JasminaSalvador'} />
        <div className="mainContainer">
            
            <h2>BEGINNER COURSE</h2>
                
        </div>
      </main>
      <footer>FOOTER</footer>

    </div>
  )
}
