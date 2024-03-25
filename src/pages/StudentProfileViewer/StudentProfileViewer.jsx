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
      alt: `photo of Rawiri Fletcher's face`,
    },
  ];

  return (
    <main>
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
        <header className={styles.studentName}>
          <h1>{studentInfo[0].name}</h1>
        </header>
        <div className={styles.labels}>
          <h2>School</h2>
          <h2>Teacher</h2>
          <h2>Course</h2>
          <h2>Date of Birth</h2>
          <h2>Contact No</h2>
          <h2>Email Address</h2>
        </div>
        <div className={styles.detail}>
          <p>{studentInfo[0].school}</p>
          <p>{studentInfo[0].teacher}</p>
          <p>{studentInfo[0].course}</p>
          <p>{studentInfo[0].dateOfBirth}</p>
          <p>{studentInfo[0].contactNumber}</p>
          <p>{studentInfo[0].emailAddress}</p>
        </div>
      </div>

      <footer>
        <Link to="/project-library">
          <button className={styles.backButton}>BACK TO PROJECTS</button>
        </Link>
      </footer>
    </main>
  );
}
