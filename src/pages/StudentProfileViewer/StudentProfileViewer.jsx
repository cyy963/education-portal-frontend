import { Link } from "react-router-dom";
import styles from "./StudentProfileViewer.module.css";
// import StudentInfoCard from "./components/StudentInfoCard";
// import PhotoCard from "./components/PhotoCard";

export default function StudentProfileViewer() {
  const studentInfo = [
    {
      id: 1,
      name: "Rawiri Fletcher",
      school: "Homai School",
      teacher: "Jasmina Salvador",
      course: "Beginner",
      dateOfBirth: "25 June 2010",
      contactNumber: "022 524 63 99",
      emailAddress: "fletchy.r@gmail.com",
      src: "/images/students/RawiriFletcher.png",
      alt: `Headshot of student Rawiri Fletcher`,
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <img
          className={styles.studentImage}
          src={studentInfo[0].src}
          alt={studentInfo[0].alt}
        />
        <button className={styles.btn}>EDIT PROFILE</button>
        <button className={styles.btn}>CHANGE PHOTO</button>
      </div>

      <div className={styles.studentInfoCard}>
        <header className={styles.header}>
          <h1 className={styles.studentName}>{studentInfo[0].name}</h1>
        </header>
        <div className={styles.labels}>
          <h2 className={styles.label}>School</h2>
          <h2 className={styles.label}>Teacher</h2>
          <h2 className={styles.label}>Course</h2>
          <h2 className={styles.label}>Date of Birth</h2>
          <h2 className={styles.label}>Contact No</h2>
          <h2 className={styles.label}>Email Address</h2>
        </div>
        <div className={styles.details}>
          <p className={styles.detail}>{studentInfo[0].school}</p>
          <p className={styles.detail}>{studentInfo[0].teacher}</p>
          <p className={styles.detail}>{studentInfo[0].course}</p>
          <p className={styles.detail}>{studentInfo[0].dateOfBirth}</p>
          <p className={styles.detail}>{studentInfo[0].contactNumber}</p>
          <p className={styles.detail}>{studentInfo[0].emailAddress}</p>
        </div>
      </div>

      <footer className={styles.backButtons}>
        <Link to="/project-library">
          <button className={styles.backButton}>BACK TO PROJECTS</button>
        </Link>
      </footer>
    </main>
  );
}
