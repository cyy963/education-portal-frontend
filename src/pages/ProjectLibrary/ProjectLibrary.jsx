import { useState, useEffect } from "react";

// Styling imports:
import styles from "./ProjectLibrary.module.css";
import popUpMenuStyles from "./../../common/NavBar1/components/PopUpMenu.module.css";

// Component imports:
import NavBarOne from "../../common/NavBar1/NavBarOne";
import PopUpMenu from "../../common/NavBar1/components/PopUpMenu";
import Header from "./components/Header";
import FiltersProjects from "./components/FiltersProjects/FiltersProjects";
import BackToDashboardButton from "../../common/BackToDashboardButton/BackToDashboardButton";
import FooterOne from "../../common/Footer1/FooterOne";

export default function ProjectLibrary() {
  const [student, setStudent] = useState("");

  // Pop up states and functions
  const [popUp, setPopUp] = useState(false);
  const togglePopUp = () => setPopUp(!popUp);
  const removePopUp = () => setPopUp(false);

  // Fetch user information
  useEffect(() => {
    fetch(`http://localhost:4000/student`)
      .then((response) => response.json())
      .then((result) => {
        setStudent(result[0]);
      });
  }, []);

  // Scroll back to top function
  function scrollBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div onClick={removePopUp}>
      {/* Nav bar space for shadow */}
      <div className={styles.navBarSpace}>
        {/* Nav bar, only rendered when user has been fetched */}
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
      {/* Pop up menu when user name is clicked */}
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

        {/* All filters and rendered projects */}
        <FiltersProjects />

        {/* Footer: Back to top and dashboard buttons */}
        <footer className={styles.backButtons}>
          <button onClick={scrollBackToTop} className={styles.backToTopButton}>
            BACK TO TOP
          </button>
          <BackToDashboardButton />
        </footer>
      </main>
      <FooterOne />
    </div>
  );
}
