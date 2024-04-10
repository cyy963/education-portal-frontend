import { useState } from "react";
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
  const studentInfo = {
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
  };

  return (
    <div onClick={removePopUp}>
      <div className={styles.navBarSpace}>
        <NavBarOne
          text="PROJECTS"
          link="/project-library"
          userImage={studentInfo.src}
          alt={studentInfo.alt}
          userName={studentInfo.name.toUpperCase()}
          onChange={togglePopUp}
        />
      </div>
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

      <main className={styles.main}>
        <div className={styles.left}>
          <img
            className={styles.studentImage}
            src={studentInfo.src}
            alt={studentInfo.alt}
          />
          <button className={styles.btn}>EDIT PROFILE</button>
          <button className={styles.btn}>CHANGE PHOTO</button>
        </div>

        <div className={styles.studentInfoCard}>
          <header className={styles.header}>
            <h1 className={styles.studentName}>{studentInfo.name}</h1>
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
            <p className={styles.detail}>{studentInfo.school}</p>
            <p className={styles.detail}>{studentInfo.teacher}</p>
            <p className={styles.detail}>{studentInfo.course}</p>
            <p className={styles.detail}>{studentInfo.dateOfBirth}</p>
            <p className={styles.detail}>{studentInfo.contactNumber}</p>
            <p className={styles.detail}>{studentInfo.emailAddress}</p>
          </div>
        </div>

        <footer className={styles.buttonSpace}>
          <Link to="/project-library">
            <button className={styles.backButton}>BACK TO PROJECTS</button>
          </Link>
        </footer>
      </main>
    </div>
  );
}
