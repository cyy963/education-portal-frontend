import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./StudentProfileViewer.module.css";
import NavBarOne from "../../common/NavBar1/NavBarOne";
import PopUpMenu from "../../common/NavBar1/components/PopUpMenu";
import popUpMenuStyles from "../../common/NavBar1/components/PopUpMenu.module.css";
// import StudentInfoCard from "./components/StudentInfoCard";
// import PhotoCard from "./components/PhotoCard";

export default function StudentProfileViewer() {
  const [popUp, setPopUp] = useState(false);
  const togglePopUp = () => setPopUp(!popUp);
  const removePopUp = () => setPopUp(false);
  const [student, setStudent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/student`)
      .then((response) => response.json())
      .then((result) => {
        setStudent(result[0]);
      });
  }, []);

  return (
    <div onClick={removePopUp}>
      {student && (
        <div className={styles.navBarSpace}>
          <NavBarOne
            text="PROJECTS"
            link="/project-library"
            userImage={student.profile_pic}
            alt={`${student.student_name}'s photo`}
            userName={student.student_name.toUpperCase()}
            onChange={togglePopUp}
          />
        </div>
      )}
      <PopUpMenu
        profileLink="/student-profile-viewer"
        onClick={togglePopUp}
        arrowClassName={`${popUpMenuStyles.arrow} ${
          popUp ? popUpMenuStyles.show : ""
        }`}
        menuClassName={`${popUpMenuStyles.popUpMenu} ${
          popUp ? popUpMenuStyles.show : ""
        }`}
      />
      {student && (
        <main className={styles.main}>
          <div className={styles.left}>
            <img
              className={styles.studentImage}
              src={student.profile_pic}
              alt={`${student.student_name}'s photo`}
            />
            <button className={styles.btn}>EDIT PROFILE</button>
            <button className={styles.btn}>CHANGE PHOTO</button>
          </div>

          <div className={styles.studentInfoCard}>
            <header className={styles.header}>
              <h1 className={styles.studentName}>{student.student_name}</h1>
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
              <p className={styles.detail}>{student.school}</p>
              <p className={styles.detail}>{student.teacher_name}</p>
              <p className={styles.detail}>{student.course}</p>
              <p className={styles.detail}>{student.date_of_birth}</p>
              <p className={styles.detail}>{student.contact_number}</p>
              <p className={styles.detail}>{student.email}</p>
            </div>
          </div>

          <footer className={styles.buttonSpace}>
            <Link to="/project-library">
              <button className={styles.backButton}>BACK TO PROJECTS</button>
            </Link>
          </footer>
        </main>
      )}
    </div>
  );
}
