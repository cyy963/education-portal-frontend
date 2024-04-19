import { useState, useEffect } from "react";
import styles from "./ProjectLibrary.module.css";
import popUpMenuStyles from "./../../common/NavBar1/components/PopUpMenu.module.css";

// Imports:
import NavBarOne from "../../common/NavBar1/NavBarOne";
import PopUpMenu from "../../common/NavBar1/components/PopUpMenu";
import Header from "./components/Header";
import FiltersProjects from "./components/FiltersProjects/FiltersProjects";
import BackToDashboardButton from "../../common/BackToDashboardButton/BackToDashboardButton";

export default function ProjectLibrary() {
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

  function scrollBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div onClick={removePopUp}>
      <div className={styles.navBarSpace}>
        {student && (
          <NavBarOne
            text="PROJECTS"
            userImage={student.profile_pic}
            alt={`Profile photo of ${student.student_name}`}
            userName={`${student.student_name.toUpperCase()}`}
            onChange={togglePopUp}
          />
        )}
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
        {/* Header: Title and description of page */}
        <Header />

        <FiltersProjects />

        {/* Footer: Back to top and dashboard buttons */}
        <footer className={styles.backButtons}>
          <button onClick={scrollBackToTop} className={styles.backToTopButton}>
            BACK TO TOP
          </button>
          <BackToDashboardButton />
        </footer>
      </main>
    </div>
  );
}
